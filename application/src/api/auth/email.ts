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
  } catch (err) {
    
    // Defining the error type as AxiosError
    if (axios.isAxiosError(err)) {
      // console.log(err.response?.data); // you can access the response here
      return err.response?.data; // return the response data in case of an error
    } else {
      console.log('Unexpected error:', err); // in case of an unexpected error (non-Axios error)
      return { error: 'Unexpected error occurred' };
    }
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
  } catch (err) {
    // return err.response.data
    // Defining the error type as AxiosError
    if (axios.isAxiosError(err)) {
      // console.log(err.response?.data); // you can access the response here
      return err.response?.data; // return the response data in case of an error
    } else {
      console.log('Unexpected error:', err); // in case of an unexpected error (non-Axios error)
      return { error: 'Unexpected error occurred' };
    }
  }
}

export { sendVerificationEmail, verifyEmailAndOtp }