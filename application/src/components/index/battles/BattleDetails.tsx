// import Image from "next/image";
// import React from "react";
// import styles from "./styles/battleDetails.module.css";
// import Link from "next/link";
// import NavigateBack from "@/hooks/Navigate.back";
// import BattlePlayerDetails from "./BattlePlayerDetails";
// import { cookies } from "next/headers";
// import { CommentDots } from "@/components/icons/Comments";
// import BattleAuthenticators from "./BattleAuthenticators";

// const BattleDetails = async ({ battle }: { battle: battleType }) => {
//   const {
//     _id,
//     settings: { map, slots },
//     winning: { _1, _2, _3 },
//     entry,
//     teams,
//     auth
//   } = battle;

//   const cookiStore = cookies();
//   const userName = (await cookiStore).get("__eow_user_name")?.value;

//   const isJoined = (() => {
//     if (!userName) return false;
//     for (const team of teams) {
//       if (team.includes(userName)) {
//         return true;
//       }
//     }
//     return false;
//   })();

//   const myEntity = teams.filter((team: string[]) => {
//     if (!userName) return;
//     return team.includes(userName);
//   });


  
//   return (
//     <div className={styles["battle-details"]}>
//       <div className={styles["section1"]}>
//         <NavigateBack>
//           <Image
//             className={styles["arrow-back"]}
//             width={25}
//             height={20}
//             src="/icons/arrowLeft.png"
//             alt="back"
//           />
//         </NavigateBack>
//         <div className={styles["mapImg"]}>
//           {/* <img src={`/maps/${map}.png`} alt="cover" /> */}
//           <picture>
//             <img src={`/maps/${map}.png`} alt="cover" />
//           </picture>
//           <div className={styles.commentSection}>
//             <CommentDots height={30} width={30} fill="#fff" />
//           </div>
//         </div>
//         <div className={styles["winners"]}>
//           <div className={styles["winner-section"]}>
//             <Image
//               unoptimized
//               height={60}
//               width={30}
//               className={styles["winner-trophy-img"]}
//               src="/winner/trophy-silver.png"
//               alt="winner"
//             />
//             <div
//               className={styles["winning-prize"]}
//               style={{ color: "#E5E5E5" }}
//             >
//               ₹ {_2}/-
//             </div>
//           </div>
//           <div
//             className={`${styles["winner-section"]} ${styles["winner-gold-section"]}`}
//           >
//             <Image
//               unoptimized
//               height={60}
//               width={30}
//               className={styles["winner-trophy-img"]}
//               src="/winner/trophy-gold.png"
//               alt="winner"
//             />
//             <div className={styles["winning-prize"]} style={{ color: "gold" }}>
//               ₹ {_1}/-
//             </div>
//           </div>
//           <div className={styles["winner-section"]}>
//             <Image
//               unoptimized
//               height={60}
//               width={30}
//               className={styles["winner-trophy-img"]}
//               src="/winner/trophy-bronze.png"
//               alt="winner"
//             />
//             <div
//               className={styles["winning-prize"]}
//               style={{ color: "#FFB367" }}
//             >
//               ₹ {_3}/-
//             </div>
//           </div>
//         </div>
//         { (
//           <div className={styles["register-btn-container"]}>
//             <div className={styles["register-btn"]}>
//               {
//                 isJoined?
//                 <button>Entry Fee - {entry}</button>:
//                 <Link href={`/battle/checkout/${_id}`}>
//                   <button>Join Now - {entry}</button>
//                 </Link>
//               }
//             </div>
//           </div>
//         )}
//       </div>

