"use client"
import React, { useEffect, useState } from 'react';
import styles from './createNewPassowrd.module.css'
import toast from '@/scripts/toast';
import { useRouter } from 'next/navigation';

const CreateNewPassword  = ({token, createNewPassowrd}: {token: string, createNewPassowrd: ({authorization, newPassword, confirmNewPassword, oldPassword, linkToken}:{
  authorization?: string | undefined,
  newPassword: string,
  confirmNewPassword: string,
  oldPassword?: string | undefined,
  linkToken?: string | undefined
}) => Promise<responseType<string>>}) => {

  const router = useRouter()
  console.log({token})
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (password !== confirmPassword) {
      setError('Passwords and confirmPassword do not match');
      return;
    }if(password===confirmPassword){
        setError("")
    }
  }, [password, confirmPassword])
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation to check if passwords match
    try {
      const response = await createNewPassowrd({ linkToken: token, newPassword: password, confirmNewPassword: confirmPassword});
      if(response.data){
        toast(response.data)
        setError('');
        setPassword('');
        setConfirmPassword('');
        router.push("/login")
      }else if(response.error){
        toast(response.error)
      }
      else{
        toast("error creating password, contact support")
      }
    } catch {
      toast("error creating password, contact support")
    }
    // If passwords match, you can submit the form (e.g., call an API to save the new password)
  };

  return (
    <div className={styles.formContainer}>
      <h2>Create New Password</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className={styles.errorMessage}>{error}</p>}

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default CreateNewPassword;
