import React from 'react';
import styles from './privacy.module.css'

const PrivacyPolicy: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Introduction</h2>
        <p className={styles.paragraph}>
          Welcome to Battleroya.com! This privacy policy explains how we collect, use, and protect your personal information when you visit our website.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Information We Collect</h2>
        <p className={styles.paragraph}>
          We collect information that you provide directly to us when you create an account, participate in games, or contact us. This may include your name, email address, and other contact information.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
        <p className={styles.paragraph}>
          We use the information we collect to operate and improve our website, communicate with you, and provide you with personalized experiences. We may also use your information to comply with legal obligations or respond to legal requests.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Protection</h2>
        <p className={styles.paragraph}>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no online service can be completely secure, and we cannot guarantee the security of your information.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies and Tracking Technologies</h2>
        <p className={styles.paragraph}>
          We use cookies and similar tracking technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of the site.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Your Rights</h2>
        <p className={styles.paragraph}>
          You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided on our website.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
        <p className={styles.paragraph}>
          We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions or concerns about this privacy policy, please contact us at support@battleroya.com.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
