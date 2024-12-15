import React from 'react'
import styles from './styles/balanceSheet.module.css'

const BalanceSheet = ({template = "Template"}: {template?: string}) => {
  return (
    <div className={styles.container}>
      <div>{template}</div>
      <div><span style={{fontSize: 50}}>₹ 0.</span><span style={{fontSize: 30}}>00</span></div>
    </div>
  )
}

export default BalanceSheet
