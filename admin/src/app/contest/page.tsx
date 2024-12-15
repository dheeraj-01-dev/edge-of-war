import { getRegisterdBattle } from "@/api/battle";
import Contest from "@/components/contest/Contest";
import ScafFold from "@/server/components/scafFold/ScafFold";
import { cookies } from "next/headers";
import React from "react";

const page = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("__eow_admin_token")?.value;

  const response = await getRegisterdBattle({ token });

  return (
    <ScafFold>
      <Contest completedBattles={undefined} upcomingBattles={response.data?.battles} />
    </ScafFold>
  );
};

export default page;
