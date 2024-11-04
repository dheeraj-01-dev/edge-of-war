import React from "react";
import styles from "./styles/profileSection.module.css";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { decode } from "jsonwebtoken";

type profileSection = {
  name: string;
  ffUid: string;
  userName: string;
  profileSrc: string;
};

const ProfileSection: React.FC<profileSection> = async (
  {
    // name,
    // ffUid,
    // userName,
    // profileSrc,
  }
) => {
  const cookieStore = cookies();
  const userToken = (await cookieStore).get("__eow_user_token")?.value;

  if (!userToken) {
    return (
      <div className={styles.loginContainer}>
        <Link className={styles.loginLink} href="/login">
          {" "}
          Login{" "}
        </Link>
      </div>
    );
  }
  let name,
    userName,
    ffUid,
    profileSrc = "";
  try {
    const decodedUser = decode(
      userToken as unknown as string
    ) as decodedUserToken;
    name = decodedUser.name;
    userName = decodedUser.userName;
    ffUid = decodedUser.ffUid;
    profileSrc = decodedUser.profile;
  } catch {
    return (
      <div className={styles.loginContainer}>
        <Link className={styles.loginLink} href="/login">
          {" "}
          Login{" "}
        </Link>
      </div>
    );
  }

  // const { name, userName, ffUid, profileSrc } = decodeduser;
  return (
    <div className={styles.profile}>
      {name ? (
        <Link href="/profile" className={styles.linkContainer}>
          <div className={styles.profilePic}>
            <Image height={60} width={60} alt="" src={profileSrc} />
            {/* <img src="/men.png" alt="" /> */}
          </div>
          <div className={styles.identity}>
            <div className={styles.name}>{userName}</div>
            <div className={styles.uid}>{ffUid}</div>
          </div>
        </Link>
      ) : (
        <div className={styles.loginContainer}>
          <Link className={styles.loginLink} href="/login">
            {" "}
            Login{" "}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileSection;
