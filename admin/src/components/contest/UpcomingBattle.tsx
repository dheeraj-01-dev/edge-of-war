"use client"
import React, { useState } from "react";
import UpcomingBattleCard from "./UpcomingBattleCard";
import styles from './styles/upcomingBattle.module.css'
import Image from "next/image";
import BattleCard from "../index/battles/BattleCard";
import BattlePrimaryOption from "./BattlePrimaryOption";
import AdvanceOptions from "./AdvanceOptions";
import RegisteredPlayers from "./RegisteredPlayers";
import Positions from "./Positions";

interface upcomingBattleType {
  battles: battleType[];
  handleHost: ({ roomId, roomPass, battle }: {
    roomId: string | number | undefined;
    roomPass: string | number | undefined;
    battle: string | undefined;
}) => Promise<responseType<string>>
}

const UpcomingBattle: React.FC<upcomingBattleType> = ({ battles, handleHost }) => {
  const [focusedBattle, setFocusedBattle] = useState<battleType | null>(battles[0]);

  return (
    <div style={{ overflow: "auto"}}>
      {
        focusedBattle?
        <div>
          <div onClick={()=>{setFocusedBattle(null)}}>
            <Image src={"/icons/arrowLeftWhite.png"} height={20} width={20} alt=""></Image>
          </div>
          <div>
            <div style={{display: "flex"}}>
              <BattleCard battle={focusedBattle} style={{minWidth: "400px"}} />
              <BattlePrimaryOption handleHost={handleHost} battle={focusedBattle} />
            </div>
            <div>
              <AdvanceOptions advanceOption={focusedBattle.settings.advanceSetting} />
            </div>
            <div>
              <Positions slots={focusedBattle.settings.slots} battle={focusedBattle._id} teams={focusedBattle.teams} positions={focusedBattle.positions} />
            </div>
            <div>
              <RegisteredPlayers slots={focusedBattle.settings.slots} teams={focusedBattle.teams} />
            </div>
            {/* <div style={{height: 600, background: "var(--bg-7)", padding: 20, borderRadius: 20, marginTop: 20}}></div>
            <div style={{height: 400, background: "var(--bg-7)", padding: 20, borderRadius: 20, marginTop: 20}}></div> */}
          </div>
        </div>:
        <div className={styles.container}>
          {battles.map((battle: battleType) => {
            return (
              <div key={battle._id} onClick={()=>{setFocusedBattle(battle)}}>
                <UpcomingBattleCard battle={battle} />
              </div>
            );
          })}
        </div>
      }

    </div>
  );
};

export default UpcomingBattle;
