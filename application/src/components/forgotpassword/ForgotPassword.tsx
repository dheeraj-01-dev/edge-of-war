"use client"
import React, { useState } from 'react'
import styles from './styles/forgotpassword.module.css'
import toast from '@/scripts/toast';
import Link from 'next/link';

const ForgotPassword = ({forgotPassword}: {forgotPassword:  ({email}:{
  email: string
}) => Promise<responseType<string>>}) => {
    const [email, setEmail] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
        toast("sending request....please wait.")
        const response = await forgotPassword({email});
        if(response.success){
          toast("reset link sent successfully")
        }else if(response.error){
          toast(response.error)
        }
        else{
          toast("error sending email, contact support")
        }

      } catch {
        toast("error sending email, contact support")
      }
    }
    
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.label}>Forgot Password</div>
            <div className={styles.slogan}>Please enter the email address you'd like to password reset information sent to</div>
            <input onChange={(e)=>{setEmail(e.target.value)}} value={email} required className={styles.input} type="email" placeholder='Enter Your email' />
            <button type='submit' className={styles.button}>Submit</button>
            <Link href={"/login"} className={styles.link} >Back To Login</Link>
          </form>
        </div>
    </div>
  )
}

export default ForgotPassword