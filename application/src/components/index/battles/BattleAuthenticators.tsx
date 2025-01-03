"use client"
import Image from 'next/image'
import React from 'react'
import styles from './styles/battleAuthenticator.module.css'
import toast from '@/scripts/toast'

interface battleAuthenticators {
    isJoined: boolean,
    auth?: {
        roomId: string,
        roomPass: string
    },
    myEntity: string[][],
    battle: battleType,
    userName: string | undefined
};



const BattleAuthenticators :React.FC<battleAuthenticators> = ({isJoined, auth, myEntity, battle, userName}) => {
    function copyTextToClipboard({label, text}: {label: string, text?: string}) {
        // const text = "Hello, this is the text to copy!";
        if(!text){
          return
        }
        
        navigator.clipboard.writeText(text).then(function() {
          toast(label+' successfully copied');
        }).catch(function() {
          toast('Unable to copy text to clipboard');
        });
      };


      const yourEntryPosition = battle.teamswithUserName
      .map((team, index) =>
        team
          .map((member, memberIndex) => (member === userName ? [index, memberIndex] : undefined))
          .filter((value) => value !== undefined)[0]
      )
      .find((position) => position !== undefined);
  
      // Get the position based on teams
      const yourPosition = yourEntryPosition
        ? battle.positions.findIndex((team) => team?.includes(battle.teams[yourEntryPosition[0]][yourEntryPosition[1]]))+1
        : -1;



    return (
    <div>
        {isJoined && (
          <div>
            <div className={styles["room-auth"]}>
              <div className={styles["room-id"]}>
                Room id:{" "}
                <span onMouseEnter={()=>{copyTextToClipboard({label: "roomId", text: auth?.roomId})}} onClick={()=>{copyTextToClipboard({label: "roomId", text: auth?.roomId})}}>
                  {auth?.roomId?auth.roomId:"__________"}{" "}
                  <Image
                    width={15}
                    height={15}
                    src="/icons/copy.png"
                    alt="copy"
                  />
                </span>
              </div>
              <div className={styles["room-pass"]}>
                {" "}
                Room pass:{" "}
                <span onMouseEnter={()=>{copyTextToClipboard({label: "roomPass", text: auth?.roomPass})}} onClick={()=>{copyTextToClipboard({label: "roomPass", text: auth?.roomPass})}}>
                {auth?.roomPass?auth.roomPass:"__________"}{" "}
                  <Image
                    width={15}
                    height={15}
                    src="/icons/copy.png"
                    alt="copy"
                  />
                </span>{" "}
              </div>
            </div>
            <div className={styles.myEntity}>
              <div className={styles.myEntityTemplate}>
                <div style={{opacity: 0.7}}>Your Stats</div>
                <div style={{color: "yellow", marginRight: 20, opacity: 1}}>
                  {
                    battle.status==="completed"?`${yourPosition===1?"1st":yourPosition===2?"2nd":yourPosition===3?"3rd":`${yourPosition}th`} position`:`slot no. ${yourEntryPosition&&yourEntryPosition[0]+1}`
                  }
                </div>
              </div>
              <div style={{ paddingLeft: 10 }}>
                {myEntity[0].map((member: string, index: number) => {
                  return (
                    <div key={index} style={{ margin: 5 }}>
                      {index + 1}. {member}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default BattleAuthenticators