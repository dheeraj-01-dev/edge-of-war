"use client";
import React, { useState } from "react";
import styles from "./styles/upcomingBattleCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface battleCardProps {
  isLogin?: boolean;
  battle?: battleType;
  style?: React.CSSProperties;
}

const UpcomingBattleCard: React.FC<battleCardProps> = ({
  battle = {
    _id: "00",
    battleId: "00",
    settings: {
      gameMode: "GameMode",
      map: "MAP",
      teamMode: "teamMode",
      slots: 0,
      ammo: "ammo",
      gunAttributes: "gunAttributes",
      characterSkill: "characterSkill",
      loadout: "loadout",
    },
    expire: {
      id: 0,
      dateStr: "choose one",
    },
    entry: 0,
    winning: {
      _1: 0,
      _2: 0,
      _3: 0,
    },
    teams: [],
  },
  style: parentStyle,
}) => {
  const { _id, settings, battleId, expire, winning, teams } = battle;
  const { _1 } = winning;
  const { dateStr, id } = expire;
  const { gameMode, map, teamMode, ammo, slots } = settings;

  // const [rday, setRday] = useState("")
  const [rhr, setRhr] = useState("")
  const [rmi, setRmi] = useState("")
  const [rsec, setRsec] = useState("")

  function getTimeDifference(date1 :number, date2 :number) {
    const diffInMs = date2 - date1;

    if (diffInMs <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(Math.floor(diffInMs / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((diffInMs % (1000 * 60)) / 1000)).padStart(2, '0');

    return { days, hours, minutes, seconds };
  }

  setTimeout(() => {
    const currentTime = +new Date();
    const { hours, minutes, seconds } = getTimeDifference(currentTime, id);
    // setRday(days);
    setRhr(hours);
    setRmi(minutes);
    setRsec(seconds)
  }, 1000);

  return (
    <div style={parentStyle}>
      <div className={styles.battleCard}>
        <header className={styles.header}>
          <div className={styles.title}>
            {gameMode}&nbsp; [{map}]
          </div>
          <div className={styles.timeCountDown}>{`${rhr}:${rmi}:${rsec}`}</div>
        </header>

        <Link href={""}>
          <div className={styles.infoContainer}>
            <div className={styles.battleMap}>
              <Image
                height={73}
                width={140}
                alt="m"
                src={`/maps/${map}.png`}
                style={{ borderRadius: 10 }}
              />
            </div>

            <div className={styles.battleDetail}>
              <div className={styles.battleMode}>
                {teamMode} {ammo} &nbsp;#{battleId}
              </div>

              <div>
                <div>{dateStr}</div>
                <div className={styles.organisationTemplate}>
                  <span>o</span>
                  <span>r</span>
                  <span>g</span>
                  <span>a</span>
                  <span>n</span>
                  <span>i</span>
                  <span>s</span>
                  <span>e</span>
                  <span>d</span>
                  <span> </span>
                  <span> </span>
                  <span>b</span>
                  <span>y</span>
                  <span> </span>
                  <span> </span>
                  <span>a</span>
                  <span>d</span>
                  <span>m</span>
                  <span>i</span>
                  <span>n</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dealBox}>
            <div className={styles.idPass}>
              <div>
                <span>id: </span>__________
              </div>
              <div>
                <span>pass: </span>__________
              </div>
              {/* <Link href={`/battle/checkout/${_id}`}>
              <div className={styles.entryBtn}>Join now - {entry}</div>
            </Link> */}
            </div>
            <div className={styles.prizes}>
              <Image
                width={30}
                height={25}
                src="/icons/trophy.png"
                alt="winnings"
              />
              &nbsp;&nbsp;{_1}-/
            </div>
          </div>
          <footer className={styles.footer}>
            <span className={styles.battleCardCount}>
              {teams.length}/{slots}
            </span>
            <div className={styles.battleCardOutliner}>
              <div
                className={styles.battleCardOutlinerCount}
                style={{ width: (teams.length * 100) / slots + "%" }}
              ></div>
            </div>
          </footer>
        </Link>
      </div>
    </div>
  );
};

export default UpcomingBattleCard;
