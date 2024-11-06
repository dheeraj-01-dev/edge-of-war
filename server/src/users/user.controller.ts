import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { userModel } from "./user.model.js";
// import { verifyEmailAndOtpLocally } from "../auth/auth.controller.js";
// import { otpModel } from "../auth/auth.model.js";

config();

const jwt_secret =
  process.env.JWT_SECRET_STR ||
  "MAI_HU_DON_MAI_HU_DON....MUJHE_ROKEGA_KON>?SKLDFJ2934N23MNR09DNMIUAE90UNDAKFIH9OA8U90U9&*_+_89JH898'ASDF";

// export const registerUser = async (req: Request, res: Response) => {
//   const { name, otp, userName, phone, email, ffUid, ffUserName, password, confirmPassword } = req.body;

//   try {
//     if(password!==confirmPassword){
//       return res.status(400).json({
//         success: false,
//         error: `password and confirmPassword doesn't matched!`,
//       });
//     }
//     const verified = await verifyEmailAndOtpLocally({email, otp});
//     if(!verified.success){
//       return res.status(400).json({
//         success: false,
//         error: `Invalid Otp !`,
//       })
//     };

//     await otpModel.deleteMany({email, otp});

//     const hashedPassword = await bcrypt.hash(password, 12);
//     const user = await userModel.create({
//       ffUid,
//       ffUserName,
//       name,
//       userName,
//       phone,
//       email,
//       password: hashedPassword,
//     });

//     const { _id, createAt } = user;
//     const token = jwt.sign(
//       { name, userName, ffUid, _id, createAt },
//       jwt_secret
//     );
//     res.status(200).json({
//       success: true,
//       data: {
//         token,
//         _id,
//         profile: "/icons/user.png",
//         userName,
//       },
//     });
//   } catch (err: any) {
//     const key = Object.keys(err.keyValue)[0];
//     res.status(400).json({
//       success: false,
//       error: `${key} already exist!`,
//     });
//   }
// };

export const loginUser_C = async (req: any, res: any) => {
  const { phone, email, password } = req.body;

  try {
    const credentialToFind = (phone && { phone }) || (email && { email });

    const user = await userModel.findOne(credentialToFind);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "please sign up first." });
    }

    const { _id, name, ffUid, userName, createAt, profile } = user;

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res
        .status(404)
        .json({ success: false, message: "password doesn't matched!" });
    }

    const token = jwt.sign(
      { name, ffUid, userName, createAt, id: _id, profile },
      jwt_secret
    );
    res.status(200).json({
      success: true,
      data: token
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const getPersonalInfo_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if(!authorization){
    return res.status(400).json({
      success: false,
      error: "unauthorized"
    })
  }

  try {
    let decodedToken :any;
    try {
      decodedToken = jwt.verify(authorization, jwt_secret)
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: "unauthorized"
      })
    };
    const { id } = decodedToken;
    const persnolInfo = await userModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $unset: "password",
      },
    ]);
    if (persnolInfo.length < 1) {
      return res.status(404).json({
        success: false,
        error: "user not found !",
      });
    }
    res.status(200).json({
      success: true,
      data: persnolInfo[0],
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "something went wrong !",
    });
  }
};

