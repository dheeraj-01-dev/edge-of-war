"use client"
import React, { useState } from 'react';
import styles from './support.module.css'
import SupportForm from './SupportFrom';
import Link from 'next/link';

interface FAQItemProps {
  question: string;
  children: React.ReactElement;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItemContainer}>
      <h3 className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        {question}
      </h3>
      {isOpen && <div className={styles.faqAnswer}>{children}</div>}
    </div>
  );
};

const Support: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Battleroya.com Support Page</h1>

      {/* Introduction */}
      <section>
        <h2 className={styles.sectionTitle}>Welcome to Battleroya Support!</h2>
        <p className={styles.paragraph}>
          At Battleroya, we are committed to providing top-notch support to our community of gamers.
          Whether you need help with your account, have questions about tournaments, or want to report an issue,
          our support team is here to assist you.
        </p>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className={styles.sectionTitle}>Common Issues & Solutions <Link className={styles.link} href="/faq" >(FAQ)</Link></h2>
        <FAQItem question="How do I reset my password?">
          <p className={styles.paragraph}>You can reset your password by clicking on 'Forgot Password' at the login page and following the instructions.</p>
        </FAQItem>
        <FAQItem question="How do I change my email address?">
          <p className={styles.paragraph}>You can change your email address in your account settings under 'Profile Information'.</p>
        </FAQItem>
        <FAQItem question="How do I delete my account?">
          <p className={styles.paragraph}>To delete your account, please contact our support team directly at support@battleroya.com.</p>
        </FAQItem>
        {/* Add more FAQItems as needed */}
      </section>

      {/* Contact Support */}
      <section>
        <h2 className={styles.sectionTitle}>Contact Support</h2>
        <p className={styles.paragraph}>Email: <Link href="mailto:support@battleroya.com" className={styles.link}>support@battleroya.com</Link></p>
        <p className={styles.paragraph}>Live Chat: Available for real-time assistance (Feature to be integrated)</p>
        <p className={styles.paragraph}>Submit a Ticket: Fill out the <Link href="#ticket-form" className={styles.link}>support ticket form</Link> below.</p>
      </section>

      {/* Integrating the Support Form */}
      <section>
        <SupportForm />
      </section>

      {/* Community Support */}
      <section>
        <h2 className={styles.sectionTitle}>Community Support</h2>
        <p className={styles.paragraph}>Join our <Link href="https://discord.gg/your-discord-link" className={styles.link}>Discord Server</Link> for live community support and discussions.</p>
        <p className={styles.paragraph}>Visit our <Link href="/forums" className={styles.link}>Forums</Link> to ask questions and share experiences.</p>
      </section>

      {/* Knowledge Base */}
      <section>
        <h2 className={styles.sectionTitle}>Knowledge Base</h2>
        <p className={styles.paragraph}>Check out our <Link href="/guides" className={styles.link}>Tutorials & Guides</Link> for detailed instructions on various topics.</p>
        <p className={styles.paragraph}>Read the latest <Link href="/patch-notes" className={styles.link}>Patch Notes</Link> for updates and improvements.</p>
      </section>

      {/* Report a Problem */}
      <section>
        <h2 className={styles.sectionTitle}>Report a Problem</h2>
        <p className={styles.paragraph}>If you encounter cheating, abuse, or inappropriate behavior, report it <Link href="#report-abuse" className={styles.link}>here</Link>.</p>
        <p className={styles.paragraph}>To report bugs or glitches, please use our <Link href="#bug-report" className={styles.link}>Bug Report</Link> form.</p>
      </section>

      {/* Social Media & Updates */}
      <section>
        <h2 className={styles.sectionTitle}>Social Media & Updates</h2>
        <p className={styles.paragraph}>Follow us on <Link href="https://twitter.com/your-twitter" className={styles.link}>Twitter</Link> and <Link href="https://facebook.com/your-facebook" className={styles.link}>Facebook</Link> for updates and announcements.</p>
        <p className={styles.paragraph}>Read our latest <Link href="/news" className={styles.link}>Blog/News</Link> for more information.</p>
      </section>

      {/* Feedback */}
      <section>
        <h2 className={styles.sectionTitle}>Feedback</h2>
        <p className={styles.paragraph}>We value your feedback! Please fill out our <Link href="#feedback-form" className={styles.link}>User Feedback Form</Link>.</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p className={styles.paragraph}>
          <Link href="/terms" className={styles.link}>Terms of Service</Link> | <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
        </p>
        <p className={styles.paragraph}>&copy; 2024 Battleroya.com. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Support;
