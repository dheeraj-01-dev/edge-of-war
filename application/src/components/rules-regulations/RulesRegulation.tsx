// import React from 'react'
// import Head from 'next/head'
// import { FC } from 'react'
// import styles from './styles/rulesRegulations.module.css'

// const Rules: FC = () => {
//   return (
//     <>
//       <Head>
//         <title>edge of eSports Tournament - Rules & Regulations</title>
//         <meta name="description" content="Free Fire Tournament Rules & Regulations" />
//       </Head>

//       <div className={styles.container}>
//         <h1>edge of eSports Tournament - Rules & Regulations</h1>

//         <section>
//           <h2>1. Eligibility</h2>
//           <ul>
//             <li><strong>Age Requirement:</strong> Players must be at least <strong>13 years old</strong> to participate. Players under the age of 18 must have parental consent.</li>
//             <li><strong>Account Requirement:</strong> Participants must have a valid <strong>Free Fire account</strong> in good standing and should not be banned or restricted by Garena Free Fire.</li>
//             <li><strong>Region Restrictions:</strong> Some tournaments may have regional restrictions. Please check the specific tournament details for eligibility by region.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>2. Registration</h2>
//           <ul>
//             <li><strong>Sign-Up Process:</strong> Players must sign up with a valid <strong>Free Fire ID</strong> and <strong>in-game name</strong> via our platform.</li>
//             <li><strong>Tournament Fees:</strong> Some tournaments may require an entry fee. All fees must be paid before the registration deadline.</li>
//             <li><strong>Team Composition:</strong> Depending on the format, teams may consist of <strong>2-4 players</strong>. Make sure your team is registered before the event starts.</li>
//             <li><strong>Registration Deadline:</strong> Ensure you register before the deadline. Late registrations will not be accepted.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>3. Tournament Structure</h2>
//           <ul>
//             <li><strong>Format:</strong> The tournament format (e.g., Solo, Duo, Squad) will be specified in the tournament details.</li>
//             <li><strong>Rounds & Matches:</strong> The tournament will have multiple rounds. Each match will have a set duration and map.</li>
//             <li><strong>Prize Pool:</strong> Prizes will be awarded based on final standings, and the distribution of prizes will be announced before the tournament.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>4. Gameplay Rules</h2>
//           <ul>
//             <li><strong>Cheating and Hacks:</strong> Any form of cheating, including aimbots or wallhacks, is strictly prohibited. Players caught cheating will be disqualified.</li>
//             <li><strong>Fair Play:</strong> Players must follow the <strong>Fair Play Code</strong> and avoid exploiting bugs or glitches.</li>
//             <li><strong>Equipment & Settings:</strong> Players must use their own devices and internet connections. We are not responsible for any technical issues.</li>
//             <li><strong>Match Disputes:</strong> Report issues to the tournament moderators within the specified time frame. Organizers' decisions are final.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>5. Player Conduct</h2>
//           <ul>
//             <li><strong>Respect and Sportsmanship:</strong> Participants must show respect towards other players and organizers. Harassment or unsportsmanlike behavior will not be tolerated.</li>
//             <li><strong>Disqualification:</strong> Players violating any rules or engaging in inappropriate behavior will be disqualified from the tournament.</li>
//             <li><strong>Code of Conduct Agreement:</strong> By participating, players agree to follow these rules and the Code of Conduct.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>6. Streaming and Content</h2>
//           <ul>
//             <li><strong>Streaming Rules:</strong> Participants are allowed to stream, but must avoid inappropriate content.</li>
//             <li><strong>Tournament Content Use:</strong> Participants agree that the organizers may use their gameplay footage, names, and likeness in promotional material.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>7. Prizes and Rewards</h2>
//           <ul>
//             <li><strong>Prize Distribution:</strong> Prizes will be awarded based on final standings. Distribution details will be announced before the tournament starts.</li>
//             <li><strong>Prize Claimed by Team Captain:</strong> In team-based tournaments, the prize will be awarded to the team captain for distribution.</li>
//             <li><strong>Taxation:</strong> Participants are responsible for any taxes related to the prizes.</li>
//             <li><strong>No Substitution of Prizes:</strong> Prizes cannot be exchanged for cash unless specified.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>8. Schedule and Timezones</h2>
//           <ul>
//             <li><strong>Match Schedule:</strong> Matches will be scheduled and communicated to players. Ensure you log in 30 minutes before your match.</li>
//             <li><strong>Time Zone Considerations:</strong> All schedules are in <strong>UTC</strong>, please adjust accordingly to your time zone.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>9. Technical Issues</h2>
//           <ul>
//             <li><strong>Internet Connection:</strong> Players should have a stable internet connection. We are not responsible for any connection issues.</li>
//             <li><strong>Device Issues:</strong> If you experience device problems, report them immediately for assessment.</li>
//           </ul>
//         </section>

