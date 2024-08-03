import { Experience } from "../models/Experience"
import TargetLogo from "../assets/images/logos/target.png"
import GELogo from "../assets/images/logos/gopheresports.png"
import MLBLogo from "../assets/images/logos/mlb.png"

// UMN Details
import UMNRL from "../assets/images/logos/rlumn2.png"
import TwitterComp from "../assets/images/details/twittercomp.png"
import RLHostsUMN from "../assets/images/details/Rocket_league_host_umn.png"

// MLB Details
import WSTrophy from "../assets/images/me/me_wstrophy.png"
import DueUp from "../assets/images/me/mlb-dueup.png"
import NoResults from "../assets/images/me/mlb-noresults.png"
import MLBPresentation from "../assets/images/me/mlb-present.png"
import ShareButton from "../assets/images/me/mlb-sharebutton.png"

const TARGET_JOB: Experience = {
  imgPath: TargetLogo,
  employer: "Target",
  title: "L4 Software Engineer",
  duration: "January 2023 - Present",
  section: [
    {
      heading: "TL;DR",
      content:
        "Being with the company for over a year, I've contributed full-stack features that have accumulated to hundreds of hours of manual work saved and over $10 million in revenue for the company. My skill set has grown to include frontend (React, TypeScript, Node, Express), backend (Java, Kotlin, Spring Boot, Micronaut, Kafka), and data (Postgres, Mongo, Apache Spark, Apache Hadoop) technologies. A brief summary of my accomplishments include pioneering an internal Slack bot that is utilized by over 4,000 team members, exceeding expectations by contributing to multiple teams across the company instead of just my own such as the internal component library team, and being told that my performance is exceptional from multiple senior managers.",
      attachments: [],
    },
    {
      heading: "Technology Leadership Program (TLP)",
      content:
        "After graduating with a Bachelors of Science from the University of Minnesota, I joined Target's Technology Leadership Program where I would spend one year with two different teams (six months each), learn to demonstrate Target's core values, and understand how the company adapts to an always-changing environment to meet their guests' needs. During my time in the program, I would exceed expectations by designing innovative, full-stack solutions to applications that saved the company millions of dollars while showing a continued drive for learning by contributing to other projects outside of my assigned teams.",
      attachments: [],
    },
    {
      heading: "Product Cost & Negotiations",
      content:
        "My first six months were spent with Product Cost and Negotiations (PCN) team, where they were responsible for the development of a microfrontend (MFE) application used by sourcing managers to meet business objectives. The senior and lead engineers on this team mentored me to understand the different technologies they used to accomplish the development of their existing applications and how I can extend them to meet new business requirements. These technologies included Spring Boot, Kafka, TypeScript, React, and Mongo. After understanding the architecture, I implemented several enhancements that required both backend and frontend modifications. Once of these enhancements was real-time updating as sourcing managers made data changes which resulted in over $60,000 of savings in a single event.",
      attachments: [],
    },
    {
      heading: "Strikeforce!",
      content:
        "The next six months of my time as a TLP were spent with the Strikeforce team. This team's objective was to maintain and enhance the application that allowed for supply chain analysts to schedule shipments between warehouses and stores. My contributions continued to be full-stack with this team as I refactored components on the user interface to use Target's internal component library and implemented a new feature that allowed for users to track/manage the departure time between stops along a route. One contribution I had with allowing users to select the carrier for scheduled routes was valued to save Target over $9million and save more than 6 weeks of manual work. These changes were done using TypeScript, React, Java, and PostgreSQL.",
      attachments: [],
    },
    {
      heading: "Internal Audience Tool",
      content:
        "Once I graduated from TLP, I was final placed on the Internal Audience Tool team which would give me exposure to a third portfolio within Target Tech. This team was responsible for engineering the application that allows for Target's marketing team to use big data to evaluate the potential reach of client's campaigns. My role on this team would be more focused on the backend and data engineering side using Spring Boot, Java, Kafka, and Mongo. With many microservices in place, this team immediately showed how an application's architecture can be created with each component having a singular use while connected to the other components.",
      attachments: [],
    },
    {
      heading: "Slack Bot",
      content:
        "Target invests in its engineers to continously learn and grow. During this time, I worked alongside two other engineers within Target's Tech Talent Programs to create a Slack bot that facilitated giveaways in a group of channels within Target, one of these being the second most popular with several thousand members. This was a fantastic learning opportunity as I learned the Slack API and Golang while ensuring security standards were met.",
      attachments: [],
    },
    {
      heading: "End-to-End Testing",
      content:
        "Before my time at Target, I had little experience with end-to-end testing. I took the opportunity to learn and implement my own test suites to ensure application correctness. With my first six months on the PCN team, I was told to research modern day frontend test frameworks and determine which library would be the best fit moving forward. This research and implementation took about a month with focuses on Cypress and Playwright. In the end, I concluded that Playwright would fit more of the team's testing needs and would be a simpler configuration for internal use at Target.",
      attachments: [],
    },
    {
      heading: "Addressing Vulnerabilities",
      content:
        "I quickly learned how to maintain secure software at Target by using internal tools. This gave me the opportunity to upgrade API dependencies while maintaining their existing functionality. Most of this work would be done with the microservices I contributed to and upgrading Spring Boot to the latest stable version. However, I found that it wasn't as simple as upgrading one dependency as others would also need to be upgraded. I documented these combinations for future use, especially when creating new microservices that sought to have zero known vulnerabilities.",
      attachments: [],
    },
    {
      heading: "Jack of All Trades",
      content:
        "Now fully onboarded with the Internal Audience Tool team, I've invested my time and efforts in learning data engineering to extend my full-stack knowledge. Work I've completed includes leading the discovery of an internal scheduled data job tool for Apache Spark jobs that provides a usable interface to pass specific configurations for the Spark job as well as building a CI/CD pipeline that automatically updates all necessary scripts and JAR files utilized in these big data jobs. My efforts are responsible for saving hundreds of hours of manual engineering work, resulting in growth for my team and the company.",
      attachments: [],
    },
    {
      heading: "Value of Efforts",
      content:
        "With the three different teams that I've been part of during my tenure at Target, my efforts have led to at least 10 weeks of manual work saved, contributing to applications that generate over $1 billion in annual revenue, and optimizing existing engineer workflows to provide rapid response times to on-call support issues. Per recent events, my team was presented with a feature request that would immediately result in $15 million of savings for the company. In the span of two weeks, myself alongside two lead engineers were able to fully develop this new feature. This is just one of many examples that continue to expand on the sections above of how my efforts at Target have benefited the company and positively impacting the bottom line.",
      attachments: [],
    },
  ],
  techStack: [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Cypress",
    "Playwright",
    "Java",
    "Kotlin",
    "Spring Boot",
    "Micronaut",
    "Kafka",
    "Docker",
    "Mongo",
    "Postgres",
    "Apache Hadoop",
    "Scala",
    "Apache Spark",
    "CI/CD",
  ],
  goto: "Experience/Target",
  className: "target-bg",
}

