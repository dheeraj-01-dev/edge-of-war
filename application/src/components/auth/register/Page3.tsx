// SignupPage3.tsx
import { Dispatch, SetStateAction, useState } from "react";
import styles from './style/signupFlow.module.css'
import Image from "next/image";

// SignupPage3.tsx
const SignupPage3 = ({ formData, setFormData, onFinish, onPrevious }: {
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
  onFinish: ()=>void,
  onPrevious: ()=>void
}) => {

  const register = () => {
    onFinish();
  };


  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };


  return (
    <div className={styles.signupPage}>
      <div>
        <div className={styles.titleLong}>Personal Information</div>

        <div className={styles.inputContainer}>
            <Image src="/icons/user.png" height={20} width={20} alt="__" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.userName}
              onChange={(e) => setFormData({ ...formData, userName: e.target.value.trim() })}
              type="text"
              placeholder="create username"
            />
          </div>
        <div className={styles.inputContainer}>
            <Image src="/icons/padlock.png" height={20} width={20} alt="__" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value.trim() })}
              type={showPassword?"text":"password"}
              placeholder="create new password"
            />
            <div style={{
              borderBottom: "2px solid #2f4f4f67",
              paddingRight: 5
              }}
              onClick={handleTogglePassword}
              >
              <Image src={`/icons/${showPassword?"show":"hide"}-solid.png`} height={20} width={20} alt="__" />
            </div>
          </div>
        <div className={styles.inputContainer}>
            <Image src="/icons/padlock.png" height={20} width={20} alt="__" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value.trim() })}
              type={showPassword?"text":"password"}
              placeholder="confirm new password"
            />
            <div style={{
              borderBottom: "2px solid #2f4f4f67",
              paddingRight: 5
              }}
              onClick={handleTogglePassword}
              >
              <Image src={`/icons/${showPassword?"show":"hide"}-solid.png`} height={20} width={20} alt="__" />
            </div>
          </div>
          {
            formData.password.trim()&&formData.confirmPassword?
            formData.password.trim()===formData.confirmPassword.trim()?
            <p className={styles.pacChekerCorrect}>*password and confirm password matched</p>:
            <p className={styles.pacChekerFail}>*password and confirm password doesn't match</p>:<></>
          }

          <button className={styles.button} onClick={register}>
            Register
          </button>
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

export default SignupPage3;