//         <section>
//           <h2>10. General Terms</h2>
//           <ul>
//             <li><strong>Modifications:</strong> Organizers may modify or update the rules at any time. Participants will be notified of any changes.</li>
//             <li><strong>Force Majeure:</strong> The organizers reserve the right to delay or cancel the tournament due to unforeseen events.</li>
//             <li><strong>Limitation of Liability:</strong> Organizers are not responsible for any damages, loss, or harm during the tournament.</li>
//             <li><strong>Legal Jurisdiction:</strong> The tournament will be governed by local laws. Any disputes will be resolved in the appropriate legal courts.</li>
//           </ul>
//         </section>

//         <section className={styles.unlimitedAmmo}>
//           <h2>11. Unlimited Ammo Custom Rule</h2>
//           <ul>
//             <li><strong>Prohibited Items:</strong> The following items are prohibited in Unlimited Ammo Custom matches:
//               <ul>
//                 <li>Grenades</li>
//                 <li>Flashbangs</li>
//                 <li>Smoke Grenades</li>
//                 <li>Gluu Wall Melter</li>
//                 <li>Freezer</li>
//               </ul>
//             </li>
//             <li>Any player caught using these items will be immediately disqualified from the tournament.</li>
//           </ul>
//         </section>

//         <section className={styles.teamAbsenceRule}>
//             <h2>12. Team Changes and Absence Penalty</h2>
//             <ul>
//                 <li><strong>No Team Changes After Registration:</strong> Once you have registered your team for the tournament, you cannot change your team members. Make sure your team is finalized before registration.</li>
//                 <li><strong>Absence of Registered Player:</strong> If any registered player is unavailable at the time of the contest, the team must proceed without that player. The missing player cannot be replaced with another player.</li>
//                 <li><strong>Team Late Arrival:</strong> If the entire team does not arrive within 5 minutes of the contest start time, the match will automatically be awarded to the opposing team as a forfeit.</li>
//             </ul>
//         </section>


//         <section>
//           <p>By participating, you acknowledge that you have read and agreed to the above rules and regulations.</p>
//         </section>
//       </div>
//     </>
//   )
// }

// export default Rules

import React from 'react'
import Head from 'next/head'
import { FC } from 'react'
import styles from './styles/rulesRegulations.module.css'

