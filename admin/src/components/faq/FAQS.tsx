"use client"
import React, { useState } from 'react';
import styles from './FAQ.module.css';

const FAQItem: React.FC<{ question: string; answer: string; searchTerm: string }> = ({ question, answer, searchTerm }) => {
  const [isOpen, setIsOpen] = useState(false);

  const highlightText = (text: string) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.split(regex).map((part, index) =>
      regex.test(part) ? <mark key={index} className={`${styles.highlight} ${styles.mark}`}>{part}</mark> : part
    );
  };

  return (
    <div className={styles.faqItem}>
      <div className={styles.faqQuestion} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.faqQuestionDot}></div>
        <div className={styles.faqQuestionChild}>
            {highlightText(question)}
        </div>
      </div>
      {isOpen && <p className={styles.faqAnswer}>{highlightText(answer)}</p>}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const faqs = [
    { question: 'How can I create an account?', answer: 'To create an account, click on the "Sign Up" button at the top right corner and follow the instructions.' },
    { question: 'How do I reset my password?', answer: 'Click on the "Forgot Password" link on the login page and follow the instructions to reset your password.' },
    { question: 'What are the system requirements for playing?', answer: 'Please check our "System Requirements" page under the "Support" section for detailed information.' },
    { question: 'How can I report a bug?', answer: 'Use the "Report a Bug" form available in the support section or contact our support team directly.' },
    { question: 'How do I participate in tournaments?', answer: 'Register for tournaments through the "Tournaments" page. Ensure you meet the eligibility criteria and follow the registration instructions.' },
    { question: 'How can I contact support?', answer: 'You can contact support via email at support@battleroya.com or use the live chat feature on our support page.' },
    { question: 'What payment methods are accepted?', answer: 'We accept major credit cards, PayPal, and other popular payment methods. Please visit our payment page for more details.' },
    { question: 'How do I update my profile information?', answer: 'Log in to your account and navigate to the "Profile" section where you can update your personal information.' },
    { question: 'Can I delete my account?', answer: 'Yes, you can delete your account by contacting our support team. Please be aware that this action is irreversible.' },
    { question: 'How can I provide feedback?', answer: 'We welcome your feedback! Please use the "Feedback" form available on our support page to share your suggestions and comments.' },
    { question: 'Where can I find the latest patch notes?', answer: 'Check out the "Patch Notes" section under "News" for the latest updates and changes to the game.' },
    { question: 'How can I join the community?', answer: 'Join our community on Discord or visit our forums to connect with other players and participate in discussions.' },
    { question: 'What should I do if I encounter inappropriate behavior?', answer: 'Report inappropriate behavior using the "Report Abuse" form available on our support page or contact our moderation team.' },
    { question: 'Are there any upcoming events?', answer: 'Check the "Events" page for the latest announcements and details on upcoming tournaments and special events.' },
    { question: 'How do I change my email address?', answer: 'Update your email address in the "Account Settings" section of your profile. Make sure to verify your new email address.' },
    { question: 'What is the refund policy?', answer: 'Please refer to our "Refund Policy" page for detailed information on refunds and cancellations.' },
    { question: 'How do I subscribe to the newsletter?', answer: 'You can subscribe to our newsletter by entering your email address in the subscription box available at the bottom of our website.' },
    { question: 'How do I link my social media accounts?', answer: 'You can link your social media accounts through the "Social Media Links" section in your profile settings.' },
    { question: 'What should I do if I forget my username?', answer: 'Use the "Forgot Username" feature on the login page or contact support for assistance.' },
    { question: 'How can I change my in-game settings?', answer: 'Access your in-game settings menu to customize controls, graphics, and other preferences.' },
    { question: 'How do I report a player?', answer: 'To report a player, use the "Report Player" option available in the game or contact our support team with details.' },
    { question: 'What are the guidelines for content creation?', answer: 'Review our "Content Creation Guidelines" on the website to ensure your content complies with our policies.' },
    { question: 'How can I participate in beta tests?', answer: 'Sign up for beta testing opportunities through our website or subscribe to our newsletter for announcements.' },
    { question: 'What should I do if I encounter a technical issue during a match?', answer: 'Report the issue immediately using the in-game support feature or contact our support team for prompt assistance.' },
    { question: 'How do I enable two-factor authentication?', answer: 'Enable two-factor authentication in the "Security Settings" section of your account profile for added security.' },
    { question: 'Can I transfer my account to another platform?', answer: 'Account transfers between platforms are generally not supported. Please contact support for specific inquiries.' },
    { question: 'How can I delete my game data?', answer: 'To delete your game data, please contact our support team. Note that this action may not be reversible.' },
    { question: 'How can I update my payment information?', answer: 'Update your payment information in the "Billing" section of your account settings.' },
    { question: 'How do I participate in community events?', answer: 'Join our community events by checking the "Community Events" page or following announcements on our social media channels.' },
    // Add more FAQs as needed
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Frequently Asked Questions</h1>
      
      <div className={styles.searchContainer}>
        <input
          type="search"
          placeholder="Search FAQs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      
      <div className={styles.faqList}>
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              searchTerm={searchTerm}
            />
          ))
        ) : (
          <p className={styles.noResults}>No FAQs found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
