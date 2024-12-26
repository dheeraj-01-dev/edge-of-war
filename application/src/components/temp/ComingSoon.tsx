"use client";

import React, { useState, useEffect } from "react";
import styles from './styles/comingSoon.module.css'
import Image from "next/image";

const ComingSoon: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const launchDate = new Date("2024-12-31T00:00:00Z");
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };

    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image
          src="/coming-soon.png"
          alt="Coming Soon"
          width={300}
          height={250}
          className={styles.image}
        />
        <h1 className={styles.title}>We're Launching Soon!</h1>
        <p className={styles.subtitle}>Exciting things are on the way. Stay tuned!</p>
        
        <div className={styles.countdown}>
          <div className={styles.timeUnit}>
            <span className={styles.number}>{timeRemaining.days}</span>
            <span className={styles.label}>Days</span>
          </div>
          <div className={styles.timeUnit}>
            <span className={styles.number}>{timeRemaining.hours}</span>
            <span className={styles.label}>Hours</span>
          </div>
          <div className={styles.timeUnit}>
            <span className={styles.number}>{timeRemaining.minutes}</span>
            <span className={styles.label}>Minutes</span>
          </div>
          <div className={styles.timeUnit}>
            <span className={styles.number}>{timeRemaining.seconds}</span>
            <span className={styles.label}>Seconds</span>
          </div>
        </div>

        <form className={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter your email for updates"
            className={styles.emailInput}
            required
          />
          <button type="submit" className={styles.subscribeButton}>
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoon;
