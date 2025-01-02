import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { passwordResetModel, userModel } from "./user.model.js";
import { verifyEmailAndOtpLocally } from "../auth/auth.controller.js";
import { otpModel } from "../auth/auth.model.js";
import nodemailer from "nodemailer";
// import { verifyEmailAndOtpLocally } from "../auth/auth.controller.js";
// import { otpModel } from "../auth/auth.model.js";

config();

const jwt_secret =
  process.env.JWT_SECRET_STR ||
  "7#D9g5F@6pU2q%V9sZ1yL*8sK$kG3e!Xb6F9qD+LzJ9uPzA%wH2J3x7XsQnS+*4tM8K3A6h1Tb5zR!zCvPq";

export const registerUser = async (req: Request, res: Response) => {
  // const {
  //   name,
  //   otp,
  //   userName,
  //   email,
  //   ffUid,
  //   ffUserName,
  //   password,
  //   confirmPassword,
  // } = req.body;
  const name = req.body.name.trim();
  const otp = req.body.otp.trim();
  const userName = req.body.userName.trim();
  const email = req.body.email.trim();
  const ffUid = req.body.ffUid.trim();
  const ffUserName = req.body.ffUserName.trim();
  const password = req.body.ffUid.trim();
  const confirmPassword = req.body.ffUid.trim();

  try {
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        error: `password and confirmPassword doesn't matched!`,
      });
    }
    const verified = await verifyEmailAndOtpLocally({ email, otp });
    if (!verified.success) {
      return res.status(400).json({
        success: false,
        error: `Invalid Otp !`,
      });
    }

    await otpModel.deleteMany({ email, otp });

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await userModel.create({
      ffUid: ffUid.trim(),
      ffUserName: ffUserName.trim(),
      name: name.trim(),
      userName: userName.trim(),
      email: email.trim(),
      password: hashedPassword,
    });

    const { _id, createAt } = user;
    const token = jwt.sign(
      {
        name,
        ffUid,
        userName,
        ffUserName,
        email,
        createAt,
        id: _id,
        profile: "/men.png",
      },
      jwt_secret
    );
    res.status(200).json({
      success: true,
      data: {
        token,
        userName
      },
    });
  } catch (err: any) {
    const key = Object.keys(err.keyValue)[0];
    res.status(400).json({
      success: false,
      error: `user already exist with given ${key}`,
    });
  }
};

export const loginUser_C = async (req: any, res: any) => {
  // const { phone, email, password } = req.body;
  const phone = req.body.phone?.trim();
  const email = req.body.email?.trim();
  const password = req.body.password.trim();

  try {
    const credentialToFind = (phone && { phone }) || (email && { email });

    const user = await userModel.findOne(credentialToFind);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, error: "please sign up first." });
    }

    const { _id, name, ffUid, userName, createAt, profile, ffUserName } = user;

    const passMatch = await bcrypt.compare(password, user.password);
    if (!passMatch) {
      return res
        .status(404)
        .json({ success: false, error: "password doesn't matched!" });
    }

    const token = jwt.sign(
      {
        name,
        ffUid,
        userName,
        createAt,
        id: _id,
        profile: "/men.png",
        email,
        ffUserName,
      },
      jwt_secret
    );
    res.status(200).json({
      success: true,
      data: {
        token,
        userName,
      },
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
};

export const getPersonalInfo_C = async (req: Request, res: Response) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({
      success: false,
      error: "unauthorized",
    });
  }

  try {
    let decodedToken: any;
    try {
      decodedToken = jwt.verify(authorization, jwt_secret);
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: "unauthorized",
      });
    }
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
        data: userFound,
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

  if (!authorization) {
    return res.status(400).json({
      success: false,
      error: "unauthorized",
    });
  }

  try {
    let decodedToken: any;
    try {
      decodedToken = jwt.verify(authorization, jwt_secret);
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: "unauthorized",
      });
    }

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
          "friend_details.ffUserName": 1,
        },
      },
    ]);
    res.status(200).json({
      success: true,
      data: {
        length: friends[0].friend_details.length,
        friends: friends[0].friend_details,
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
      data: samples,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "something went wrong !",
    });
  }
};

export const forgotPassword_C = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (!email) {
    return res.status(404).json({
      success: false,
      error: "Invalid Mail",
    });
  }
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        error: "user not found",
      });
    }
    await passwordResetModel.create({
      email,
    });
    const token = await jwt.sign(
      {
        email,
      },
      jwt_secret
    );

    const link = `https://domain.com/reset-password/${token}`;

    let transporter = nodemailer.createTransport({
      service: "gmail", // or you can configure with other services or custom SMTP
      auth: {
        user: "mr.oops2090@gmail.com",
        pass: "hprq geji orhz enni",
      },

      // host: "mail.edgeofwaresports.com",
      // port: 465, // Use 587 if you're using TLS
      // secure: true, // true for 465, false for 587
      // auth: {
      //   user: "mail@edgeofwaresports.com", // your GoDaddy email
      //   pass: "#Ggnfy57h", // your GoDaddy email password
      // },
    });

    // Send email
    let mailOptions = {
      from: "Edge Of War<mail@edgeofwaresports.com>",
      to: email,
      subject: "Password Reset Link",
      // text: `Your verification code is ${otp}`,
      html: `
          <div>
            <p>Your password reset Link is below valid for last 10 min</p>
            <div>
              <a href="${link}" >${link}</a>
            </div>
          </div>
        `,
    };

    transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        return console.log(error);
      }
      res.status(200).json({
        success: true,
        data: info,
      });
    });
  } catch {
    res.status(500).json({
      success: false,
      error: "Something went Wrong",
    });
  }
};