//       <div className={styles["section2"]} id="battle-details-section-2-for-pc">
//         {isJoined && <BattleAuthenticators myEntity={myEntity} isJoined={isJoined} auth={auth} />}
//         <BattlePlayerDetails teams={teams} slots={slots} />
//         <div className={styles["settings"]}>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Game mode</span>{battle.settings.gameMode}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Team mode</span>{battle.settings.teamMode}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Ammo</span>{battle.settings.ammo}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Map</span>{battle.settings.map}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Time</span>{new Date(battle.expire.id).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Date</span>{battle.expire.dateStr.split("|")[0].trim()}
//           </div>
//           <div className={styles["border"]}></div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Gun attributes</span> {battle.settings.gunAttributes}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Character skill</span> {battle.settings.characterSkill}
//           </div>
//           <div className={styles["border"]}></div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Teams</span> {battle.settings.slots}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Players</span> 48
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Minimum level</span> 55
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Preset Modes</span> {battle.settings.advanceSetting.presetMode}
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Rounds</span> 7
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Default Coin</span> 500
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Ramdom buff</span> NO
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Cyber Airdrop</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Revival</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>HP</span> 200
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>EP</span> 0
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Movement speed</span> 100%
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Jump height</span> 100%
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Environment</span> Day
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Limited ammon</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Fall damage</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Auto revival</span> No
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Airdrop</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>
//               Zone shrink speed
//             </span>{" "}
//             Standard
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Vehicles</span>Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>
//               Out of zone damage
//             </span>{" "}
//             Standard
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>
//               High tier loot zone
//             </span>{" "}
//             Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>UAV</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Airstrike</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Airship</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>
//               Genric enemy outfit
//             </span>{" "}
//             no
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>
//               Hide teammate nickname
//             </span>{" "}
//             No
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Friendly fire</span> No
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Pricise Aim</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Character skill</span> No
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Loadout</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>Gun attributes</span> No
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>In game missions</span> Yes
//           </div>
//           <div className={styles["setting"]}>
//             {" "}
//             <span className={styles["setting-span"]}>In match quests</span> No
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BattleDetails;

import Image from "next/image";
import React, { useMemo } from "react";
import styles from "./styles/battleDetails.module.css";
import Link from "next/link";
import NavigateBack from "@/hooks/Navigate.back";
import BattlePlayerDetails from "./BattlePlayerDetails";
import { CommentDots } from "@/components/icons/Comments";
import BattleAuthenticators from "./BattleAuthenticators";
import jwt from "jsonwebtoken";

