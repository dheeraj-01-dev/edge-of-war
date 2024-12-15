import BalanceSheet from '@/components/wallet/BalanceSheet'
import TransactionsBtn from '@/components/wallet/TransactionsBtn'
import WalletHeader from '@/components/wallet/WalletHeader'
import React from 'react'

const page = () => {
  return (
    <div style={{padding: 10}}>
      <WalletHeader />
      <BalanceSheet template='Balance' />
      <TransactionsBtn />
    </div>
  )
}

export default page
