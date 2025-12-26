"use server";
import NavigateBack from "@/hooks/Navigate.back";
import Image from "next/image";
import React from "react";
import CheckOutDetails from "@/components/index/battles/checkout/CheckOutDetails";
import { getSingleBattle, joinBattle } from "@/api/battle";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { getAllFriends, getPersonalInfo } from "@/api/user";
import AuthProtected from "@/components/auth/AuthProtected";



const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const cookieStore = cookies();
  const userToken = (await cookieStore).get("__eow_user_token")?.value;


    const { data } = await getPersonalInfo({ token: userToken });
  
  // Check if userToken exists and decode it
  if (!userToken || !data) {
    return <AuthProtected isLoggedIn={false}><div></div></AuthProtected>;
  }
  
  const jsonResponse = await getAllFriends({token: userToken})
  
  const decodedUserToken = jwt.decode(userToken);
  
  // Validate the decoded token
  const isTokenValid = decodedUserToken && typeof decodedUserToken !== 'string';
  if (!isTokenValid || !jsonResponse.data) {
    return <AuthProtected isLoggedIn={false}><div></div></AuthProtected>;
  }
  
  const { userName, profile, name, ffUid, ffUserName } = decodedUserToken;
  const { id } = await params;
  const response: responseType<battleType> = await getSingleBattle(id);

  
  return (
    <AuthProtected isLoggedIn={true}>
      <div>
        <NavigateBack styles={{ height: 15, display: "flex", margin: "15px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image height={15} width={15} alt="back" src="/icons/arrowLeftWhite.png" />
          </div>
        </NavigateBack>
        {response.data ? (
          <CheckOutDetails onConfirm={joinBattle} balance={data.balance} friendList={jsonResponse.data?.friends} self={{userName, ffUid, name, profile, userToken, ffUserName}} battle={response.data} />
        ) : (
          <div>Battle Not Found</div>
        )}
      </div>
    </AuthProtected>
  );
};

export default page;
