import React from "react";
import UpcomingBattleCard from "./UpcomingBattleCard";

interface upcomingBattleType {
  battles: battleType[];
}

const UpcomingBattle: React.FC<upcomingBattleType> = ({ battles }) => {
  return (
    <div>
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
