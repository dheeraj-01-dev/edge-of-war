import nodemailer from "nodemailer";
import twilio from "twilio";
import "dotenv/config";
import { otpModel } from "./auth.model.js";
import { userModel } from "../users/user.model.js";
const sendMail = async (req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtpout.secureserver.net",
        port: 465,
        secure: true,
        auth: {
            user: "mail@es-portal.org",
            pass: "#Ggnfy57h",
        },
    });
    let mailOptions = {
        from: "mail@es-portal.org",
        to: "dheeraj.01.dev@gmail.com",
        subject: "Hello from mr oops",
        text: "This is a test email sent from a Node.js app",
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Email sent: " + info.response);
    });
};
const sendVerificationMailForSignUp = async (req, res) => {
    const { email } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    try {
        const user = await userModel.findOne({ email });
        if (user) {
            res.status(400).json({
                success: false,
                error: "user already exist",
            });
        }
        await otpModel.deleteMany({ email });
        await otpModel.create({
            email,
            otp,
        });
        let transporter = nodemailer.createTransport({
            host: "mail.edgeofwaresports.com",
            port: 465,
            secure: true,
            auth: {
                user: "mail@edgeofwaresports.com",
                pass: "#Ggnfy57h",
            },
        });
        let mailOptions = {
            from: "Edge Of War<mail@edgeofwaresports.com>",
            to: email,
            subject: "Verification Code",
            html: `
      <div>
        <p>Your verification code is <strong>${otp}</strong></p>
      </div>
    `,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            res.status(200).json({
                success: true,
                data: info,
            });
        });
    }
    catch (err) {
        console.log(err);
        res.json({ err });
    }
};
const verifyEmailAndOtp = async (req, res) => {
    const { email, otp } = req.body;
    const data = await otpModel.findOne({ email });
    if (!data) {
        res.status(404).json({
            success: false,
            error: "try after sometime !",
        });
    }
    else {
        if (otp === data.otp) {
            res.status(200).json({
                success: true,
                otpMatched: true,
            });
        }
        else {
            res.status(404).json({
                success: false,
                error: "invalid otp",
            });
        }
    }
};
const verifyEmailAndOtpLocally = async ({ email, otp, }) => {
    const data = await otpModel.findOne({ email });
    if (!data) {
        return {
            success: false,
            error: "try after sometime !",
        };
    }
    else {
        if (otp === data.otp) {
            return {
                success: true,
                otpMatched: true,
            };
        }
        else {
            return {
                success: false,
                error: "invalid otp",
            };
        }
    }
};
const sendSms = async (req, res) => {
    // try {
    //     const accountSid = "ACf8d8cc767bd4a413b1fe8037abb85bfe";
    //     const authToken = "673edfdd2ff5f9ea38ebebeab6a7621b";
    //     const client = twilio(accountSid, authToken);
    //     client.verify.v2
    //         .services("VAc7b5e4e4c0cdeb0a5e5575408cfbba34")
    //         .verifications.create({ to: "+918235681352", channel: "sms" })
    //         .then((verification) => console.log(verification.sid));
    // }
    // catch (err) {
    //     console.log(err);
    // }
};
const sendWhatsapp = async (req, res) => {
    // const accountSid = "ACf8d8cc767bd4a413b1fe8037abb85bfe";
    // const authToken = "673edfdd2ff5f9ea38ebebeab6a7621b";
    // const client = twilio(accountSid, authToken);
    // client.messages
    //     .create({
    //     from: "whatsapp:+14155238886",
    //     contentSid: "HX229f5a04fd0510ce1b071852155d3e75",
    //     contentVariables: '{"1":"409173"}',
    //     to: "whatsapp:+919910756792",
    // })
    //     .then((message) => console.log(message.sid));
};
export { sendMail, sendSms, sendWhatsapp, sendVerificationMailForSignUp, verifyEmailAndOtp, verifyEmailAndOtpLocally, };
//# sourceMappingURL=auth.controller.js.map