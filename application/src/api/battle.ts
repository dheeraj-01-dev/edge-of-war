"use server";
import axios from "axios";

const domain = process.env.server_domain;

type BattleResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export const getAllBattles = async ({ token }: { token: string | undefined }): Promise<BattleResponse<battleType[]>> => {
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/all`,
      headers: {
        Authorization: token,
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
        data: [],
        message: error.response.data.message || "An error occurred",
      };
    }

    // Handle any other error types
    return {
      success: false,
      data: [],
      message: "An unexpected error occurred",
    };
  }
};


// const fetchSingleBattle = async (_id: string)=>{
//   try {
//     const json = await axios({
//       method: "GET",
//       url: `${domain}/battle/get/${_id}`
//     });
//     return json.data;
//   } catch (err: any) {
//     return err.response.data
//   }
// };

// const joinBattle = async ({battle, team, members, Authorization}: {
//   battle: string,
//   team: string,
//   members: string[],
//   Authorization: string | undefined
// }) => {
//   if(!Authorization){
//     return {
//       success: false,
//       error: "unauthorized"
//     }
//   }
//   try {
//     const json = await axios({
//       method: "POST",
//       url: `${domain}/battle/join`,
//       data: {
//         battle, team, members
//       },
//       headers: {
//         Authorization
//       }
//     });
//     return json.data;
//   } catch (err: any) {
//     return err.response.data
//   }
// };

// const fetchUpcomingBattles = async ( authorization: string | undefined ) => { 
//   if(!authorization){
//     return {
//       success: false,
//       error: "unathorized!"
//     }
//   }
//   try {
//     const json = await axios({
//       method: "GET",
//       url: `${domain}/battle/get/upcoming`,
//       headers: {
//         Authorization: authorization
//       }
//     });
//     return json.data;
//   } catch (err:any) {
//     return err.response.data
//   }
// }