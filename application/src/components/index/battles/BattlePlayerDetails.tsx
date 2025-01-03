
"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import styles from './styles/battlePlayerDetails.module.css'

interface BattlePlayerDetailsProps {
  teams: [string[]];
  slots: number;
  heading?: string;
  style?: React.CSSProperties;
}

const BattlePlayerDetails: React.FC<BattlePlayerDetailsProps> = ({ teams, slots, heading="Teams...", style }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedTeamIndex, setExpandedTeamIndex] = useState<number | null>(0);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);



  const togglePlayer = () => {
    setIsOpen((prev) => !prev);

    if (playerDivRef.current && imgRef.current) {
      playerDivRef.current.style.height = isOpen ? "50px" :`${teams.length * 50 + 200 }px`;
      imgRef.current.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
    }
  };

  const toggleTeam = (index: number) => {
    setExpandedTeamIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div style={style} ref={playerDivRef} className={styles.players}>
      <div onClick={togglePlayer} className={styles["players-banner"]}>
        <span>
         {heading} &nbsp;
          <span className={styles.playerCount}>
            ({`${teams.length}/${slots}`})
          </span>
        </span>
        <Image
          ref={imgRef}
          className={styles["players-arrow"]}
          width={20}
          height={17}
          src="/icons/arrowDown.png"
          alt="Down"
        />
      </div>
      <div className={styles.teams}>
        {teams.map((team: string[], index) => (
          <div
            key={index}
            className={`${styles.team} ${expandedTeamIndex === index ? styles.expanded : ""}`}
            onClick={() => toggleTeam(index)}
          >
            <div className={`${styles.teamTemplate} effectiveTeamToggleClick`}>
              {index + 1}. &nbsp; &nbsp;Slot {index+1}
              <Image
                width={12}
                height={12}
                src="/icons/singleArrowDown.png"
                alt="arrow"
              />
            </div>
            {expandedTeamIndex === index && (
              <div className={styles.teamMembers}>
                {team?.map((member, memberIndex) => (
                  <div key={member} className={styles.teamMember}>
                    {memberIndex + 1}. &nbsp; &nbsp;{member}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattlePlayerDetails;
