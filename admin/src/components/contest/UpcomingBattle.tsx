import React from "react";
import UpcomingBattleCard from "./UpcomingBattleCard";
import styles from './styles/upcomingBattle.module.css'

interface upcomingBattleType {
  battles: battleType[];
}

const UpcomingBattle: React.FC<upcomingBattleType> = ({ battles }) => {
  return (
    <div className={styles.container}>
      {battles.map((battle: battleType) => {
        return (
          <div key={battle._id}>
            <UpcomingBattleCard battle={battle} />
          </div>
        );
      })}
    </div>
  );
};

export default UpcomingBattle;
