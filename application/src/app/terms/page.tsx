"use client"

import React from 'react';
import styles from './page.module.css'
import T2 from '@/components/terms/T2';

const page: React.FC = () => {
  return (
    <div className={styles.terms}>
      {/* <Terms /> */}
      <T2 />
    </div>
    // <Container className={styles.terms}>
    //   <Title>Terms and Conditions</Title>

    //   <section>
    //     <SectionTitle>Introduction</SectionTitle>
    //     <Paragraph>
    //       Welcome to Battleroya.com! By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Definitions</SectionTitle>
    //     <List>
    //       <ListItem><strong>"Website"</strong> refers to Battleroya.com.</ListItem>
    //       <ListItem><strong>"Services"</strong> refers to all features, content, and functionalities provided by the website.</ListItem>
    //       <ListItem><strong>"User"</strong> refers to anyone who accesses or uses the website.</ListItem>
    //       <ListItem><strong>"Content"</strong> refers to all text, images, videos, and other materials provided on the website.</ListItem>
    //     </List>
    //   </section>

    //   <section>
    //     <SectionTitle>User Accounts</SectionTitle>
    //     <Paragraph>
    //       <strong>Registration:</strong> To access certain features of the website, you may need to register and create an account. You are responsible for maintaining the confidentiality of your account credentials.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Eligibility:</strong> You must be at least 13 years old to create an account on Battleroya.com. If you are under 18, you must have permission from a parent or guardian to use our services.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Account Responsibility:</strong> You are responsible for all activities that occur under your account. You agree to notify us immediately if you suspect any unauthorized use of your account.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Use of the Website</SectionTitle>
    //     <Paragraph>
    //       <strong>Acceptable Use:</strong> You agree to use the website only for lawful purposes. You must not use the website in any way that could damage, disable, overburden, or impair the website, or interfere with any other party's use of the website.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Prohibited Activities:</strong> You must not engage in any of the following activities:
    //     </Paragraph>
    //     <List>
    //       <ListItem>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</ListItem>
    //       <ListItem>Posting or transmitting any content that is unlawful, harmful, threatening, abusive, defamatory, vulgar, obscene, or otherwise objectionable.</ListItem>
    //       <ListItem>Engaging in any form of cheating, hacking, or exploiting bugs to gain an unfair advantage in tournaments or competitions.</ListItem>
    //       <ListItem>Attempting to gain unauthorized access to any part of the website, other user accounts, or computer systems connected to the website.</ListItem>
    //     </List>
    //   </section>

    //   <section>
    //     <SectionTitle>Tournaments and Competitions</SectionTitle>
    //     <Paragraph>
    //       <strong>Eligibility:</strong> Participation in tournaments and competitions may be subject to additional eligibility criteria, which will be provided at the time of registration.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Rules:</strong> All participants must adhere to the specific rules and guidelines provided for each tournament or competition. Failure to comply may result in disqualification or other penalties.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Prizes:</strong> Prizes, if any, will be awarded as specified in the tournament details. Battleroya.com reserves the right to substitute prizes of equal value if necessary.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Content Ownership and Intellectual Property</SectionTitle>
    //     <Paragraph>
    //       <strong>User-Generated Content:</strong> By submitting content to the website (such as forum posts, comments, or uploads), you grant Battleroya.com a non-exclusive, royalty-free, worldwide license to use, reproduce, modify, and distribute your content in connection with our services.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Website Content:</strong> All content on the website, including text, graphics, logos, and software, is the property of Battleroya.com or its content suppliers and is protected by intellectual property laws. You may not use, copy, or distribute any content from the website without our express permission.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Privacy</SectionTitle>
    //     <Paragraph>
    //       Your privacy is important to us. Please review our <a href="#">Privacy Policy</a> to understand how we collect, use, and protect your personal information.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Limitation of Liability</SectionTitle>
    //     <Paragraph>
    //       <strong>Disclaimer:</strong> The website and services are provided "as is" and "as available," without any warranties of any kind, either express or implied. Battleroya.com does not warrant that the website will be uninterrupted, error-free, or free from viruses or other harmful components.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Liability:</strong> In no event shall Battleroya.com, its affiliates, or its licensors be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or services, even if we have been advised of the possibility of such damages.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Indemnification</SectionTitle>
    //     <Paragraph>
    //       You agree to indemnify, defend, and hold harmless Battleroya.com, its affiliates, and its licensors from and against any and all claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your use of the website, your violation of these terms, or your violation of any rights of another.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Modifications to Terms</SectionTitle>
    //     <Paragraph>
    //       Battleroya.com reserves the right to modify these terms and conditions at any time. We will notify users of any significant changes by posting the updated terms on the website. Your continued use of the website after any such changes constitutes your acceptance of the new terms.
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Governing Law</SectionTitle>
    //     <Paragraph>
    //       These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles. Any legal action or proceeding related to your use of the website shall be brought exclusively in the courts of [Your Jurisdiction].
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Contact Information</SectionTitle>
    //     <Paragraph>
    //       If you have any questions about these terms and conditions, please contact us at [email address].
    //     </Paragraph>
    //   </section>

    //   <section>
    //     <SectionTitle>Miscellaneous</SectionTitle>
    //     <Paragraph>
    //       <strong>Severability:</strong> If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
    //     </Paragraph>
    //     <Paragraph>
    //       <strong>Entire Agreement:</strong> These terms constitute the entire agreement between you and Battleroya.com regarding your use of the website.
    //     </Paragraph>
    //   </section>
    // </Container>
  );
};

export default page;
