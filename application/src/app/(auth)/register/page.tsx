"use server"
import React from 'react'
import styles from './page.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import SignupFlow from '@/components/auth/register/SignUpFlow'

const page = () => {
  return (
    <div className={styles.page}>
      <NavigateBack home styles={{
        padding: "10px",
        position: "absolute",
        top: "20px",
        left: "20px"
      }}>
        <Image height={20} width={20} src="/icons/arrowLeftWhite.png" alt="Navigate-back" />
      </NavigateBack>
      {/* <Register registerFunction={registerUser} /> */}
      <div>
        <SignupFlow />
      </div>
    </div>
  )
}

export default page
