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
          <div className={styles.exp}>Exp. 01</div>
        </div>
        <div className={styles.infoContainer}>
          <div>
            <div style={{display: "flex", alignItems: "center"}} className={styles.name}>{name}&nbsp; &nbsp;
              <Image height={15} width={15} alt="L" src="/icons/pending-yellow.png" />
            </div>
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
        {/* <div style={{display: "flex", alignItems: "center", color: "#ffff00"}}>
          pending &nbsp;
          <Image height={15} width={15} alt="L" src="/icons/pending-yellow.png" />
        </div> */}
        {/* <div style={{display: "flex", alignItems: "center", color: "#00D566"}}>
          verified &nbsp;
          <Image height={15} width={15} alt="L" src="/icons/verified.png" />
        </div> */}
        {/* <div style={{display: "flex", alignItems: "center", color: "#E94444"}}>
          rejected &nbsp;
          <Image height={15} width={15} alt="L" src="/icons/rejected.png" />
        </div> */}
        
        {/* <Image height={15} width={15} alt="L" src="/icons/like.png" />
        <div>&nbsp;9834&nbsp; &nbsp;</div> */}
        {/* <Image height={15} width={15} alt='L' src="/icons/dislike.png" />
          <div>&nbsp;984</div> */}
      </div>
    </div>
  );
};

export default UserProfile;
