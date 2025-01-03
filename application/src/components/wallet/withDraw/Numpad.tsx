// "use client"
// import { useState, useEffect, useRef } from 'react';
// import styles from './numpad.module.css'
// import toast from '@/scripts/toast';
// // window.Razorpay

// interface numpad {
//   buttonTemplate ?: string,
//   Withdraw ?: boolean,
//   balance: number,
//   authorization: string | undefined
// }


// const Numpad :React.FC<numpad> = ({ buttonTemplate = "Template", Withdraw = false, balance }) => {
//   const [inputValue, setInputValue] = useState('');
//   const inputRef = useRef<HTMLInputElement>(null);
//   const deleteTimer = useRef<NodeJS.Timeout | null>(null);

//   // const router = useRouter();

//   // Handle button click (numbers or dot)
//   const handleButtonClick = (value: string) => {
//     // Prevent adding '0' as the first character
//     if (value === '0' && inputValue === '') return;

//     // Prevent adding a second '.' (dot)
//     if (value === '.' && inputValue.includes('.')) return;

//     // Check for two decimal places limit
//     const decimalPart = inputValue.split('.')[1];
//     if (decimalPart && decimalPart.length >= 2) return; // Block if already two digits after decimal

//     // Add the clicked value to the input
//     setInputValue((prev) => prev + value);
//   };

//   const handleDelete = () => {
//     setInputValue((prev) => prev.slice(0, -1)); // Delete last character
//   };

//   const handleClear = () => {
//     setInputValue(''); // Clear entire input
//   };

//   const handleMouseDown = () => {
//     deleteTimer.current = setTimeout(handleClear, 500); // Long press clears input after 500ms
//   };

//   const handleMouseUp = () => {
//     if (deleteTimer.current) {
//       clearTimeout(deleteTimer.current); // Clear timer if button is released early
//       deleteTimer.current = null;
//     }
//   };

//   useEffect(() => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, []);

//   // Dynamically set input width based on value length
//   // const inputWidth = `${Math.max(inputValue.length, 1)}ch`;


// //   async function payNow() {

// //     if(+inputValue<10){
// //       return toast("amount must be greater than 10")
// //     }

// //     if(!authorization){
// //       return toast("unAuthorized")
// //     }
// //     try {
// //       const fetchRes = await fetch("/api/payment/create/add-money", {
// //         method: "POST",
// //         headers: {
// //           authorization,
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           amount: +inputValue
// //         })
// //       });
// //       const res = await fetchRes.json();
// //       if(res.error){
// //         return toast(res.error)
// //       }
// //       if(res.success){
// //         // @ts-expect-error response type any
// //         res.data.handler = async function (response) {
// //           try {
// //               const fetchData = await fetch('/api/payment/razorpayhandler/success', {
// //               method: 'POST',
// //               body: JSON.stringify({response}),
// //               headers: {
// //                 authorization,
// //                 'Content-Type': 'application/json',
// //               },
// //           });
// //           const fetchRes = await fetchData.json();
// //           if(fetchRes.success){
// //             toast(fetchRes.data)
// //             router.push("/profile")
// //             return
// //           }
// //           toast(fetchRes.error)
// //           } catch (error) {
// //             // @ts-expect-error response type any
// //             toast(error.message?error.message:error)
// //           }
// //         };
// //         const rzp = new window.Razorpay(res.data);
// //         // @ts-expect-error response type any
// //         rzp.on("payment.failed", async function (response) {
// //           try {
// //               const fetchData = await fetch('/api/payment/razorpayhandler/failed', {
// //               method: 'POST',
// //               body: JSON.stringify({response}),
// //               headers: {
// //                 authorization,
// //               },
// //           });
// //           const fetchRes = await fetchData.json();
// //           if(fetchRes.success){
// //             return toast(fetchRes.data)
// //           }
// //           toast(fetchRes.error)
// //           } catch (error) {
// //             // @ts-expect-error response type any
// //             toast(error.message?error.message:error)
// //           }
// //         });
// //         rzp.open();
// //       }
// //     } catch (error) {
// //       // @ts-expect-error response type any
// //       toast(error.message?error.message:error)
// //     }
// //   }

//   async function withDrawNow() {
//     if(!inputValue){
//       return toast("withdrawable blance required")
//     }
    
//     if(+inputValue>=balance){
//       return toast("withdrawable blance exceed")
//     }

//     toast("working")
    
//   }

//   return (
//     <div>
//       <div className={styles.inputContainer}>
//         <div style={{fontSize: 30}}>₹&nbsp;</div>
//         {/* <input 
//           type="text" 
//           value={inputValue} 
//           ref={inputRef} 
//           className={styles.display} 
//           placeholder="0" 
//           readOnly 
//           style={{ width: inputWidth, fontSize: 30 }} // Dynamic width
//         /> */}
//         <div className={styles.display} style={{fontSize: 40}}>{!inputValue&&<div style={{opacity: 0.5}}>0</div>}{inputValue}</div>
//       </div>

