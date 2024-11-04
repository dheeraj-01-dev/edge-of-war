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

const FriendMember: React.FC<member> = ({ profile, userName }) => {
  return (
    <div>
      <Image height={25} width={25} alt="_" src={profile} />
      <div>{userName}</div>
    </div>
  );
};

type allFriends = {
  friends: member[] | undefined;
};
const AllFriendSection :React.FC<allFriends> = ({ friends }) => {
  return(
    <div>
      {
        friends && friends.length > 0 ? (
          friends.map((friend: member) => {
            return (
              <FriendMember
                name={friend.name}
                ffUid={friend.ffUid}
                key={friend.userName}
                profile={friend.profile}
                userName={friend.userName}
              />
            );
          })
        ) : (
          <div className={styles.noFriendsTitle}>
            <NoFriends />
          </div>
        )
      }

    </div>
  )
};

export default AllFriendSection;
