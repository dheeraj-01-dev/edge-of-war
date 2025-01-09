import React, { useState } from "react";
import styles from "./styles/lightEditor.module.css";

const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const clashSquadEditorArray = [
  {
    label: "Game Mode",
    name: "gameMode",
    options: ["Battle Royale", "Clash Squad"],
  },
  {
    label: "Map",
    name: "map",
    options: [
      "BERMUDA",
      "KALAHARI",
      "PURGATORY",
      "NEXTERA",
      "ALPINE",
      "BERMUDA REMASTERED",
    ],
  },
  {
    label: "Team Mode",
    name: "teamMode",
    options: ["Solo", "Duo", "Squad"],
  },
  {
    label: "Players",
    name: "players",
    options: [8],
  },
  {
    label: "Spectators",
    name: "spectators",
    options: [30, 16, 8, 6, 4, 2, 1],
  },
  {
    label: "Minimum Level",
    name: "minimumLevel",
    options: [40, 20, 10, 0],
  },
];
const battleRoyaleEditorArray = [
  {
    label: "Game Mode",
    name: "gameMode",
    options: ["Battle Royale", "Clash Squad"],
  },
  {
    label: "Map",
    nameL: "map",
    options: [
      "BERMUDA",
      "KALAHARI",
      "PURGATORY",
      "NEXTERA",
      "ALPINE",
      "BERMUDA REMASTERED",
    ],
  },
  {
    label: "Team Mode",
    name: "teamMode",
    options: ["Solo", "Duo", "Squad"],
  },
  {
    label: "Players",
    name: "players",
    options: [48, 32, 20],
  },
  {
    label: "Spectators",
    name: "spectators",
    options: [30, 16, 8, 6, 4, 2, 1],
  },
  {
    label: "Minimum Level",
    name: "minimumLevel",
    options: [40, 20, 10, 0],
  },
];

type lightEditor = {
  platformCash: number;
  battleState: battleType;
  winning: { _1: number; _2: number; _3: number };
  setBattleState: React.Dispatch<React.SetStateAction<battleType>>;
  updateWinningWithFreeEntry: (free: boolean)=>void;
  calculateAndUpdateWinning: ({ entry }: { entry?: number }) => void;
  updateBattleSingleLevel: ({
    key,
    value,
  }: {
    key: string;
    value: string;
  }) => void;
  updateBattleSetting: ({
    key,
    value,
  }: {
    key: string;
    value: string | any;
  }) => void;
};

