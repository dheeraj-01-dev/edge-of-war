"use server"
import React from "react";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import AuthProtected from "@/components/auth/AuthProtected";
import Titles from "@/components/temp/Titles";
import FriendsSearchBox from "@/components/temp/FriendSearchBox";
import Footer from "@/components/scafFolds/footer/Footer";
import { getAllFriends } from "@/api/user";
import AllFriendSection from "@/components/friends/AllFriends";
import Link from "next/link";

const page = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("__eow_user_token")?.value;

  const res = await getAllFriends({ token });
  const friends = res.data?.friends;

  return (
    <div>
      <AuthProtected isLoggedIn={token?true:false}>
        <div className={styles.newConversation}>
          <Titles title="Friends" />
          <FriendsSearchBox style={{ marginBottom: "10px" }} />
          <AllFriendSection friends={friends} />
        </div>
      </AuthProtected>
      <div>
        <Link href="/friends/add" className={styles.addBtn}>Add +</Link>
        <Footer />
      </div>
    </div>
  );
};

export default page;
