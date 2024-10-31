"use client"
import React, { useState } from "react";
import styles from './styles/battles.module.css'
import BattleCard from "./BattleCard";
import FilterBattle from "./FilterBattle";

const Battles = ({
  battles
}: {
  battles: battleType[]
}) => {

  const [filterdBattle, setFilterdBattle] = useState(battles);

  return (
    <div>
      <FilterBattle setFilterdBattle={setFilterdBattle} battles={battles} />
      <div className={styles.battles}>
        {/* {battles?.map((obj:any)=>{return <BattleCard key={obj._id} battle={obj} />})} */}
        {filterdBattle?.map((obj:battleType)=>{return <BattleCard key={obj._id} battle={obj} />})}
        {/* {!json[0].test&&json.map((obj)=>{return <BattleCard key={obj._id.$oid} battle={obj} />})} */}
        {!filterdBattle&&<div className={styles.battleTemplate} >
          Battle Cooming Soon !
        </div>}
      </div>
        {filterdBattle.length<1&&<div className={styles.battleTemplate} >
          Battle Cooming Soon !
        </div>}
    </div>
  );
};

export default Battles;