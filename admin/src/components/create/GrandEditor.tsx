import React from "react";
import styles from "./styles/grandEditor.module.css";
import toast from "@/scripts/toast";

const clashSquadPrimaryEditorArray = [
  {
    label: "Preset Mode",
    options: [ "Random Store", "Competitive Store", "Crazy Store", "hardcode Mode", "Cs Elite", "Custom Preset" ]
  },
  {
    label: "Rounds",
    options: [ 7, 13, 11, 5 ]
  },
  {
    label: "Default Coin",
    options: [ 500, 1500, 9950 ]
  },
  {
    label: "Special Mode",
    options: [ "No", "Duo Active Skill" ]
  },
  {
    label: "Special Airdrop",
    options: [ "No", "Cyber Airdrop" ]
  },
  {
    label: "HP",
    options: [ 200, 500, 50, 1 ]
  },
  {
    label: "EP",
    options: [ 0, 50, 200 ]
  },
  {
    label: "Movement Speed",
    options: [ "100%", "50%" ]
  },
  {
    label: "Jump Height",
    options: [ "100%", "200%" ]
  },
];
const clashSquadSecondaryEditorArray = [
  {
    label: "Environment",
    defaultChecked: "Day",
    options: [ "Day", "Night" ]
  },
  {
    label: "Limited Ammo",
    defaultChecked: "limited",
    options: [ "limited", "un-limited" ]
  },
  {
    label: "Fall Damage",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Airdrop",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "High Tier Loot Zone",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Generic Enemy Outfit",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Hide Teammate Nickname",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Friendly Fire",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Precise Aim",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Character Skill",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Loadout",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Gun Attributes",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "In Match Quests",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Quit-Out penalty",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "HeadShot",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
];



const BattleRoyalePrimaryEditorArray = [
  {
    label: "Preset Mode",
    options: [ "Esports Mode", "Classic", "Grenade", "Melee", "Sniper", "Pistols", "Hardcode Mode", "MasterMind", "Custom Preset" ]
  },
  {
    label: "Revival",
    options: [ "Yes", "Revival Point Only", "Revival Card Only", "No" ]
  },
  {
    label: "HP",
    options: [ 200, 500, 50, 1 ]
  },
  {
    label: "EP",
    options: [ 0, 50, 200 ]
  },
  {
    label: "Movement Speed",
    options: [ "100%", "50%" ]
  },
  {
    label: "Jump Height",
    options: [ "100%", "200%" ]
  },
];
const BattleRoyaleSecondaryEditorArray = [
  {
    label: "Environment",
    defaultChecked: "Day",
    options: [ "Day", "Night" ]
  },
  {
    label: "Limited Ammo",
    defaultChecked: "limited",
    options: [ "limited", "un-limited" ]
  },
  {
    label: "Fall Damage",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Auto Revival",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Airdrop",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Zone Shrink Speed",
    defaultChecked: "Standard",
    options: [ "Fast", "Standard" ]
  },
  {
    label: "Vehicles",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Out Of Zone Damage",
    defaultChecked: "Standard",
    options: [ "High", "Standard" ]
  },
  {
    label: "High Tier Loot Zone",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "UAV",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Airstrik",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Airship",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Generic Enemy Outfit",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Hide Teammate Nickname",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Friendly Fire",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Precise Aim",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Character Skill",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Loadout",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "Gun Attributes",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "In-Game Missions",
    defaultChecked: "Yes",
    options: [ "Yes", "No" ]
  },
  {
    label: "In Match Quests",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Safe Zone Movin",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "Quit-Out penalty",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
  {
    label: "HeadShot",
    defaultChecked: "No",
    options: [ "Yes", "No" ]
  },
];

type grandEditor = {
  advanceOption: boolean,
  battleState: battleType;
  auth: string | undefined,
  apikey: string | undefined, 
  createBattle: (data: any, apikey: string | undefined, auth: string | undefined) => Promise<any>;
  updateBattleSetting: ({ key, value }: {
    key: string;
    value: any;
  }) => void;
  updateBattleAdvanceSetting: ({ key, value }: {
    key: string;
    value: any;
  }) => void;
  setAdvanceOption:  React.Dispatch<React.SetStateAction<boolean>>
}
const GrandEditor: React.FC<grandEditor> = ({createBattle, auth, apikey, advanceOption, setAdvanceOption, battleState, updateBattleSetting, updateBattleAdvanceSetting}) => {

  const hideFilm = (e: any)=>{
    if(e.target.value==="Yes"){
      setAdvanceOption(true)
    }else{
      setAdvanceOption(false)
    }
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const keyValuePairs: Record<string, any> = {};

    for (const [key, value] of data.entries()) {
      keyValuePairs[key] = value;
    }
    updateBattleSetting({ key: "advanceSetting", value: keyValuePairs });
    
  };

  const updateAdvanceSetting = (e: any)=>{
    e.preventDefault();
    updateBattleAdvanceSetting({key: e.target.name, value: e.target.value})
    
  };

  const handleCreate = async () => {
    console.log(battleState)
    // try {
    //   const response = await createBattle(battleState, apikey, auth);
    //   console.log(response)
    //   if(response.success){
    //     toast("created successfully")
    //   }else if(response.error){
    //     toast(response.error)
    //   }else{
    //     toast("something error, check the console")
    //     console.log(response)
    //   }
    // } catch (error) {
    //   toast("something error, check the console")
    //   console.log(error)
    // }
  }

  return (
    <div>
      <div style={{display: "flex", justifyContent: "space-between", marginBottom: 20, marginRight: 40}}>
        <div style={{marginLeft: 20, fontWeight: 700}}>Advance Options</div>
        <div>
            <label className={styles.label} style={{marginRight: 20}} htmlFor="Advance Setting">Advance Setting: </label>
            <input onChange={hideFilm} defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Advance Setting" />
            <label style={{marginRight: 20}} htmlFor="No">No</label>
            <input onChange={hideFilm} value="Yes" style={{marginRight: 5}} type="radio" name="Advance Setting" />
            <label htmlFor="Yes">Yes</label>
          </div>
      </div>

      <form onSubmit={handleSubmit}>
      <div style={{position: "relative"}}>
        {!advanceOption&&<div className={styles.disableFilm}></div>}
        <div className={styles.container}> 
          {
            battleState.settings.gameMode==="Clash Squad"?clashSquadPrimaryEditorArray.map((editor, index)=>{
              return(
                <div className={styles.singleEditor} key={index}>
                  <label className={styles.label} htmlFor={editor.label}>
                    {editor.label}:{" "}
                  </label>
                  <select className={styles.select} name={editor.label}>
                    {
                      editor.options.map((option, index)=>
                        <option value={option} key={index}>{option}</option>
                      )
                    }
                  </select>
                </div>
              )
            }):BattleRoyalePrimaryEditorArray.map((editor, index)=>{
              return(
                <div className={styles.singleEditor} key={index}>
                  <label className={styles.label} htmlFor={editor.label}>
                    {editor.label}:{" "}
                  </label>
                  <select className={styles.select} name={editor.label}>
                    {
                      editor.options.map((option, index)=>
                        <option value={option} key={index}>{option}</option>
                      )
                    }
                  </select>
                </div>
              )
            })
          }
        </div>
      </div>
      <div style={{position: "relative"}}>
        {!advanceOption&&<div className={styles.disableFilm}></div>}
        <div className={styles.container}>
            {
              battleState.settings.gameMode==="Clash Squad"?clashSquadSecondaryEditorArray.map((editor, index)=>{
                return (
                  <div key={index} className={styles.secondaryOption}>
                    <label className={styles.label} style={{marginRight: 20}} htmlFor={editor.label}>{editor.label}: </label>
                    {
                      editor.options.map((option, index1)=>{
                        return(
                          <div key={index1}>
                            <input defaultChecked={option===editor.defaultChecked} value={option} style={{marginRight: 5}} type="radio" name={editor.label} />
                            <label style={{marginRight: 20}} htmlFor={option}>{option}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              }):BattleRoyaleSecondaryEditorArray.map((editor, index)=>{
                return (
                  <div key={index} className={styles.secondaryOption}>
                    <label className={styles.label} style={{marginRight: 20}} htmlFor={editor.label}>{editor.label}: </label>
                    {
                      editor.options.map((option, index1)=>{
                        return(
                          <div key={index1}>
                            <input defaultChecked={option===editor.defaultChecked} value={option} style={{marginRight: 5}} type="radio" name={editor.label} />
                            <label style={{marginRight: 20}} htmlFor={option}>{option}</label>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
        </div>
      </div>

      <div style={{display: "flex", justifyContent: "flex-end", marginTop: 20}}>
        <button className={styles.button} type="reset">Reset</button>
        <button className={styles.button} type="submit">Submit</button>
        <button type="button" className={styles.button} onClick={handleCreate}>Create</button>
      </div>
      </form>
    </div>
  );
};

export default GrandEditor;



