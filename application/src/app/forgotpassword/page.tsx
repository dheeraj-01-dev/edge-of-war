import ForgotPassword from '@/components/forgotpassword/ForgotPassword'
import Titles from '@/components/temp/Titles'
import React from 'react'
import styles from './page.module.css'

const page = () => {
  return (
    <div className={styles.page}>
        <Titles title='Forgot Password' />
        <ForgotPassword />
    </div>
  )
}

export default page