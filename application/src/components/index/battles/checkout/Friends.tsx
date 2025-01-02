import Image from "next/image";
import React from "react";
import styles from "./friends.module.css";
import Link from "next/link";
import { FriendMember } from "@/components/friends/AllFriends";

type friends = {
  styleSheet?: React.CSSProperties;
  parentClass?: string;
  blurFriendState: () => void;
  members: member[];
  slots: number;
  self: member,
  toggleMember: (newMember: member, self?:member) => void;
  friendList?: member[];
};

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
export const NoContest = ({style}: {style?:React.CSSProperties}) => {
  return (
    <div style={style} className={styles.container}>
      <h2 className={styles.title}>You have no Contests Yet!</h2>
      <p className={styles.message}>
        {/* It looks like there are no contests yet. */}
        It looks a bit quiet here. Why not create or join a new one?
      </p>
      <Link href="/">
        <p className={styles.addButton}>Create or Join Contest</p>
      </Link>
    </div>
  );
};

const Friends: React.FC<friends> = ({
  styleSheet,
  parentClass,
  blurFriendState,
  friendList,
  members,
  slots,
  toggleMember,
  self
}) => {
  return (
    <div style={styleSheet} className={`${parentClass} ${styles.page}`}>
      <div onClick={blurFriendState } className={styles.applyBtn}>
        Apply
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{ display: "inline-block", height: 15, width: 15 }}
          onClick={blurFriendState}
        >
          <Image
            height={15}
            width={15}
            alt="_"
            src="/icons/arrowLeftWhite.png"
          />
        </div>
        <div style={{ display: "inline-block", marginLeft: 20 }}>
          Select Members &nbsp;{" "}
          <div
            className={`${styles.memberCount} ${
              slots !== members.length && styles.redTeam
            }`}
          >
            {" "}
            [{members.length + "/" + slots}]
          </div>
        </div>
      </div>

      <div className={styles.members}>
        {members.map((member) => {
          return (
            <div onClick={()=>{toggleMember(member)}} key={member.userName} className={styles.memberContainer}>
              <Image className={styles.memberProfile} height={55} width={55} alt="_" src={member.profile} />
              {self!==member&&<Image className={styles.removeImg} height={20} width={20} alt="_" src={"/icons/remove.png"} />}
              <div className={styles.userName}>{member.userName}</div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 20,
          height: "calc(100dvh - 180px)",
          overflow: "auto",
        }}
      >
        {friendList && friendList.length > 0 ? (
          friendList?.map((friend: member) => {
            return (
              <div key={friend.userName} onClick={()=>{toggleMember(friend)}}>
                <FriendMember
                  name={friend.name}
                  ffUid={friend.ffUid}
                  profile={friend.profile}
                  userName={friend.userName}
                  ffUserName={friend.ffUserName}
                />
              </div>
            );
          })
        ) : (
          <div className={styles.noFriendsTitle}>
            <NoFriends />
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
