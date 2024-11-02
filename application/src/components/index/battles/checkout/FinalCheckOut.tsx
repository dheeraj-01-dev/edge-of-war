"use client";
import React from "react";
import styles from "./finalCheckOut.module.css";

type finalCheckOut = {
  styleSheet?: React.CSSProperties;
  parentClass?: string;
  blurFinalChekout: () => void;
};

const FinalCheckOut: React.FC<finalCheckOut> = ({
  parentClass,
  styleSheet,
  blurFinalChekout,
}) => {
  
  return (
    <div
      style={styleSheet}
      className={`${parentClass} ${styles.finalCheckOut}`}
    >
      <div onClick={blurFinalChekout}>x</div>
    </div>
  );
};

export default FinalCheckOut;