const DOC_SM_ESPORTS: Experience = {
  imgPath: GELogo,
  employer: "Esports at the University of Minnesota",
  title: "Director of Content, Social Media Manager",
  duration: "September 2021 - December 2022",
  section: [
    {
      heading: "Rowing The Boat",
      content:
        "Returning to campus from the COVID-19 pandemic, I joined the Rocket League club at the University of Minnesota as the Director of Content and later the Social Media Manager for all esports titles. I held these two roles for over a year, contributing mightily to the growth of the club while expanding the partnership with University of Minnesota Athletics.",
      attachments: [UMNRL],
    },
    {
      heading: "Unreal Engine & The Hype Chamber",
      content:
        "Partway through my tenure as Director of Content, Epic Games released an open source Unreal Engine project that they utilized in professional Rocket League esports broadcasts. This allowed for broadcast crews to design and create the same high quality sports motion graphics into their broadcasts. Using my Computer Science knowledge, I assisted in the University of Minnesota becoming the first broadcast to successfully implement this into our content. As a result, the club received recognition from the official Rocket League social media channel and became a leader in the collegiate esports community.",
      attachments: [RLHostsUMN],
    },
    {
      heading: "Social Media Competitions",
      content:
        "During the 2022 calendar year, two national social media competitions were held to see which universities could generate the most interaction from their communities. I took responsibility for overseeing the University of Minnesota's entry into these two campaigns. More than 100 unique content pieces (player bios, team statistics, highlight reels, etc.) were created that led to total prizing of $13,000. This money is still being used by the club to invest back into the players and grow the community.",
      attachments: [TwitterComp],
    },
    {
      heading: "Club Growth & Development",
      content:
        "My predecesors initiated a relationship with the University of Minnesota's Athletics department to seek having esports be recognized by the university as a collegiate sport. As Director of Content and Social Media Manager, I worked alongside Doug Goon, Assistant Athletic Director for IT, to create content for athletics-owned social media channels including Twitch and Twitter. My work increased social media impressions by over 500% and created a revenue stream for the esports initiatives.",
      attachments: [],
    },
  ],
  techStack: [
    "Unreal Engine",
    "Adobe Photoshop",
    "Adobe Lightroom",
    "Davinci Resolve",
  ],
  goto: "Experience/UMN",
  className: "umn-bg",
}

