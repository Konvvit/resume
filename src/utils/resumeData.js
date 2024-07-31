/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DataObjectIcon from "@mui/icons-material/DataObject";
import DescriptionIcon from "@mui/icons-material/Description";
import BrushIcon from "@mui/icons-material/Brush";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

export default {
  name: "Konwit Maikoksung",
  title: "Developer",

  birthday: "21th October 1996",
  email: "konvvit@gmail.com",
  Job: "Freelancer",
  Phone: "0704601711",
  Address: "Sweden, Gävle",

  socials: {
    LinkIn: {
      link: "https://www.linkedin.com/in/konwit-maikhoksung-306a53205/",
      text: "MyLinkIn",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/Konvvit",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },

  // About section
  about:
    "Hello, My name is Konwit Maikhoksung I graduated from Polhemsskolan in 2016 after completing the Technology Program with a focus on Information Media. It's a choice I have never regretted.Now I want to apply the knowledge I have gained and share it, while also aiming to learn new skills. Developing and becoming an expert in what I do is something I highly value. The world of technology is infinite, and what is relevant today may be outdated tomorrow, so I consider it crucial to stay constantly updated. Personally, I am active and energetic, striving to make things happen. So far, a high pace has not been a problem for me. Challenges may seem like a worn-out word, but I appreciate feeling challenged, solving problems, and learning new things that I was not familiar with before.I believe I have the ability to quickly learn new things, and I am thorough and focused. I consider these qualities positive, regardless of the type of work. Problem-solving is one of my strengths facing a problem and trying to solve it is something I truly appreciate.I have experience working both independently and in a team, and I consider myself adaptable and easy to work with..",

  // Work experiences
  experiences: [
    {
      title: "Thai Supermarket & Food Take away , Gävle",
      date: "2011-2011",
      description:
        "Restaurang/supermarket. Served as an Assistant, contributing to various aspects of daily operations within the establishment. Responsibilities ranged from dishwashing duties to actively participating in product sales. Demonstrated versatility by setting price tags and efficiently organizing and selecting products within the supermarket. Engaged in diverse tasks to ensure the smooth functioning of both the kitchen and retail areas.",
    },

    {
      title: "Company name l Heartbreak hotel , Gävle",
      date: "2012-2012",
      description:
        "Kitchen assistant. Employment at a Restaurant: Engaged in various roles at a restaurant, primarily focused on providing exceptional customer service. Actively participated in serving food to customers, ensuring a pleasant and satisfying dining experience. Additionally, took responsibility for dishwashing duties and assisted in the preparation of food items. Played a key role in maintaining a hygienic and organized workspace, contributing to the overall efficiency of restaurant operations. ",
    },

    {
      title: "Sykes l Sitel Group , Sveg",
      date: "Apr 2021 - Oct 2021",
      description:
        "Customer service. I worked as a Customer Service Representative for an company, where my responsibilities included answering phones, assisting customers with various needs such as booking and canceling tickets, providing coupons, addressing and resolving issues, and more. My role covered all aspects of customer support related to the company operations, ensuring that customer received prompt and efficient assistance for any inquiries or concerns they had.",
    },
    {
      title: "Xzakt, Gävle",
      date: "Apr 2023- Sep 2023",
      description:
        "Customer service. I worked as a Customer Support Representative for one of the largest electricity companies known for providing exceptional customer service. In this role, I was responsible for addressing customer inquiries, assisting them with various aspects of their interactions with the company. This included guiding customers through the process of moving in or out of their residences by facilitating the installation or uninstallation of electricity services. Additionally, I provided valuable information to customers regarding electricity prices and situations, offering recommendations for the best pricing options or courses of action",
    },
  ],

  // Education details
  educations: [
    {
      title:
        "Teknikprogrammet, Informations- medieteknik, Polhemsskolan, Gävle",
      date: "Aug 2013 - Aug 2016",
      description:
        "Skills in computers, both in software and hardware. Problem-solving. Communication and various media such as computer communication, programming, digital media, and web development..",
    },

    {
      title: "Gymnasieingenjör, Polhemsskolan, Gävle ",
      date: "Aug 2016 - Aug 2017",
      description:
        "Fourth year of the Technology Program. The education combines classroom teaching with workplace learning and provides excellent opportunities for employment immediately after graduation.",
    },

    {
      title: "IT - Kompetenskartläggning, Lexicon, Gävle",
      date: "-",
      description: "Knowledge test with result certificate.",
    },
  ],

  // Services offered
  services: [
    {
      title: "Out of service",
      description: "Just testing for future freelancing",
      icon: <DataObjectIcon />,
    },

    {
      title: "Out of service ",
      description: "Just testing for future freelancing.",
      icon: <DescriptionIcon />,
    },

    {
      title: "Out of service",
      description: "Just testing for future freelancing.",
      icon: <BrushIcon />,
    },
  ],

  skills: [
    {
      title: "Front-end",
      description: [
        "ReactJS",
        "Javascript",
        "Typescript",
        "Bootstrap",
        "Material Ui",
        "Tailwind CSS",
        "API",
        "UX",
        "UI",
      ],
    },
    {
      title: "Back-end",
      description: ["Firebase", "Nodejs"],
    },
    {
      title: "Databases",
      description: ["Firebase", "MongoDB", "MySQL"],
    },
    {
      title: "Source Control",
      description: ["Git", "Github", "Scrum/Agile"],
    },
  ],

  // Projects
  projects: [
    {
      tag: "React",
      images: [
        require("../assets/images/Taverna.png"),
        require("../assets/images/Taverna1.png"),
        require("../assets/images/Terverna2.png"),
        require("../assets/images/Taverna3.png"),
      ],
      title: "Taverna Restaurant",
      caption: "School Project: Family-Friendly Restaurant Website ",
      description:
        "As part of my academic studies, I undertook a compelling project focused on developing a dynamic website for a family-friendly restaurant. The primary objective of this project was to create an online platform that facilitated seamless ordering experiences for customers directly from their tables",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },

    {
      tag: "React",
      images: [
        require("../assets/images/Mgame.png"),
        require("../assets/images/Mgame1.png"),
        require("../assets/images/Mgame2.png"),
      ],
      title: "Memory Game",
      caption: "School project making a memory game",
      description:
        "For my inaugural school project, I embarked on the creation of a Memory Game—a classic and engaging endeavor built entirely with HTML, CSS, and JavaScript. The core concept centered around developing a game that could be played in two distinct modes: Player vs. Player or Player vs. AI.",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },

    {
      tag: "Java",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },

    {
      tag: "Java",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Java",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Python",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "java",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Java",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Java",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Python",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Python",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Python",
      images: [
        "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      ],
      title: "Test prototype",
      caption: "Just a prototype",
      description: "This is my project description. Please fill it in",
      links: [
        {
          link: "https://www.google.com",
          icon: <GitHubIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://www.google.com",
          icon: <LanguageIcon />,
        },
      ],
    },
  ],
};
