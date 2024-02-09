import { Project } from "../models/Project";
import RLOverlay from "../assets/images/projects/overlay.png";
import GoldyBot from "../assets/images/projects/goldybot.png";
import ScrimBot from "../assets/images/projects/scrimbot.png";
import HypeChamber from "../assets/images/projects/hype-chamber.png";
import Strelka from "../assets/images/projects/strelka.png";
import DystopianDefier from "../assets/images/projects/dystopian-defier.png";

const RL_OVERLAY: Project = {
  imgPath: RLOverlay,
  name: "Rocket League Broadcast Overlay",
  duration: "January 2024 - February 2024",
  sections: [
    {
      heading: "Golden Gopher Goal",
      content:
        "University of Minnesota Golden Gopher Esports was in need of a custom overlay for Rocket League broadcasts that provided a modern esports viewing experience to viewers of all ages. I was the sole developer of this project, fielding feedback from members of the broadcast team to improve the design and optimization of the overlay.",
      attachments: [],
    },
    {
      heading: "Custom Components",
      content:
        "Many components went into this design while maintaining a modern project architecture. There were two pages created for the overlay: a configuration page to control team branding and match settings, and the overlay itself that is captured as a browser source in OBS. In the final iteration, the overlay successfully displays team logos, colors, player names, broadcast members, league/event name, and relevant player stats. Each component automatically updates from a custom Rocket League plugin that feeds game updates directly to the overlay via a web socket connection.",
      attachments: [],
    },
    {
      heading: "Hype Chamber Integration",
      content:
        "To add extra flare, integrating Hype Chamber videos was a challenge, especially timing video playback correctly. In the event that a University of Minnesota team wins a game, the overlay will transition to a winner screen before transition to display the postgame stats. Otherwise, the overlay immediately transitions to display postgame stats with no Hype Chamber graphics. All game data will be continued to be displayed even as the game resets for the next game in the series.",
      attachments: [],
    },
  ],
  techStack: ["TypeScript", "React", "styled-components", "Web Sockets", "OBS"],
  goto: "Project/Overlay",
  className: "overlay-bg",
};

const GOLDYBOT: Project = {
  imgPath: GoldyBot,
  name: "GoldyBot",
  duration: "March 2023 - April 2023",
  sections: [
    {
      heading: "GoldyBot - A Discord Application",
      content:
        "I decided to create GoldyBot to be a resource to provide quick information for broadcast members for upcoming collegiate Rocket League matches. Using the Discord API, start.gg API, and a SQLite database, GoldyBot would successfully store and retrieve team information including rosters and previous performances. The primary usage was in the University of Minnesota esports Discord communities to continue improving its functionality. Now decomissioned, it still proved to be successful with reading user slash commands and displaying relevant data in a readable manner.",
      attachments: [],
    },
  ],
  techStack: ["JavaScript", "Discord API", "Start GG API", "SQLite"],
  goto: "Project/Goldybot",
  className: "goldybot-bg",
};

const SCRIMBOT: Project = {
  imgPath: ScrimBot,
  name: "ScrimBot",
  duration: "November 2022 - January 2023",
  sections: [
    {
      heading: "Rocket League Scrimmage Finder",
      content: `For my final two years at the University of Minnesota, I was captain for my competitive Rocket League team. It was my responsibility to communicate with other team captains and/or managers to schedule scrimmages for practice. There were multiple Discord communities that had a "looking-for-scrimmage" channel where members would post the desired rank and time of day they were hoping to scrimmage. Seeing a pattern with the messages, I sought to build a bot using Discord's Gateway API and websockets to constantly listen and read these messages. If the message followed the expected pattern (with some slight variation), I would store them in an SQLite database that could be accessed via Slash Command. While no longer active, ScrimBot was successful in storing the rank, time of day, and contact information for when teams wanted to scrimmage.`,
      attachments: [],
    },
  ],
  techStack: ["JavaScript", "Discord Gateway API", "SQLite", "Web Sockets"],
  goto: "Project/Scrimbot",
  className: "scrimbot-bg",
};

