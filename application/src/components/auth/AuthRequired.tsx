// src/components/AuthRequired.tsx
"use server"
import React from "react";
import Link from "next/link";
import styles from "./AuthRequired.module.css";
import Image from "next/image";

type authRequired = {
  isLoggedIn: boolean;
  children: React.ReactElement;
};

const AuthRequired: React.FC<authRequired> = async ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return (
      <div className={styles.authRequiredContainer}>
        <div className={styles.authBox}>
          <Image
            src="/icons/lock.png"
            alt="Lock Icon"
            width={50}
            height={50}
          />
          <h2 className={styles.title}>Access Restricted</h2>
          <p className={styles.message}>
            You need to be logged in to view this page.
          </p>
          <Link href={"/"} style={{marginRight: 20}}>
            <button className={styles.loginButton}>Go to Home</button>
          </Link>
          <Link href="/login">
            <button className={styles.loginButton}>Go to Login</button>
          </Link>
        </div>
      </div>
    );
  }
  return <div>{children}</div>;
};

export default AuthRequired;
