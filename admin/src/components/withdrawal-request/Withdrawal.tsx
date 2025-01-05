import React from 'react'
import WithdrawalRequestCard from './WithdrawalRequestCard'
import styles from './styles/withdrawal.module.css'

interface withdrawal {
    requests: withdrawalRequest[],
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

const Withdrawal :React.FC<withdrawal> = ({requests, handleAccept}) => {

  return (
    <div className={styles.conatiner} >
        {
            requests.map((request, index)=>{
                return (
                    <WithdrawalRequestCard handleAccept={handleAccept} request={request} key={index} />
                )
            })
        }
    </div>
  )
}

export default Withdrawal