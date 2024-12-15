import React from 'react'
import styles from './styles/lightEditor.module.css'

const monthArray = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]


type lightEditor = {
    platformCash: number;
    winning: { _1: number, _2: number, _3: number};
    setBattleState: React.Dispatch<React.SetStateAction<battleType>>
    calculateAndUpdateWinning: ({entry}: {entry?: number})=>void;
    updateBattleSingleLevel: ({key, value}: {key: string, value: string})=>void,
    updateBattleSetting: ({key, value}: {key: string, value: string | any})=> void
}

const LightEditor :React.FC<lightEditor> = ({platformCash, setBattleState, updateBattleSetting, updateBattleSingleLevel, calculateAndUpdateWinning, winning}) => {

    const update = (e: any)=>{
        updateBattleSetting({key: e.target.name, value: e.target.value});
        if(e.target.name==="teamMode"){
            updateBattleSetting({key: "slots", value: e.target.value==="Solo"?48:e.target.value==="Duo"?24:12})
        }
    };
    const updateEntry = (e: any)=>{
        calculateAndUpdateWinning({entry: e.target.value})
        updateBattleSingleLevel({key: "entry", value: e.target.value})
    };



    const getdate = (e :any)=>{
        const date = new Date(e.target.value);
        const dateStr = `${date.getDate().toString().length===1?0:""}${date.getDate()} ${monthArray[date.getMonth()]}, ${date.getFullYear()} | ${date.getHours().toString().length===1?0:""}${date.getHours()}:${date.getMinutes().toString().length===1?0:""}${date.getMinutes()} `
        console.log(dateStr)
        const expire = {
            id: +date,
            dateStr
        };
        setBattleState((data: any)=>({
            ...data,
            expire
        }));
        
    }


  return (
    <div className={styles.container}>
        <div>
            <div>
                <label className={styles.label} htmlFor="roomName">Room Name: </label>
                <input spellCheck={false} autoComplete='none' type="text" name="roomName" className={styles.input} />
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="gameMode">Game Mode: </label>
                <select onChange={update} className={styles.select} name="gameMode">
                    <option value="Battle Royale">Battle Royale</option>
                    <option value="Clash Squad">Clash Squad</option>
                </select>
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="teamMode">Team Mode: </label>
                <select onChange={update} className={styles.select} name="teamMode">
                    <option value="Solo">Solo</option>
                    <option value="Duo">Duo</option>
                    <option value="Squad">Squad</option>
                </select>
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="_1">_1: </label>
                <input value={winning._1} type="number" name="_1" className={styles.input} readOnly />
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="_2">_2: </label>
                <input value={winning._2} type="number" name="_2" className={styles.input} readOnly />
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="_3">_3: </label>
                <input value={winning._3} type="number" name="_3" className={styles.input} readOnly />
            </div>
        </div>
        <div>
            <div>
                <label className={styles.label} htmlFor="roomPass">Room Pass: </label>
                <input spellCheck={false} autoComplete='none' type="text" name="roomPassword" className={styles.input} />
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="map">Map: </label>
                <select onChange={update} className={styles.select} name="map">
                    <option value="BERMUDA">BERMUDA</option>
                    <option value="PURGATORY">PURGATORY</option>
                    <option value="KALAHARI">KALAHARI</option>
                    <option value="ALPINE">ALPINE</option>
                    <option value="NEXTERA">NEXTERA</option>
                    <option value="BERMUDA REMASTER">BERMUDA REMASTER</option>
                </select>
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="minimumLevel">Minimum Level: </label>
                <select onChange={update} className={styles.select} name="minimumLevel">
                    <option value="30">30</option>
                    <option value="40">40</option>
                    <option value="50">50</option>
                    <option value="60">60</option>
                </select>
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="battleTime">Battle Time: </label>
                <input onChange={getdate} type="datetime-local" name="battleTime" />
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="entry">Entry: </label>
                <input onChange={updateEntry} type="number" name="entry" className={styles.input} />
            </div>
            <div style={{marginTop: 10}}>
                <label className={styles.label} htmlFor="platformCash">platform Cash: </label>
                <input value={platformCash} type="number" name="platformCash" className={styles.input} readOnly />
            </div>
        </div>
    </div>
  )
}

export default LightEditor