const HYPE_CHAMBER: Project = {
  imgPath: HypeChamber,
  name: "Hype Chamber",
  duration: "March 2022 - April 2022",
  sections: [
    {
      heading: "Professional Motion Graphics",
      content:
        "As seen on the Rocket League Championship Series, Epic Games released an Unreal Engine project that allowed for broadcast teams to recreate their Hype Chamber graphics with nearly full customization. With me serving the role as Director of Content for the Rocket League club at the University of Minnesota and having Computer Science knowledge, I saw this as a perfect opportunity to seek to implement this into our frequent broadcasts. Working alongside a fellow student of mine, we sought to create a Golden Gopher themed cinematic package that included the school's colors and logos. We went the extra mile by creating our own 3D models and textures to have the cars contain the school's branding as well. We documented our approach so it could be used by any other Rocket League broadcast.",
      attachments: [],
    },
    {
      heading: "Recognition",
      content:
        "Once these cinematics were successfully integrated into the club's broadcast, we received recognition from the official Rocket League team via social media for being the first college/university to add the Hype Chamber. This resulted in the broadcast debuting these new graphics to reach hundreds of viewers and generate tens of thousands of impressions across the club's social media platforms.",
      attachments: [],
    },
  ],
  techStack: [
    "Unreal Engine",
    "C++",
    "Blueprints",
    "Blender",
    "Adobe Photoshop",
  ],
  goto: "Project/HypeChamber",
  className: "hc-bg",
};

const STRELKA: Project = {
  imgPath: Strelka,
  name: "Strelka Scanner",
  duration: "September 2021 - May 2022",
  sections: [
    {
      heading: "Steganography Tool",
      content:
        "The Strelka Scanner is Target's open source file scanner to prevent maliciously-altered files from being uploaded onto computers. My fellow students and I were first assigned to research how cyber criminals use the practice of steganography to conceal scripts and messages inside common image file types (JPG, PNG, and BMP). Our objective was to build an extension to the scanner for these three images and prove that hidden messages would be detected from our contributions.",
      attachments: [],
    },
    {
      heading: "Senior Software Project",
      content: `This project was completed through Computer Science 4950 - Senior Software Project at the University of Minnesota. It was a two semester experience where 12 students that applied for the course were accepted and given the opportunity to work with professional software engineers to understand the high standards and contribute to projects their organizations would utilize.`,
      attachments: [],
    },
  ],
  techStack: ["Python", "Golang"],
  goto: "Project/Strelka",
  className: "strelka-bg",
};

const DYSTOPIAN_DEFIER: Project = {
  imgPath: DystopianDefier,
  name: "Dystopian Defier Video Game",
  duration: "September 2021 - January 2022",
  sections: [
    {
      heading: "Welcome to Varkamon",
      content:
        "In this digital world, you play as Su, a rebel renegade fighting hordes of enemy bots in a dystopian future. However, your life is directly tied to your money. As you fight, you can grow your health pool, but beware as the legion of bots grows stronger with each passing second.",
      attachments: [],
    },
    {
      heading: "UMN Video Game Development Club",
      content: `As a member of the Video Game Development Club (VGDC), I created this project alongside six other members during the Fall 2021 semester at the University of Minnesota. The theme for the semester was "Your Life as Currency", so we sought to create a survival-based game that brought action packed gameplay. My contributions included applying 3D mathematics to handle projectile movement, synchronizing user input with character animations, and structuring the project to follow SOLID software engineer principles. Try out the game by clicking the link below!`,
      attachments: [],
    },
  ],
  techStack: ["Unity", "C#", "Blender"],
  goto: "Project/DystopianDefier",
  className: "dd-bg",
};

export const Projects: Project[] = [
  RL_OVERLAY,
  GOLDYBOT,
  SCRIMBOT,
  HYPE_CHAMBER,
  STRELKA,
  DYSTOPIAN_DEFIER,
];
