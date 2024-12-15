"use client";
import React, { useEffect, useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle count increase
  const increaseCount = () => {
    // Push current state to history
    history.pushState({ count }, "Incremented Count");
    setCount(count + 1);
  };

  // Function to open modal
  const openModal = () => {
    history.pushState({ modalOpen: true }, "Modal Open");
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle back button press
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      console.log(event.state)
      if (event.state) {
        if (event.state.modalOpen) {
          closeModal();
        } else {
          // Reset count to its initial state (0)
          setCount(0);
        }
      } else {
        // Reset count to its initial state if no state is found
        setCount(0);
      }
    };

    // Add popstate event listener
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button style={{padding: 20, background: "black"}} onClick={increaseCount}>Increase Count</button>
      <button style={{padding: 20, background: "black"}} onClick={openModal}>Open Modal</button>

      {isModalOpen && (
        <div className="modal">
          <h2>Modal Content</h2>
          <button style={{padding: 20, background: "black"}} onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
};

export default MyComponent;
