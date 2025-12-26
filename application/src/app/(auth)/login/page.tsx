"use server"
import React from 'react'
import styles from './page.module.css'
import LoginForm from '@/components/auth/login/Login'
import Titles from '@/components/temp/Titles'
import { loginFormAction } from './api/route'

const page = async () => {
  return (
    <div className={styles.page}>
      <Titles styles={{marginTop: 15, marginLeft: 15}} title='Login' />
      <LoginForm formAction={loginFormAction} />
    </div>
  )
}

export default page
