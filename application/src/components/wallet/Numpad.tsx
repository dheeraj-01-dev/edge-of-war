"use client"
import { useState, useEffect, useRef } from 'react';
import styles from './styles/numpad.module.css'
import toast from '@/scripts/toast';
// window.Razorpay




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


  async function payNow() {

    // Open Razorpay Checkout
    const options = {
      key: 'rzp_live_vltjM3WQNYwXDN', // Replace with your Razorpay key_id
      amount: '200', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'edge of eSports',
      description: 'Test Transaction',
      order_id: 'order_PbfOHYH5aLBjp7', // This is the order_id created in the backend
      handler: function(response :RazorpayPaymentResponse) {

        // Send response to your server to update the transaction status
        // You can use fetch or axios to send the response data to the server
        fetch('http://192.168.175.131:5000/payments/order/pay', {
            method: 'POST',
            body: JSON.stringify({
              response
            }),
            headers: {
              "apikey": "123@edgeofwaresports.com",
                'Content-Type': 'application/json',
            }
        })
        .then((res) => res.json())
        .then((data) => {
            toast("Payment status updated successfully"+ data);
        })
        .catch((err) => {
            toast("Error updating payment status"+err);
        });
    },
      // callback_url: 'http://192.168.175.131:5000/payments/order/pay', // Your success URL
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();


    interface RazorpayPaymentResponse {
      razorpay_payment_id: string;  // ID of the payment
      razorpay_order_id: string;    // ID of the order
      razorpay_signature: string;   // Signature for payment verification
      event?: string;               // (Optional) Event type, like 'payment.success' or 'payment.failed'
      error?: {
          reason: string;           // Failure reason
          description: string;      // Description of the error
      };
  }
  

      //   // Handle success and failure events
      //   rzp.on('payment.success', function(response :RazorpayPaymentResponse) {

      //     // Send response to your server to update the transaction status
      //     // You can use fetch or axios to send the response data to the server
      //     fetch('http://192.168.175.131:5000/payments/order/pay', {
      //         method: 'POST',
      //         body: JSON.stringify({
      //           response
      //         }),
      //         headers: {
      //           "apikey": "123@edgeofwaresports.com",
      //             'Content-Type': 'application/json',
      //         }
      //     })
      //     .then((res) => res.json())
      //     .then((data) => {
      //         toast("Payment status updated successfully"+ data);
      //     })
      //     .catch((err) => {
      //         toast("Error updating payment status"+err);
      //     });
      // });
  
      rzp.on('payment.failed', function(response :RazorpayPaymentResponse) {
          toast("Payment failed"+ response);
  
          // Handle payment failure, you may want to notify the user or log the failure
          fetch('http://192.168.175.131:5000/payments/order/pay', {
              method: 'POST',
              body: JSON.stringify({
                response
              }),
              headers: {
                "apikey": "123@edgeofwaresports.com",
                  'Content-Type': 'application/json',
              }
          })
          .then((res) => res.json())
          .then((data) => {
              toast("Payment failure status updated"+data);
          })
          .catch((err) => {
              toast("Error updating payment failure status"+err);
          });
      });
  }

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
        <button onClick={payNow} className={`${styles.clearButton} ${inputValue&&styles.addMoneyBtnActive} ${Withdraw&&styles.withDrawBtn}`}>{buttonTemplate}</button>
      </div>
    </div>
  );
};

export default Numpad;
