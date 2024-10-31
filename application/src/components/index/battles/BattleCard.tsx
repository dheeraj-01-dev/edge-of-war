"use client"
import React, { useState } from 'react';
import styles from './styles/battleCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

interface battleCardProps {
  isLogin?: boolean;
  battle?: battleType;
  style?: React.CSSProperties;
}

const BattleCard: React.FC<battleCardProps> = ({
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
  const { _id, settings, battleId, expire, entry, winning, teams } = battle;
  const { _1 } = winning;
  const { id, dateStr } = expire;
  const { gameMode, map, teamMode, ammo, slots } = settings;

  const [rday, setRday] = useState("")
  const [rhr, setRhr] = useState("")
  const [rmi, setRmi] = useState("")
  const [rsec, setRsec] = useState("")

  // function getTimeDifference(date1 :any, date2 :any) {
  //   const diffInMs = Math.abs(date2 - date1);
  
  //   const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
  
  //   return { days, hours, minutes, seconds };
  // }

  // function getTimeDifference(date1 :any, date2 :any) {
  //   const diffInMs = date2 - date1;
  
  //   if (diffInMs <= 0) {
  //     return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  //   }
  
  //   const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  //   const hours = Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
  
  //   return { days, hours, minutes, seconds };
  // }


  function getTimeDifference(date1 :any, date2 :any) {
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
    const { days, hours, minutes, seconds } = getTimeDifference(currentTime, id);
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
          {/* <div className={styles.timeCountDown}>{`${rday}:${rhr}:${rmi}:${rsec}`}</div> */}
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
        </Link>

        <div className={styles.dealBox}>
          <div className={styles.entryBox}>
            <Link href={`/battle/checkout/${_id}`}>
              <div className={styles.entryBtn}>Join now - {entry}</div>
            </Link>
          </div>
          <Link href={`/battle/${_id}`}>
            <div className={styles.prizes}>
              <Image width={30} height={25} src="/icons/trophy.png" alt="winnings" />
              &nbsp;&nbsp;{_1}-/
            </div>
          </Link>
        </div>

        <Link href={`/battle/${_id}`}>
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

export default BattleCard;
