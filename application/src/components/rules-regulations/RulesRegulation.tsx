import React from 'react'
import Head from 'next/head'
import { FC } from 'react'
import styles from './styles/rulesRegulations.module.css'

const Rules: FC = () => {
  const rules = [
    {
      heading: 'Survival Battle Type',
      points: [
          "In Survival Battle Type matches, players' winning position is determined by their team's final standing in the match.",
          "Teams must survive until the end of the match to secure a higher ranking. The last remaining teams will receive the highest position score.",
          "Positions will be awarded based on the team's ranking at the conclusion of the match. For example, 1st place will receive the team who win the battle, while the 2nd and 3rd place teams will receive descending scores.",
          "If a team is eliminated early in the match, their rank will be calculated according to the point of elimination relative to the number of teams still remaining in the match."
      ]
    },
    {
        heading: 'Scoring Battle Type',
        points: [
            "In Scoring matches, players' winning position is determined by the accumulated score, which includes both kills and positional placement.",
            "Each team earns 1 point per kill. For example, if a team gets 10 kills, they will earn 10 points for kills.",
            "Teams will also earn position points based on their final standing in the match. For example:",
            "- 1st place: 12 points",
            "- 2nd place: 11 points",
            "- 3rd place: 10 points",
            "- 4th place: 9 points",
            "- .......",
            "- 9th place: 4 points",
            "- 10th place: 3 points",
            "- 11th place: 2 points",
            "- 12th place onwards: 1 point.",
            "Teams that are eliminated early will receive position scores based on their rank at the time of elimination. For instance, the first eliminated team will receive 1 point, the second eliminated team will get 2 points, and so on.",
            "The final score of a team is the total of their kill points added to their position points. The team with the highest total score will be declared the winner.",
            "In case of a tie between two or more teams, the team with the higher position (ranked better) will be placed higher in the final standings, rather than the team with more kills."
        ]
    },
    {
        heading: 'Unlimited Ammo Custom Rule',
        points: [
          "The following items are prohibited in Unlimited Ammo Custom matches:",
          "- Grenades",
          "- Flashbangs",
          "- Smoke Grenades",
          "- Gluu Wall Melter",
          "- Freezer",
          "Any player caught using these items will be immediately disqualified from the tournament.",
    "If a team accidentally uses a prohibited item by mistake, it may be permissible, but this mistake will not be accepted if repeated. A second occurrence will result in disqualification for the entire team."
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
          "Team-up Not Allowed: Players are not permitted to team up with opponents or form alliances during matches. Any violation of this rule will lead to disqualification.",
          "Unregistered Players Not Allowed to Spectate: Players who are not registered for the tournament are not allowed to spectate the matches. This is to prevent exposing the location of players to others."
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
