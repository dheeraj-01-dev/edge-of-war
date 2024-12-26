'use client'
import React from 'react'
import styles from './styles/positions.module.css'

interface positions {
  teams: battleType["teams"]
};

const Positions :React.FC<positions> = ({ teams }) => {
  const positionArray :string[][] = [];

  const duplicateTeams = Array.from(teams)

  const handleOnChage = (index: number, team: string[])=>{
    positionArray[index] = team;
    
    const teamIndex = duplicateTeams.indexOf(team);

    // If the element is found (index is not -1), remove it
    if (teamIndex !== -1) {
        duplicateTeams.splice(teamIndex, 1);  // Removes 1 element at the found index
    }else{
      duplicateTeams.push(team)
    };

  }

  const onPublish =  ()=>{
    console.log(positionArray)
    console.log(duplicateTeams)
  }
  return (
    <div className={styles.container}>
        <div className={styles.header}>Publish Positions</div>
        <div className={styles.slotsContainer}>
            {
              teams.map((team, index)=>{

                const teamStr = team.map((item, index) => `${index + 1}. ${item}`).join('\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0');
                return(
                  <div className={styles.teamSlot} key={index}>
                    <div className={styles.label}>Position {index+1}</div>
                    <div>
                      <select onChange={(e)=>{handleOnChage(index, e.target.value.split(","))}} className={styles.select} name={`slot${index+1}`}>
                        <option value={[]}>--Position {index+1}--</option>
                        {
                          teams.map((team)=>{
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