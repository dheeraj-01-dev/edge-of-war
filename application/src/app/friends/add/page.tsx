import React from 'react'

const page = () => {
  return (
    <div>
      make some friends
    </div>
  )
}

export default page

// "use server";
// import { createFriendRequest } from "@/api/notification/createFriendRequest";
// import findUser from "@/api/user/findUser";
// import getSampleUsers from "@/api/user/getSampleUsers";
// import World from "@/components/friends/world/World";
// import Titles from "@/components/temp/Titles";
// import { cookies } from "next/headers";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const page = async () => {
//   const cookieStore = cookies();
//   const authorization = (await cookieStore).get("u_n_state")?.value;

//   const sampleUsers: any = await getSampleUsers();

//   const friendRequestFunction = async ({ to }: { to: string }) => {
//     "use server";
//     const json: any = await createFriendRequest({
//       auth: authorization,
//       to,
//     });
//     return json;
//   };

//   return (
//     <div>
//       <Titles
//         title="Add"
//         styles={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         {/* <Link href="/world" style={{ marginRight: "20px" }}>
//           <Image height={20} width={20} alt="_+" src="/icons/world-chat.png" />
//         </Link> */}
//       </Titles>
//       <World
//         friendRequestFunction={friendRequestFunction}
//         sampleUsers={sampleUsers.data}
//         findUser={findUser}
//       />
//     </div>
//   );
// };

// export default page;
