// import React from 'react';
// import styles from './page.module.css'

// export default function About() {
//   return (
//     <div className={styles.about} style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h1>About Us</h1>

//       <section>
//         <h2>Welcome to Battleroya.com</h2>
//         <p>
//           Welcome to Battleroya.com, the ultimate destination for eSports enthusiasts! Our mission is to bring gamers together from around the world, creating a thriving community where competitive gaming is celebrated, and every player has the opportunity to shine.
//         </p>
//       </section>

//       <section>
//         <h2>Our Story</h2>
//         <p>
//           Battleroya.com was founded in [Year] by a group of passionate gamers who recognized the growing need for a dedicated platform where players could connect, compete, and improve. Today, Battleroya.com is a hub for eSports news, events, live streams, and much more.
//         </p>
//       </section>

//       <section>
//         <h2>Our Mission</h2>
//         <p>
//           At Battleroya, we believe that eSports is more than just a game—it's a way of life. Our mission is to provide a platform where every gamer, regardless of skill level, can participate in competitive gaming.
//         </p>
//       </section>

//       <section>
//         <h2>What We Offer</h2>
//         <ul>
//           <li>Tournaments & Events</li>
//           <li>News & Updates</li>
//           <li>Community Forums</li>
//           <li>Live Streams</li>
//           <li>Educational Resources</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Meet the Team</h2>
//         <p>[Add team member profiles here]</p>
//       </section>

//       <section>
//         <h2>Our Values</h2>
//         <ul>
//           <li>Community</li>
//           <li>Integrity</li>
//           <li>Innovation</li>
//           <li>Excellence</li>
//         </ul>
//       </section>

//       <section>
//         <h2>Join Us</h2>
//         <p>Whether you're here to compete, learn, or just connect with fellow gamers, Battleroya.com has something for you. Join us today and become a part of the future of eSports!</p>
//       </section>

//       <section>
//         <h2>Contact Us</h2>
//         <p>Reach out to us at [email address] or follow us on [social media links].</p>
//       </section>
//     </div>
//   );
// }


"use client"
import React from 'react';
import styles from './page.module.css'
import About from '@/components/about/About';

const AboutUs: React.FC = () => {
  return (
    <div className={styles.about}>
      <About/>
    </div>
    // <Container className={styles.about}>
    //   <Heading1>About Us</Heading1>

    //   <Section>
    //     <Heading2>Welcome to Battleroya.com</Heading2>
    //     <Paragraph>
    //       Welcome to Battleroya.com, the ultimate destination for eSports enthusiasts! Our mission is to bring gamers together from around the world, creating a thriving community where competitive gaming is celebrated, and every player has the opportunity to shine.
    //     </Paragraph>
    //   </Section>

    //   <Section>
    //     <Heading2>Our Story</Heading2>
    //     <Paragraph>
    //       Battleroya.com was founded in [Year] by a group of passionate gamers who recognized the growing need for a dedicated platform where players could connect, compete, and improve. Today, Battleroya.com is a hub for eSports news, events, live streams, and much more.
    //     </Paragraph>
    //   </Section>

    //   <Section>
    //     <Heading2>Our Mission</Heading2>
    //     <Paragraph>
    //       At Battleroya, we believe that eSports is more than just a game—it's a way of life. Our mission is to provide a platform where every gamer, regardless of skill level, can participate in competitive gaming.
    //     </Paragraph>
    //   </Section>

    //   <Section>
    //     <Heading2>What We Offer</Heading2>
    //     <List>
    //       <li>Tournaments & Events</li>
    //       <li>News & Updates</li>
    //       <li>Community Forums</li>
    //       <li>Live Streams</li>
    //       <li>Educational Resources</li>
    //     </List>
    //   </Section>

    //   <Section>
    //     <Heading2>Meet the Team</Heading2>
    //     <Paragraph>[Add team member profiles here]</Paragraph>
    //   </Section>

    //   <Section>
    //     <Heading2>Our Values</Heading2>
    //     <List>
    //       <li>Community</li>
    //       <li>Integrity</li>
    //       <li>Innovation</li>
    //       <li>Excellence</li>
    //     </List>
    //   </Section>

    //   <Section>
    //     <Heading2>Join Us</Heading2>
    //     <Paragraph>
    //       Whether you're here to compete, learn, or just connect with fellow gamers, Battleroya.com has something for you. Join us today and become a part of the future of eSports!
    //     </Paragraph>
    //   </Section>

    //   <Section>
    //     <Heading2>Contact Us</Heading2>
    //     <Paragraph>
    //       Reach out to us at [email address] or follow us on [social media links].
    //     </Paragraph>
    //   </Section>
    // </Container>
  );
};

export default AboutUs;
