"use server"
import React from 'react'
import styles from './page.module.css'
import NavigateBack from '@/hooks/Navigate.back'
import Image from 'next/image'
import Login from '@/components/auth/login/Login'
import { loginUser } from '@/api/user'

const page = async () => {
  return (
    <div className={styles.page}>
      <NavigateBack home styles={{
        padding: "10px"
      }}>
        <Image height={20} width={20} src="/icons/arrowLeftWhite.png" alt="Navigate-back" />
      </NavigateBack>
      <Login fetchUser={loginUser}/>
    </div>
  )
}

export default page
