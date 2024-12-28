"use server"
import React from 'react'
import styles from './page.module.css'
import Login from '@/components/auth/login/Login'
import { loginUser } from '@/api/user'
import Titles from '@/components/temp/Titles'

const page = async () => {
  return (
    <div className={styles.page}>
      <Titles styles={{marginTop: 15, marginLeft: 15}} title='Login' />
      <Login fetchUser={loginUser}/>
    </div>
  )
}

export default page