const LightEditor: React.FC<lightEditor> = ({
  battleState,
  platformCash,
  setBattleState,
  updateBattleSetting,
  updateBattleSingleLevel,
  calculateAndUpdateWinning,
  updateWinningWithFreeEntry,
  winning,
}) => {



  const globalEditorArray = [
    {
      label: "Free Entry",
      name: "freeEntry",
      options: ["No", "Yes" ],
      handleClick: (e: React.ChangeEvent<HTMLSelectElement>)=>{
        updateWinningWithFreeEntry(e.target.value==="Yes")
      }
    },
    {
      label: "Battle Mode",
      name: "mode",
      options: ["survival", "scoring" ],
      handleClick: (e: React.ChangeEvent<HTMLSelectElement>)=>{
        updateBattleSingleLevel({key: "mode", value: e.target.value})
      }
    },
  ]

    // const [entry, setEntry] = useState("")
  const update = (e: any) => {
    updateBattleSetting({ key: e.target.name, value: e.target.value });
    if (e.target.name === "gameMode") {
      updateBattleSetting({
        key: "slots",
        value:
          e.target.value === "Clash Squad"
            ? 2
            : battleState.settings.teamMode === "Solo"
            ? 48
            : battleState.settings.teamMode === "Duo"
            ? 24
            : 12,
      });
    }
    if (e.target.name === "teamMode") {
      updateBattleSetting({
        key: "slots",
        value:
          battleState.settings.gameMode === "Clash Squad"
            ? 2
            : e.target.value === "Solo"
            ? 48
            : e.target.value === "Duo"
            ? 24
            : 12,
      });
    }
  };
  const updateEntry = (e: any) => {
    calculateAndUpdateWinning({ entry: e.target.value });
    updateBattleSingleLevel({ key: "entry", value: e.target.value });
  };

  const getdate = (e: any) => {
    const date = new Date(e.target.value);
    const dateStr = `${
      date.getDate().toString().length === 1 ? 0 : ""
    }${date.getDate()} ${
      monthArray[date.getMonth()]
    }, ${date.getFullYear()} | ${
      date.getHours().toString().length === 1 ? 0 : ""
    }${date.getHours()}:${
      date.getMinutes().toString().length === 1 ? 0 : ""
    }${date.getMinutes()} `;

    const expire = {
      id: +date,
      dateStr,
    };
    setBattleState((data: any) => ({
      ...data,
      expire,
    }));
  };

  return (<>
    <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gridGap: 40, alignItems: "center", padding: "0 15px"}}>
        {
          globalEditorArray.map((editor, index)=>{
            return(
              <div key={index} className={styles.singleOption}>
                <label className={styles.label} htmlFor={editor.name}>
                  {editor.label}:{" "}
                </label>
                <select
                  onChange={editor.handleClick}
                  className={styles.select}
                  name={editor.name}
                >
                  {editor.options.map((option, index1) => {
                    return (
                      <option key={index1} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            )
          })
        }
    </div>

    <div className={styles.editorContainer}>
      {battleState.settings.gameMode === "Clash Squad"
        ? clashSquadEditorArray.map((editor, index) => {
            return (
              <div key={index} className={styles.singleOption}>
                <label className={styles.label} htmlFor={editor.name}>
                  {editor.label}:{" "}
                </label>
                <select
                  onChange={update}
                  className={styles.select}
                  name={editor.name}
                >
                  {editor.options.map((option, index1) => {
                    return (
                      <option key={index1} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })
        : battleRoyaleEditorArray.map((editor, index) => {
            return (
              <div key={index} className={styles.singleOption}>
                <label className={styles.label} htmlFor={editor.name}>
                  {editor.label}:{" "}
                </label>
                <select
                  onChange={update}
                  className={styles.select}
                  name={editor.name}
                >
                  {editor.options.map((option, index1) => {
                    return (
                      <option key={index1} value={option}>
                        {option}
                      </option>
                    );
                  })}
                </select>
              </div>
            );
          })}

      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div key={index} className={styles.singleOption}>
            <label className={styles.label} htmlFor={`_${index + 1}`}>
              {`_${index + 1}`}:{" "}
            </label>
            {
                <input
                readOnly
                // @ts-expect-error indexing error
                value={battleState.winning[`_${index + 1}`]}
                className={styles.input}
                type="text"
                placeholder={`_${index + 1}`}
              />
            }
          </div>
        );
      })}
        <div style={{marginTop: 10}} className={styles.singleOption}>
          <label className={styles.label} htmlFor="battleTime">Battle Time: </label>
          <input onChange={getdate} type="datetime-local" name="battleTime" />
        </div>

      <div style={{marginTop: 10}} className={styles.singleOption}>
          <label className={styles.label} htmlFor="entry">entry: </label>
          <input onChange={updateEntry} type="number" name="entry" className={styles.input} />
      </div>
      
      <div style={{marginTop: 10}} className={styles.singleOption}>
          <label className={styles.label} htmlFor="platformCash">platform Cash: </label>
          <input value={platformCash} type="number" name="platformCash" className={styles.input} readOnly />
      </div>

    </div>
    </>);

  //   return (
  //     <div className={styles.container}>
  //         <div>
  //             <div>
  //                 <label className={styles.label} htmlFor="roomName">Room Name: </label>
  //                 <input spellCheck={false} autoComplete='none' type="text" name="roomName" className={styles.input} />
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="gameMode">Game Mode: </label>
  //                 <select onChange={update} className={styles.select} name="gameMode">
  //                     <option value="Battle Royale">Battle Royale</option>
  //                     <option value="Clash Squad">Clash Squad</option>
  //                 </select>
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="teamMode">Team Mode: </label>
  //                 <select onChange={update} className={styles.select} name="teamMode">
  //                     <option value="Solo">Solo</option>
  //                     <option value="Duo">Duo</option>
  //                     <option value="Squad">Squad</option>
  //                 </select>
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="_1">_1: </label>
  //                 <input value={winning._1} type="number" name="_1" className={styles.input} readOnly />
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="_2">_2: </label>
  //                 <input value={winning._2} type="number" name="_2" className={styles.input} readOnly />
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="_3">_3: </label>
  //                 <input value={winning._3} type="number" name="_3" className={styles.input} readOnly />
  //             </div>
  //         </div>
  //         <div>
  //             <div>
  //                 <label className={styles.label} htmlFor="roomPass">Room Pass: </label>
  //                 <input spellCheck={false} autoComplete='none' type="text" name="roomPassword" className={styles.input} />
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="map">Map: </label>
  //                 <select onChange={update} className={styles.select} name="map">
  //                     <option value="BERMUDA">BERMUDA</option>
  //                     <option value="PURGATORY">PURGATORY</option>
  //                     <option value="KALAHARI">KALAHARI</option>
  //                     <option value="ALPINE">ALPINE</option>
  //                     <option value="NEXTERA">NEXTERA</option>
  //                     <option value="BERMUDA REMASTER">BERMUDA REMASTER</option>
  //                 </select>
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="ammo">ammo: </label>
  //                 <select onChange={update} className={styles.select} name="ammo">
  //                     <option value="limited">limited</option>
  //                     <option value="un-limited">un-limited</option>
  //                 </select>
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="battleTime">Battle Time: </label>
  //                 <input onChange={getdate} type="datetime-local" name="battleTime" />
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="entry">Entry: </label>
  //                 <input onChange={updateEntry} type="number" name="entry" className={styles.input} />
  //             </div>
  //             <div style={{marginTop: 10}}>
  //                 <label className={styles.label} htmlFor="platformCash">platform Cash: </label>
  //                 <input value={platformCash} type="number" name="platformCash" className={styles.input} readOnly />
  //             </div>
  //         </div>
  //     </div>
  //   )
};

export default LightEditor;