//       <div className={styles.numpadContainer}>
//         <div className={styles.numpad}>
//           {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
//             <button 
//               key={num} 
//               className={styles.numButton} 
//               onClick={() => handleButtonClick(num.toString())}>
//               {num}
//             </button>
//           ))}
//           <button className={styles.numButton} onClick={() => handleButtonClick('.')}>.</button>
//           <button className={styles.numButton} onClick={() => handleButtonClick('0')}>0</button>
//           <button 
//             className={styles.deleteButton} 
//             onClick={handleDelete} 
//             onMouseDown={handleMouseDown} 
//             onMouseUp={handleMouseUp} 
//             onMouseLeave={handleMouseUp} 
//             onTouchStart={handleMouseDown} 
//             onTouchEnd={handleMouseUp}>
//             x
//           </button>
//         </div>
//         <button onClick={withDrawNow} className={`${styles.clearButton} ${inputValue&&+inputValue<=balance&&styles.addMoneyBtnActive} ${Withdraw&&styles.withDrawBtn}`}>{buttonTemplate}</button>
//       </div>
//     </div>
//   );
// };

// export default Numpad;


"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./numpad.module.css";
import toast from "@/scripts/toast";
import Image from "next/image";

// Interface for component props
interface NumpadProps {
  buttonTemplate?: string;
  Withdraw?: boolean;
  balance: number;
  authorization: string | undefined;
}

const Numpad: React.FC<NumpadProps> = ({
  buttonTemplate = "Template",
  Withdraw = false,
  balance,
  authorization,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle numeric input and dot
  const handleButtonClick = (value: string) => {
    if (value === "0" && inputValue === "") return; // Prevent leading 0
    if (value === "." && inputValue.includes(".")) return; // Prevent multiple dots

    // Check for two decimal places limit
    const [integerPart, decimalPart] = inputValue.split(".");
    if (decimalPart && decimalPart.length >= 2) return;

    setInputValue((prev) => prev + value);
  };

  // Handle character deletion
  const handleDelete = () => {
    setInputValue((prev) => prev.slice(0, -1));
  };

  // Handle clearing the input (long press)
  const handleClear = () => {
    setInputValue("");
  };

  // Timer for long press delete
  const handleMouseDown = () => {
    deleteTimer.current = setTimeout(handleClear, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(deleteTimer.current!);
    deleteTimer.current = null;
  };

  const [upiPageActive, setUpiPageActive] = useState(false)
  const [upiPage, setUpiPage] = useState(1)

  // Withdraw function with balance validation
  const withDrawNow = async () => {
    if (!inputValue) return toast("Withdrawable balance required");
    if (+inputValue > balance) return toast("Withdrawable balance exceeds");
    if (+inputValue < 10) return toast("withdraw balance must be more than 10");

    setUpiPageActive(true)
    // Add actual withdrawal functionality here (API call, etc.)
  };


  return (
    <div style={{position: "relative"}}>

      <div className={`${styles.upiModalContainer} ${upiPageActive&&styles.upiPageActive}`}>
        <div className={styles.upiModal}>
          <div className={styles.requestedAmountContainer}>
              <Image onClick={()=>{setUpiPageActive(false)}} height={15} width={15} alt="_" src="/icons/arrowLeftWhite.png" />
            <div className={styles.requestedAmount}>Requested Amount - ₹ {inputValue}</div>
            
          </div>
          <div className={styles.upiHeader}>Add UPI Id</div>
          {
            upiPage===1?
            <div>
              <div className={styles.inputContainer}>
                <Image height={20} width={20} alt="_" src="/icons/wallet.png" />
                <input type="text" className={styles.input} placeholder="enter your upi id" />
              </div>
              <div className={styles.inputContainer}>
                <Image height={20} width={20} alt="_" src="/icons/wallet.png" />
                <input type="text" className={styles.input} placeholder="confirm your upi id" />
              </div>
              <div className={styles.inputContainer}>
                <Image height={20} width={20} alt="_" src="/icons/support.png" />
                <input type="text" className={styles.input} placeholder="enter your contact phone no." />
              </div>
            </div>:
            <div>
              <div className={styles.inputContainer}>
                <Image height={20} width={20} alt="_" src="/icons/email.png" />
                <input type="text" className={styles.input} placeholder="otp sent on registered mail" />
              </div>
              <div className={styles.resendButton}>resend otp?</div>
            </div>
          }
          <div>
            {
              upiPage===1?
              <button className={styles.button} onClick={()=>{setUpiPage(2)}}>Next</button>:
              <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: 10, marginTop: -10}}>
                <button className={styles.button} onClick={()=>{setUpiPage(1)}}>Back</button>
                <button className={styles.submitButton} >Submit</button>
              </div>
            }
          </div>
        </div>
      </div>


      <div className={styles.balanceValueContainer}>
        <div style={{ fontSize: 30 }}>₹&nbsp;</div>
        <div className={styles.display} style={{ fontSize: 40 }}>
          {!inputValue && <div style={{ opacity: 0.5 }}>0</div>}
          {inputValue}
        </div>
      </div>

      <div className={styles.numpadContainer}>
        <div className={styles.numpad}>
          {/* Generate numpad buttons dynamically */}
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((num) => (
            <button
              key={num}
              className={styles.numButton}
              onClick={() => handleButtonClick(num)}
            >
              {num}
            </button>
          ))}
          <button
            className={styles.numButton}
            onClick={() => handleButtonClick(".")}
          >
            .
          </button>
          <button
            className={styles.numButton}
            onClick={() => handleButtonClick("0")}
          >
            0
          </button>
          <button
            className={styles.deleteButton}
            onClick={handleDelete}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            x
          </button>
        </div>

        {/* Submit button for withdraw or other actions */}
        <button
          onClick={withDrawNow}
          className={`${styles.clearButton} ${
            inputValue && +inputValue <= balance && styles.addMoneyBtnActive
          } ${Withdraw && styles.withDrawBtn}`}
        >
          {buttonTemplate}
        </button>
      </div>
    </div>
  );
};

export default Numpad;
