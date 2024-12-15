"use server";
import Navbar from "@/components/scafFolds/navbar/NavBar";
import SideNav from "@/components/scafFolds/sideNav/SideNav";
import { cookies } from "next/headers";
import React from "react";
import styles from './scafFold.module.css'
import Footer from "@/components/scafFolds/footer/Footer";
import { ConfirmationDialogProvider } from "@/components/ConfirmDialog/ConfirmDialog";

type scaffold = {
  style?: React.CSSProperties;
  children: React.ReactElement;
};

const ScafFold: React.FC<scaffold> = async ({ children, style }) => {
  const cookieStore = cookies();
  const userToken = (await cookieStore).get("__eow_user_token")?.value;
  return (
    <div className={styles.scafFold}>
      <Navbar isLogin={userToken?true:false} />
      <ConfirmationDialogProvider>
        <SideNav />
      </ConfirmationDialogProvider>
      <div style={style} className={styles.child}>{children}</div>
      <Footer />
    </div>
  );
};

export default ScafFold;
