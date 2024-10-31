"use server"
import axios from "axios";

const domain = process.env.server_domain;

export const getAllBattles = async ({token}: {token: string|undefined}) => {  
  try {
    const json = await axios({
      method: "GET",
      url: `${domain}/battle/get/all`,
      headers: {
        Authorization: token
      }
    });
    return {
      success: json.data.success,
      data: json.data.data
    };
  } catch (error :any) {
    return {
      data: [],
      success: error.response.data.success,
      message: error.response.data.message
    }
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