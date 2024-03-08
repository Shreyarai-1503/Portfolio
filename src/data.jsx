import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import HTML from "./assets/HTML.png";
import CSS from "./assets/CSS.png";
import JS from "./assets/JS.png";
import React from "./assets/React.png";
import NodeJs from "./assets/NodeJs.png";
import JAVA from "./assets/JAVA.png";
import Python from "./assets/Python.png";

import Work1 from "./assets/Work1.png";
import Work2 from "./assets/Work2.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="navIcon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="navIcon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="navIcon" />,
    path: "/projects",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="navIcon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Shreya",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Rai",
  },

  {
    id: 3,
    title: "Age : ",
    description: "19 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 5,
    title: "Phone : ",
    description: "+91-7387372955",
  },

  {
    id: 6,
    title: "Email : ",
    description: "shreyarai1503@mail.com",
  },

];

export const stats = [
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 2,
    no: "2",
    title: "Completed <br /> Projects",
  },

  /*{
    id: 3,
    no: "81+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "53+",
    title: " Awards <br /> Won",
  },*/
];

export const resume = [
  /*{
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2024 - PRESENT",
    title: "Web Developer <span>Company</span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },*/

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022 - present",
    title: "B.E Computer engineering <span>Pimpri Chinchwad College of Engineering and Research </span>",
    desc: "University Topper in Engg. Math-1. Current CGPA: 9.3",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "12th-grade (AISSCE) <span>GG International School </span>",
    desc: "Completed 12th grade with 95.2% grade.",
  },
];

export const skills = [
  {
    id: 1,
    title: "JAVA",
    path: JAVA,
  },

  {
    id: 2,
    title: "HTML",
    path: HTML,
  },

  {
    id: 3,
    title: "CSS",
    path: CSS,
  },

  {
    id: 4,
    title: "Python",
    path: Python,
  },

  {
    id: 5,
    title: "Javascript",
    path: JS,
  },

  {
    id: 6,
    title: "React",
    path: React,
  },

  {
    id: 7,
    title: "Node Js",
    path: NodeJs,
  },

];

export const project = [
  {
    id: 1,
    img: Work1,
    title: "Admin Dashboard",
    details: [
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "WebChatConnect",
    details: [
      {
        icon: <FaCode />,
        title: "Teck Stack : ",
        desc: "MERN stack, Tailwind CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "WebChatConnect.com",
      },
    ],
    link: "https://webchatconnect.onrender.com/"
  },

];
