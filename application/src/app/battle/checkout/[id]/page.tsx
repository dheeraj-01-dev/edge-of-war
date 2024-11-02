"use server";
import NavigateBack from "@/hooks/Navigate.back";
import Image from "next/image";
import React from "react";
import CheckOutDetails from "@/components/index/battles/checkout/CheckOutDetails";
import { getSingleBattle } from "@/api/battle";
import AuthRequired from "@/components/auth/AuthRequired";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const cookieStore = cookies();
  const userToken = (await cookieStore).get("__eow_user_token")?.value;

  // Check if userToken exists and decode it
  if (!userToken) {
    return <AuthRequired isLoggedIn={false}><div></div></AuthRequired>;
  }

  const decodedUserToken = jwt.decode<decodedUserToken>(userToken);
  
  // Validate the decoded token
  const isTokenValid = decodedUserToken && typeof decodedUserToken !== 'string';
  if (!isTokenValid) {
    return <AuthRequired isLoggedIn={false}><div></div></AuthRequired>;
  }

  const { userName } = decodedUserToken;
  const { id } = await params;
  const response: responseType<battleType> = await getSingleBattle(id);

  return (
    <AuthRequired isLoggedIn={true}>
      <div>
        <NavigateBack styles={{ height: 15, display: "flex", margin: "15px" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image height={15} width={15} alt="back" src="/icons/arrowLeftWhite.png" />
          </div>
        </NavigateBack>
        {response.data ? (
          <CheckOutDetails userName={userName} battle={response.data} />
        ) : (
          <div>Battle Not Found</div>
        )}
      </div>
    </AuthRequired>
  );
};

export default page;
