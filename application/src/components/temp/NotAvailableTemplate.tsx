import React from "react";
import styles from "./styles/notAvailbleTemplate.module.css";
import Link from "next/link";

interface notAvailbleTemplateType {
  style: React.CSSProperties;
  title?: string;
  message?: string;
  href?: string;
  linkText?: string
}

const NotAvailableTemplate: React.FC<notAvailbleTemplateType> = ({ style,
  title = "You have no Contests Yet!",
  href = "/",
  message = "It looks a bit quiet here. Why not create or join a new one?",
  linkText = "Create or Join Contest"
 }) => {
  return (
    <div style={style} className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.message}>
        {message}
      </p>
      <Link href={href}>
        <p className={styles.addButton}>{linkText}</p>
      </Link>
    </div>
  );
};

export default NotAvailableTemplate;
