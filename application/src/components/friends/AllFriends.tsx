"use client";
import Link from "next/link";
import React from "react";
import styles from "./styles/allFriends.module.css";
import Image from "next/image";

const NoFriends: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>You have no friends yet!</h2>
      <p className={styles.message}>
        It looks a bit quiet here. Why not make some friends?
      </p>
      <Link href="/friends/add">
        <p className={styles.addButton}>Add Friends</p>
      </Link>
    </div>
  );
};

export const FriendMember: React.FC<member> = ({ profile, ffUid, userName }) => {
  return (
    <div className={styles.memberContainer}>
      <Image
        className={styles.memberProfile}
        height={50}
        width={50}
        alt="_"
        src={profile}
      />
      <div className={styles.nameSection}>
        <div>{userName}</div>
        <div className={styles.ffUid}>{ffUid}</div>
      </div>
    </div>
  );
};

type allFriends = {
  friends: member[] | undefined;
};
const AllFriendSection: React.FC<allFriends> = ({ friends }) => {
  return (
    <div className={styles.page}>
      {friends && friends.length > 0 ? (
        friends.map((friend: member) => {
          return (
            <FriendMember
              name={friend.name}
              ffUid={friend.ffUid}
              key={friend.userName}
              profile={friend.profile}
              userName={friend.userName}
              ffUserName={friend.ffUserName}
            />
          );
        })
      ) : (
        <div className={styles.noFriendsTitle}>
          <NoFriends />
        </div>
      )}
    </div>
  );
};

export default AllFriendSection;
