import { getCompletedBattle, getRegisterdBattle } from "@/api/battle";
import Contest from "@/components/contest/Contest";
import ScafFold from "@/server/components/scafFold/ScafFold";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("__eow_user_token")?.value;
  const userName = (await cookieStore).get("__eow_user_name")?.value;

  const response = await getRegisterdBattle({ token });

  const completedBattles = await getCompletedBattle({ token });
  

  return (
    <ScafFold>
      <Contest userName={userName} completedBattles={completedBattles.data?.battles} upcomingBattles={response.data?.battles} />
    </ScafFold>
  );
};

export default page;
