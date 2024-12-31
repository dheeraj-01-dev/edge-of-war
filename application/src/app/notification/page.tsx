"use server"
import React from 'react'
import styles from './page.module.css'
import Header from '@/components/notification/Header'
import Notifications from '@/components/notification/Notifications'
import { cookies } from 'next/headers'
import { getAllNotification } from '@/api/notification'

const page = async () => {
  const cookiStore = cookies();
  const userToken = (await cookiStore).get("__eow_user_token")?.value;
  const notifications = await getAllNotification({auth: userToken});

  

  if(!userToken){
    return (
      <div className={styles.notification}>
        <Header />
      </div>
    )
  }
  
  return (
    <div className={styles.notification}>
      <Header />
      <Notifications token={userToken} notifications={notifications.data} />
    </div>
  )
}

export default page
