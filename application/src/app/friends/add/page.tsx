"use server";
import { getRandomUsers } from "@/api/user";
import AddFriends from "@/components/friends/AddFriends";
import Titles from "@/components/temp/Titles";
import { cookies } from "next/headers";
import React from "react";
import styles from "./page.module.css";

const page = async () => {
  const response = await getRandomUsers();
  const cookiStore = cookies();
  const userToken = (await cookiStore).get("__eow_user_token")?.value;

  return (
    <div className={styles.page}>
      <Titles
        title="Add"
        styles={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* <Link href="/world" style={{ marginRight: "20px" }}>
          <Image height={20} width={20} alt="_+" src="/icons/world-chat.png" />
        </Link> */}
      </Titles>
      <AddFriends sampleUsers={response.data} userToken={userToken} />
    </div>
  );
};

export default page;
