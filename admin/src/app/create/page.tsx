"use server";
import ScafFold from "@/server/components/scafFold/ScafFold";
import React from "react";
import Create from "@/components/create2/Create";
import { createBattle } from "../../api/admin/battle";
import { cookies } from "next/headers";

const page = async () => {
  const cookieStore = cookies();
  const auth = (await cookieStore).get("__eow_admin_token")?.value;
  const apikey = (await cookieStore).get("__eow_apikey")?.value;

  return (
    <ScafFold>
      <Create createBattle={createBattle} auth={auth} apikey={apikey} />
    </ScafFold>
  );
};

export default page;
