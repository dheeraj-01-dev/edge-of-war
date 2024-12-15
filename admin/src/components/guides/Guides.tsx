import React from 'react';
import styles from './guides.module.css';

const guides = [
  {
    title: 'Getting Started',
    content:
      'Learn the basics of joining and participating in our eSports platform. This guide will walk you through account creation, profile setup, and basic navigation.',
  },
  {
    title: 'Creating a Team',
    content:
      'Step-by-step instructions on how to create and manage your team. From inviting members to organizing practice sessions, we cover it all.',
  },
  {
    title: 'Joining Tournaments',
    content:
      'Find out how to register and compete in tournaments. We provide tips on preparation and strategies for increasing your chances of winning.',
  },
  {
    title: 'Earning Rewards',
    content:
      'Discover ways to earn rewards and track your progress. Learn about our points system, leaderboards, and prize redemption.',
  },
  {
    title: 'Community Guidelines',
    content:
      'Understand the rules and regulations that govern our platform. Ensure a positive and respectful environment for all participants.',
  },
];

const Guide = () => {
  return (
    <div className={styles.guideContainer}>
      <h1 className={styles.heading}>Guides</h1>
      <p className={styles.description}>
        Welcome to our comprehensive guide section. Here, you'll find
        everything you need to know to get started and excel in our eSports
        platform. Explore the guides below to learn more.
      </p>
      <div className={styles.guideList}>
        {guides.map((guide, index) => (
          <div key={index} className={styles.guideCard}>
            <h2 className={styles.guideTitle}>{guide.title}</h2>
            <p className={styles.guideContent}>{guide.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;
