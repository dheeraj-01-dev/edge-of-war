'use client'
import React from 'react'
import styles from './styles/positions.module.css'
import { publishPositions } from '@/api/admin/battle'
import toast from '@/scripts/toast'

interface positions {
  teams: battleType["teams"],
  battle: string | undefined,
  positions: battleType["positions"]
};

const Positions :React.FC<positions> = ({ teams, battle, positions }) => {
  const positionArray :string[][] = [];

  const duplicateTeams = Array.from(teams)

  const handleOnChage = (index: number, team: string[])=>{
    positionArray[index] = team;
    
    const teamIndex = duplicateTeams.indexOf(team);

    // If the element is found (index is not -1), remove it
    // if (teamIndex !== -1) {
    //     duplicateTeams.splice(teamIndex, 1);  // Removes 1 element at the found index
    // }else{
    //   duplicateTeams.push(team)
    // };

  }

  const onPublish = async ()=>{
    
    try {
      const response = await publishPositions({
        apikey: "123@edgeofwaresports.com",
        authorization: "#*${dheeraj.eow.dev}*:)",
        battle,
        positions: positionArray
      });
      if(response.success){
        toast("published successfully")
      }else{
        toast("something went wrong, check the console")
        console.log(response)
      }
      
    } catch (error) {
      toast("some error occur, check the console")
      console.log(error)
    }
  };
  return (
    <div className={styles.container}>
        <div className={styles.header}>Publish Positions</div>
        <div className={styles.slotsContainer}>           
          {
              positions&&positions.map((team, index)=>{
                const teamStr = team?team.map((item, index) => `${index + 1}. ${item}`).join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0'):"null";

                return(
                  <div className={styles.teamSlot} key={index}>
                    <div className={styles.label}>Position {index+1}</div>
                    <div>
                      <select onChange={(e)=>{handleOnChage(index, e.target.value.split(","))}} className={styles.select} name={`slot${index+1}`}>
                        <option value={team}>{teamStr}</option>
                        {/* {
                          teams.map((team)=>{
                            const teamStr = team.map((item, index) => `${index + 1}. ${item}`).join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
                            return(
                              <option key={team[0]} style={{whiteSpace: "pre-line"}} value={team}>{teamStr}</option>
                            )
                          })
                        } */}
                      </select>
                    </div>
                  </div>
                )
              })
            }
            {
              !positions&&teams.map((team, index)=>{

                return(
                  <div className={styles.teamSlot} key={index}>
                    <div className={styles.label}>Position {index+1}</div>
                    <div>
                      <select onChange={(e)=>{handleOnChage(index, e.target.value.split(","))}} className={styles.select} name={`slot${index+1}`}>
                        <option value={[]}>--Position {index+1}--</option>
                        {
                          teams.map((team)=>{
                            const teamStr = team.map((item, index) => `${index + 1}. ${item}`).join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
                            return(
                              <option key={team[0]} style={{whiteSpace: "pre-line"}} value={team}>{teamStr}</option>
                            )
                          })
                        }
                      </select>
                    </div>
                  </div>
                )
              })
            }
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={onPublish} className={styles.button}>Publish</button>
        </div>
        
    </div>
  )
}

export default Positions