// SignupPage2.tsx
import { Dispatch, SetStateAction, useState } from "react";
// import styles from './SignupPage.module.css';
import styles from './style/signupFlow.module.css'
import toast from "@/scripts/toast";
import { sendVerificationEmail, verifyEmailAndOtp } from "@/api/auth/email";
import Image from "next/image";

// SignupPage2.tsx
const SignupPage2 = ({ formData, setFormData, onNext, onPrevious } : {
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
  onPrevious: ()=>void
}) => {
  const [otpSent, setOtpSent] = useState(false);

  const handleSendOtp = async () => {
    if (formData.email) {
      // API call to send OTP
      const json :responseType<string> = await sendVerificationEmail({email: formData.email});
      if(!json.success){
        return toast(json.error)
      }
      setOtpSent(true);
      toast("OTP sent to " + formData.email);
    } else {
      toast("Please enter a valid email.");
    }
  };

  const handleVerifyOtp = async () => {
    if (formData.otp) {
      // Verify OTP with backend
      const data :responseType<string> = await verifyEmailAndOtp({email: formData.email, otp: +formData.otp})
      if(data.success){
        onNext()
      }else{
        toast(data.error)
      }
      // onNext();
    } else {
      toast("Please enter the OTP.");
    }
  };

  return (
    <div className={styles.signupPage}>
      <div>
        <div className={styles.title}>Verify Email</div>
        <div className={styles.inputContainer}>
            <Image src="/icons/email.png" height={20} width={20} alt="ffuid" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value.trim() })}
              type="email"
              placeholder="Email"
            />
          </div>
        <div className={styles.inputContainer}>
            <Image src="/icons/password.png" height={20} width={25} alt="ffuid" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.otp}
              onChange={(e) => setFormData({ ...formData, otp: e.target.value.trim() })}
              type="tel"
              placeholder="OTP"
            />
          </div>
        {!otpSent ? (
          <button className={styles.button} onClick={handleSendOtp}>
            Send OTP
          </button>
        ) : (
          <button className={styles.button} onClick={handleVerifyOtp}>
            Verify OTP
          </button>
        )}
        <div style={{marginTop: 110}}>
          <div className={styles.backButton} onClick={onPrevious}>
            <Image src="/icons/back-blue.png" height={20} width={20} alt="__" />
            &nbsp; &nbsp;Back
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage2;
