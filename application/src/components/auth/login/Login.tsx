"use client";
import React, { useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import toast from "@/scripts/toast";
// import { fetchUser } from '@/api/user/login'

const Login = ({
  fetchUser,
}: {
  fetchUser: ({
    phone,
    email,
    password,
  }: {
    phone?: number;
    email?: string;
    password: string;
  }) => Promise<responseType<string>>;
}) => {
  const router = useRouter();
  const [loginIdentifier, setLoginIdentifier] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  let loginCredential: string;
  // loginIdentifier.includes("@")
  //   ? (loginCredential = "email")
  //   : (loginCredential = "phone");
  // loginCredential === "phone" ? parseInt(loginIdentifier) : "";

  if(loginIdentifier.includes("@")){ (loginCredential = "email")}else{(loginCredential = "phone")}
  if(loginCredential==="phone"){parseInt(loginIdentifier)}

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = +new Date();
    const response: responseType<string> = await fetchUser({
      [loginCredential]:
        loginCredential === "phone"
          ? parseInt(loginIdentifier)
          : loginIdentifier,
      password: loginPassword,
    });
    if (response.data) {
      setCookie("__eow_user_token", response.data, {
        expires: new Date(currentDate + 7776000000),
      });
      // setCookie("u_state", json.data.token, {expires : new Date(currentDate+7776000000)});
      // setCookie("u_p_state", json.data.profile, {expires : new Date(currentDate+7776000000)});
      // setCookie("i_state", json.data._id, {expires : new Date(currentDate+7776000000)});
      // setCookie("u_n_state", json.data.userName, {expires : new Date(currentDate+7776000000)});
      toast("Login successfull !");
      router.push("/");
      router.refresh();
    } else {
      toast(response.error);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginChild}>
        <div className={styles.loginTitle}>LOGIN</div>
        <form method="post" onSubmit={handleLogin}>
          <div className={styles.inputContainer}>
            <Image src="/icons/user.png" height={20} width={20} alt="user" />
            <input
              spellCheck={false}
              autoCorrect="off"
              value={loginIdentifier}
              onChange={(e) => {
                setLoginIdentifier(e.target.value);
              }}
              id="loginIdentifier"
              type="text"
              placeholder="phone or email"
            />
          </div>
          <div className={styles.inputContainer}>
            <Image
              src="/icons/high-score.png"
              height={20}
              width={20}
              alt="user"
            />
            <input
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              autoCorrect="off"
              value={loginPassword}
              onChange={(e) => {
                setLoginPassword(e.target.value);
              }}
              id="loginPassword"
              type="text"
              placeholder="password"
            />
          </div>
          <div className={styles.submitContainer}>
            <Link className={styles.registerLink} href={"/register"}>
              Register?
            </Link>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
