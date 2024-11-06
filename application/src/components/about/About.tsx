
"use client"
import React from 'react';
import './about.css';
import styles from './about.module.css';


// const About: React.FC = () => {
//   return (
//     <div className="about-us">
//       <h1 className="heading1">About Us</h1>

//       <section className="section">
//         <h2 className="heading2">Welcome to Battleroya.com</h2>
//         <p className="paragraph">
//           Welcome to Battleroya.com, the ultimate destination for eSports enthusiasts! Our mission is to bring gamers together from around the world, creating a thriving community where competitive gaming is celebrated, and every player has the opportunity to shine.
//         </p>
//       </section>

//       <section className="section">
//         <h2 className="heading2">Our Story</h2>
//         <p className="paragraph">
//           Battleroya.com was founded in [Year] by a group of passionate gamers who recognized the growing need for a dedicated platform where players could connect, compete, and improve. Today, Battleroya.com is a hub for eSports news, events, live streams, and much more.
//         </p>
//       </section>

//       <section className="section">
//         <h2 className="heading2">Our Mission</h2>
//         <p className="paragraph">
//           At Battleroya, we believe that eSports is more than just a game—it's a way of life. Our mission is to provide a platform where every gamer, regardless of skill level, can participate in competitive gaming.
//         </p>
//       </section>

//       <section className="section">
//         <h2 className="heading2">What We Offer</h2>
//         <ul className="list">
//           <li>Tournaments & Events</li>
//           <li>News & Updates</li>
//           <li>Community Forums</li>
//           <li>Live Streams</li>
//           <li>Educational Resources</li>
//         </ul>
//       </section>

//       <section className="section">
//         <h2 className="heading2">Meet the Team</h2>
//         <p className="paragraph">[Add team member profiles here]</p>
//       </section>

//       <section className="section">
//         <h2 className="heading2">Our Values</h2>
//         <ul className="list">
//           <li>Community</li>
//           <li>Integrity</li>
//           <li>Innovation</li>
//           <li>Excellence</li>
//         </ul>
//       </section>

//       <section className="section">
//         <h2 className="heading2">Join Us</h2>
//         <p className="paragraph">
//           Whether you're here to compete, learn, or just connect with fellow gamers, Battleroya.com has something for you. Join us today and become a part of the future of eSports!
//         </p>
//       </section>

//       <section className="section">
//         <h2 className="heading2">Contact Us</h2>
//         <p className="paragraph">
//           Reach out to us at [email address] or follow us on [social media links].
//         </p>
//       </section>
//     </div>
//   );
// };

// export default About;



const About: React.FC = () => {
  return (
    <div className={styles.aboutUs}>
      <h1 className={styles.title}>About Us</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Welcome to Battleroya.com</h2>
        <p className={styles.paragraph}>
          Welcome to Battleroya.com, the ultimate destination for eSports enthusiasts! Our mission is to bring gamers together from around the world, creating a thriving community where competitive gaming is celebrated, and every player has the opportunity to shine.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Story</h2>
        <p className={styles.paragraph}>
          Battleroya.com was founded in [Year] by a group of passionate gamers who recognized the growing need for a dedicated platform where players could connect, compete, and improve. Today, Battleroya.com is a hub for eSports news, events, live streams, and much more.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Mission</h2>
        <p className={styles.paragraph}>
          At Battleroya, we believe that eSports is more than just a game—it's a way of life. Our mission is to provide a platform where every gamer, regardless of skill level, can participate in competitive gaming.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <ul className={styles.list}>
          <li>Tournaments & Events</li>
          <li>News & Updates</li>
          <li>Community Forums</li>
          <li>Live Streams</li>
          <li>Educational Resources</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Meet the Team</h2>
        <p className={styles.paragraph}>[Add team member profiles here]</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Our Values</h2>
        <ul className={styles.list}>
          <li>Community</li>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Excellence</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Join Us</h2>
        <p className={styles.paragraph}>
          Whether you're here to compete, learn, or just connect with fellow gamers, Battleroya.com has something for you. Join us today and become a part of the future of eSports!
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.paragraph}>
          Reach out to us at [email address] or follow us on [social media links].
        </p>
      </section>
    </div>
  );
};

export default About;
