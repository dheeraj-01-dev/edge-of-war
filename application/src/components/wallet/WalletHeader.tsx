import React from 'react'
import styles from './styles/walletHeader.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import { ArrowLeftIcon } from '../icons/ArrowLeft'
import Link from 'next/link'

const WalletHeader = () => {
  return (
    <div className={styles.walletHeader}>
      <div style={{display: "flex", alignItems: "center"}}>
        <NavigateBack styles={{height: 17, width: 17}} >
          <ArrowLeftIcon fill='#d9d9d9' height={17} width={17} />
        </NavigateBack>
          &nbsp;&nbsp; Wallet
      </div>
      <div className={styles.allTransactionBtn}>
        <Link href="/transactions" >
          All transactions
        </Link>
      </div>
    </div>
  )
}

export default WalletHeader
