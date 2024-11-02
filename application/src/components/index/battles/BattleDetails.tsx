import Image from "next/image";
import React from "react";
import styles from "./styles/battleDetails.module.css";
import Link from "next/link";
import NavigateBack from "@/hooks/Navigate.back";
import BattlePlayerDetails from "./BattlePlayerDetails";

const BattleDetails = ({ battle }: { battle: battleType }) => {
  const {
    _id,
    settings: { map, slots },
    winning: { _1, _2, _3 },
    entry,
    teams,
  } = battle;

  return (
    <div className={styles["battle-details"]}>
      <div className={styles["section1"]}>
        <NavigateBack>
          <Image
            className={styles["arrow-back"]}
            width={25}
            height={20}
            src="/icons/arrowLeft.png"
            alt="back"
          />
        </NavigateBack>
        <div className={styles["img"]}>
          <Image src={`/maps/${map}.png`} alt="cover" />
        </div>
        <div className={styles["winners"]}>
          <div className={styles["winner-section"]}>
            <Image
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
        <div className={styles["register-btn-container"]}>
          <div className={styles["register-btn"]}>
            <Link href={`/battle/checkout/${_id}`}>
              <button>Join now - {entry}</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["section2"]} id="battle-details-section-2-for-pc">
        {false && (
          <div className={styles["room-auth"]}>
            <div className={styles["room-id"]}>
              Room id:{" "}
              <span>
                239202943{" "}
                <Image
                  width={15}
                  height={15}
                  src="/icons/copy.png"
                  alt="copy"
                />
              </span>
            </div>
            <div className={styles["room-pass"]}>
              {" "}
              Room pass:{" "}
              <span>
                23423{" "}
                <Image
                  width={15}
                  height={15}
                  src="/icons/copy.png"
                  alt="copy"
                />
              </span>{" "}
            </div>
          </div>
        )}
        <BattlePlayerDetails teams={teams} slots={slots} />
        <div className={styles["settings"]}>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Game mode</span>Battle
            Royal
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Team mode</span>2v2
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Ammo</span>Limited
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Map</span>Bermuda
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Time</span>5:00 PM
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Date</span>7 June, 2024
          </div>
          <div className={styles["border"]}></div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Gun attributes</span> No
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Character skill</span> No
          </div>
          <div className={styles["border"]}></div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Teams</span> 12
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Players</span> 48
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Minimum level</span> 55
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Preset Modes</span> Classic
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Preset Modes</span> Random
            Store
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Rounds</span> 7
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Default Coin</span> 500
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Ramdom buff</span> NO
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Cyber Airdrop</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Revival</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>HP</span> 200
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>EP</span> 0
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Movement speed</span> 100%
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Jump height</span> 100%
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Environment</span> Day
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Limited ammon</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Fall damage</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Auto revival</span> No
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Airdrop</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>
              Zone shrink speed
            </span>{" "}
            Standard
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Vehicles</span>Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>
              Out of zone damage
            </span>{" "}
            Standard
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>
              High tier loot zone
            </span>{" "}
            Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>UAV</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Airstrike</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Airship</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>
              Genric enemy outfit
            </span>{" "}
            no
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>
              Hide teammate nickname
            </span>{" "}
            No
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Friendly fire</span> No
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Pricise Aim</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Character skill</span> No
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Loadout</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>Gun attributes</span> No
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>In game missions</span> Yes
          </div>
          <div className={styles["setting"]}>
            {" "}
            <span className={styles["setting-span"]}>In match quests</span> No
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattleDetails;
