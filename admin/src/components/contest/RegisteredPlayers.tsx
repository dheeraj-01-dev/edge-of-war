import React from 'react'
import styles from './styles/registeredPlayers.module.css'

interface registeredPlayers {
    teams: battleType["teams"],
    slots: string | number
};

const RegisteredPlayers :React.FC<registeredPlayers> = ({ teams, slots }) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Registered Teams &nbsp;<span style={{color: "yellow"}}>[{teams.length}/{slots}]</span></div>
      <div className={styles.players}>
        {
          teams.map((team, index)=>{
            return(
              <div className={styles.team} key={team[0]}>
                <div className={styles.slotLabel}>Slot No. {index+1}</div>
                {
                  team.map((member, index)=>{
                    return(
                      <div className={styles.member} key={member}>
                        {index+1}. {member}
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
  )
}

export default RegisteredPlayers