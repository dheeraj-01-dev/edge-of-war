import { getRegisterdBattle } from "@/api/battle";
import Contest from "@/components/contest/Contest";
import ScafFold from "@/server/components/scafFold/ScafFold";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("__eow_user_token")?.value;

  const response = await getRegisterdBattle({ token });

  return (
    <ScafFold>
      <Contest completedBattles={undefined} upcomingBattles={response.data} />
    </ScafFold>
  );
};

export default page;
