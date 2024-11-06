import React from 'react';
import styles from './terms.module.css'

const Terms: React.FC = () => {
  return (
    <div className={styles.terms}>
      <h1 className={styles.title}>Terms and Conditions</h1>

      <section>
        <h2 className={styles.sectionTitle}>Introduction</h2>
        <p className={styles.paragraph}>
          Welcome to Battleroya.com! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Definitions</h2>
        <ul className={styles.list}>
          <li><strong>"Website"</strong> refers to Battleroya.com.</li>
          <li><strong>"Services"</strong> refers to all features, content, and functionalities provided by the website.</li>
          <li><strong>"User"</strong> refers to anyone who accesses or uses the website.</li>
          <li><strong>"Content"</strong> refers to all text, images, videos, and other materials provided on the website.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>User Accounts</h2>
        <p className={styles.paragraph}>
          <strong>Registration:</strong> To access certain features of the website, you may need to register and create an account. You are responsible for maintaining the confidentiality of your account credentials.
        </p>
        <p className={styles.paragraph}>
          <strong>Eligibility:</strong> You must be at least 13 years old to create an account on Battleroya.com. If you are under 18, you must have permission from a parent or guardian to use our services.
        </p>
        <p className={styles.paragraph}>
          <strong>Account Responsibility:</strong> You are responsible for all activities that occur under your account. You agree to notify us immediately if you suspect any unauthorized use of your account.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Use of the Website</h2>
        <p className={styles.paragraph}>
          <strong>Acceptable Use:</strong> You agree to use the website only for lawful purposes. You must not use the website in any way that could damage, disable, overburden, or impair the website, or interfere with any other party's use of the website.
        </p>
        <p className={styles.paragraph}>
          <strong>Prohibited Activities:</strong> You must not engage in any of the following activities:
        </p>
        <ul className={styles.list}>
          <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
          <li>Posting or transmitting any content that is unlawful, harmful, threatening, abusive, defamatory, vulgar, obscene, or otherwise objectionable.</li>
          <li>Engaging in any form of cheating, hacking, or exploiting bugs to gain an unfair advantage in tournaments or competitions.</li>
          <li>Attempting to gain unauthorized access to any part of the website, other user accounts, or computer systems connected to the website.</li>
        </ul>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Tournaments and Competitions</h2>
        <p className={styles.paragraph}>
          <strong>Eligibility:</strong> Participation in tournaments and competitions may be subject to additional eligibility criteria, which will be provided at the time of registration.
        </p>
        <p className={styles.paragraph}>
          <strong>Rules:</strong> All participants must adhere to the specific rules and guidelines provided for each tournament or competition. Failure to comply may result in disqualification or other penalties.
        </p>
        <p className={styles.paragraph}>
          <strong>Prizes:</strong> Prizes, if any, will be awarded as specified in the tournament details. Battleroya.com reserves the right to substitute prizes of equal value if necessary.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Content Ownership and Intellectual Property</h2>
        <p className={styles.paragraph}>
          <strong>User-Generated Content:</strong> By submitting content to the website (such as forum posts, comments, or uploads), you grant Battleroya.com a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and distribute your content in connection with our services.
        </p>
        <p className={styles.paragraph}>
          <strong>Website Content:</strong> All content on the website, including text, graphics, logos, and software, is the property of Battleroya.com or its content suppliers and is protected by intellectual property laws. You may not use, copy, or distribute any content from the website without our express permission.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Privacy</h2>
        <p className={styles.paragraph}>
          Your privacy is important to us. Please review our <a href="#">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
        <p className={styles.paragraph}>
          <strong>Disclaimer:</strong> The website and services are provided "as is" and "as available," without any warranties of any kind, either express or implied. Battleroya.com does not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.
        </p>
        <p className={styles.paragraph}>
          <strong>Liability:</strong> In no event shall Battleroya.com, its affiliates, or its licensors be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services, even if we have been advised of the possibility of such damages.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Indemnification</h2>
        <p className={styles.paragraph}>
          You agree to indemnify, defend, and hold harmless Battleroya.com, its affiliates, and its licensors from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your use of the website, your violation of these terms, or your violation of any rights of another.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Modifications to Terms</h2>
        <p className={styles.paragraph}>
          Battleroya.com reserves the right to modify these terms and conditions at any time. We will notify users of any significant changes by posting the updated terms on the website. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Governing Law</h2>
        <p className={styles.paragraph}>
          These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any legal action or proceeding related to your use of the website shall be brought exclusively in the courts of [Your Jurisdiction].
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Contact Information</h2>
        <p className={styles.paragraph}>
          If you have any questions about these terms and conditions, please contact us at [email address].
        </p>
      </section>

      <section>
        <h2 className={styles.sectionTitle}>Miscellaneous</h2>
        <p className={styles.paragraph}>
          <strong>Severability:</strong> If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
        </p>
        <p className={styles.paragraph}>
          <strong>Entire Agreement:</strong> These terms constitute the entire agreement between you and Battleroya.com regarding your use of the website.
        </p>
      </section>
    </div>
  );
};

export default Terms;
