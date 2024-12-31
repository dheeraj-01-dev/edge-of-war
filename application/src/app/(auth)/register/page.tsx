"use server"
import React from 'react'
import styles from './page.module.css'
import SignupFlow from '@/components/auth/register/SignUpFlow'
import Titles from '@/components/temp/Titles'

const page = async () => {
  return (
    <div className={styles.page}>
      <Titles title='Register' />
      {/* <Register registerFunction={registerUser} /> */}
      <div>
        <SignupFlow />
      </div>
    </div>
  )
}

export default page
