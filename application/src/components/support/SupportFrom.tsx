import React from 'react';
import styles from './supportFrom.module.css'
import toast from '@/scripts/toast';

const SupportForm: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    toast('this feature is in progress');
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Submit a Support Ticket</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input type="text" id="name" className={styles.input} placeholder="Your Name"  />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input type="email" id="email" className={styles.input} placeholder="Your Email"  />
        </div>
        <div className={styles.formField}>
          <label htmlFor="subject" className={styles.label}>Subject</label>
          <input type="text" id="subject" className={styles.input} placeholder="Subject"  />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message" className={styles.label}>Message</label>
          <textarea id="message" className={styles.textArea} placeholder="Describe your issue" ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default SupportForm;
