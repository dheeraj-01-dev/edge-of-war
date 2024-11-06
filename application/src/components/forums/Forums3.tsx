
"use client"
import React, { useState } from 'react';
import styles from './forums.module.css';

const ForumSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const ForumPost: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.post}>
      <h3 className={styles.question} onClick={() => setIsOpen(!isOpen)}>
        {question}
      </h3>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </div>
  );
};

const Forums: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Community Forums</h1>

      <ForumSection title="General Discussion">
        <ForumPost 
          question="What are the best strategies for winning in Battle Royale games?" 
          answer="The best strategies include landing in less popular areas to avoid early fights, gathering resources quickly, and staying aware of the shrinking play area."
        />
        <ForumPost 
          question="Can you recommend some must-play games in the genre?" 
          answer="Certainly! Some popular Battle Royale games are 'Fortnite', 'Apex Legends', and 'PUBG'. Each offers unique mechanics and experiences."
        />
      </ForumSection>

      <ForumSection title="Technical Support">
        <ForumPost 
          question="How do I fix connection issues in the game?" 
          answer="First, check your internet connection. If it's stable, try restarting your router. Additionally, ensure that the game servers are not down for maintenance."
        />
        <ForumPost 
          question="What should I do if the game crashes frequently?" 
          answer="Try updating your graphics drivers and checking for any available game updates. If the problem persists, you may need to verify the game files or reinstall the game."
        />
      </ForumSection>

      <ForumSection title="Tournaments and Events">
        <ForumPost 
          question="When is the next major tournament happening?" 
          answer="The next major tournament is scheduled for next month. Details will be announced on our official website and social media channels."
        />
        <ForumPost 
          question="How can I participate in upcoming events?" 
          answer="You can register for events through our website. Keep an eye on the 'Events' section for upcoming tournaments and competitions."
        />
      </ForumSection>

      <ForumSection title="Community Feedback">
        <ForumPost 
          question="How can I suggest new features for the game?" 
          answer="Please submit your feature suggestions through the 'Feedback' section on our website. We review all suggestions and appreciate your input!"
        />
        <ForumPost 
          question="What changes would you like to see in the next update?" 
          answer="We are constantly working to improve the game based on community feedback. Some areas of focus include enhancing game balance and adding new content."
        />
      </ForumSection>
    </div>
  );
};

export default Forums