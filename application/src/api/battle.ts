"use server";
import axios from "axios";
const domain = process.env.server_domain;
const apikey = "123@edgeofwaresports.com"

// export const getAllBattles = async ({
//   token,
// }: {
//   token: string | undefined;
// }): Promise<responseType<battleType[]>> => {
//   try {
//     const json = await axios({
//       method: "GET",
//       url: `${domain}/battle/get/all`,
//       headers: {
//         apikey,
//         Authorization: token,
//       },
//     });
//     return {
//       success: json.data.success,
//       data: json.data.data,
//     };
//   } catch (error: unknown) {
//     console.log(error)
//     // Check if the error is an AxiosError and has a response property
//     if (axios.isAxiosError(error) && error.response) {
//       return {
//         success: error.response.data.success || false,
//         data: [],
//         error: error.response.data.message || "An error occurred",
//       };
//     }

//     // Handle any other error types
//     return {
//       success: false,
//       data: [],
//       error: "An unexpected error occurred",
//     };
//   }
// };

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
        apikey,
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

export const getSingleBattle = async (
  _id: string
): Promise<responseType<battleType>> => {
  try {
    const response = await axios.get(`${domain}/battle/get/${_id}` , {headers: {apikey}});
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

export const getRegisterdBattle = async ({token}: {token: string | undefined }) :Promise<responseType<{
  lenght: number,
  battles: battleType[]
}>> => {
  if(!token){
    return {
      success: false,
      error: "unAuthorized !"
    }
  }
  try {
    const response = await axios.get(`${domain}/battle/get/registeredbattle`, {
      headers: {
        apikey,
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

export const joinBattle = async ({battle, members, Authorization, UserNameMembers}: {
  battle: string,
  members: string[],
  UserNameMembers: string[],
  Authorization: string | undefined
}) : Promise<responseType<string>> => {

  if(!Authorization){
    return {
      success: false,
      error: "unauthorized"
    }
  };
  try {
    const json = await axios({
          method: "POST",
          url: `${domain}/battle/join`,
          data: {
            battle, members, UserNameMembers
          },
          headers: {
            apikey,
            Authorization
          }
        });

    return {
      success: json.data.success,
      data: json.data.data,
    };
  } catch (error: unknown) {
    // Check if the error is an AxiosError and has a response property
    if (axios.isAxiosError(error) && error.response) {
      console.log(error.response.data)
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
//   } catch (err) {
//     return err.response.data
    // Defining the error type as AxiosError
    // if (axios.isAxiosError(err)) {
    //   // console.log(err.response?.data); // you can access the response here
    //   return err.response?.data; // return the response data in case of an error
    // } else {
    //   console.log('Unexpected error:', err); // in case of an unexpected error (non-Axios error)
    //   return { message: 'Unexpected error occurred' };
    // }
//   }
// }
