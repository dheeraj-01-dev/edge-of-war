
import AddMoneyHeader from '@/components/wallet/add-money/AddMoneyHeader'
import BalanceSheet from '@/components/wallet/BalanceSheet'
import Numpad from '@/components/wallet/Numpad'
import React from 'react'

const page = () => {
  return (
    <div style={{padding: 10}}>
      <AddMoneyHeader template='Withdraw' />
      <BalanceSheet template='Withdraw balance' />
      <Numpad buttonTemplate='Withdraw' Withdraw/>
    </div>
  )
}

export default page
