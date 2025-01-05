"use client"
import React, { useState } from 'react'
import styles from './styles/withdrawalRequestCard.module.css'
import toast from '@/scripts/toast';
import { useRouter } from 'next/navigation';

interface withdrawalRequestCard {
    request: withdrawalRequest,
    handleAccept: ({ authorization, apikey, withdrawalId, utr, creditedTo, creditedBy, creditedAmount  }: {
        authorization: string | undefined,
        apikey: string | undefined,
        withdrawalId: string | undefined,
        utr: string | undefined,
        creditedTo: string | undefined,
        creditedBy: string | undefined,
        creditedAmount: string | undefined
    }) => Promise<responseType<{message: string, updtedRequest: withdrawalRequest}>>
}

// Function to copy text using Clipboard API
function copyText(text: string, label: string) {
      
    navigator.clipboard.writeText(text)
      .then(() => {
        toast(`${label} copied successfully!`);
      })
      .catch(err => {
        toast(`error copying ${label}: ${err}`);
      });
  }
  
const WithdrawalRequestCard :React.FC<withdrawalRequestCard> = ({request, handleAccept}) => {

    const router = useRouter();

    const [utr, setUtr] = useState("")
    const [creditedAmount, setCreditedAmount] = useState("")
    const [creditedBy, setCreditedBy] = useState("")
    const [creditedTo, setCreditedTo] = useState("")

    const onFormSubmit = async (e :any) => {
        e.preventDefault();
        try {
            const response = await handleAccept({
                authorization: "#*${dheeraj.eow.dev}*:)",
                apikey: "123@edgeofwaresports.com",
                withdrawalId: request._id,
                utr, creditedTo, creditedBy, creditedAmount
            });
            if(response.data){
                toast(response.data.message)
                router.refresh();
            }else{
                console.log(response);
                toast("something went wrong, check the console")
            }
        } catch (error) {
            console.log(error);
            toast("something went wrong, check the console")
        }
    }

  return (
    <div className={styles.container}>
        <div style={{marginBottom: 10, fontWeight: 700, color: "yellow"}}>{request.status}
            <span onClick={()=>{copyText(request._id, "request id")}} style={{marginLeft: 30, color: "gray", cursor: "pointer"}}>[{request._id}]</span>
        </div>
        <div className={styles.subContainer}>
            <div>Requested By [user Id]</div>
            <div className={styles.userId} onClick={()=>{copyText(request.createdBy, "userId")}}>{request.createdBy}</div>
        </div>
        <div className={styles.subContainer}>
            <div>amount</div>
            <div>{request.amount}</div>
        </div>
        <div className={styles.subContainer}>
            <div>upi Id</div>
            <div className={styles.userId} onClick={()=>{copyText(request.upiId, "upi Id")}}>{request.upiId}</div>
        </div>
        <div className={styles.subContainer}>
            <div>contact phone</div>
            <div>{request.contactPhone}</div>
        </div>
        <div className={styles.subContainer}>
            <div>credited amount</div>
            <div>{request.creditedAmount}</div>
        </div>
        <div className={styles.subContainer}>
            <div>credited by</div>
            <div>{request.creditedBy}</div>
        </div>
        <div className={styles.subContainer}>
            <div>credited to</div>
            <div>{request.creditedTo}</div>
        </div>
        <div className={styles.subContainer}>
            <div>utr</div>
            <div>{request.utr}</div>
        </div>
        <div>
            <form onSubmit={onFormSubmit}>
                <input required value={utr} onChange={(e)=>{setUtr(e.target.value)}} type="text" className={styles.input} placeholder='enter utr' />
                <input required value={creditedAmount} onChange={(e)=>{setCreditedAmount(e.target.value)}} type="number" className={styles.input} placeholder='enter credited amount' />
                <input required value={creditedTo} onChange={(e)=>{setCreditedTo(e.target.value)}} type="text" className={styles.input} placeholder='enter credited to upi id' />
                <input required value={creditedBy} onChange={(e)=>{setCreditedBy(e.target.value)}} type="text" className={styles.input} placeholder='enter credited by upi id' />
                <button type='submit' className={styles.button}>Accept</button>
            </form>
        </div>
    </div>
  )
}

export default WithdrawalRequestCard