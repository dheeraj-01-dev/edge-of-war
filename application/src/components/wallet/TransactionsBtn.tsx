import React from 'react'
import styles from './styles/transactionsBtn.module.css'
import Link from 'next/link'

const TransactionsBtn = () => {
  return (
    <div className={styles.container}>
      <Link href="/wallet/transactions/withdraw-money" className={styles.withdrawBtn}>Withdraw</Link>
      <Link href="/wallet/transactions/add-money" className={styles.addMoneyBtn}>Add money</Link>
    </div>
  )
}

export default TransactionsBtn
