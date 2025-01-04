import React from "react";
import styles from "./styles/grandEditor.module.css";
import toast from "@/scripts/toast";

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
  setAdvanceOption:  React.Dispatch<React.SetStateAction<boolean>>
}
const GrandEditor: React.FC<grandEditor> = ({createBattle, auth, apikey, advanceOption, setAdvanceOption, battleState, updateBattleSetting}) => {

  const hideFilm = (e: any)=>{
    if(e.target.value==="Yes"){
      setAdvanceOption(true)
    }else{
      setAdvanceOption(false)
    }
  };

  const handleSubmit = (e: any)=>{
    e.preventDefault();
    const data = new FormData(e.target);

    const keyValuePairs :any = {};

    for (const [key, value] of data.entries()) {
      keyValuePairs[key] = value; 
    }
    updateBattleSetting({key: "advanceOption", value: keyValuePairs})
  };

  const handleCreate = async () => {
    try {
      const response = await createBattle(battleState, apikey, auth);
      if(response.data){
        toast(response.data)
      }else if(response.error){
        toast(response.error)
      }else{
        toast("something error, check the console")
        console.log(response)
      }
    } catch (error) {
      toast("something error, check the console")
      console.log(error)
    }
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
          <div>
            <div style={{ marginTop: 10 }}>
              <label className={styles.label} htmlFor="presetMode">
                Preset Mode:{" "}
              </label>
              <select className={styles.select} name="presetMode">
                <option value="Classic">Classic</option>
                <option value="Grenade">Grenade</option>
                <option value="Melee">Melee</option>
                <option value="Sniper">Sniper</option>
                <option value="Pistols">Pistols</option>
                <option value="Hardcore Mode">Hardcore Mode</option>
                <option value="Esports Mode">Esports Mode</option>
                <option value="Master Mind">Master Mind</option>
                <option value="Custom Preset">Custom Preset</option>
              </select>
            </div>
            <div style={{ marginTop: 10 }}>
              <label className={styles.label} htmlFor="EP">
                EP:{" "}
              </label>
              <select className={styles.select} name="EP">
                <option value="0">0</option>
                <option value="50">50</option>
                <option value="200">200</option>
              </select>
            </div>
          </div>
          <div>
            <div style={{ marginTop: 10 }}>
              <label className={styles.label} htmlFor="revival">
                Revival:{" "}
              </label>
              <select className={styles.select} name="revival">
                <option value="yes">yes</option>
                <option value="Revival Point Only">Revival Point Only</option>
                <option value="Revival Card Only">Revival Card Only</option>
                <option value="No">No</option>
              </select>
            </div>
            <div style={{ marginTop: 10 }}>
              <label className={styles.label} htmlFor="Movement Speed">
                Movement Speed:{" "}
              </label>
              <select className={styles.select} name="Movement Speed">
                <option value="100%">100%</option>
                <option value="50%">50%</option>
                <option value="125%">125%</option>
                <option value="200%">200%</option>
              </select>
            </div>
          </div>
          <div>
            <div style={{ marginTop: 10 }}>
              <label className={styles.label} htmlFor="HP">
                HP:{" "}
              </label>
              <select className={styles.select} name="HP">
                <option value="200">200</option>
                <option value="500">500</option>
                <option value="50">50</option>
                <option value="1">1</option>
              </select>
            </div>
            <div style={{ marginTop: 10 }}>
              <label className={styles.label} htmlFor="Jump Height">
                Jump Height:{" "}
              </label>
              <select className={styles.select} name="Jump Height">
                <option value="100%">100%</option>
                <option value="200%">200%</option>
                <option value="400%">400%</option>
              </select>
            </div>
          </div>
        </div>
        <div style={{marginTop: 20, borderTop: "2px solid var(--bg-1)", padding: 20}} className={styles.container}>
          <div>
            <div>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Environment">Environment: </label>
              <input defaultChecked value="Day" style={{marginRight: 5}} type="radio" name="Environment" />
              <label style={{marginRight: 20}} htmlFor="Day">Day</label>
              <input value="Night" style={{marginRight: 5}} type="radio" name="Environment" />
              <label htmlFor="Night">Night</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Auto Revival">Auto Revival: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="Auto Revival" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Auto Revival" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Vehicles">Vehicles: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Vehicles" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Vehicles" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="UAV">UAV: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="UAV" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="UAV" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Generic Enemy Outfit">Generic Enemy Outfit: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Generic Enemy Outfit" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Generic Enemy Outfit" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Precise Aim">Precise Aim: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Precise Aim" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Precise Aim" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Gun Attributes">Gun Attributes: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="Gun Attributes" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Gun Attributes" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Safe Zone Movin">Safe Zone Movin: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="Safe Zone Movin" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Safe Zone Movin" />
              <label htmlFor="No">No</label>
            </div>
          </div>
          <div>
            <div>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Limited Ammo">Limited Ammo: </label>
              <input defaultChecked value="limited" style={{marginRight: 5}} type="radio" name="Limited Ammo" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="un-limited" style={{marginRight: 5}} type="radio" name="Limited Ammo" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Airdrop">Airdrop: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Airdrop" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Airdrop" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Out-Of-Zone Damage">Out-Of-Zone Damage: </label>
              <input value="High" style={{marginRight: 5}} type="radio" name="Out-Of-Zone Damage" />
              <label style={{marginRight: 20}} htmlFor="High">High</label>
              <input defaultChecked value="Standard" style={{marginRight: 5}} type="radio" name="Out-Of-Zone Damage" />
              <label htmlFor="Standard">Standard</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Airstrike">Airstrike: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Airstrike" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Airstrike" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Hide TeamMate Nickname">Hide TeamMate Nickname: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="Hide TeamMate Nickname" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Hide TeamMate Nickname" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Character Skill">Character Skill: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Character Skill" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Character Skill" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="In-Game Mission">In-Game Mission: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="In-Game Mission" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="In-Game Mission" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Quit-Out Penalty">Quit-Out Penalty: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Quit-Out Penalty" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Quit-Out Penalty" />
              <label htmlFor="No">No</label>
            </div>
          </div>
          <div>
            <div>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Fall Damage">Fall Damage: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Fall Damage" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Fall Damage" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Zone Shrink Speed">Zone Shrink Speed: </label>
              <input value="Fast" style={{marginRight: 5}} type="radio" name="Zone Shrink Speed" />
              <label style={{marginRight: 20}} htmlFor="Fast">Fast</label>
              <input defaultChecked value="Standard" style={{marginRight: 5}} type="radio" name="Zone Shrink Speed" />
              <label htmlFor="Standard">Standard</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="High Tier Loot Zone">High Tier Loot Zone: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="High Tier Loot Zone" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="High Tier Loot Zone" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Airship">Airship: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="Airship" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="Airship" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Friendly Fire">Friendly Fire: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="Friendly Fire" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Friendly Fire" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="LoadOut">LoadOut: </label>
              <input defaultChecked value="Yes" style={{marginRight: 5}} type="radio" name="LoadOut" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input value="No" style={{marginRight: 5}} type="radio" name="LoadOut" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="In-Match Quests">In-Match Quests: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="In-Match Quests" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="In-Match Quests" />
              <label htmlFor="No">No</label>
            </div>
            <div style={{marginTop: 10}}>
              <label className={styles.label} style={{marginRight: 20}} htmlFor="Only Headshot">Only Headshot: </label>
              <input value="Yes" style={{marginRight: 5}} type="radio" name="Only Headshot" />
              <label style={{marginRight: 20}} htmlFor="Yes">Yes</label>
              <input defaultChecked value="No" style={{marginRight: 5}} type="radio" name="Only Headshot" />
              <label htmlFor="No">No</label>
            </div>
          </div>
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
