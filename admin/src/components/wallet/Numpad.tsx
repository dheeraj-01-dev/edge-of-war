"use client"
import { useState, useEffect, useRef } from 'react';
import styles from './styles/numpad.module.css'


const Numpad = ({buttonTemplate = "Template", Withdraw = false}: {buttonTemplate?: string, Withdraw?: boolean}) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteTimer = useRef<NodeJS.Timeout | null>(null);

  // Handle button click (numbers or dot)
  const handleButtonClick = (value: string) => {
    // Prevent adding '0' as the first character
    if (value === '0' && inputValue === '') return;

    // Prevent adding a second '.' (dot)
    if (value === '.' && inputValue.includes('.')) return;

    // Check for two decimal places limit
    const decimalPart = inputValue.split('.')[1];
    if (decimalPart && decimalPart.length >= 2) return; // Block if already two digits after decimal

    // Add the clicked value to the input
    setInputValue((prev) => prev + value);
  };

  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1)); // Delete last character
  };

  const handleClear = () => {
    setInputValue(''); // Clear entire input
  };

  const handleMouseDown = () => {
    deleteTimer.current = setTimeout(handleClear, 500); // Long press clears input after 500ms
  };

  const handleMouseUp = () => {
    if (deleteTimer.current) {
      clearTimeout(deleteTimer.current); // Clear timer if button is released early
      deleteTimer.current = null;
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Dynamically set input width based on value length
  // const inputWidth = `${Math.max(inputValue.length, 1)}ch`;

  return (
    <div>
      <div className={styles.inputContainer}>
        <div style={{fontSize: 30}}>₹&nbsp;</div>
        {/* <input 
          type="text" 
          value={inputValue} 
          ref={inputRef} 
          className={styles.display} 
          placeholder="0" 
          readOnly 
          style={{ width: inputWidth, fontSize: 30 }} // Dynamic width
        /> */}
        <div className={styles.display} style={{fontSize: 40}}>{!inputValue&&<div style={{opacity: 0.5}}>0</div>}{inputValue}</div>
      </div>

      <div className={styles.numpadContainer}>
        <div className={styles.numpad}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button 
              key={num} 
              className={styles.numButton} 
              onClick={() => handleButtonClick(num.toString())}>
              {num}
            </button>
          ))}
          <button className={styles.numButton} onClick={() => handleButtonClick('.')}>.</button>
          <button className={styles.numButton} onClick={() => handleButtonClick('0')}>0</button>
          <button 
            className={styles.deleteButton} 
            onClick={handleDelete} 
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onMouseLeave={handleMouseUp} 
            onTouchStart={handleMouseDown} 
            onTouchEnd={handleMouseUp}>
            x
          </button>
        </div>
        <button onClick={()=>{}} className={`${styles.clearButton} ${inputValue&&styles.addMoneyBtnActive} ${Withdraw&&styles.withDrawBtn}`}>{buttonTemplate}</button>
      </div>
    </div>
  );
};

export default Numpad;
