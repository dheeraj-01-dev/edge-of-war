import ForgotPassword from '@/components/forgotpassword/ForgotPassword'
import Titles from '@/components/temp/Titles'
import React from 'react'
import styles from './page.module.css'
import { forgotPassword } from '@/api/user'

const page = () => {
  return (
    <div className={styles.page}>
        <Titles title='Forgot Password' />
        <ForgotPassword forgotPassword={forgotPassword} />
    </div>
  )
}

export default page