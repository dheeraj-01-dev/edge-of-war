"use client";
import React, { useState } from "react";
import styles from "./styles/create.module.css";
import BattleCard from "../index/battles/BattleCard";
import LightEditor from "../create/LightEditor";
import GrandEditor from "../create/GrandEditor";

const Create = ({
  createBattle,
  apikey,
  auth,
}: {
  auth: string | undefined;
  apikey: string | undefined;
  createBattle: (
    data: any,
    apikey: string | undefined,
    auth: string | undefined
  ) => Promise<any>;
}) => {
  const battle: battleType = {
    status: "upcoming",
    mode: "survival",
    auth: {},
    positions: [],
    settings: {
      gameMode: "Battle Royale",
      map: "BERMUDA",
      teamMode: "Solo",
      slots: 48,
      advanceSetting: {
        presetMode: "Classic",
        EP: "0",
        revival: "Yes",
        "Movement Speed": "100%",
        HP: "200",
        "Jump Height": "100%",
        Environment: "Day",
        "Auto Revival": "No",
        Vehicles: "Yes",
        UAV: "Yes",
        "Generic Enemy Outfit": "Yes",
        "Precise Aim": "Yes",
        "Gun Attributes": "No",
        "Safe Zone Movin": "No",
        "Limited Ammo": "limited",
        Airdrop: "Yes",
        "Out-Of-Zone Damage": "Standard",
        Airstrike: "Yes",
        "Hide TeamMate Nickname": "No",
        "Character Skill": "Yes",
        "In-Game Mission": "Yes",
        "Quit-Out Penalty": "Yes",
        "Fall Damage": "Yes",
        "Zone Shrink Speed": "Standard",
        "High Tier Loot Zone": "Yes",
        Airship: "Yes",
        "Friendly Fire": "No",
        LoadOut: "Yes",
        "In-Match Quests": "No",
        "Only Headshot": "No",
      },
    },
    expire: {
      id: 0,
      dateStr: "______________________",
    },
    entry: 0,
    winning: {
      _1: 0,
      _2: 0,
      _3: 0,
    },
    teams: [],
  };

  const [platFormCash, setPlatFormCash] = useState(0);
  const [advanceOption, setAdvanceOption] = useState(false);
  const [battleState, setBattleState] = useState(battle);

  const updateWinningWithFreeEntry = (free: boolean) => {
    if (!free) {
      setPlatFormCash(0);
      setBattleState((data: any) => ({
        ...data,
        winning: {
          _1: 0,
          _2: 0,
          _3: 0,
        },
      }));
      return;
    }
    const gameMode = battleState.settings.gameMode;
    if (gameMode === "Clash Squad") {
      setPlatFormCash(-60);
      setBattleState((data: any) => ({
        ...data,
        winning: {
          _1: 60,
          _2: 0,
          _3: 0,
        },
      }));
    } else {
      setPlatFormCash(-190);

      setBattleState((data: any) => ({
        ...data,
        winning: {
          _1: 90,
          _2: 60,
          _3: 40,
        },
      }));
    }
  };

  const calculateAndUpdateWinning = ({
    entry = battleState.entry,
  }: {
    entry?: number;
  }) => {
    const teamMode = battleState.settings.teamMode;
    const gameMode = battleState.settings.gameMode;
    // const entry = battleState.entry;
    const teamLength = {
      "Clash Squad": { Solo: 2, Duo: 2, Squad: 2 },
      "Battle Royale": { Solo: 48, Duo: 24, Squad: 12 },
    }[gameMode][teamMode];

    const platFromTax = { 2: 0, 12: 21, 24: 27, 48: 33 }[teamLength];
    const collectedCash = entry * teamLength;
    if (gameMode === "Clash Squad") {
      setBattleState((data: any) => ({
        ...data,
        winning: {
          _1: collectedCash,
          _2: 0,
          _3: 0,
        },
      }));
      setPlatFormCash(0);
      return;
    }
    if (!platFromTax) return;
    const cashAfterPlatformTax =
      Math.round((collectedCash - (platFromTax * collectedCash) / 100) / 5) * 5;
    const platFormCash = collectedCash - cashAfterPlatformTax;
    const _1winning = Math.round((60 * cashAfterPlatformTax) / 100 / 5) * 5;
    const _2winning =
      Math.round((60 * (cashAfterPlatformTax - _1winning)) / 100 / 5) * 5;
    const _3winning = cashAfterPlatformTax - _1winning - _2winning;

    setPlatFormCash(platFormCash);

    setBattleState((data: any) => ({
      ...data,
      winning: {
        _1: _1winning,
        _2: _2winning,
        _3: _3winning,
      },
    }));
  };

  const updateBattleSetting = ({ key, value }: { key: string; value: any }) => {
    setBattleState((e) => ({
      ...e,
      settings: {
        ...e.settings,
        [key]: value,
      },
    }));
  };

  const updateBattleAdvanceSetting = ({ key, value }: { key: string; value: any }) => {
    setBattleState((e) => ({
      ...e,
      settings: {
        ...e.settings,
        advanceSetting: {
          ...e.settings.advanceSetting,
          [key]: value,
        }
      },
    }));
  };

  const updateBattleSingleLevel = ({
    key,
    value,
  }: {
    key: string;
    value: string | number | any;
  }) => {
    setBattleState((data: any) => ({
      ...data,
      [key]: value,
    }));
  };
  return (
    <div className={styles.container}>
      {/* <div>
        Free Battle: &nbsp;&nbsp;
        <input
          onChange={() => {
            updateWinningWithFreeEntry(false);
          }}
          type="radio"
          name="freeBattle"
          defaultChecked
        />{" "}
        No &nbsp;
        <input
          onChange={() => {
            updateWinningWithFreeEntry(true);
          }}
          type="radio"
          name="freeBattle"
        />{" "}
        Yes
      </div> */}
      <div className={styles.page}>
        <div
          style={{
            width: "100%",
            height: "100%",
            overflow: "auto",
          }}
        >
          <div className={styles.lightEditor}>
            <BattleCard battle={battleState} style={{ minWidth: "400px" }} />
            <div className={styles.section2}>
              <LightEditor
                battleState={battleState}
                setBattleState={setBattleState}
                platformCash={platFormCash}
                winning={battleState.winning}
                updateWinningWithFreeEntry={updateWinningWithFreeEntry}
                calculateAndUpdateWinning={calculateAndUpdateWinning}
                updateBattleSetting={updateBattleSetting}
                updateBattleSingleLevel={updateBattleSingleLevel}
              />
            </div>
          </div>
          <div style={{ width: "100%" }} className={styles.grandEditor}>
            <GrandEditor
              auth={auth}
              apikey={apikey}
              createBattle={createBattle}
              updateBattleSetting={updateBattleSetting}
              updateBattleAdvanceSetting={updateBattleAdvanceSetting}
              battleState={battleState}
              advanceOption={advanceOption}
              setAdvanceOption={setAdvanceOption}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
