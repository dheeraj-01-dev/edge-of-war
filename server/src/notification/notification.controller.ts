import { Request, Response } from "express";
import notificationModel from "./notification.model.js";
import mongoose from "mongoose";
import { userModel } from "../users/user.model.js";
import jwt, { JwtPayload } from "jsonwebtoken";

const jwt_secret =
  process.env.JWT_SECRET_STR ||
  "MAI_HU_DON_MAI_HU_DON....MUJHE_ROKEGA_KON>?SKLDFJ2934N23MNR09DNMIUAE90UNDAKFIH9OA8U90U9&*_+_89JH898'ASDF";

export const createFriendRequest_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  const { to } = req.body;

  if (!authorization) {
    return res.status(400).json({
      success: false,
      error: "unAuthorized !",
    });
  }

  const decodedUser = jwt.verify(
    authorization as string,
    jwt_secret
  ) as JwtPayload;

  if (!decodedUser) {
    return res.status(400).json({
      success: false,
      error: "Unauthorized!",
    });
  }

  const { userName } = decodedUser;

  const findReq = await notificationModel.findOne({ from: userName, to });
  if (findReq) {
    return res.status(300).json({
      success: false,
      error: "already sent !",
    });
  }
  try {
    await notificationModel.create({
      from: userName,
      to,
      n_type: "Friend request",
    });
    res.status(200).json({
      success: true,
      data: "request sent !",
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export const acceptFriendReqest_C = async (req: Request, res: Response) => {
  const { from, to } = req.body;
  const session = await mongoose.startSession();
  await session.startTransaction();
  try {
    const doc = await notificationModel.deleteOne({ from, to }, { session });
    if (doc.deletedCount < 1) {
      await session.abortTransaction();
      await session.endSession();
      res.status(404).json({
        success: false,
        error: "request not found",
      });
      return;
    }

    await userModel.updateOne(
      { _id: from },
      {
        $addToSet: {
          "friends.allFriends": [to],
        },
      },
      { session }
    );

    await userModel.updateOne(
      { _id: to },
      {
        $addToSet: {
          "friends.allFriends": [from],
        },
      },
      { session }
    );

    await session.commitTransaction();
    await session.endSession();
    res.status(200).json({
      success: true,
      data: "Accepted Successfully !",
    });
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    res.status(500).json({
      success: false,
      error: "internal server error !",
    });
  }
};

export const getAllNotification_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(404).json({
      success: false,
      error: "not authorized !",
    });
  }

  const decodedUser = jwt.verify(
    authorization as string,
    jwt_secret
  ) as JwtPayload;

  if (!decodedUser) {
    return res.status(400).json({
      success: false,
      error: "Unauthorized!",
    });
  };

  try {
    const notifications = await notificationModel.aggregate([
      {
        $match: {
          to: decodedUser.userName,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "from",
          foreignField: "userName",
          as: "from",
        },
      },
      {
        $project: {
          _id: 1,
          to: 1,
          n_type: 1,
          message: 1,
          from: {
            userName: 1,
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      // data: {
      //   id: notifications[0].id,
      //   from: notifications[0].from,
      //   to: notifications[0].to[0].userName,
      //   n_type: notifications[0].n_type
      // },
      data: notifications,
    //   [
    //     {
    //         "_id": "67285524c3049ea19e93d0d3",
    //         "from": [
    //             {
    //                 "userName": "un-be4t4ble"
    //             }
    //         ],
    //         "to": "dheeraj.mafia",
    //         "n_type": "Friend request"
    //     }
    // ]
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};
