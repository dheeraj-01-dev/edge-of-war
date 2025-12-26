"use client";
import React, { useState } from "react";
import styles from './styles/addMoney.module.css'

const AddMoneyPage: React.FC = () => {
  

  async function payNow() {

    // Open Razorpay Checkout
    const options = {
      key: 'rzp_live_vltjM3WQNYwXDN', // Replace with your Razorpay key_id
      amount: '1000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Es portal',
      description: 'Test Transaction',
      order_id: 'order_P8porV98Zy5gVP', // This is the order_id created in the backend
      callback_url: 'http://192.168.253.18:3000/', // Your success URL
      prefill: {
        name: 'Gaurav Kumar',
        email: 'gaurav.kumar@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#F37254'
      },
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }

  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Adding ${amount} to wallet`);
    // You can make an API call here to add money
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add Money to Your Wallet</h1>
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="amount" className={styles.label}>
              Enter Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className={styles.input}
              placeholder="₹ 0.00"
              required
            />
          </div>
          <div className={styles.footer}>
            <button type="submit" className={styles.button} onClick={payNow}>
              Add Money
            </button>
            <p className={styles.note}>No transaction fees for adding money.</p>
          </div>
        </form>
      </div>
      {/* <script src="https://checkout.razorpay.com/v1/checkout.js"></script> */}
    </div>
  );
};

export default AddMoneyPage;
