"use server";
import axios from "axios";
const domain = process.env.server_domain;
const apikey = "123@edgeofwaresports.com"

export const loginUser = async ({
  phone,
  email,
  password,
}: {
  phone?: number;
  email?: string;
  password: string;
}): Promise<responseType<{token: string, userName: string}>> => {
  if((!phone || !email) && !password){
    return {
      success: false,
      error: "Enter all fields !"
    }
  }
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/user/auth/login`,
      headers: { apikey },
      data: { phone, email, password },
    });

    return {
      success: json.data.success,
      data: json.data.data,
    };
  } catch (error: unknown) {
    // console.log(error)
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }
    // console.log(error)

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const registerUser = async ({name, ffUid, otp, ffUserName, userName, email, password, confirmPassword}: {
  email: string,
  otp: string,
  password: string,
  name: string,
  ffUid: string,
  ffUserName: string,
  userName: string,
  confirmPassword: string
}): Promise<responseType<{token: string, userName: string}>> => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/user/auth/register`,
      headers: { apikey },
      data: {
        name: name.trim(), otp: +otp,
        "ffUid": +ffUid,
        userName, ffUserName,
        // "phone": parseInt(phone?phone:""),
        email, password, confirmPassword
      }
    });
    // return json.data;
    return json.data;
  } catch (err) {
    // Defining the error type as AxiosError
    if (axios.isAxiosError(err)) {
      // console.log(err.response?.data); // you can access the response here
      return err.response?.data; // return the response data in case of an error
    } else {
      // console.log('Unexpected error:', err); // in case of an unexpected error (non-Axios error)
      return { success: false, error: 'Unexpected error occurred' };
    }
  }
};

export const getAllFriends = async ({
  token,
}: {
  token: string | undefined;
}): Promise<responseType<getFriendsApi>> => {
  if (!token) {
    return {
      success: false,
      error: "unAutorized",
    };
  }
  try {
    const response = await axios({
      method: "GET",
      url: `${domain}/user/get-friends/all`,
      headers: {
        apikey,
        Authorization: token,
      },
    });

    return {
      success: response.data.success,
      data: response.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const findSingleUser = async (user: string | number | string[]) => {
  "use server";
  try {
    const response = await axios({
      method: "GET",
      headers: { apikey },
      url: `${domain}/user/get/${user}`,
    });

    return {
      success: response.data.success,
      data: response.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const getRandomUsers = async (): Promise<responseType<member[]>> => {
  "use server";
  try {
    const response = await axios({
      method: "GET",
      headers: { apikey },
      url: `${domain}/user/get/random/sample`,
    });

    return {
      success: response.data.success,
      data: response.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const getPersonalInfo = async ({
  token,
}: {
  token: string | undefined;
}): Promise<responseType<personalInfo>> => {
  if (!token) {
    return {
      success: false,
      error: "unAuthorized !",
    };
  }

  try {
    const response = await axios({
      method: "GET",
      url: `${domain}/user/auth/get`,
      headers: {
        apikey,
        Authorization: token,
      },
    });

    return {
      success: response.data.success,
      data: response.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const createFriendRequest = async ({
  token,
  userName,
}: {
  token: string | undefined | null;
  userName: string | undefined | null;
}): Promise<responseType<string>> => {
  if (!token || !userName) {
    return {
      success: false,
      error: "unAuthorized !",
    };
  }
  try {
    const response = await axios({
      method: "POST",
      url: `${domain}/notification/friend-request/create`,
      headers: {
        apikey,
        Authorization: token,
      },
      data: {
        to: userName,
      },
    });

    return {
      success: response.data.success,
      data: response.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};


export const requestWithdrawal = async ({ authorization, upiId, confirmUpiId, contactPhone, otp, amount}: {
  authorization: string | undefined,
  upiId: string | undefined,
  confirmUpiId: string | undefined,
  contactPhone: string | undefined,
  otp: string | undefined,
  amount: number | undefined,
}) : Promise<responseType<string>> => {

  
  try {
    if(!authorization){return {success: false, error: "unAuhtorized"}};
    if(!upiId){return {success: false, error: "upi id required"}};
    if(!confirmUpiId){return {success: false, error: "confirm upi id required"}};
    if(!contactPhone){return {success: false, error: "contact phone required"}};
    if(!otp){return {success: false, error: "otp required"}};
    if(!amount){return {success: false, error: "amount required"}};

    const response = await axios({
      method: "POST",
      url: `${domain}/user/request/withdrawal`,
      headers: {
        apikey,
        Authorization: authorization,
      },
      data: {
        upiId, confirmUpiId, contactPhone, otp, amount
      },
    });

    return {
      success: response.data.success,
      data: response.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
}