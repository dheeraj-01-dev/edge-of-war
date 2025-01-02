
"use server";
import React from "react";
import styles from "./page.module.css";
import NavigateBack from "@/hooks/Navigate.back";
import Image from "next/image";
import BattleDetails from "@/components/index/battles/BattleDetails";
import { getSingleBattle } from "@/api/battle";
import { cookies } from "next/headers";

// Fetching data function for server components
async function fetchBattleData(id: string): Promise<responseType<battleType>> {
  const response = await getSingleBattle(id);
  return response;
}

type Params = Promise<{
  id: string;
}>;

const Page = async ({params}: {params: Params}) => {


  const cookiStore = cookies();
  const userName = (await cookiStore).get("__eow_user_name")?.value;
  const userToken = (await cookiStore).get("__eow_user_token")?.value;
  
  const resolvedParams = await params;
  const response = await fetchBattleData(resolvedParams.id);

  if (!response.success || !response.data) {
    return (
      <div>
        <NavigateBack
          styles={{
            margin: "15px",
          }}
        >
          <Image width={20} height={20} src="/icons/arrowLeftWhite.png" alt="back" />
        </NavigateBack>
        <div
          style={{
            height: "80dvh",
            fontSize: "200%",
            display: "grid",
            placeItems: "center",
            opacity: 0.5,
          }}
        ><div></div>
          Battle Not Found!
        </div>
      </div>
    );
  };

  return (
    <div className={styles["battle-details"]}>
      <BattleDetails userToken={userToken} userName={userName} battle={response.data} />
    </div>
  );
};

export default Page;