const MLB_INTERN: Experience = {
  imgPath: MLBLogo,
  employer: "Major League Baseball",
  title: "Software Engineering Intern",
  duration: "June 2022 - August 2022",
  section: [
    {
      heading: "Internship in NYC",
      content:
        "Being an avid baseball fan and player for most of my life, I was honored to have the three month internship experience with Major League Baseball out in New York City. My time was spent with the Strategy Technology and Innovation team where the focus was completing the new user experience for MLB Gameday. This work included implementing new components to meet business requirements set forth by the design team and resolving bugs that existed before I joined the team.",
      attachments: [WSTrophy],
    },
    {
      heading: `"Due Up" Component`,
      content: `One of the components I implemented was a new design for "Due Up". This component represented a display of the next three batters and relevant attributes specific to each player including which hand they use to bat and their game performance up to this point. The design team requested more be added to the display such as the player's picture and jersey number. There were also some CSS changes required to match the Figma design.`,
      attachments: [DueUp],
    },
    {
      heading: "No Results Display",
      content:
        "When users would navigate to a summary tab with no events displayed, there would be no visual indicator that the Gameday website had nothing to show. This was another contribution I made. The requirements were to add a user friendly icon from an internal library and adding text that is displayed in both English and Spanish depending on the user's settings.",
      attachments: [NoResults],
    },
    {
      heading: "Share Button Fix",
      content:
        "With several users viewing game updates from the mobile app, those viewports needed to be accounted for during implementation. One of the bugs I addressed was adjusting the styling for the share button when a user wished to share a moment in the game. Before, the button overlapped with other components. My changes allowed for a better experience.",
      attachments: [ShareButton],
    },
    {
      heading: "Non-Technical Contributions",
      content:
        "As interns, we were giving the opportunity to connect with leaders at MLB not in the engineering domain. My mentor throughout my three months was Stephen Roche, Vice President of MLB Authentic Collection/Global Consumer Products. He provided insights into how other areas of MLB were designing methods to expand the global baseball audience. I also collaborated with Scott Weisenthal, Senior Vice President of Global Marketing at MLB, on ideas for a series of implementations to increase young adult viewership during Q2 of 2023.",
      attachments: [MLBPresentation],
    },
  ],
  techStack: ["JavaScript", "React", "HTML", "CSS", "Storybook"],
  goto: "Experience/MLB",
  className: "mlb-bg",
}

export const Jobs: Experience[] = [TARGET_JOB, DOC_SM_ESPORTS, MLB_INTERN]
