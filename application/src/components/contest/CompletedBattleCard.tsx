// "use client";
// import React, { useState } from "react";
// import styles from "./styles/upcomingBattleCard.module.css";
// import Image from "next/image";
// import Link from "next/link";

// interface battleCardProps {
//   isLogin?: boolean;
//   battle: battleType;
//   style?: React.CSSProperties;
//   userName: string | undefined
// }

// const CompletedBattleCard: React.FC<battleCardProps> = ({
//   battle,
//   userName,
//   style: parentStyle,
// }) => {
//     // const userName = getCookie("__eow_user_name");

//   const { _id, settings, battleId, expire, winning, teams, status, entry } = battle;
//   const { _1 } = winning;
//   const { dateStr, id } = expire;
//   const { gameMode, map, teamMode, ammo, slots } = settings;

//   const [rday, setRday] = useState("")
//   const [rhr, setRhr] = useState("")
//   const [rmi, setRmi] = useState("")
//   const [rsec, setRsec] = useState("")


//   function getTimeDifference(date1 :number, date2 :number) {
//     const diffInMs = date2 - date1;

//     if (diffInMs <= 0) {
//       return { days: "00", hours: "00", minutes: "00", seconds: "00" };
//     }

//     const days = String(Math.floor(diffInMs / (1000 * 60 * 60 * 24)));
//     const hours = String(Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
//     const minutes = String(Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
//     const seconds = String(Math.floor((diffInMs % (1000 * 60)) / 1000)).padStart(2, '0');

//     return { days, hours, minutes, seconds };
//   }

//   setTimeout(() => {
//     const currentTime = +new Date();
//     const { hours, minutes, seconds, days } = getTimeDifference(currentTime, id);
//     setRday(days);
//     setRhr(hours);
//     setRmi(minutes);
//     setRsec(seconds)
//   }, 1000);


//   const yourEntryPositionWithUserName = battle.teamswithUserName.map((team, index)=>{
//     return team.map((member, memberIndex)=>{
//         if(member===userName){
//             return [ index, memberIndex ]
//         }
//     })
//   })
//   .flat() // Flatten the 2D array into a 1D array
//   .filter(value => value !== undefined)[0];

//   let yourPosition;
//   if(yourEntryPositionWithUserName!==undefined){
//       const yourFFUserName = battle.teams[yourEntryPositionWithUserName[0]][yourEntryPositionWithUserName[1]]
//         yourPosition = battle.positions.findIndex(team => team && team.includes(yourFFUserName))
//   }

// //   .filter(value => value[1] !== undefined || value[0] !== undefined)[0].filter(value => value!==undefined);



//   return (
//     <div style={parentStyle}>
//       <div className={styles.battleCard}>
//         <header className={styles.header}>
//           <div className={styles.title}>
//             {gameMode}&nbsp; [{map}]
//           </div>
//           {
//             status==="live"?<div style={{color: "yellow"}}>
//               <span style={{display: "inline-block", background: "yellow", height: 9, width: 9, borderRadius: 100}}></span>
//               &nbsp; Live
//             </div>:
//             <div className={styles.timeCountDown}>{battle.status}</div> 
//           }
//         </header>

//         <Link href={`/battle/${_id}`}>
//           <div className={styles.infoContainer}>
//             <div className={styles.battleMap}>
//               <Image
//                 height={73}
//                 width={140}
//                 alt="m"
//                 src={`/maps/${map}.png`}
//                 style={{ borderRadius: 10 }}
//               />
//             </div>

//             <div className={styles.battleDetail}>
//               <div className={styles.battleMode}>
//                 {teamMode} {ammo} &nbsp;#{battleId}
//               </div>

