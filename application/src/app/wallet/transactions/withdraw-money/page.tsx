"use server"
import { getPersonalInfo } from '@/api/user'
import AddMoneyHeader from '@/components/wallet/add-money/AddMoneyHeader'
import BalanceSheet from '@/components/wallet/BalanceSheet'
import Numpad from '@/components/wallet/withDraw/Numpad'
import { cookies } from 'next/headers'
import React from 'react'

const page = async () => {
  const cookieStore = cookies();
  const authorization = (await cookieStore).get("__eow_user_token")?.value;
  
    const response = await getPersonalInfo({ token: authorization });
    if(!response.data){
      return (
        <div>Not Authorized</div>
      )
    }
  
    const updatedBalance = `${response.data.balance}`.split(".")
    
  return (
    <div style={{padding: 10}}>
      <AddMoneyHeader template='Withdraw' />
      <BalanceSheet balance={{rupee: updatedBalance[0], paisa: updatedBalance[1]}} template='balance' />
      <Numpad balance={response.data.balance} Withdraw authorization={authorization} buttonTemplate='Withdraw Money' />
    </div>
  )
}

export default page
