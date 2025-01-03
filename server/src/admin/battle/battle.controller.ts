import { Request, Response } from "express";
import battleModel from "../../battles/battles.model.js";
import mongoose from "mongoose";
import orderModel from "../../orders/order.model.js";

export const createBattleController = async (req: Request, res: Response) => {
  req.body.battleId = 101;
  const data = req.body;

  try {
    const lastDocument = await battleModel.aggregate([
      {
        $sort: { battleId: -1 },
      },
      {
        $limit: 1,
      },
    ]);
    data.battleId = lastDocument[0]?.battleId + 1 || 101;
    const battleCreated = await battleModel.create(data);
    res.status(200).json({
      success: true,
      data: battleCreated,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error,
    });
  }
};

export const getRegisteredBattle = async (req: Request, res: Response) => {
  try {
    const data = await battleModel.aggregate([
      {
        $sort: {
          "expire.id": 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: {
        length: data.length,
        battles: data,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const hostBattle_C = async (req: Request, res: Response) => {
  const { battle } = req.params;
  const { roomId, roomPass } = req.body;

  try {
    try {
      const data = await battleModel.findOne({ _id: battle });

      if (!data) {
        return res.status(404).json({
          success: false,
          error: "Battle Not Found !",
        });
      }
      const { auth } = data;
      if (auth?.roomId || auth?.roomPass) {
        return res.status(400).json({
          success: false,
          error: "Already Hosted!",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        success: false,
        error: "Battle Not Found !",
      });
    }
    await battleModel.findOneAndUpdate(
      { _id: battle },
      {
        auth: {
          roomId,
          roomPass,
        },
        status: "live",
      },
      { returnOriginal: false }
    );

    res.status(200).json({
      success: true,
      data: "updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

export const publishPositions_C = async (req: Request, res: Response) => {
  const { battle, positions } = req.body;
  if (!(battle && positions)) {
    return res.status(400).json({
      success: false,
      error: "Invalid Pased data",
    });
  }
  try {
    const updatedBattle = await battleModel.findOneAndUpdate(
      { _id: battle },
      {
        positions,
      },
      { returnOriginal: false }
    );

    return res.status(200).json({
      success: true,
      data: updatedBattle,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      error: error.message ? error.message : error,
    });
  }
};

// export const distributePrizes_C = async (req: Request, res: Response) => {
//   const { battle } = req.body;

//   const session = await mongoose.startSession();
//   await session.startTransaction();
//   try {
//     const verifiedBattle = await battleModel.findOneAndUpdate(
//       { _id: battle },
//       {
//         status: "completed",
//       },
//       { session, returnOriginal: true }
//     );
//     if (!verifiedBattle) {

//         await session.abortTransaction();
//         await session.endSession();
//       return res.status(400).json({
//         success: false,
//         error: "battle not found",
//       });
//     }
//     if (verifiedBattle.status === "completed") {

//         await session.abortTransaction();
//         await session.endSession();
//       return res.status(404).json({
//         success: false,
//         error: "Already distributed",
//       });
//     }
//     if (verifiedBattle.positions.length < 1) {

//         await session.abortTransaction();
//         await session.endSession();
//       return res.status(400).json({
//         success: false,
//         error: "positions not declared yet",
//       });
//     }

//     try {
//       verifiedBattle.positions.map(async (team, index: number) => {
//         // return
//         if (index > 2) {
//         }else{
//             if (!team || team?.length < 1) {
//             } else {
//                 const indexOfuserNameTeam = verifiedBattle.teams.map((teamArr , index2)=>{
//                     const isInclued = teamArr.includes(team[0])
//                     if(isInclued){
//                         return index2
//                     }
//                 })[0];
    
//                 if(!indexOfuserNameTeam){
    
//                     await session.abortTransaction();
//                     await session.endSession();
                    
//                     return res.status(404).json({
//                         success: false,
//                         error: `${team} not registered in battle`
//                     })
//                 };
    
//                 try {
//                     const order = await orderModel.findOne({
//                         createBy: verifiedBattle.teamswithUserName[indexOfuserNameTeam]
//                     });
    
//                     if(!order){
//                         await session.abortTransaction();
//                         await session.endSession();
//                         return res.status(400).json({
//                             success: false,
//                             error: "order not found"
//                         })
//                     };
    
    
//                     const fetchRes = await fetch(
//                         "http://127.0.0.1:5000/transaction/create/cr/byadmin",
//                         {
//                           method: "POST",
//                           headers: {
//                             authorization: "#*${dheeraj.eow.dev}*:)",
//                             apikey: "123@edgeofwaresports.com",
//                             "Content-Type": "application/json",
//                           },
//                           body: JSON.stringify({
//                             user: order.userId,
//                             battle: verifiedBattle._id,
//                             // @ts-expect-error wining object index error
//                             value: verifiedBattle.winning[`_${index + 1}`],
//                           }),
//                         }
//                       );
//                       const data = await fetchRes.json();
//                       console.log(data);
    
//                         if (data.success) {
//                             await session.commitTransaction();
//                             await session.endSession();
    
//                             return res.status(200).json({
//                             success: true,
//                             data: "prize distributed",
//                             });
//                         } else {
//                             await session.abortTransaction();
//                             await session.endSession();
    
//                             return res.status(400).json({
//                             success: false,
//                             error: data.error,
//                             });
//                         }
                                
//                 } catch (error) {
//                     await session.abortTransaction();
//                     await session.endSession();
//                     return res.status(400).json({
//                         success: false,
//                         error
//                     })
//                 }
    
//             }
//         }
//       });
//     } catch (error: any) {
//       console.log(error);

//       await session.abortTransaction();
//       await session.endSession();

//       res.status(400).json({
//         success: false,
//         error: error.message ? error.message : error,
//       });
//     }
//   } catch (error) {}
// };


export const distributePrizes_C = async (req: Request, res: Response) => {
    const { battle, position } = req.body;

    if(!position || +position>3 || +position<1 ){
      return res.status(400).json({
        success: false,
        error: "invlaid position given"
      })
    }
    
    try {
  
      const verifiedBattle = await battleModel.findOne(
        { _id: battle }
      );
  
      if (!verifiedBattle) {
        throw new Error("Battle not found");
      }
  
      if (verifiedBattle.status === "completed") {
        throw new Error("Already distributed");
      }
  
      if (verifiedBattle.positions.length < 1) {
        throw new Error("Positions not declared yet");
      };

      const firstTeam = verifiedBattle.positions[position-1]
      if(firstTeam&&firstTeam.length>0){
        
        const indexOfUserNameTeam = verifiedBattle.teams.findIndex((teamArr) =>
          teamArr.includes(firstTeam[0])
        );
        if (indexOfUserNameTeam === -1) {
          throw new Error(`${firstTeam} not registered in battle`);
        }

        const order = await orderModel.findOne({
          createBy: verifiedBattle.teamswithUserName[indexOfUserNameTeam][0]
        });

        if (!order) {
          throw new Error("Order not found");
        }

                // Make external API request to distribute the prize
        const fetchRes = await fetch(
          "http://127.0.0.1:5000/transaction/create/cr/byadmin",
          {
            method: "POST",
            headers: {
              authorization: "#*${dheeraj.eow.dev}*:)",
              apikey: "123@edgeofwaresports.com",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: order.userId,
              battle: verifiedBattle._id,
              // @ts-expect-error
              value: verifiedBattle.winning[`_${position}`],
            }),
          }
        );
        const data = await fetchRes.json();

        console.log(data)
  
        if (!data.success) {
          throw new Error(data.error || "Failed to distribute prize");
        }
      }
      else{
        await battleModel.updateOne({_id: verifiedBattle._id}, {
          _1: 0
        })
        throw new Error(position+" position is empty")
      };
  

      // Using a for...of loop instead of map to handle async properly
      // for (const [index, team] of verifiedBattle.positions.entries()) {
      //   if (index > 2) continue; // Skip teams that don't need to be handled
  
      //   if (!team || team.length < 1) continue;
  
      //   const indexOfUserNameTeam = verifiedBattle.teams.findIndex((teamArr) =>
      //     teamArr.includes(team[0])
      //   );
  
      //   if (indexOfUserNameTeam === -1) {
      //     throw new Error(`${team} not registered in battle`);
      //   }
  
      //   const order = await orderModel.findOne({
      //     createBy: verifiedBattle.teamswithUserName[indexOfUserNameTeam]
      //   });
  
      //   if (!order) {
      //     throw new Error("Order not found");
      //   }
  
      //   // Make external API request to distribute the prize
      //   const fetchRes = await fetch(
      //     "http://127.0.0.1:5000/transaction/create/cr/byadmin",
      //     {
      //       method: "POST",
      //       headers: {
      //         authorization: "#*${dheeraj.eow.dev}*:)",
      //         apikey: "123@edgeofwaresports.com",
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify({
      //         user: order.userId,
      //         battle: verifiedBattle._id,
      //         // @ts-expect-error
      //         value: verifiedBattle.winning[`_${index + 1}`],
      //       }),
      //     }
      //   );
      //   const data = await fetchRes.json();

      //   console.log(data)
  
      //   if (!data.success) {
      //     throw new Error(data.error || "Failed to distribute prize");
      //   }
      // }
  
      // If everything goes well, commit the transaction
      if(position===1){
        await battleModel.updateOne({_id: verifiedBattle._id}, {
          _1: verifiedBattle.winning[`_1`]
        })
      }
      if(position===2){
        await battleModel.updateOne({_id: verifiedBattle._id}, {
          _2: verifiedBattle.winning[`_2`]
        })
      }
      if(position===3){
        await battleModel.updateOne({_id: verifiedBattle._id}, {
          _3: verifiedBattle.winning[`_3`]
        })
      }

      const updatedBattle = await battleModel.findOne({ _id: verifiedBattle._id });
      // console.log(updatedBattle)
      if(updatedBattle && updatedBattle._1 && updatedBattle._2 && updatedBattle._3){
        console.log("kdjasfkjhasdjfhwejkhfj")
        await battleModel.updateOne({_id: verifiedBattle._id}, {
          status: "completed"
        })
      }
      return res.status(200).json({
        success: true,
        data: "Prize distributed",
      });
      
    } catch (error :any) {
      // If any error occurs, abort the transaction
      return res.status(400).json({
        success: false,
        error: error.message || error,
      });
    }
  };
  