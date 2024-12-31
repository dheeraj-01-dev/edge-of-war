"use client";
import React from "react";
import styles from "./styles/notifications.module.css";
import Link from "next/link";
import Image from "next/image";
import toast from "@/scripts/toast";
import { useRouter } from "next/navigation";


const Notifications = ({
  notifications,
  token
}: {
  token: string
  notifications: notification[];
}) => {

  const router = useRouter();
  
  const acceptFunction = async ({
    from,
    token = "",
  }: {
    from: string | undefined;
    token: string;
  }) => {

    const res = await fetch("/api/acceptFriendRequest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token, // Include the token
      },
      body: JSON.stringify({ from }), // Include any required data in the body
    });
  
    const data = await res.json();
    
    if(data.data){
      toast(data.data)
      router.push("/friends");
      router.refresh();
    }
    if(data.error){
      toast(data.error)
    }
  };
  return (
    <div className={styles.notificationContainer}>
      {notifications.length < 1 && <div>No new Notfication !</div>}
      <div>
        {notifications &&
          notifications.map((obj) => {
            return (
              <li className={styles.li} key={obj._id}>
                <span className={styles.notificationHeader}>{obj.n_type}</span>
                <div className={styles.notificationBody}>
                  New friend request from &nbsp;
                  <Link
                    style={{ textDecoration: "underline", color: "skyblue" }}
                    href={``}
                  >
                    {obj.from}
                  </Link>
                  <span className={styles.actionBtn}>
                    <Image
                      height={11}
                      width={11}
                      alt="x"
                      src="/icons/close.png"
                    />
                  </span>
                  <span className={styles.actionBtn}>
                    <Image
                    onClick={()=>{
                      acceptFunction({from: obj.from, token})
                    }}
                      height={13}
                      width={14}
                      alt="x"
                      src="/icons/check-mark.png"
                    />
                  </span>
                </div>
              </li>
            );
          })}
      </div>
    </div>
  );
};

export default Notifications;
