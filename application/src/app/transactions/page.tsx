"use server"
import AddMoneyHeader from '@/components/wallet/add-money/AddMoneyHeader'
import React from 'react'
import styles from './page.module.css'
import NotAvailableTemplate from '@/components/temp/NotAvailableTemplate'

const page = async () => {
  return (
    <div className={styles.page}>
      <AddMoneyHeader template='Transactions'  />

      <div style={{ height: "90%", display: "grid", placeItems: "center" }}>
        <NotAvailableTemplate
          title='No any transactions Yet...' button={false} message=''  style={{ height: "calc(100% - 20px)", background: "none" }}
        />
      </div>
    </div>
  )
}

export default page