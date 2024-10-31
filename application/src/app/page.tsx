"use server";
import { getAllBattles } from "@/api/battle";
import Battles from "@/components/index/battles/Battles";
import EventDashboard from "@/components/index/events/EventDashBoard";
import ScafFold from "@/server/components/scafFold/ScafFold";
import { cookies } from "next/headers";
import React from "react";
import styles from './page.module.css'

const page = async () => {
  const cookieStore = cookies();
  const userToken = (await cookieStore).get("__eow_user_token")?.value;

  const json :jsonType<battleType[]> = await getAllBattles({token: userToken})
  return (
    <ScafFold>
      <div className={styles.page}>
        <EventDashboard />
        <Battles battles={json.data} />
      </div>
    </ScafFold>
  );
};

export default page;