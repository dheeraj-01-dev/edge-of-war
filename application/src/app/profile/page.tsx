"use server";
import React from "react";
import styles from "./page.module.css";
import { cookies } from "next/headers";
import AuthProtected from "@/components/auth/AuthProtected";
import Header from "@/components/profile/Header";
import UserProfile from "@/components/profile/UserProfile";
import Balance from "@/components/profile/Balance";
import PersonalInfo from "@/components/profile/PersonalInfo";
import PasswordSecurity from "@/components/profile/PasswordAndSequrity";
import { getPersonalInfo } from "@/api/user";
import Leaderboard from "@/components/profile/Leaderboard";
import Logout from "@/components/profile/Logout";
import { ConfirmationDialogProvider } from "@/components/ConfirmDialog/ConfirmDialog";

const page = async () => {
  const cookieStore = cookies();
  const token = (await cookieStore).get("__eow_user_token")?.value;

  const response = await getPersonalInfo({ token });

  if (!response.data) {
    return (
      <div>
        {response.error}
        <div>Try Login again !</div>
      </div>
    );
  }
  const { balance, name, ffUid, email, profile, userName, ffUserName } = response.data;
  return (
    <AuthProtected isLoggedIn={token ? true : false}>
      <div className={styles.profile}>
        <Header userName={userName} />
        <div className={styles.section1}>
          <UserProfile
            style={{ marginTop: 20 }}
            name={name}
            uid={ffUid}
            profile={profile}
          />
          {/* <SocialMedia /> */}
          <Balance balance={(Math.round(balance * 100) / 100)} style={{ marginTop: 35 }} />
        </div>
        <Leaderboard ffUid={ffUid} ffusername={ffUserName} />
        <div className={styles.section2}>
          <PersonalInfo
            style={{ marginTop: 35 }}
            name={name}
            ffUid={ffUid}
            email={email}
            userName={userName}
          />
        </div>
        <PasswordSecurity style={{ marginTop: 35 }} />
        <ConfirmationDialogProvider>
          <Logout />
        </ConfirmationDialogProvider>
      </div>
    </AuthProtected>
  );
};

export default page;
