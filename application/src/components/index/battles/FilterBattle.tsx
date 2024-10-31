"use client";
import React, { useState } from "react";
import styles from './styles/filterBattle.module.css'
import Image from "next/image";
import { useRouter } from "next/navigation";

interface FilterBattleProps {
  setFilterdBattle: React.Dispatch<React.SetStateAction<any[]>>;
  battles: any[];
}

const FilterBattle: React.FC<FilterBattleProps> = ({ setFilterdBattle, battles }) => {
  const router = useRouter();
  const [currentFilter, setCurrentFilter] = useState<string>("all");

  const applyFilter = (filter: string, condition: (battle: any) => boolean) => {
    if (currentFilter === filter) return;
    const filteredBattles = battles.filter(condition);
    setCurrentFilter(filter);
    setFilterdBattle(filteredBattles);
    router.refresh()
    // window.scrollTo(0, 0)
    // window.location.reload()
  };

  const removeFilter = () => {
    if (currentFilter === "all") return;
    setCurrentFilter("all");
    setFilterdBattle(battles);
    router.refresh()
    // window.scrollTo(0, 0)
    // window.location.reload()
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterItemBox}>
        <div
          className={`${styles.filterItems} ${currentFilter === "all" && styles.active}`}
          onClick={removeFilter}
        >
          &nbsp; All
        </div>
        <div
          onClick={() => applyFilter("br", (battle) => battle.settings.gameMode === "Battle Royale")}
          className={`${styles.filterItems} ${currentFilter === "br" && styles.active}`}
        >
          <Image height={17} width={17} alt="Battle Royale" src="/icons/game.png" /> &nbsp; Battle Royale
        </div>
        <div
          onClick={() => applyFilter("cs", (battle) => battle.settings.gameMode === "Clash Squad")}
          className={`${styles.filterItems} ${currentFilter === "cs" && styles.active}`}
        >
          <Image height={17} width={17} alt="Clash Squad" src="/icons/multiplayers.png" /> &nbsp; Clash Squad
        </div>
      </div>
      <div className={styles.filterBtn}>
        <Image height={19} width={21} alt="Filter Options" src="/icons/apps.png" />
      </div>
    </div>
  );
};

export default FilterBattle;
