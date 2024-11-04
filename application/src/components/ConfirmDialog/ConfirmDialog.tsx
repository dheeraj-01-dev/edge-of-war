// ConfirmationDialog.tsx
"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import styles from "./confirmDialog.module.css";

interface ConfirmationDialogContextType {
  show: (message: string, onConfirm: () => void) => void;
  hide: () => void;
}

const ConfirmationDialogContext = createContext<
  ConfirmationDialogContextType | undefined
>(undefined);

export const useConfirmationDialog = () => {
  const context = useContext(ConfirmationDialogContext);
  if (!context) {
    throw new Error(
      "useConfirmationDialog must be used within a ConfirmationDialogProvider"
    );
  }
  return context;
};

export const ConfirmationDialogProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [onConfirmCallback, setOnConfirmCallback] = useState<() => void>(
    () => () => {}
  );

  const show = (msg: string, onConfirm: () => void) => {
    setMessage(msg);
    setOnConfirmCallback(() => onConfirm);
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  const confirm = () => {
    onConfirmCallback();
    hide();
  };
  return (
    <ConfirmationDialogContext.Provider value={{ show, hide }}>
      {children}
      {isVisible && (
        <div className={styles.overlay}>
          <div className={styles.dialog}>
            <p>{message}</p>
            <div className={styles.buttons}>
              <button
                className={`${styles.cancel} ${styles.button}`}
                onClick={hide}
              >
                Cancel
              </button>
              <button className={`${styles.confirm} ${styles.button}`} onClick={confirm}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </ConfirmationDialogContext.Provider>
  );
};
