"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "./styles/eventDashboard.module.css";
import Image from "next/image";

const posterImages = [
  { src: "/events/event.png", alt: "Event 1" },
  { src: "/events/event.png", alt: "Event 2" },
  { src: "/events/event.png", alt: "Event 3" },
  { src: "/events/event.png", alt: "Event 3" },
  { src: "/events/event.png", alt: "Event 3" },
  // { src: "/icons/insert-picture-icon.png", alt: "Event 4" },
  // { src: "/icons/insert-picture-icon.png", alt: "Event 4" },
  // { src: "/icons/insert-picture-icon.png", alt: "Event 4" },
  // { src: "/icons/insert-picture-icon.png", alt: "Event 4" },
  // { src: "/icons/insert-picture-icon.png", alt: "Event 4" },
  // { src: "/icons/insert-picture-icon.png", alt: "Event 4" },
];

const EventDashboard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [transitioning, setTransitioning] = useState<boolean>(false);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const scrollToNextImage = () => {
    const nextIndex = (currentIndex + 1) % posterImages.length;
    setTransitioning(true);
    setCurrentIndex(nextIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: nextIndex * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      scrollToNextImage();
    }, 5000); // 5 seconds interval

    return () => clearInterval(intervalId);
  },
  // [currentIndex]
);

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => setTransitioning(false), 500); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [transitioning]);


  const handleManualScroll = (direction: "left" | "right") => {
    const maxIndex = posterImages.length - 1;
    const newIndex =
      direction === "right"
        ? Math.min(currentIndex + 1, maxIndex)
        : Math.max(currentIndex - 1, 0);
    setTransitioning(true);
    setCurrentIndex(newIndex);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: newIndex * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index: number) => {
    setTransitioning(true);
    setCurrentIndex(index);
    setClickedIndex(index);
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleManualScroll("right"),
    onSwipedRight: () => handleManualScroll("left"),
    preventScrollOnSwipe: true,
    trackMouse: true, // Allow mouse swipe as well
  });

  return (
    <section className={styles.eventDashboardContainer}>
      <div className={styles.manualControls}>
        <button
          className={`${styles.scrollButton} ${styles.leftButton}`}
          onClick={() => handleManualScroll("left")}
          aria-label="Scroll Left"
        >
          ◀
        </button>
        <button
          className={`${styles.scrollButton} ${styles.rightButton}`}
          onClick={() => handleManualScroll("right")}
          aria-label="Scroll Right"
        >
          ▶
        </button>
      </div>
      <div
        className={styles.posterBoard}
        id="eventDashboardScrollRef"
        {...swipeHandlers}
        // ref={scrollRef}
        // {...swipeHandlers} // Add swipe handlers here
        // ref={swipeHandlers}
      >
        {posterImages.map((poster, index) => (
          <div
            key={index}
            className={styles.imageBox}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <div className={styles.imgParent}>
              {/* <img src={poster.src} alt={poster.alt} /> */}
              <Image layout="intrinsic" height={120} width={370} src={poster.src} alt={poster.alt} />
              {/* {poster.alt} */}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {posterImages.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            } ${
              clickedIndex === index ? styles.clicked : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default EventDashboard;
