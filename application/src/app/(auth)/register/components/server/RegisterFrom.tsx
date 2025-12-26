"use client"
// pages/register.tsx (or app/register/page.tsx for App Router)
import { useState, ChangeEvent } from 'react';
import { Eye, EyeOff, Mail, Lock, Shield } from 'lucide-react';
import styles from './../styles/register-form.module.css'
import Link from 'next/link';

interface FormDataa {
  email: string;
  password: string;
  verifyPassword: string;
  otp: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
  verifyPassword?: string;
  otp?: string;
}

export interface FormState { 
  error?: FormErrors
}

interface Props {
  formAction: (state: FormState, formData: FormData) => Promise<FormState>
}

export default function RegisterForm({ }: Props) {
  const [formData, setFormData] = useState<FormDataa>({
    email: '',
    password: '',
    verifyPassword: '',
    otp: ''
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showVerifyPassword, setShowVerifyPassword] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  // const [formState, newFormAction, isPending] = useActionState(formAction, { error: undefined })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    if (!formData.verifyPassword) {
      newErrors.verifyPassword = 'Please verify your password';
    } else if (formData.password !== formData.verifyPassword) {
      newErrors.verifyPassword = 'Passwords do not match';
    }
    
    if (!formData.otp) {
      newErrors.otp = 'OTP is required';
    } else if (!/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = 'OTP must be 6 digits';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Registration successful!');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.formCard}>
          <div className={styles.header}>
            <div className={styles.iconWrapper}>
              <Shield className={styles.icon} />
            </div>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>Sign up to get started</p>
          </div>

          <form className={styles.formContent}>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
              <div className={styles.inputWrapper}>
                <Mail className={styles.inputIcon} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.inputIcon} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={styles.toggleButton}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className={styles.eyeIcon} /> : <Eye className={styles.eyeIcon} />}
                </button>
              </div>
              {errors.password && <p className={styles.error}>{errors.password}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="verifyPassword" className={styles.label}>
                Verify Password
              </label>
              <div className={styles.inputWrapper}>
                <Lock className={styles.inputIcon} />
                <input
                  type={showVerifyPassword ? 'text' : 'password'}
                  id="verifyPassword"
                  name="verifyPassword"
                  value={formData.verifyPassword}
                  onChange={handleChange}
                  className={`${styles.input} ${errors.verifyPassword ? styles.inputError : ''}`}
                  placeholder="Re-enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowVerifyPassword(!showVerifyPassword)}
                  className={styles.toggleButton}
                  aria-label="Toggle verify password visibility"
                >
                  {showVerifyPassword ? <EyeOff className={styles.eyeIcon} /> : <Eye className={styles.eyeIcon} />}
                </button>
              </div>
              {errors.verifyPassword && <p className={styles.error}>{errors.verifyPassword}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="otp" className={styles.label}>
                Email OTP
              </label>
              <div className={styles.inputWrapper}>
                <Shield className={styles.inputIcon} />
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  maxLength={6}
                  className={`${styles.input} ${styles.otpInput} ${errors.otp ? styles.inputError : ''}`}
                  placeholder="000000"
                />
              </div>
              {errors.otp && <p className={styles.error}>{errors.otp}</p>}
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              className={styles.submitButton}
            >
              Register
            </button>
          </form>

          <div className={styles.footer}>
            <p className={styles.footerText}>
              Already have an account?{' '}
              <Link href="/login" className={styles.footerLink}>
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}