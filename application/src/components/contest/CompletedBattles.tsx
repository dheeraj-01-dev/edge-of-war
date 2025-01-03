import React from "react";
import styles from './styles/upcomingBattle.module.css'
import CompletedBattleCard from "./CompletedBattleCard";

interface completedBattlesType {
  battles: battleType[];
  userName: string|undefined
}

const CompletedBattles: React.FC<completedBattlesType> = ({ battles, userName }) => {
  return (
    <div className={styles.container}>
      {battles.map((battle: battleType) => {
        return (
          <div key={battle._id}>
            <CompletedBattleCard userName={userName} battle={battle} />
          </div>
        );
      })}
    </div>
  );
};

export default CompletedBattles;
