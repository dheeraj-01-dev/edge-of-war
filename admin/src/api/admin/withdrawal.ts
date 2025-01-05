

"use server";
import axios from "axios";
const domain = process.env.server_domain;


export const getAllWithdrawalRequest = async ({ authorization, apikey }: {
    authorization: string | undefined,
    apikey: string | undefined
}) :Promise<responseType<{length: number, allRequest: withdrawalRequest[]}>> => {

    if(!authorization || !apikey){
         return {
            success: false,
            error: "unAuthorized"
         }
    }
    
    try {
        const json = await axios({
          method: "GET",
          url: `${domain}/admin/withdrawal/get/allRequest`,
          headers: {
            apikey,
            Authorization: authorization,
          },
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
    
        // Handle any other error types
        return {
          success: false,
          error: "An unexpected error occurred",
        };
      }
}


export const acceptWithdrawalRequest = async ({ authorization, apikey, withdrawalId, utr, creditedTo, creditedBy, creditedAmount  }: {
    authorization: string | undefined,
    apikey: string | undefined,
    withdrawalId: string | undefined,
    utr: string | undefined,
    creditedTo: string | undefined,
    creditedBy: string | undefined,
    creditedAmount: string | undefined
}) :Promise<responseType<{message: string, updtedRequest: withdrawalRequest}>> => {

    if(!authorization || !apikey){
         return {
            success: false,
            error: "unAuthorized"
         }
    }
    if(!(withdrawalId&&utr&&creditedAmount&&creditedBy&&creditedTo)){
        return {
            success: false,
            error: "all fields required, by client"
        }
    }
    
    try {
        const json = await axios({
          method: "GET",
          url: `${domain}/admin/withdrawal/acceptwithdrawal`,
          headers: {
            apikey,
            Authorization: authorization
          },
          data: { withdrawalId, utr, creditedTo, creditedBy, creditedAmount }
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
    
        // Handle any other error types
        return {
          success: false,
          error: "An unexpected error occurred",
        };
      }
}

