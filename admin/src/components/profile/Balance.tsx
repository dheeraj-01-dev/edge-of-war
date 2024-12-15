import React from 'react'
import styles from './styles/balance.module.css'
import Link from 'next/link'

const Balance = ({style, balance}: {style: React.CSSProperties, balance: number}) => {
  return (
    <div className={styles.container}>
      <Link href="/wallet" style={style} className={styles.balanceBox}>
        <div className={styles.balance}> ₹ &nbsp;{balance}<span>.00</span> </div>
        <div>
        </div>
      </Link>
      <Link href="/wallet/transactions/add-money" className={styles.addBtn}> + Add </Link>

    </div>
  )
}

export default Balance
