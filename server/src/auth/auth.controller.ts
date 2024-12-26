import { Request, Response } from "express";
import { MailtrapTransport } from "mailtrap";
import nodemailer from "nodemailer";
import twilio from "twilio";

import "dotenv/config";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { otpModel } from "./auth.model.js";
import { userModel } from "../users/user.model.js";

const sendMail = async (req: Request, res: Response) => {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    // service: 'gmail',  // or you can configure with other services or custom SMTP
    // auth: {
    //   user: 'mr.oops2090@gmail.com',
    //   pass: 'hprq geji orhz enni'
    // }

    host: "smtpout.secureserver.net",
    port: 465, // Use 587 if you're using TLS
    secure: true, // true for 465, false for 587
    auth: {
      user: "mail@es-portal.org", // your GoDaddy email
      pass: "#Ggnfy57h", // your GoDaddy email password
    },
  });

  // Send email
  let mailOptions = {
    from: "mail@es-portal.org",
    to: "dheeraj.01.dev@gmail.com",
    subject: "Hello from mr oops",
    text: "This is a test email sent from a Node.js app",
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      return console.log(error);
    }
    console.log("Email sent: " + info.response);
  });

  // try {

  //   const mailerSend = new MailerSend({
  //     apiKey: "mlsn.bfbff9dee986f38c6bcc8d5cccbda1258f2a57f678709d3b35bb7cae932cda88",
  //   });

  //   const sentFrom = new Sender("esports@es-portal.org", "Es portal");

  //   const recipients = [
  //     new Recipient("dheeraj.01.dev@gmail.com", "Hi Dheeraj")
  //   ];

  //   const emailParams = new EmailParams()
  //     .setFrom(sentFrom)
  //     .setTo(recipients)
  //     .setReplyTo(sentFrom)
  //     .setSubject("Want to hack Mars")
  //     .setHtml("<strong>This is the Infomation to do that</strong>")
  //     .setText("Follow the guidelines provided by aliens.");

  //   const re = await mailerSend.email.send(emailParams);
  //   res.json({
  //     re
  //   })
  // } catch (err) {
  //   console.log(err)
  // }
};

const sendVerificationMailForSignUp = async (req: Request, res: Response) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // return
  try {
    // const user = await userModel.findOne({ email });
    // if (user) {
    //   res.status(400).json({
    //     success: false,
    //     error: "user already exist",
    //   });
    // }
    await otpModel.deleteMany({ email });
    await otpModel.create({
      email,
      otp,
    });

    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',  // or you can configure with other services or custom SMTP
      auth: {
        user: 'mr.oops2090@gmail.com',
        pass: 'hprq geji orhz enni'
      }

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
      subject: "Verification Code",
      // text: `Your verification code is ${otp}`,
      html: `
      <div>
        <p>Your verification code is <strong>${otp}</strong></p>
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
  } catch (err) {
    console.log(err)
    res.json({ err });
  }
};

const verifyEmailAndOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;

  const data = await otpModel.findOne({ email });
  if (!data) {
    res.status(404).json({
      success: false,
      error: "try after sometime !",
    });
  } else {
    if (otp === data.otp) {
      res.status(200).json({
        success: true,
        otpMatched: true,
      });
    } else {
      res.status(404).json({
        success: false,
        error: "invalid otp",
      });
    }
  }
};
const verifyEmailAndOtpLocally = async ({
  email,
  otp,
}: {
  email: string;
  otp: number;
}) => {
  const data = await otpModel.findOne({ email });
  if (!data) {
    return {
      success: false,
      error: "try after sometime !",
    };
  } else {
    if (otp === data.otp) {
      return {
        success: true,
        otpMatched: true,
      };
    } else {
      return {
        success: false,
        error: "invalid otp",
      };
    }
  }
};

const sendSms = async (req: Request, res: Response) => {
};

const sendWhatsapp = async (req: Request, res: Response) => {
};

export {
  sendMail,
  sendSms,
  sendWhatsapp,
  sendVerificationMailForSignUp,
  verifyEmailAndOtp,
  verifyEmailAndOtpLocally,
};

// const Nodemailer = require("nodemailer");
// const { MailtrapTransport } = require("mailtrap");

// const TOKEN = "aff5122ed33672d72da7cd2212edca93";

// const transport = nodemailer.createTransport(
//   MailtrapTransport({
//     token: TOKEN,
//   })
// );

// const sender = {
//   address: "hello@demomailtrap.com",
//   name: "Mailtrap Test",
// };
// const recipients = [
//   "mr.oops2090@gmail.com",
// ];

// transport
//   .sendMail({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);
