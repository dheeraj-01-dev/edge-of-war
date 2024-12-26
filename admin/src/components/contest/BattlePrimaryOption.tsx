"use client"
import React, { useState } from 'react'
import styles from './styles/battlePrimaryOption.module.css'
import toast from '@/scripts/toast';

interface battlePrimaryOption {
    battle: battleType;
    handleHost: ({ roomId, roomPass, battle }: {
      roomId: string | number | undefined;
      roomPass: string | number | undefined;
      battle: string | undefined;
  }) => Promise<responseType<string>>;
};


const BattlePrimaryOption :React.FC<battlePrimaryOption> = ({ battle, handleHost }) => {
    const settingArr = Object.keys(battle.settings);
    settingArr.pop();


      const [rday, setRday] = useState("")
      const [rhr, setRhr] = useState("")
      const [rmi, setRmi] = useState("")
      const [rsec, setRsec] = useState("")

      const [roomId, setRoomId] = useState<string|number|undefined>(battle.auth?battle.auth.roomId:"")
      const [roomPass, setRoomPass] = useState<string|undefined>(battle.auth?battle.auth.roomPass:"")
    
      function getTimeDifference(date1 :number, date2 :number) {
        const diffInMs = date2 - date1;
    
        if (diffInMs <= 0) {
          return { days: "00", hours: "00", minutes: "00", seconds: "00" };
        }
    
        const days = String(Math.floor(diffInMs / (1000 * 60 * 60 * 24))).padStart(2, '0');
        const hours = String(Math.floor((diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        const minutes = String(Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        const seconds = String(Math.floor((diffInMs % (1000 * 60)) / 1000)).padStart(2, '0');
    
        return { days, hours, minutes, seconds };
      }
    
      setTimeout(() => {
        const currentTime = +new Date();
        const { hours, minutes, seconds, days } = getTimeDifference(currentTime, battle.expire.id);
        setRday(days);
        setRhr(hours);
        setRmi(minutes);
        setRsec(seconds)
      }, 1000);
    

      const handleHostClick = async()=>{
        const res = await handleHost({battle: battle._id, roomId, roomPass})
        if(res.success){
          toast(res.data)
        }else if(res.error){
          toast(res.error)
        }
      }
      
  return (
    <div style={{width: "100%", border: "2px solid var(--bg-1)", borderRadius: 20, marginLeft: 20}}>
      <div className={styles.fieldContainer}>
        <div className={styles.field} style={{display: 'flex'}}>
          <div style={{display: "flex"}}>
            <label style={{width: 100}}>Room ID: </label>
            <input value={roomId} onChange={(e)=>{setRoomId(e.target.value)}} spellCheck={false} autoComplete='none' className={styles.input} type="text" />
          </div>
        </div>
        <div className={styles.field} style={{display: 'flex'}}>
          <div style={{display: "flex"}}>
            <label style={{width: 100}}>Room Pass: </label>
            <input value={roomPass} onChange={(e)=>{setRoomPass(e.target.value)}} spellCheck={false} autoComplete='none' className={styles.input} type="text" />
          </div>
        </div>
        <div className={styles.field} style={{display: 'flex'}}>
          <div style={{display: "flex"}}>
            <label className={styles.label}>Time Remains: </label>
            <div style={{width: "150px"}}>
              {
                +rday!==0?<div style={{color: "yellow"}}>
                  {+rday} {+rday===1?"day":"days"} left
                </div>:
                battle.status==="live"?
                <div style={{color: "yellow"}}>
                  <div style={{background: "yellow", height: 10, width: 10, borderRadius: "100px", display: "inline-block"}}></div>
                  &nbsp;Live
                </div>:
                <div style={{color: "yellow"}}>
                  {`${rhr}:${rmi}:${rsec}`}
                </div>
              }
            </div>
          </div>
        </div>
        {
          settingArr.map((value)=>{
            return(
              <div className={styles.field} style={{display: 'flex'}} key={value}>
                <div style={{display: "flex"}}>
                  <label className={styles.label}>{value}: </label>
                  {
                    // @ts-ignore
                    <div className={styles.value}>{battle.settings[value]}</div>
                  }
                </div>
              </div>
            )
          })
        }

        <div className={styles.field} style={{display: 'flex'}}>
          <div style={{display: "flex"}}>
            <button className={styles.button} onClick={handleHostClick}>Host</button>
            <button className={styles.button} onClick={handleHostClick}>Host</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BattlePrimaryOption