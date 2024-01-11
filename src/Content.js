// import images
import Hero_person from "./assets/images/Hero/TracyS.png";

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
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsCodeSlash } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { MdOutlinePermContactCalendar } from "react-icons/md";

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
    title: "A Front-End Developer",
    firstName: "Tracy Sarah",
    LastName: "Afram-Owusu",
    btnText: "View Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of experience in Web development",
      },

    ],
  },
  skills: {
    title: "Tech Stacks",
    subtitle: "Tools & Technologies",
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
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "React js",
        logo: reactjs,
      },
      {
        name: "Tailwind CSS",
        logo: tailwind,
      },
      {
        name: "Firebase",
        logo: firebase,
      },
      {
        name: "Github",
        logo: git,
      },
      {
        name: "React Native",
        logo: reactNative,
      },
      {
        name: "Jira",
        logo: jira,
      },
      {
        name: "Visual Studio Code",
        logo: vscode,
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
        name: "TypeScript",
        logo: typescript,
      },

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Experienced in creating responsive and dynamic web applications with a focus on user-centric design and functionality",
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
      },
      {
        title: "The Fairwork",
        image: thefairwork,
      },
      {
        title: "The Fairwork Blog",
        image: blog,
      },
      {
        title: "DevTray",
        image: devtray,
      },
      {
        title: "TheSpec Shop",
        image: spec,
      },
      {
        title: "MoviePop",
        image: moviepop,
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
    para: "Let's collaborate and bring your digital vision to life",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact",
    subtitle: "GET IN TOUCH",
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
