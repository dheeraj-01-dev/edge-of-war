"use client"
import React from 'react';
import styles from './styles/battleCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

interface battleCardProps {
  isLogin?: boolean;
  battle : battleType;
  style?: React.CSSProperties;
}

const BattleCard: React.FC<battleCardProps> = ({
  battle,
  style: parentStyle,
}) => {
  const { settings, expire, entry, winning, teams } = battle;
  const { _1 } = winning;
  const { dateStr } = expire;
  const { gameMode, map, teamMode, slots, advanceSetting } = settings;

  return (
    <div style={parentStyle}>
      <div className={styles.battleCard}>
        <header className={styles.header}>
          <div className={styles.title}>
            {gameMode}&nbsp; [{map}]
          </div>
          <div className={styles.timeCountDown}>{battle.mode}</div>
        </header>

        <Link href={`#`}>
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
                {teamMode} {advanceSetting['Limited Ammo']} &nbsp;#{battle.battleId}
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
            <Link href={`#`}>
              <div className={styles.entryBtn}>Join now - {entry}</div>
            </Link>
          </div>
          <Link href={`#`}>
            <div className={styles.prizes}>
              <Image width={30} height={25} src="/icons/trophy.png" alt="winnings" />
              &nbsp;&nbsp;{_1}-/
            </div>
          </Link>
        </div>

        <Link href={`#`}>
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
