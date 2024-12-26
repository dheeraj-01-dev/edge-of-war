"use client"
import React, { useState } from 'react'
import styles from './styles/forgotpassword.module.css'
import toast from '@/scripts/toast';
import Link from 'next/link';

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = ()=>{
        toast(email)
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <div className={styles.label}>Forgot Password</div>
            <div className={styles.slogan}>Please enter the email address you'd like to password reset information sent to</div>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} className={styles.input} type="email" placeholder='Enter Your email' />
            <button onClick={handleSubmit} className={styles.button}>Submit</button>
            <Link href={"/login"} className={styles.link} >Back To Login</Link>
        </div>
    </div>
  )
}

export default ForgotPassword