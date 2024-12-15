import Image from "next/image";
import React from "react";
import styles from "./styles/userProfile.module.css";

const UserProfile = ({
  style,
  name,
  uid,
  profile,
}: {
  style?: React.CSSProperties;
  name: string;
  uid: number;
  profile: string;
}) => {
  return (
    <div style={style} className={styles.profileSection}>
      <div style={{ display: "flex" }}>
        <div>
          <Image
            className={styles.profilePic}
            width={60}
            height={60}
            alt=""
            src={profile}
          />
          <div className={styles.exp}>Exp. 78</div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            <div className={styles.name}>{name}</div>
            <div className={styles.uid}>{uid}</div>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.youtube}>
              <Image
                height={13}
                width={13}
                alt="wise"
                src="/icons/image-.png"
              />{" "}
              &nbsp;&nbsp;
              <Image
                height={13}
                width={13}
                alt="newier"
                src="/icons/image-.png"
              />{" "}
              &nbsp;&nbsp;
              <Image
                height={13}
                width={13}
                alt="lucky"
                src="/icons/image-.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.likes}>
        <Image height={15} width={15} alt="L" src="/icons/like.png" />
        <div>&nbsp;9834&nbsp; &nbsp;</div>
        {/* <Image height={15} width={15} alt='L' src="/icons/dislike.png" />
          <div>&nbsp;984</div> */}
      </div>
    </div>
  );
};

export default UserProfile;
