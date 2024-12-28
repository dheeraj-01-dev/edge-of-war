import React from 'react'
import styles from './styles/balanceSheet.module.css'

const BalanceSheet = ({template = "Template", balance}: {template?: string, balance: { rupee: string, paisa: string}}) => {
  return (
    <div className={styles.container}>
      <div>{template}</div>
      <div><span style={{fontSize: 50}}>₹ {balance.rupee}.</span><span style={{fontSize: 30}}>{balance.paisa}</span></div>
    </div>
  )
}

export default BalanceSheet
