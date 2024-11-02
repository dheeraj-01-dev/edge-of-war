import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import battleModel from "./battles.model.js";


const jwt_secret = process.env.JWT_SECRET_STR;

export const getAllBattles = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  try {
    // const battle = await battleModel.find();
    if (authorization && jwt_secret) {
      const decodedToken :any = jwt.verify(authorization, jwt_secret)
      const { userName } = decodedToken;
      const battle = await battleModel.aggregate([
        {
          $addFields: {
            tmpOrder: {
              $rand: {},
            },
          },
        },
        {
          $sort: {
            tmpOrder: 1,
          },
        },
        {
          $match: {
            $nor: [
              {
                teams: {
                  $elemMatch: {
                    $elemMatch: {
                      $eq: userName,
                    },
                  },
                },
              },
            ],
          },
        },
      ]);
      res.status(200).json({
        success: true,
        length: battle.length,
        data: battle,
      });
    } else {
      const battle = await battleModel.aggregate([
        {
          $addFields: {
            tmpOrder: {
              $rand: {},
            },
          },
        },
        {
          $sort: {
            tmpOrder: 1,
          },
        },
      ]);
      res.status(200).json({
        success: true,
        length: battle.length,
        data: battle,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }
};

export const getSingleBattle_C = async (req: Request, res: Response) => {
  const { _id } = req.params;
  try {
    const battle = await battleModel.findById(_id);
    if (!battle) {
      return res.status(404).json({
        success: false,
        error: "battle not found !",
      });
    }

    res.status(200).json({
      success: true,
      data: battle,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};

// export const joinBattle_C = async (req: Request, res: Response) => {
//   const { authorization } = req.headers;
//   const { battle, team, members } = req.body;

//   const battleInfo = await battleModel.findOne({ _id: battle });

//   if (!battleInfo) {
//     return res.status(400).json({
//       success: false,
//       error: "battle not found",
//     });
//   }

//   const session = await mongoose.startSession();
//   session.startTransaction();

//   try {
//     const battleup = await battleModel.updateOne(
//       { _id: battle },
//       {
//         $addToSet: { teams: members },
//       },
//       { session, raw: false }
//     );

//     // const teamup = await teamModel.updateOne({ _id: team }, {
//     //   $addToSet: { upcomingContest: { battle, leader: authorization, members }}
//     // }, {session, raw: false});

//     await userModel.updateOne(
//       { userName: authorization },
//       {
//         $inc: { balance: -battleInfo.entry },
//       },
//       { session }
//     );

//     await session.commitTransaction();
//     await session.endSession();

//     res.status(200).json({
//       success: true,
//       data: "Join successfully",
//     });
//   } catch (err) {
//     await session.abortTransaction();
//     await session.endSession();

//     res.status(400).json({
//       success: false,
//       error: err,
//     });
//   }
// };

// export const getRegisteredBattle_C = async (req: Request, res: Response) => {
//   const authorization :string | undefined = req.headers.authorization;

//   if (!authorization) {
//     return;
//   }

  
//   try {
//     let decodedToken :any|decodedCookieToken;

//     try {
//       decodedToken = await jwt.verify(authorization, jwt_secret)
      
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         error: "unauthorized"
//       })
//     };
    
//     const { id, userName } = decodedToken;
//     const data = await battleModel.aggregate([
//       {
//         $match: {
//           teams: {
//             $elemMatch: {
//               $elemMatch: {
//                 $eq: userName,
//               },
//             },
//           },
//         },
//       },
//     ]);

//     res.status(200).json({
//       success: true,
//       data,
//     });
//   } catch (err) {
//     res.status(400).json({
//       success: false,
//       error: err,
//     });
//   }
// };
