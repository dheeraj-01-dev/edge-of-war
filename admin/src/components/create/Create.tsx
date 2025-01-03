"use client"
import React, { useState } from 'react'
import styles from './styles/create.module.css'
import Mobile from './Mobile'
import BattleCard from '../index/battles/BattleCard'
import LightEditor from './LightEditor';
import GrandEditor from './GrandEditor';



const Create = ({createBattle, apikey, auth}: {auth: string | undefined, apikey: string | undefined, createBattle: (data: any, apikey: string | undefined, auth: string | undefined) => Promise<any>}) => {
  const battle :battleType = {
      settings: {
        gameMode: "Battle Royale",
        map: "BERMUDA",
        teamMode: "Solo",
        slots: 48,
        ammo: "Limited" as "Limited",
        gunAttributes: "No" as "No",
        characterSkill: "Yes" as "Yes",
        loadout: "Yes" as "Yes",
        advanceOption: {}
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
      teams: []
    };

  const [platFormCash, setPlatFormCash] = useState(0)
  const [advanceOption, setAdvanceOption] = useState(false);
  const [battleState, setBattleState] = useState(battle);

  const updateWinningWithFreeEntry = (free: boolean)=>{
    if(!free){

      setPlatFormCash(0);
      setBattleState((data:any)=>({
        ...data,
        winning: {
          _1: 0,
          _2: 0,
          _3: 0
        }
      }));
      return;
    }
    const gameMode = battleState.settings.gameMode;
    if(gameMode==="Clash Squad"){
      setPlatFormCash(-60);
      setBattleState((data:any)=>({
        ...data,
        winning: {
          _1: 60,
          _2: 0,
          _3: 0
        }
      }));
    }else{

      setPlatFormCash(-190);

      setBattleState((data:any)=>({
        ...data,
        winning: {
          _1: 90,
          _2: 60,
          _3: 40
        }
      }))
    }
  }

  const calculateAndUpdateWinning = ({entry = battleState.entry}: {entry?:number})=>{
    const teamMode = battleState.settings.teamMode;
    const gameMode = battleState.settings.gameMode;
    // const entry = battleState.entry;
    const teamLength :any = {
      "Clash Squad": {Solo: 2, Duo: 2, Squad: 2},
      "Battle Royale": {Solo: 48, Duo: 24, Squad: 12}
    }[gameMode][teamMode];
    
    
    const platFromTax = {2: 0, 12: 21, 24: 27, 48: 33}[teamLength];
    const collectedCash = entry*teamLength;
    if(gameMode==="Clash Squad"){
      setBattleState((data:any)=>({
        ...data,
        winning: {
          _1: collectedCash,
          _2: 0,
          _3: 0
        }
      }));
      setPlatFormCash(0)
      return;
    };
    if(!platFromTax)return;
    const cashAfterPlatformTax = Math.round((collectedCash-(platFromTax*collectedCash/100))/5)*5;
    const platFormCash = collectedCash-cashAfterPlatformTax;
    const _1winning = Math.round((60*cashAfterPlatformTax/100)/5)*5;
    const _2winning = Math.round((60*(cashAfterPlatformTax-_1winning)/100)/5)*5;
    const _3winning = cashAfterPlatformTax - _1winning - _2winning;
    
    setPlatFormCash(platFormCash);

    setBattleState((data:any)=>({
      ...data,
      winning: {
        _1: _1winning,
        _2: _2winning,
        _3: _3winning
      }
    }))
  };

  const updateBattle = ()=>{
    setBattleState((e)=>({
      ...e,
      settings: {
        ...e.settings,
        gameMode: "Battle Royale"
      }
    }))
  }

  const updateBattleSetting = ({key, value}: {key: string, value: any})=>{
    setBattleState((e)=>({
      ...e,
      settings: {
        ...e.settings,
        [key]: value
      }
    }));
  };

  const updateBattleSingleLevel = ({key, value}: {key: string, value: string | number | any})=>{
    setBattleState((data: any)=>({
      ...data, 
      [key]: value
    }))
  }
  return (
    <div>
      <div>
        Free Battle: &nbsp;&nbsp;
        <input onChange={()=>{updateWinningWithFreeEntry(false)}} type="radio" name="freeBattle" defaultChecked /> No &nbsp;
        <input onChange={()=>{updateWinningWithFreeEntry(true)}} type="radio" name="freeBattle" /> Yes
      </div>
      <div className={styles.page}>
        <div>
          {/* <Mobile /> */}
        </div>
        <div style={{width: "100%", height: "100%", overflow: "auto", marginLeft: 20}}>
          <div className={styles.lightEditor}>
            <BattleCard battle={battleState} style={{minWidth: "400px"}} />
            <div className={styles.section2}>
              <LightEditor setBattleState={setBattleState} platformCash={platFormCash} winning={battleState.winning} calculateAndUpdateWinning={calculateAndUpdateWinning} updateBattleSetting={updateBattleSetting} updateBattleSingleLevel={updateBattleSingleLevel} />
            </div>
          </div>
          <div style={{width: "100%"}} className={styles.grandEditor}>
              <GrandEditor auth={auth} apikey={apikey} createBattle={createBattle} updateBattleSetting={updateBattleSetting} battleState={battleState} advanceOption={advanceOption} setAdvanceOption={setAdvanceOption} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create