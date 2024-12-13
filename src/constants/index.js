import githubLogo from "../assets/github-logo.png";
import linkedInLogo from "../assets/linkedin-logo.png";
import hbhsLogo from "../assets/hbhs-logo.png";
import UoWLogo from "../assets/UoW-logo.png";
import footballIcon from "../assets/football.png"
import gymIcon from "../assets/dumbbell.png"
import artIcon from "../assets/art.png"
import gamesIcon from "../assets/games.png"

export const navItems = [
  {
    id: "0",
    title: "About Me",
    url: "#about-me",
  },
  {
    id: "1",
    title: "Skills",
    url: "#skills",
  },
  {
    id: "2",
    title: "Projects",
    url: "#projects",
  },
  {
    id: "3",
    title: "Contact",
    url: "#contact",
  },
];

export const profileIcons = [
  {
    id: "0",
    name: "Github",
    icon: githubLogo,
    link: "https://github.com/TannerR23",
  },
  {
    id: "1",
    name: "LinkedIn",
    icon: linkedInLogo,
    link: "https://www.linkedin.com/in/tannerrowe/",
  },
];

export const education = [
  {
    id: "0",
    name: "Hamilton Boys' High School",
    date: "2017 - 2021",
    logo: hbhsLogo,
    description:
      "Achieved NCEA levels 1,2 and 3. Level 1 being endorsed with merit while levels 2 and 3 were endorsed with excellence.",
  },
  {
    id: "1",
    name: "University of Waikato",
    date: "2022 - 2025",
    logo: UoWLogo,
    description:
      "Bachelor of Engineering with Honours - BE(Hons) Majoring in Software Engineering.",
  },
];

export const hobbies = [
  {
    id: "0",
    hobby: "Football",
    icon: footballIcon,
    description: "I played many various sports growing up, however the one that I stuck to the most and enjoyed was football. Playing it competitively when younger and socially as I grew older focusing more on academcis."
  },
  {
    id: "1",
    hobby: "Gym",
    icon: gymIcon,
    description: "I often go to the gym roughly 5-6 times per week mostly doing weight training as it is something I have come to enjoy as well as for health benefits."
  },
  {
    id: "2",
    hobby: "Art",
    icon: artIcon,
    description: "Art is something I can appreciate and have also made myself through a technique called photobashing with photoshop."
  },
  {
    id: "3",
    hobby: "Games",
    icon: gamesIcon,
    description: "Gaming is something I do in my free time that can help me wind down and relax."
  },
]
