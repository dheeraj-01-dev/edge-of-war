import Image from "next/image";
import React from "react";
import styles from "./friends.module.css";
import Link from "next/link";

type friends = {
  styleSheet?: React.CSSProperties;
  parentClass?: string;
  blurFriendState: () => void;
  members: friendMember[];
  slots: number;
  addMember: (newMember: friendMember) => void;
  removeMember: (usernameToRemove: string) => void;
  friendList?: friendMember[];
};

type selectedMember = {
  src: string;
  userName: string;
};

const NoFriends: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>You have no friends yet!</h2>
      <p className={styles.message}>
        It looks a bit quiet here.
         Why not make some friends?
      </p>
      <Link href="/friends/add">
        <p className={styles.addButton}>Add Friends</p>
      </Link>
    </div>
  );
};
export const NoContest: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>You have no Contests Yet!</h2>
      <p className={styles.message}>
      {/* It looks like there are no contests yet. */}
        It looks a bit quiet here.
       Why not create or join a new one?
      </p>
      <Link href="/">
        <p className={styles.addButton}>Create or Join Contest</p>
      </Link>
    </div>
  );
};

const FriendMembers: React.FC<selectedMember> = ({ src, userName }) => {
  return (
    <div>
      <Image height={25} width={25} alt="_" src={src} />
      <div>{userName}</div>
    </div>
  );
};

const Friends: React.FC<friends> = ({
  styleSheet,
  parentClass,
  blurFriendState,
  friendList,
  members,
  slots
  // addMember,
  // removeMember,
}) => {
  return (
    <div style={styleSheet} className={`${parentClass} ${styles.page}`}>
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
          Select Members &nbsp; <div className={`${styles.memberCount} ${slots!==members.length&&styles.redTeam}`} > [{members.length+"/"+slots}]</div>
        </div>
      </div>

      <div className={styles.members}>
        {members.map((member) => {
          return (
            <div key={member.userName} className={styles.memberContainer}>
              <Image height={55} width={55} alt="_" src="/men.png" />
              <div className={styles.userName}>{member.userName}</div>
            </div>
          );
        })}
      </div>

      {friendList && friendList.length > 0 ? (
        friendList?.map((friend: friendMember) => {
          return (
            <FriendMembers
              key={friend.userName}
              src={friend.profile}
              userName={friend.userName}
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

export default Friends;
