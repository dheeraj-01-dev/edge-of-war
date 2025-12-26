"use client";
import React, { useActionState, useEffect } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { LockKeyhole } from "lucide-react";
import { EmailOutlined } from "@mui/icons-material";
import toast from "@/scripts/toast";

interface Props {
  formAction: (
    state: { error?: string },
    formData: FormData
  ) => Promise<{ error?: string }>;
}

const LoginForm = ({ formAction }: Props) => {
  const [formState, newFormAction, isPending] = useActionState(formAction, {
    error: undefined,
  } as { error?: string });

  useEffect(() => {
    console.log("FormSTate: ", formState);
    toast(formState.error);
  }, [formState]);

  return (
    <div className={styles.login}>
      <div className={styles.loginChild}>
        <div className={styles.loginTitle}>Login</div>
        <form action={newFormAction}>
          <div className={styles.inputContainer}>
            <EmailOutlined />
            <input
              name="email"
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect="off"
              id="loginIdentifier"
              type="email"
              placeholder="email"
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <LockKeyhole />
            <input
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              autoCorrect="off"
              name="password"
              id="loginPassword"
              type="text"
              placeholder="password"
              required
            />
          </div>
          <div style={{ textAlign: "end", marginTop: 10 }}>
            <Link className={styles.registerLink} href={"/forgotpassword"}>
              forgot password?
            </Link>
          </div>
          <div className={styles.submitContainer}>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isPending}
              style={{ opacity: isPending ? 0.4 : 1 }}
            >
              Login
            </button>
          </div>
        </form>
        <div style={{ fontSize: "90%", marginTop: 90, textAlign: "center" }}>
          don't have account?
          <Link className={styles.registerLink} href={"/register"}>
            {" "}
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
