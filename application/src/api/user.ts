"use server";
import axios from "axios";
const domain = process.env.server_domain;

export const loginUser = async ({
  phone,
  email,
  password,
}: {
  phone?: number;
  email?: string;
  password: string;
}): Promise<responseType<string>> => {
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/user/auth/login`,
      data: { phone, email, password },
    });

    return {
      success: json.data.success,
      data: json.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      return {
        success: error.response.data.success || false,
        error: error.response.data.message || "An error occurred",
      };
    }

    // Handle any other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const getAllFriends = async ({token}: {token: string | undefined}) :Promise<responseType<getFriendsApi>> => {
  if(!token){
    return {
      success: false,
      error: "unAutorized"
    }
  }
  try {
    const response = await axios({
      method: "GET",
      url: `${domain}/user/get-friends/all`,
      headers: {
        Authorization: token
      }
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
        error: error.response.data.message || "An error occurred",
      };
    }

    // Handle any other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};