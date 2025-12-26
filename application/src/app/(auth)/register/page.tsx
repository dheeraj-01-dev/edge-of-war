"use server"
import React from 'react'
import styles from './page.module.css'
import Titles from '@/components/temp/Titles'
import RegisterFrom from './components/server/RegisterFrom'
import { registerFormAction } from './api/route'

const page = async () => {
  return (
    <div className={styles.pages}>
      {/* <Titles title='Register' /> */}
      {/* <Register registerFunction={registerUser} /> */}
      <div>
        <RegisterFrom formAction={registerFormAction} />
        {/* <SignupFlow /> */}
      </div>
    </div>
  )
}

export default page
