"use server"
import { getPersonalInfo } from '@/api/user'
import BalanceSheet from '@/components/wallet/BalanceSheet'
import TransactionsBtn from '@/components/wallet/TransactionsBtn'
import WalletHeader from '@/components/wallet/WalletHeader'
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
    };

    const updatedBalance = `${(Math.round(response.data.balance * 100) / 100)}`.split(".")
  return (
    <div style={{padding: 10}}>
      <WalletHeader />
      <BalanceSheet balance={{rupee: updatedBalance[0], paisa: updatedBalance[1]?updatedBalance[1]:"00"}} template='balance' />
      <TransactionsBtn />
    </div>
  )
}

export default page
