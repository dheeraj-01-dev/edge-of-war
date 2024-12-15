"use client";

import React, { useState } from "react";
import styles from './styles/passwordAndSequrity.module.css'
import Image from "next/image";

interface passwordSecurityProps {
  style ?: React.CSSProperties;
}

const PasswordSecurity: React.FC<passwordSecurityProps> = ({style}) => {
  // State for managing passwords
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMessage, setPasswordMessage] = useState("");

  // State for managing two-factor authentication
  // const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  // const [twoFactorMessage, setTwoFactorMessage] = useState("");

  // State for managing login activity
  // const [loginActivity] = useState([
  //   { location: "New York, USA", device: "Chrome on Windows", lastActive: "2024-08-13 14:30" },
  //   { location: "Los Angeles, USA", device: "Safari on iPhone", lastActive: "2024-08-12 09:15" },
  //   { location: "London, UK", device: "Firefox on MacOS", lastActive: "2024-08-11 22:45" },
  // ]);

  // State for logout all sessions
  // const [sessionMessage, setSessionMessage] = useState("");

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setPasswordMessage("New passwords do not match.");
      return;
    }

    // Simulate a password change operation
    setPasswordMessage("Password updated successfully!");
    // Reset input fields
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // const toggleTwoFactor = () => {
  //   setTwoFactorEnabled((prev) => !prev);
  //   setTwoFactorMessage(
  //     `Two-factor authentication has been ${twoFactorEnabled ? "disabled" : "enabled"}.`
  //   );
  // };

  // const logoutAllSessions = () => {
  //   // Simulate logout operation
  //   setSessionMessage("All sessions have been logged out successfully!");
  // };

  const togglePasswordVisibility = (
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div style={style} className={styles.passwordSecurity}>
      <h2 className={styles.title}>Password & Security</h2>
        <div className={styles.coloredSection}>

      {/* Password Change Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Change Password</h3>
        <div className={styles.formGroup}>
          <label htmlFor="currentPassword" className={styles.label}>Current Password</label>
          <div className={styles.passwordInputWrapper}>
            <input
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter current password"
              className={styles.input}
              />
            <button
              type="button"
              className={styles.showHideButton}
              onClick={() => togglePasswordVisibility(setShowCurrentPassword)}
              >
              <Image
                src={showCurrentPassword ? "/icons/hide.png" : "/icons/show.png"}
                alt={showCurrentPassword ? "Hide" : "Show"}
                width={20}
                height={20}
                />
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="newPassword" className={styles.label}>New Password</label>
          <div className={styles.passwordInputWrapper}>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              className={styles.input}
              />
            <button
              type="button"
              className={styles.showHideButton}
              onClick={() => togglePasswordVisibility(setShowNewPassword)}
              >
              <Image
                src={showNewPassword ? "/icons/hide.png" : "/icons/show.png"}
                alt={showNewPassword ? "Hide" : "Show"}
                width={20}
                height={20}
                />
            </button>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>Confirm New Password</label>
          <div className={styles.passwordInputWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              className={styles.input}
              />
            <button
              type="button"
              className={styles.showHideButton}
              onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
              >
              <Image
                src={showConfirmPassword ? "/icons/hide.png" : "/icons/show.png"}
                alt={showConfirmPassword ? "Hide" : "Show"}
                width={20}
                height={20}
                />
            </button>
          </div>
        </div>

        <button className={styles.updateButton} onClick={handlePasswordChange}>
          Update Password
        </button>
        {passwordMessage && <p className={styles.message}>{passwordMessage}</p>}
      </div>

      {/* Two-Factor Authentication Section */}
      {/* <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Two-Factor Authentication</h3>
        <div className={styles.toggleContainer}>
          <label className={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={twoFactorEnabled}
              onChange={toggleTwoFactor}
              className={styles.checkbox}
              />
            Enable Two-Factor Authentication
          </label>
        </div>
        {twoFactorMessage && <p className={styles.message}>{twoFactorMessage}</p>}
      </div> */}

      {/* Login Activity Section */}
      {/* <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Where You're Logged In</h3>
        <ul className={styles.loginActivityList}>
          {loginActivity.map((session, index) => (
            <li key={index} className={styles.loginActivityItem}>
              <div className={styles.loginDetails}>Location: {session.location}</div>
              <div className={styles.loginDetails}>Device: {session.device}</div>
              <div className={styles.loginDetails}>Last Active: {session.lastActive}</div>
            </li>
          ))}
        </ul>
      </div> */}

      {/* Logout All Sessions Section */}
      {/* <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Logout of All Sessions</h3>
        <button className={styles.logoutButton} onClick={logoutAllSessions}>
          Logout All Sessions
        </button>
        {sessionMessage && <p className={styles.message}>{sessionMessage}</p>}
      </div> */}

      {/* Additional Security Section */}
      {/* <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Additional Security Features</h3>
        <ul className={styles.featuresList}>
          <li>Session timeout after inactivity.</li>
          <li>Notification for suspicious login attempts.</li>
          <li>Password strength meter.</li>
        </ul>
      </div> */}
          </div>
    </div>
  );
};

export default PasswordSecurity;
