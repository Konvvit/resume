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
  Address: "Sweden, Sveg",

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

      description: (
        <>
          • Organized and priced products.
          <br />• Assisted in kitchen and sales operations.
        </>
      ),
    },

    {
      title: "Company name l Heartbreak hotel , Gävle",
      date: "2012-2012",
      description: (
        <>
          • Served food and assisted in food preparation.
          <br />• Maintained hygiene and organization in the kitchen.
        </>
      ),
    },

    {
      title: "Sykes l Sitel Group , Sveg",
      date: "Apr 2021 - Oct 2021",
      description: (
        <>
          • Managed customer bookings, cancellations, and coupon distribution.
          <br /> • Resolved issues and ensured efficient customer support.
        </>
      ),
    },
    {
      title: "Xzakt, Gävle",
      date: "Apr 2023- Sep 2023",
      description: (
        <>
          • Addressed customer inquiries and assisted with electricity service
          installations.
          <br />• Provided information on electricity prices and recommended
          optimal pricing options.
        </>
      ),
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
      tag: "Javascript",
      images: [
        require("../assets/images/foodada0.png"),
        require("../assets/images/foodada1.png"),
        require("../assets/images/foodada2.png"),
        require("../assets/images/foodada3.png"),
        require("../assets/images/foodada4.png"),
        require("../assets/images/foodada5.png"),
        require("../assets/images/foodada6.png"),
      ],
      title: "Food Website",
      caption: "Project i made during summer",
      description:
        "This project was created during the summer as an opportunity to practice my JavaScript skills. While most of my projects are built with React, this particular project focuses more on JavaScript to enhance my front-end development capabilities. It serves as a landing page, showcasing my front-end abilities without any backend functionality. Through this project, I aimed to deepen my understanding of JavaScript while continuing to improve my overall coding skills. ",
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
      tag: "Typscript",
      images: [
        require("../assets/images/ThisorThat0.png"),
        require("../assets/images/ThisorThat1.png"),
        require("../assets/images/ThisorThat2.png"),
        require("../assets/images/ThisorThat3.png"),
        require("../assets/images/ThisorThat4.png"),
        require("../assets/images/ThisorThat5.png"),
        require("../assets/images/ThisorThat6.png"),
      ],
      title: "This or That",
      caption: "Mini game to find what to watch (Anime Edition)",
      description:
        "This project was developed over the summer using React, with a particular focus on TypeScript. It’s a fun game designed to help you decide which anime to watch. Here’s how it works: You are presented with two cards, each featuring a different anime. You choose which anime you would prefer to watch by selecting one of the cards. The other card is then randomized. You have 20 rounds to play, and at the end, the last anime card picked is the one you will watch.",
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
        require("../assets/images/CMSGroup6-0.png"),
        require("../assets/images/CMSGroup6-1.png"),
        require("../assets/images/CMSGroup6-2.png"),
        require("../assets/images/CMSGroup6-3.png"),
        require("../assets/images/CMSGroup6-4.png"),
        require("../assets/images/CMSGroup6-5.png"),
        require("../assets/images/CMSGroup6-6.png"),
        require("../assets/images/CMSGroup6-7.png"),
        require("../assets/images/CMSGroup6-8.png"),
        require("../assets/images/CMSGroup6-9.png"),
      ],
      title: "CMS project",
      caption:
        "This is a school project created by my group, focused on developing a Content Management System (CMS).",
      description:
        "This website serves as a real estate broker, introducing users to houses available in Sweden. It features agents who assist with the purchasing process, including paperwork and providing information about the properties. As a customer, you can search for houses in your city, view listings, and access detailed information, including pricing and additional features. Additionally, the website includes an admin function that requires authentication. Admin users can log in to manage the listings, enabling them to add, delete, or edit property information. ",
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
      tag: "React",
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
