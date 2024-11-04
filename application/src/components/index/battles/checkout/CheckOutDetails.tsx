"use client";
import React, { useEffect, useState } from "react";
import styles from "./checkOutDetails.module.css";
import Image from "next/image";
import Friends from "./Friends";
import FinalCheckOut from "./FinalCheckOut";

type checkOutDetails = {
  battle: battleType;
  self: member;
  friendList?: member[];
};
const slotArr = ["", "Solo", "Duo", "", "Squad"];

const CheckOutDetails: React.FC<checkOutDetails> = ({
  battle,
  self,
  friendList,
}) => {
  const {
    settings: { map, gameMode, teamMode, ammo },
    battleId,
    entry,
    expire: { dateStr },
    winning: { _1, _2, _3 },
  } = battle;

  const [FriendState, setFriendState] = useState(false);
  const [finalCheckoutState, setFinalCheckoutState] = useState(false);

  const [members, setMembers] = useState<member[]>([self]);

  const addMember = (newMember: member) => {
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  const removeMember = (usernameToRemove: string) => {
    setMembers((prevMembers) =>
      prevMembers.filter((member) => member.userName !== usernameToRemove)
    );
  };

  const activeFriendState = () => {
    history.pushState({ freindState: true }, "friendState");
    setFriendState(true);
  };

  const blurFriendState = () => {
    setFriendState(false);
    history.back();
  };

  const activeFinalCheckout = () => {
    if (members.length !== slotArr.indexOf(teamMode)) {
      return activeFriendState();
    }
    history.pushState({ finalCheckout: true }, "finalCheckout");
    setFinalCheckoutState(true);
  };

  const blurFinalCheckout = () => {
    setFinalCheckoutState(false);
    history.back();
  };

  // Handle back button press
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        setFriendState(false);
        setFinalCheckoutState(false);
      } else {
      }
    };

    // Add popstate event listener
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className={styles.checkOutDetails}>
      <div style={{ width: "100%" }}>
        <div className={styles.header}>
          {gameMode} &nbsp;[{map}]
        </div>
        <div className={styles.introArea}>
          <Image
            className={styles.map}
            height={80}
            width={150}
            alt=""
            src={`/maps/${map}.png`}
          />
          <div className={styles.settings}>
            <div>
              <div className={styles.teamMode}>
                {teamMode} {ammo} &nbsp; #{battleId}
              </div>
              <div className={styles.dateStr}>{dateStr}</div>
            </div>
            <div className={styles.adminTemplate}>organized by admin</div>
          </div>
        </div>

        <div className={styles["winners"]}>
          <div className={styles["winner-section"]}>
            <Image
              height={60}
              unoptimized
              width={30}
              className={styles["winner-trophy-img"]}
              src="/winner/trophy-silver.png"
              alt="winner"
            />
            <div
              className={styles["winning-prize"]}
              style={{ color: "#E5E5E5" }}
            >
              ₹ {_2}/-
            </div>
          </div>
          <div
            className={`${styles["winner-section"]} ${styles["winner-gold-section"]}`}
          >
            <Image
              height={60}
              unoptimized
              width={30}
              className={styles["winner-trophy-img"]}
              src="/winner/trophy-gold.png"
              alt="winner"
            />
            <div className={styles["winning-prize"]} style={{ color: "gold" }}>
              ₹ {_1}/-
            </div>
          </div>
          <div className={styles["winner-section"]}>
            <Image
              height={60}
              unoptimized
              width={30}
              className={styles["winner-trophy-img"]}
              src="/winner/trophy-bronze.png"
              alt="winner"
            />
            <div
              className={styles["winning-prize"]}
              style={{ color: "#FFB367" }}
            >
              ₹ {_3}/-
            </div>
          </div>
        </div>

        <div className={styles.teamSection}>
          <div className={styles.teamTemplate}>
            <div>
              Your team{" "}
              <span
                className={`${styles.memberCount} ${
                  members.length !== slotArr.indexOf(teamMode) && styles.redTeam
                }`}
              >
                [{members.length}/{slotArr.indexOf(teamMode)}]
              </span>
            </div>
            <div onClick={activeFriendState}>
              <Image height={15} width={15} alt="_" src="/icons/edit.png" />
            </div>
          </div>
          <div className={styles.members}>
            {members.map((member: member, index: number) => {
              return (
                <div key={member.userName} className={styles.member}>
                  {index + 1}. &nbsp; &nbsp;{member.userName}
                  {self.userName === member.userName && (
                    <div className={styles.selfMemberTemplate}>[You]</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {members.length !== slotArr.indexOf(teamMode) && (
          <div style={{ color: "#777", marginTop: 30, marginLeft: 10 }}>
            * Incomplet team members !
          </div>
        )}
        <div
          onClick={activeFinalCheckout}
          className={`${styles.joinBtn} ${
            members.length !== slotArr.indexOf(teamMode) &&
            styles.disableJoinBtn
          }`}
        >
          <button>Join Now - ₹ {entry}</button>
        </div>

        <Friends
          slots={slotArr.indexOf(teamMode)}
          friendList={friendList}
          members={members}
          addMember={addMember}
          removeMember={removeMember}
          blurFriendState={blurFriendState}
          parentClass={`${styles.friendState} ${
            FriendState && styles.activeFriendState
          }`}
        />

        <FinalCheckOut
          blurFinalChekout={blurFinalCheckout}
          parentClass={`${styles.finalCheckOut} ${
            finalCheckoutState && styles.activeFinalCheckout
          }`}
        />
      </div>
    </div>
  );
};

export default CheckOutDetails;
