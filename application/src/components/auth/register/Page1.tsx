// SignupPage1.tsx
import styles from './style/signupFlow.module.css'
import Link from "next/link";
import toast from "@/scripts/toast";

import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

// SignupPage1.tsx

const SignupPage1 = ({ formData, setFormData, onNext } : {
  formData: {
    name: string;
    ffUid: string;
    ffUserName: string;
    phone: string;
    email: string;
    otp: string;
    userName: string;
    password: string;
    confirmPassword: string;
},
  setFormData:  Dispatch<SetStateAction<{
    name: string;
    ffUid: string;
    ffUserName: string;
    phone: string;
    email: string;
    otp: string;
    userName: string;
    password: string;
    confirmPassword: string;
}>>,
  onNext: ()=>void
}) => {
  const handleNext = () => {
    if (formData.name && formData.ffUid && formData.ffUserName) {
      onNext();
    } else {
      toast("Please fill in all fields.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div>
        <div className={styles.title}>Register</div>


        <div className={styles.inputContainer}>
            <Image src="/icons/user.png" height={20} width={20} alt="user" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              type="text"
              placeholder="Full Name"
            />
          </div>
        <div className={styles.inputContainer}>
            <Image src="/icons/id-card.png" height={20} width={20} alt="ffuid" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.ffUid}
              onChange={(e) => setFormData({ ...formData, ffUid: e.target.value.trim() })}
              type="tel"
              placeholder="Free Fire UID"
            />
          </div>
        <div className={styles.inputContainer}>
            <Image src="/icons/id-card.png" height={20} width={20} alt="ffusername" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.ffUserName}
              onChange={(e) => setFormData({ ...formData, ffUserName: e.target.value.trim() })}
              type="text"
              placeholder="Free Fire userName"
            />
          </div>
        
        <button className={styles.button} onClick={handleNext}>
          Next
        </button>
        <div className={styles.loginLink}>
          have an account? <Link href="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage1;
