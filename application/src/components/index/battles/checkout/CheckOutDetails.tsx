"use client";
import React, { useEffect, useState } from "react";
import styles from "./checkOutDetails.module.css";
import Image from "next/image";
import Friends from "./Friends";
import FinalCheckOut from "./FinalCheckOut";

type checkOutDetails = {
  battle: battleType;
  friends?: unknown[];
};

const CheckOutDetails: React.FC<checkOutDetails> = ({ battle }) => {
  const {
    settings: { map, gameMode, teamMode, ammo },
    battleId,
    entry,
    expire: { dateStr },
    winning: { _1, _2, _3 },
  } = battle;

  const [FriendState, setFriendState] = useState(false);
  const [finalCheckoutState, setFinalCheckoutState] = useState(false);

  const activeFriendState = () => {
    history.pushState({ freindState: true }, "friendState");
    setFriendState(true);
  };

  const blurFriendState = () => {
    setFriendState(false);
    history.back();
  };

  const activeFinalCheckout = () => {
    history.pushState({ finalCheckout: true }, "finalCheckout");
    setFinalCheckoutState(true);
  };

  const blurFinalCheckout = () => {
    setFinalCheckoutState(false);
    history.back()
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
              Your team <span className={styles.memberCount}>[4/4]</span>
            </div>
            <div onClick={activeFriendState}>
              <Image height={15} width={15} alt="_" src="/icons/edit.png" />
            </div>
          </div>
          <div className={styles.members}>
            <div className={styles.member}>1. un-be4t4ble</div>
            <div className={styles.member}>2. player2</div>
            <div className={styles.member}>3. player3</div>
            <div className={styles.member}>4. player4</div>
          </div>
        </div>

        <div onClick={activeFinalCheckout} className={styles.joinBtn}>
          <button>Join Now - ₹ {entry}</button>
        </div>

        <Friends
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
