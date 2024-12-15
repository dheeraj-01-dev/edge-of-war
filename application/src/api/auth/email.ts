"use server"
import axios from "axios";
const domain = process.env.server_domain;
const apikey = "123@edgeofwaresports.com";

const sendVerificationEmail = async ({email}: {email: string}) => { 
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/auth/send/verificationMail`,
      headers: { apikey },
      data: {
        email
      }
    });
    return json.data;
  } catch (err:any) {
    console.log(err)
    return err.response.data
  }
};

const verifyEmailAndOtp = async ({email, otp}: {email: string, otp: number | string}) => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/auth/verifyEmailAndOtp`,
      headers: { apikey },
      data: {
        email, otp
      }
    });
    return json.data;
  } catch (err:any) {
    return err.response.data
  }
}

export { sendVerificationEmail, verifyEmailAndOtp }