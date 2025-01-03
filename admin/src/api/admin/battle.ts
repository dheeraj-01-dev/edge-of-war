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
      } catch (error: any) {
        console.log(error.response)
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

export const hostBattle = async ({ apikey, authorization, roomId, roomPass, battle }: {
  apikey: string | undefined,
  authorization: string | undefined,
  roomId: string | number | undefined,
  roomPass: string | number | undefined,
  battle: string | undefined
}) :Promise<responseType<string>> => {
  
  if(!apikey || !authorization){
    return {
      success: false,
      error: "not Authorized"
    }
  }else if(!roomId || !roomPass || !battle){
    return {
      success: false,
      error: "Invalid Body Data"
    }
  };
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/admin/battle/host/${battle}`,
      headers: {apikey, Authorization: authorization},
      data: {
        roomId: +roomId, roomPass
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

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const publishPositions = async ({ apikey, authorization, positions, battle }: {
  apikey: string | undefined,
  authorization: string | undefined,
  positions: string[][],
  battle: string | undefined
}) :Promise<responseType<string>> => {
  
  if(!apikey || !authorization){
    return {
      success: false,
      error: "not Authorized"
    }
  }else if(!(positions&&battle)){
    return {
      success: false,
      error: "Invalid Body Data"
    }
  };
  try {
    const json = await axios({
      method: "POST",
      url: `${domain}/admin/battle/publish/positions`,
      headers: {apikey, Authorization: authorization},
      data: {
        battle, positions
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

    // Handle unknown other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

export const distributePrizes = async ({apikey, authorization, battleId}: {apikey: string|undefined, authorization: string|undefined, battleId:string|undefined}) :Promise<responseType<string>> => {
  try {
    if(!battleId){
      throw new Error("battleId required")
    }
    if(!apikey||!authorization){
      throw new Error("unAuthorized")
    };

      try {
        const json = await axios({
          method: "POST",
          url: `${domain}/admin/battle/distribute-prizes`,
          headers: {apikey, Authorization: authorization},
          data: {
            battleId
          },
        });
        
        return {
          success: json.data.success,
          data: json.data.data,
        };
      } catch (error: any) {
        console.log(error.response)
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
    } catch (error :any) {
      return{
        success: false,
        error: error.message?error.message:error
      }
    }
  }