"use client";
import Image from "next/image";
import React from "react";
import styles from './friendSearchBox.module.css'

const FriendsSearchBox = ({
  style,
  placeholder = "search",
}: {
  style?: React.CSSProperties;
  placeholder?: string;
}) => {
  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div style={style}>
      <form onSubmit={submitForm} className={styles.form}>
        <Image height={17} width={17} alt="" src="/icons/magnifier.png" />
        <input
          autoCapitalize="off"
          autoCorrect="off"
          autoComplete="off"
          className={styles.inputField}
          type="search"
          placeholder={placeholder}
        />
      </form>
    </div>
  );
};

export default FriendsSearchBox;
