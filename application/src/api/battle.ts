"use server";
import axios from "axios";
const domain = process.env.server_domain;

export const getAllBattles = async ({
  token,
}: {
  token: string | undefined;
}): Promise<responseType<battleType[]>> => {
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
        error: error.response.data.message || "An error occurred",
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

export const getSingleBattle = async (
  _id: string
): Promise<responseType<battleType>> => {
  try {
    const response = await axios.get(`${domain}/battle/get/${_id}`);
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
    // Handle any other error types
    return {
      success: false,
      error: "An unexpected error occurred",
    };
  }
};

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
