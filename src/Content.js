// import images
import Hero_person from "./assets/images/Hero/tracy.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import tailwind from "./assets/images/Skills/tailwind.png";
import firebase from "./assets/images/Skills/firebase.png";
import git from "./assets/images/Skills/git.png";
import reactNative from "./assets/images/Skills/react.png";
import jira from "./assets/images/Skills/jira.png";
import vscode from "./assets/images/Skills/vscode.png";
import postman from "./assets/images/Skills/postman-icon.png";
import bitbucket from "./assets/images/Skills/bitbucket-icon.png";
import typescript from "./assets/images/Skills/typescript.png";
import next from "./assets/images/Skills/next.png";
import aws from "./assets/images/Skills/aws.jpeg";
import figma from "./assets/images/Skills/figma.png";
import jest from "./assets/images/Skills/jest.png";
import cypress from "./assets/images/Skills/cypress.png";
import jenkins from "./assets/images/Skills/jenkins.jpeg";
import ubuntu from "./assets/images/Skills/ubuntu.jpeg";
import postgres from "./assets/images/Skills/postgres.jpeg";
import jet from "./assets/images/Skills/jett.jpeg";
import certfication from "./assets/images/Skills/aws-certified-cloud-practitioner.png"


import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import crig from "./assets/images/Projects/crig.png";
import thefairwork from "./assets/images/Projects/fairwork.png";
import blog from "./assets/images/Projects/blog.png";
import devtray from "./assets/images/Projects/devtray.png";
import moviepop from "./assets/images/Projects/movie.png";
import spec from "./assets/images/Projects/TheSpec.png";
import undraw from "./assets/images/Projects/undraw.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import hire from "./assets/images/Hireme/hire.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsCodeSlash } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { RiServiceLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { lazy } from "react";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: GiSkills,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: BsCodeSlash,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "A Software Developer and a Certified Cloud Practitioner",
    firstName: "Tracy Sarah",
    LastName: "Afram-Owusu",
    btnText: "View Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of experience in Web and Software development",
      },

    ],
  },
  skills: {
    title: "Tech Stack",
    skills_content: [
      {
        name: "HTML5",
        logo: html,
      },
      {
        name: "CSS3",
        logo: css,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "TypeScript",
        logo: typescript,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Next js",
        logo: next,
      },
      {
        name: "React Native",
        logo: reactNative,
      },
      {
        name: "Jest",
        logo: jest,
      },
      {
        name: "Cypress",
        logo: cypress,
      },
      {
        name: "PostgreSQL",
        logo: postgres,
      },
    ],
    icon: MdArrowForward,
  },
  tools: {
    title: "Tools & Services",
    tool: [
      {
        name: "Amazon Web Services",
        logo: aws,
      },
      {
        name: "Jenkins",
        logo: jenkins,
      },
      {
        name: "Ubuntu",
        logo: ubuntu
      },
      {
        name: "Firebase",
        logo: firebase,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Github",
        logo: git,
      },
      {
        name: "Jira",
        logo: jira,
      },
      {
        name: "Postman",
        logo: postman,
      },
      {
        name: "Bitbucket",
        logo: bitbucket,
      },
      {
        name: "Visual Studio Code",
        logo: vscode,
      },
      {
        name: "Webstorm",
        logo: jet,
      },
    ]
  },

  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web & Software Development",
        para: "Experienced in creating responsive and dynamic applications with a focus on user-centric design and functionality",
        logo: services_logo1,
      },
      {
        title: "UI / UX DESIGNING",
        para: "Dedicated to the art of user-centric design, seamlessly blending creativity and functionality. Proficient in translating complex ideas into visually stunning and user-friendly interfaces",
        logo: services_logo2,
      },
      {
        title: "Content Creation",
        para: "Passionate about content creation and capable of generating compelling and informative content for websites, blogs, and social media platforms",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: undraw,
    project_content: [
      {
        title: "Cocoa Research Institute of Ghana",
        image: crig,
        link: "https://www.crig.org.gh/",
        description: "A website for the Cocoa Research Institute of Ghana that provides all the information about the institute."
      },
      {
        title: "The Fairwork",
        image: thefairwork,
        link: "https://www.thefairwork.com/",
        description: "TheFairWork is freelance platform that seeks to connect international clients with african talents to work on their short and long term projects remotely.Without the expense, effort, or administrative hassle, you can instantly hire pre- vetted talent from Africa. As a client, you have the opportunity to work with young, motivated talent at highly affordable rates. Sign up today as a client or freelancer on TheFairWork."
      },
      {
        title: "The Fairwork Blog",
        image: blog,
        link: "https://blog.thefairwork.com/",
        description: "The FairWork Blog is a sub-platform for the main Fairwork platform. TheFairWork blog provides trendy and latest news in the tech industry."
      },
      {
        title: "DevTray",
        image: devtray,
        link: "https://devtray.net/",
        description: "A platform that connects learners with expert instructors,offering a diverse catalog of courses designed to enhance personal and professional growth in a flexible learning environment. Join us on a transformative journey of knowledge acquisition and personal growth, where education knows no boundaries."
      },
      {
        title: "TheSpec Shop",
        image: spec,
        link: "https://the-spec-shop.vercel.app/",
        description: " A clothing brand e-commerce shop to be used for an upcoming personal clothing brand called TheSpec Apparel. Still in progress but worth sharing."
      },
      {
        title: "MoviePop",
        image: moviepop,
        link: "https://popx-f5998.web.app/",
        description: "A movie-details site that keeps you up to date with the latest movies,ranging from horror movies, sitcoms, animations, trendy movies etc."
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: hire,
    image2: hire,
    para: "Let's brew ideas over coffee, merge creativity, and turn your digital dreams into reality!",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact",
    subtitle: "GET IN TOUCH",
    image: certfication,
    social_media: [
      {
        text: "aframowusutracysarah@gmail.com",
        icon: GrMail,
        link: "mailto:aframowusutracysarah@gmail.com",
      },
      {
        text: "Instagram",
        icon: BsInstagram,
        link: "https://www.instagram.com/_tracysarah/",
      },
      {
        text: "LinkedIn",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/tracy-sarah-afram-owusu-165b6818a/",
      },
      {
        text: "Github",
        icon: BsGithub,
        link: "https://github.com/tracy1-sarah",
      },
      {
        text: "Twitter",
        icon: BsTwitter,
        link: "https://twitter.com/Tray_acey",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
