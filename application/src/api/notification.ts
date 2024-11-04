"use server";
import axios from "axios";
const domain = process.env.server_domain;

export const getAllNotification = async ({
  auth,
}: {
  auth: string | undefined;
}) => {
  if (auth === undefined) {
    return {
      success: false,
      data: [],
      error: "not authorized !",
    };
  }
  try {
    const response = await axios({
      method: "GET",
      url: `${domain}/notification/all`,
      headers: {
        Authorization: auth,
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
        data: [],
        error: error.response.data.error || "An error occurred",
      };
    }

    // Handle any other error types
    return {
      success: false,
      data: [],
      error: "An unexpected error occurred",
    };
  }
};