//               <div>
//                 <div>{dateStr}</div>
//                 <div className={styles.organisationTemplate}>
//                   <span>o</span>
//                   <span>r</span>
//                   <span>g</span>
//                   <span>a</span>
//                   <span>n</span>
//                   <span>i</span>
//                   <span>s</span>
//                   <span>e</span>
//                   <span>d</span>
//                   <span> </span>
//                   <span> </span>
//                   <span>b</span>
//                   <span>y</span>
//                   <span> </span>
//                   <span> </span>
//                   <span>a</span>
//                   <span>d</span>
//                   <span>m</span>
//                   <span>i</span>
//                   <span>n</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={styles.dealBox}>
//             <div className={styles.entryBox}>
//               {/* <div>
//                 <span>id: </span>{auth?.roomId}&nbsp;&nbsp;
//                 {auth&&<Image height={10} width={10} src={"/icons/copy.png"} alt="" />}
//               </div>
//               <div>
//                 <span>pass: </span>{auth?.roomPass}&nbsp;&nbsp;
//                 {auth&&<Image height={10} width={10} src={"/icons/copy.png"} alt="" />}
//               </div> */}
//               <div className={styles.entryBtn}>Entry fee - {entry===0?"Free":entry}</div>
//             </div>
//             <div className={styles.prizes}>
//               <Image
//                 width={30}
//                 height={25}
//                 src="/icons/trophy.png"
//                 alt="winnings"
//               />
//               &nbsp;&nbsp;{_1}-/
//             </div>
//           </div>
//           <footer style={{marginTop: 10, fontSize: "85%"}}>
//             <div>
//                 <span style={{fontWeight: 700}}>your stats - </span><span style={{color: "yellow", fontWeight: 700}}>{yourPosition===1?"1st":yourPosition===2?"2nd":yourPosition===3?"3rd":`${yourPosition}th`} position</span>
//             </div>
//           </footer>
//           {/* <footer className={styles.footer}>
//             <span className={styles.battleCardCount}>
//               {teams.length}/{slots}
//             </span>
//             <div className={styles.battleCardOutliner}>
//               <div
//                 className={styles.battleCardOutlinerCount}
//                 style={{ width: (teams.length * 100) / slots + "%" }}
//               ></div>
//             </div>
//           </footer> */}
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CompletedBattleCard;


"use client";
import React from "react";
import styles from "./styles/upcomingBattleCard.module.css";
import Image from "next/image";
import Link from "next/link";

interface battleCardProps {
  isLogin?: boolean;
  battle: battleType;
  style?: React.CSSProperties;
  userName: string | undefined;
}

const CompletedBattleCard: React.FC<battleCardProps> = ({
  battle,
  userName,
  style: parentStyle,
}) => {
  const { _id, settings, battleId, expire, winning, status, entry } = battle;
  const { _1 } = winning;
  const { dateStr } = expire;
  const { gameMode, map, teamMode } = settings;


  // Calculate remaining time difference


  // Find the position of the user
  const yourEntryPosition = battle.teamswithUserName
    .map((team, index) =>
      team
        .map((member, memberIndex) => (member === userName ? [index, memberIndex] : undefined))
        .filter((value) => value !== undefined)[0]
    )
    .find((position) => position !== undefined);

  // Get the position based on teams
  const yourPosition = yourEntryPosition
    ? battle.positions.findIndex((team) => team?.includes(battle.teams[yourEntryPosition[0]][yourEntryPosition[1]]))+1
    : -1;

  return (
    <div style={parentStyle}>
      <div className={styles.battleCard}>
        <header className={styles.header}>
          <div className={styles.title}>
            {gameMode}&nbsp; [{map}]
          </div>
          {status === "live" ? (
            <div style={{ color: "yellow" }}>
              <span style={{ display: "inline-block", background: "yellow", height: 9, width: 9, borderRadius: 100 }}></span>
              &nbsp; Live
            </div>
          ) : (
            <div className={styles.timeCountDown}>{battle.status}</div>
          )}
        </header>

        <Link href={`/battle/${_id}`}>
          <div className={styles.infoContainer}>
            <div className={styles.battleMap}>
              <Image height={73} width={140} alt="map" src={`/maps/${map}.png`} style={{ borderRadius: 10 }} />
            </div>

            <div className={styles.battleDetail}>
              <div className={styles.battleMode}>
                {teamMode} {battle.settings.advanceSetting["Limited Ammo"]} &nbsp;#{battleId}
              </div>
              <div>
                <div>{dateStr}</div>
                <div className={styles.organisationTemplate}>
                  {"organised by admin".split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dealBox}>
            <div className={styles.entryBox}>
              <div className={styles.entryBtn}>Entry fee - {entry === 0 ? "Free" : entry}</div>
            </div>
            <div className={styles.prizes}>
              <Image width={30} height={25} src="/icons/trophy.png" alt="winnings" />
              &nbsp;&nbsp;{_1}/-
            </div>
          </div>

          <footer style={{ marginTop: 10, fontSize: "85%", display: "grid", gridTemplateColumns: "2fr 1.3fr" }}>
            <div>
              <span style={{ fontWeight: 700 }}>your stats - </span>
              <span style={{ color: "yellow", fontWeight: 700 }}>
                {yourPosition === 1
                  ? "1st"
                  : yourPosition === 2
                  ? "2nd"
                  : yourPosition === 3
                  ? "3rd"
                  : `${yourPosition}th`}{" "}
                position
              </span>
            </div>
            {/* <div>
              <span style={{ fontWeight: 700 }}>prize - </span>
              <span style={{ color: "yellow", fontWeight: 700 }}>{
                // @ts-expect-error winnig keys error
                battle.winning[`_${yourPosition}`]||"0"
              }</span>
            </div> */}
          </footer>
        </Link>
      </div>
    </div>
  );
};

export default CompletedBattleCard;
