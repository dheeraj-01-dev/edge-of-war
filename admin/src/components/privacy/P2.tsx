import React from 'react';
import styles from './p2.module.css';

const P2 = () => {
  return (
    <div className={styles.privacyPolicyContainer}>
      <h1 className={styles.heading}>Privacy Policy</h1>
      <div className={styles.policyContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Introduction</h2>
          <p className={styles.text}>
            Welcome to our Privacy Policy page. Here, we explain how we handle
            your personal data and protect your privacy when you use our
            platform.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Information We Collect</h2>
          <p className={styles.text}>
            We collect information to provide better services to all our users.
            This includes information you provide directly to us, such as your
            name, email, and any other personal details.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
          <p className={styles.text}>
            We use the information we collect to maintain and improve our
            services, to develop new services, and to protect our platform and
            our users.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Sharing Your Information</h2>
          <p className={styles.text}>
            We do not share your personal information with companies,
            organizations, or individuals outside of our platform unless one of
            the following circumstances applies:
          </p>
          <ul className={styles.list}>
            <li>With your consent</li>
            <li>For legal reasons</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Security of Your Information</h2>
          <p className={styles.text}>
            We work hard to protect your personal information from unauthorized
            access, alteration, disclosure, or destruction. We have a variety of
            security measures in place to maintain the safety of your personal
            information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Your Privacy Rights</h2>
          <p className={styles.text}>
            You have the right to request access to the personal information we
            hold about you. You may also request that we correct any errors in
            your personal information.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Changes to This Privacy Policy</h2>
          <p className={styles.text}>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on our website.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.text}>
            If you have any questions about this Privacy Policy, please contact
            us at support@battleroya.com.
          </p>
        </section>
      </div>
    </div>
  );
};

export default P2;
