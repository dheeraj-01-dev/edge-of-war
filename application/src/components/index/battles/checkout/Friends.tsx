import Image from "next/image";
import React from "react";
import styles from "./friends.module.css";

type friends = {
  styleSheet?: React.CSSProperties;
  parentClass?: string;
  blurFriendState: () => void;
  members: string[];
  addMember: (newMember: string) => void;
  removeMember: (usernameToRemove: string) => void;
};

const Friends: React.FC<friends> = ({
  styleSheet,
  parentClass,
  blurFriendState,
  // members,
  // addMember,
  // removeMember,
}) => {
  return (
    <div style={styleSheet} className={`${parentClass} ${styles.page}`}>
      <div onClick={blurFriendState}>
        <Image height={15} width={15} alt="_" src="/icons/arrowLeftWhite.png" />
      </div>
    </div>
  );
};

export default Friends;
