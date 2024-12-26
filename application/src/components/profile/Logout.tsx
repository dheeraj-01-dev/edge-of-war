
"use client"
import React from 'react'
import styles from './styles/logout.module.css'
import Image from 'next/image'
import { useConfirmationDialog } from "@/components/ConfirmDialog/ConfirmDialog";
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const router = useRouter();
  
  const { show } = useConfirmationDialog();
  const logOut = () => {
    show("Confirm to Log Out?", () => {
      deleteCookie("__eow_user_token");
      router.push("/");
      router.refresh();
      // toggleSideNav();
    });
  }
    
  return (
    <div className={styles.container} onClick={logOut}>
        <div style={{display: "flex", placeItems: "center"}}>
            <Image height={20} width={20} alt='' src={"/icons/logout-a7.png"} />
            &nbsp; Log Out</div>
    </div>
  )
}

export default Logout