const BattleDetails = ({ battle, userName, userToken }: { battle: battleType, userName: string | undefined, userToken: string | undefined }) => {
  const {
    _id,
    settings: { map, slots, gameMode, teamMode, advanceSetting },
    winning: { _1, _2, _3 },
    entry,
    teams,
    auth,
    expire,
    teamswithUserName
  } = battle;

  // Fetch user cookie

  // Use memoization for checking if the user is joined
  const isJoined = useMemo(() => {
    if (!userName) return false;
    // teamswithUserName.some(team => team.includes(userName))
    return userToken&&teamswithUserName.some(team => team.includes(userName)) || teams.some(team => team.includes(userName));
  }, [userName, teams, teamswithUserName, userToken]);

  // Find the team the user is part of
  const myEntity = useMemo(() => {
    if (!userName) return [];
    // const decodedUserToken :any = jwt.decode(userToken)
    if(teams.some(team => team.includes(userName))){
      return teams.filter(team => team.includes(userName));
    }
    else{
      if(!userToken){return[]}
      const decodeduserToken = jwt.decode(userToken)
      return teams.filter(team => team.includes(decodeduserToken.ffUserName));
    }
  }, [userName, teams, userToken]);

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

        <div className={styles["mapImg"]}>
          <picture>
            <img src={`/maps/${map}.png`} alt="cover" />
          </picture>
          <div className={styles.commentSection}>
            <CommentDots height={30} width={30} fill="#fff" />
          </div>
        </div>
        <div style={{color: "#009dff", fontSize: "80%", padding: "10px 10px 0 10px"}}>
          Note:- &nbsp; 
              <Link href="/rules-regulations" style={{textDecoration: "underline"}}>
                edge of eSports Tournament rules & regulations
              </Link>
        </div>

        <div className={styles["winners"]}>
          <div className={styles["winner-section"]}>
            <Image
              unoptimized
              height={60}
              width={30}
              className={styles["winner-trophy-img"]}
              src="/winner/trophy-silver.png"
              alt="silver winner"
            />
            <div className={styles["winning-prize"]} style={{ color: "#E5E5E5" }}>
              ₹ {_2}/-
            </div>
          </div>
          <div className={`${styles["winner-section"]} ${styles["winner-gold-section"]}`}>
            <Image
              unoptimized
              height={60}
              width={30}
              className={styles["winner-trophy-img"]}
              src="/winner/trophy-gold.png"
              alt="gold winner"
            />
            <div className={styles["winning-prize"]} style={{ color: "gold" }}>
              ₹ {_1}/-
            </div>
          </div>
          <div className={styles["winner-section"]}>
            <Image
              unoptimized
              height={60}
              width={30}
              className={styles["winner-trophy-img"]}
              src="/winner/trophy-bronze.png"
              alt="bronze winner"
            />
            <div className={styles["winning-prize"]} style={{ color: "#FFB367" }}>
              ₹ {_3}/-
            </div>
          </div>
        </div>

        <div className={styles["register-btn-container"]}>
          <div className={styles["register-btn"]}>
            {isJoined ? (
              <button>Entry Fee - {entry}</button>
            ) : (
              <Link href={`/battle/checkout/${_id}`}>
                <button>Join Now - {entry}</button>
              </Link>
            )}
          </div>
        </div>
      </div>


      <div className={styles["section2"]} id="battle-details-section-2-for-pc">
        {isJoined && <BattleAuthenticators userName={userName} battle={battle} myEntity={myEntity} isJoined={isJoined} auth={auth} />}
        <BattlePlayerDetails heading="positions..." style={{marginBottom: 20}} teams={battle.positions} slots={slots} />
        <BattlePlayerDetails teams={teams} slots={slots} />

        <div className={styles["settings"]}>

          <div className={styles.primarySetting}>
              <div className={styles["setting"]} style={{fontWeight: 800, color: "yellow"}}>
                <span className={styles["setting-span"]}>Winning Type</span> {battle.mode}
              </div>
            {[
              ["Game mode", gameMode],
              ["Team mode", teamMode],
              ["Ammo", battle.settings.advanceSetting["Limited Ammo"]],
              ["Map", map],
              ["Time", expire.dateStr.split("|")[1].trim()],
              ["Date", expire.dateStr.split("|")[0].trim()],
              [],
              ["Gun attributes", battle.settings.advanceSetting["Gun Attributes"]],
              ["Character skill", battle.settings.advanceSetting["Character Skill"]],
              [],
            ].map(([label, value], index) => {
              if(!label){
                return(
                  <div key={index} style={{border: "2px solid var(--bg-7)"}}></div>
                )
              }
              return(
              <div key={index} className={styles["setting"]}>
                <span className={styles["setting-span"]}>{label}</span> {value}
              </div>
            )})}
          </div>
          <div>
            {
              Object.keys(advanceSetting).map((value, index)=>{
                return (
                  <div key={index} className={styles["setting"]}>
                    {
                      //@ts-expect-error advanceSetting is object and should have specific values as key.
                      <div><span className={styles["setting-span"]}>{value}</span> {advanceSetting[value]}</div>
                    }
                    
                  </div>
                )
              })
            }
          </div>
          {/* {
            Object.keys(advanceSetting).map((value, index)=>{
              return (
                <div key={index} className={styles["setting"]}>
                  <span className={styles["setting-span"]}>{value}</span> {advanceSetting[value]}
                </div>
              )
            })
          } */}
          {/* {[
            ["Game mode", gameMode],
            ["Team mode", teamMode],
            ["Ammo", ammo],
            ["Map", map],
            ["Time", new Date(expire.id).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })],
            ["Date", expire.dateStr.split("|")[0].trim()],
            [],
            ["Gun attributes", gunAttributes],
            ["Character skill", characterSkill],
            [],
            ["Teams", slots],
            ["Players", 48], // Assuming fixed value
            ["Minimum level", 55],
            ["Preset Modes", advanceSetting.presetMode],
            ["Rounds", 7], // Assuming fixed value
            ["Default Coin", 500],
            ["Random buff", "NO"],
            ["Cyber Airdrop", "Yes"],
            ["Revival", "Yes"],
            ["HP", 200],
            ["EP", 0],
            ["Movement speed", "100%"],
            ["Jump height", "100%"],
            ["Environment", "Day"],
            ["Limited ammo", "Yes"],
            ["Fall damage", "Yes"],
            ["Auto revival", "No"],
            ["Airdrop", "Yes"],
            ["Zone shrink speed", "Standard"],
            ["Vehicles", "Yes"],
            ["Out of zone damage", "Standard"],
            ["High tier loot zone", "Yes"],
            ["UAV", "Yes"],
            ["Airstrike", "Yes"],
            ["Airship", "Yes"],
            ["Generic enemy outfit", "No"],
            ["Hide teammate nickname", "No"],
            ["Friendly fire", "No"],
            ["Precise Aim", "Yes"],
            ["Character skill", "No"],
            ["Loadout", "Yes"],
            ["Gun attributes", "No"],
            ["In-game missions", "Yes"],
            ["In match quests", "No"]
          ].map(([label, value], index) => {
            if(!label){
              return(
                <div style={{border: "2px solid var(--bg-7)"}}></div>
              )
            }
            return(
            <div key={index} className={styles["setting"]}>
              <span className={styles["setting-span"]}>{label}</span> {value}
            </div>
          )})} */}
        </div>
      </div>
    </div>
  );
};

export default BattleDetails;
