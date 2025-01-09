"use client";
import React, { useState } from "react";
import styles from "./styles/upcomingBattleCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface battleCardProps {
  isLogin?: boolean;
  battle: battleType;
  style?: React.CSSProperties;
}

const UpcomingBattleCard: React.FC<battleCardProps> = ({
  battle, 
  style: parentStyle,
}) => {
  const { _id, settings, battleId, expire, winning, teams, status, entry } = battle;
  const { _1 } = winning;
  const { dateStr, id } = expire;
  const { gameMode, map, teamMode, ammo, slots } = settings;

  const [rday, setRday] = useState("")
  const [rhr, setRhr] = useState("")
  const [rmi, setRmi] = useState("")
  const [rsec, setRsec] = useState("")

  function getTimeDifference(date1 :number, date2 :number) {
    const diffInMs = date2 - date1;

    if (diffInMs <= 0) {
      return { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }

    const days = String(Math.floor(diffInMs / (1000 * 60 * 60 * 24)));
    const hours = String(Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    const minutes = String(Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    const seconds = String(Math.floor((diffInMs % (1000 * 60)) / 1000)).padStart(2, '0');

    return { days, hours, minutes, seconds };
  }

  setTimeout(() => {
    const currentTime = +new Date();
    const { hours, minutes, seconds, days } = getTimeDifference(currentTime, id);
    setRday(days);
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
          {
            status==="live"?<div style={{color: "yellow"}}>
              <span style={{display: "inline-block", background: "yellow", height: 9, width: 9, borderRadius: 100}}></span>
              &nbsp; Live
            </div>:
            <div className={styles.timeCountDown}>{`${+rday===0?`${rhr}:${rmi}:${rsec}`:+rday===1?`${rday} day left`:`${rday} days left`}`}</div> 
          }
        </header>

        <Link href={`/battle/${_id}`}>
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
                {teamMode} {battle.settings.advanceSetting["Limited Ammo"]} &nbsp;#{battleId}
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
            <div className={styles.entryBox}>
              {/* <div>
                <span>id: </span>{auth?.roomId}&nbsp;&nbsp;
                {auth&&<Image height={10} width={10} src={"/icons/copy.png"} alt="" />}
              </div>
              <div>
                <span>pass: </span>{auth?.roomPass}&nbsp;&nbsp;
                {auth&&<Image height={10} width={10} src={"/icons/copy.png"} alt="" />}
              </div> */}
              <div className={styles.entryBtn}>Entry fee - {entry===0?"Free":entry}</div>
            </div>
            <div className={styles.prizes}>
              <Image
                width={30}
                height={25}
                src="/icons/trophy.png"
                alt="winnings"
              />
              &nbsp;&nbsp;{_1}/-
            </div>
          </div>
          {/* <footer className={styles.footer}>
            <div>Note: room id and password shown in the detail section</div>
            <span>Room Id: ____________</span>
            <span>Room Pass: ____________</span>
          </footer> */}
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
