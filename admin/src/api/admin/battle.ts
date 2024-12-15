"use server"
import axios from "axios"
const domain = process.env.server_domain;

export const createBattle = async (data: any, apikey: string | undefined, auth: string | undefined) => {
    try {
        const json = await axios({
          method: "POST",
          url: `${domain}/admin/battle/create`,
          headers: {apikey, Authorization: auth},
          data: data,
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
