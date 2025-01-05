"use server"
import { acceptWithdrawalRequest, getAllWithdrawalRequest } from '@/api/admin/withdrawal'
import Withdrawal from '@/components/withdrawal-request/Withdrawal'
import ScafFold from '@/server/components/scafFold/ScafFold'
import React from 'react'

const page = async () => {
  const res = await getAllWithdrawalRequest({
    authorization: "#*${dheeraj.eow.dev}*:)",
    apikey: "123@edgeofwaresports.com"
  });

  if(!res.data){
    console.log(res)
    return (
      <ScafFold>
          <div>
            something error occur, check console
          </div>
      </ScafFold>
    )
  };

  const requestedWithdrawal = res.data.allRequest.filter(request => request.status==="requested")
  const competedWithdrawal = res.data.allRequest.filter(request => request.status==="completed")

  return (
    <ScafFold style={{padding: 20}}>
        <div style={{overflow: "auto", height: "100%"}}>
          <div style={{fontWeight: 800, fontSize: "200%", marginBottom: 40}}>Requested [{requestedWithdrawal.length}]</div>
            <Withdrawal handleAccept={acceptWithdrawalRequest} requests={requestedWithdrawal} />
            <div style={{border: "20px solid var(--bg-1)", margin: 20}}>border</div>
            <div style={{fontWeight: 800, fontSize: "200%", marginBottom: 40}}>Completed [{competedWithdrawal.length}]</div>
            <Withdrawal handleAccept={acceptWithdrawalRequest} requests={competedWithdrawal} />
        </div>
    </ScafFold>
  )
}

export default page