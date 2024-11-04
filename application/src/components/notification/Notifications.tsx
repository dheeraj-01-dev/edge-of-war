"use server";
import React from "react";
import styles from "./styles/notifications.module.css";
import Link from "next/link";
import Image from "next/image";

const Notifications = async ({notifications}: {notifications: notification[]}) => {

  return (
    <div className={styles.notificationContainer}>
      {
        notifications.length<1&&(
          <div>
            No new Notfication !
          </div>
        )
      }
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
                    href={`/profile/${obj.from}`}
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