const Rules: FC = () => {
  const rules = [

    {
        heading: 'Unlimited Ammo Custom Rule',
        points: [
          "The following items are prohibited in Unlimited Ammo Custom matches:",
          "- Grenades",
          "- Flashbangs",
          "- Smoke Grenades",
          "- Gluu Wall Melter",
          "- Freezer",
          "Any player caught using these items will be immediately disqualified from the tournament."
        ]
    },
    {
    heading: 'Team Changes and Absence Penalty',
    points: [
        "Once you have registered your team for the tournament, you cannot change your team members. Make sure your team is finalized before registration.",
        "If any registered player is unavailable at the time of the contest, the team must proceed without that player. The missing player cannot be replaced with another player.",
        "If the entire team does not arrive within 5 minutes of the contest start time, the match will automatically be awarded to the opposing team as a forfeit."
    ]
    },
    {
      heading: 'Eligibility',
      points: [
        "Players must be at least 13 years old to participate. Players under the age of 18 must have parental consent.",
        "Participants must have a valid Free Fire account in good standing and should not be banned or restricted by Garena Free Fire.",
        "Some tournaments may have regional restrictions. Please check the specific tournament details for eligibility by region."
      ]
    },
    {
      heading: 'Registration',
      points: [
        "Players must sign up with a valid Free Fire ID and in-game name via our platform.",
        "Some tournaments may require an entry fee. All fees must be paid before the registration deadline.",
        "Depending on the format, teams may consist of 2-4 players. Make sure your team is registered before the event starts.",
        "Ensure you register before the deadline. Late registrations will not be accepted."
      ]
    },
    {
      heading: 'Tournament Structure',
      points: [
        "The tournament format (e.g., Solo, Duo, Squad) will be specified in the tournament details.",
        "The tournament will have multiple rounds. Each match will have a set duration and map.",
        "Prizes will be awarded based on final standings, and the distribution of prizes will be announced before the tournament."
      ]
    },
    {
        heading: 'Gameplay Rules',
        points: [
          "Any form of cheating, including aimbots or wallhacks, is strictly prohibited. Players caught cheating will be disqualified.",
          "Players must follow the Fair Play Code and avoid exploiting bugs or glitches.",
          "Players must use their own devices and internet connections. We are not responsible for any technical issues.",
          "Report issues to the tournament moderators within the specified time frame. Organizers' decisions are final.",
          "Team-up Not Allowed: Players are not permitted to team up with opponents or form alliances during matches. Any violation of this rule will lead to disqualification."
        ]
    },      
    {
      heading: 'Player Conduct',
      points: [
        "Participants must show respect towards other players and organizers. Harassment or unsportsmanlike behavior will not be tolerated.",
        "Players violating any rules or engaging in inappropriate behavior will be disqualified from the tournament.",
        "By participating, players agree to follow these rules and the Code of Conduct."
      ]
    },
    {
      heading: 'Streaming and Content',
      points: [
        "Participants are allowed to stream, but must avoid inappropriate content.",
        "Participants agree that the organizers may use their gameplay footage, names, and likeness in promotional material."
      ]
    },
    {
      heading: 'Prizes and Rewards',
      points: [
        "Prizes will be awarded based on final standings. Distribution details will be announced before the tournament starts.",
        "In team-based tournaments, the prize will be awarded to the team captain for distribution.",
        "Participants are responsible for any taxes related to the prizes.",
        "Prizes cannot be exchanged for cash unless specified."
      ]
    },
    {
        heading: 'Team Captain and Registration',
        points: [
          "The player who registers the team, joins the contest, and pays the entry fee will be considered the official team captain.",
          "The team captain is responsible for team coordination, communication, and ensuring all team members are present and ready for the tournament."
        ]
    },      
    {
      heading: 'Schedule and Timezones',
      points: [
        "Matches will be scheduled and communicated to players. Ensure you log in 10 minutes before your match.",
        "All schedules are in UTC, please adjust accordingly to your time zone."
      ]
    },
    {
      heading: 'Technical Issues',
      points: [
        "Players should have a stable internet connection. We are not responsible for any connection issues.",
        "If you experience device problems, report them immediately for assessment."
      ]
    },
    {
      heading: 'General Terms',
      points: [
        "Organizers may modify or update the rules at any time. Participants will be notified of any changes.",
        "The organizers reserve the right to delay or cancel the tournament due to unforeseen events.",
        "Organizers are not responsible for any damages, loss, or harm during the tournament.",
        "The tournament will be governed by local laws. Any disputes will be resolved in the appropriate legal courts."
      ]
    },
  ];

  return (
    <>
      <Head>
        <title>edge of eSports Tournament - Rules & Regulations</title>
        <meta name="description" content="Free Fire Tournament Rules & Regulations" />
      </Head>

      <div className={styles.container}>
        <h1>edge of eSports Tournament - Rules & Regulations</h1>

        {rules.map((rule, index) => (
          <section key={index}>
            <h2>{index + 1}. {rule.heading}</h2>
            <ul>
              {rule.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </section>
        ))}

        <section>
          <p>By participating, you acknowledge that you have read and agreed to the above rules and regulations.</p>
        </section>
      </div>
    </>
  )
}

export default Rules
