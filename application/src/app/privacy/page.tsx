"use client"
import React from 'react';
import styles from './page.module.css'
import P2 from '@/components/privacy/P2';

const page: React.FC = () => {
  return (
    <div className={styles.privacy}>
      {/* <PrivacyPolicy /> */}
      <P2 />
    </div>
    // <Container className={styles.privacy}>
    //   <Title>Privacy Policy</Title>
    //   <Section>
    //     <Heading>Introduction</Heading>
    //     <Paragraph>
    //       Welcome to Battleroya.com! This privacy policy explains how we collect, use, and protect your personal information when you visit our website.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>Information We Collect</Heading>
    //     <Paragraph>
    //       We collect information that you provide directly to us when you create an account, participate in games, or contact us. This may include your name, email address, and other contact information.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>How We Use Your Information</Heading>
    //     <Paragraph>
    //       We use the information we collect to operate and improve our website, communicate with you, and provide you with personalized experiences. We may also use your information to comply with legal obligations or respond to legal requests.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>Data Protection</Heading>
    //     <Paragraph>
    //       We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no online service can be completely secure, and we cannot guarantee the security of your information.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>Cookies and Tracking Technologies</Heading>
    //     <Paragraph>
    //       We use cookies and similar tracking technologies to enhance your experience on our website. You can choose to disable cookies through your browser settings, but this may affect the functionality of the site.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>Your Rights</Heading>
    //     <Paragraph>
    //       You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided on our website.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>Changes to This Privacy Policy</Heading>
    //     <Paragraph>
    //       We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
    //     </Paragraph>
    //   </Section>
    //   <Section>
    //     <Heading>Contact Us</Heading>
    //     <Paragraph>
    //       If you have any questions or concerns about this privacy policy, please contact us at support@battleroya.com.
    //     </Paragraph>
    //   </Section>
    // </Container>
  );
};

export default page;