export const findUser_C = async (req: Request, res: Response) => {
  const { user } = req.params;
  try {
    const userFound = await userModel.aggregate([
      {
        $match: {
          $or: [
            {
              userName: user,
            },
            {
              ffUid: parseInt(user),
            },
          ],
        },
      },
      {
        $project: {
          name: 1,
          ffUid: 1,
          _id: 1,
          profile: 1,
          userName: 1,
        },
      },
    ]);

    if (userFound.length) {
      return res.status(200).json({
        success: true,
        data: userFound
      });
    }
    res.status(400).json({
      success: false,
      error: "user not found !",
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const getSingleUser = async (req: any, res: any) => {
  const { user } = req.params;
  const { authorizaton: authToken } = req.headers;

  if (!user || !authToken) {
    return res
      .status(404)
      .json({ success: false, message: "please enter all required fields." });
  }
  try {
    const verifiedToken: any = jwt.verify(authToken, jwt_secret);

    const verifiedUser = await userModel.findById(verifiedToken._id);
    if (!verifiedUser) {
      return res
        .status(404)
        .json({ success: false, message: "user not found...." });
    }

    if (verifiedToken._id !== user) {
      return res
        .status(401)
        .json({ success: false, message: "unauthorized...." });
    }
    res.status(200).json({ success: true, user: verifiedUser });
  } catch (err) {
    res.status(403).json({ success: false, message: "invalid user" });
  }
};

export const resetPass = async (req: any, res: any) => {
  const { phone, email, newPassword } = req.body;
  if ((!phone && !email) || !newPassword) {
    return res
      .status(404)
      .json({ success: false, message: "please provide all fields." });
  }

  try {
    const field = (phone && { phone }) || (email && { email });

    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const updatedUser = await userModel.updateOne(field, {
      $set: { password: hashedPassword },
    });

    if (updatedUser.matchedCount !== 1) {
      return res
        .status(404)
        .json({ success: false, message: "please sign up first." });
    }
    if (updatedUser.modifiedCount !== 1) {
      return res
        .status(500)
        .json({ success: false, message: "please try again." });
    }

    res.status(200).json({
      success: true,
      user: "password reset successfully, you can proceed with login.",
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export const updateUserData = async (req: any, res: any) => {
  const { user } = req.params;
  const { authorization: authToken } = req.headers;
  let { newName, newUserName, newffUid } = req.body;

  if (!newName && !newUserName && !newffUid) {
    return res
      .status(422)
      .json({ success: false, message: "please provide atleast one field." });
  }
  try {
    const verifiedToken: any = jwt.verify(authToken, jwt_secret);
    const verifiedUser = await userModel.findById(verifiedToken._id);

    if (!verifiedUser || user !== verifiedUser?._id.toHexString()) {
      return res.status(404).json({ success: false, message: "invalid user" });
    }

    newName = newName ? newName : verifiedUser?.name;
    newUserName = newUserName ? newUserName : verifiedUser.userName;
    newffUid = newffUid ? newffUid : verifiedUser?.ffUid;

    const updatedUser = await userModel.updateOne(
      { _id: verifiedUser._id },
      { $set: { name: newName, ffUid: newffUid, userName: newUserName } }
    );
    if (updatedUser.modifiedCount !== 1) {
      return res
        .status(203)
        .json({ success: false, message: "rest to default..." });
    }

    res.status(200).json({ success: true, message: "changed successfully." });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "invalid user",
    });
  }
};

export const getAllFriends_C = async (req: Request, res: Response) => {
   
  const { authorization } = req.headers;

  if(!authorization){return res.status(400).json({
    success: false,
    error: "unauthorized"
  })}

  try {
    let decodedToken :any;
    try {
      decodedToken = jwt.verify(authorization, jwt_secret)
      
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: "unauthorized"
      })
    };
    
    const { id } = decodedToken;
    const friends = await userModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(`${id}`),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "friends.allFriends",
          foreignField: "userName",
          as: "friend_details",
        },
      },
      {
        $project: {
          "friend_details.userName": 1,
          "friend_details.profile": 1,
          "friend_details.ffUid": 1,
          "friend_details.name": 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: {
        length: friends[0].friend_details.length,
        friends: friends[0].friend_details
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "something went wrong !",
    });
  }
};

export const getSampleUsers_C = async (req: Request, res: Response) => {
  try {
    const samples = await userModel.aggregate([
      {
        $sample: {
          size: 15,
        },
      },
      {
        $project: {
          _id: 0,
          ffUid: 1,
          profile: 1,
          userName: 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: samples
    })
    
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "something went wrong !"
    })
  }

};
