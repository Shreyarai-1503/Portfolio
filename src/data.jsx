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

import JAVA from "./assets/java.svg";
import Python from "./assets/python.svg";
import Cpp from "./assets/cpp.svg";
import JS from "./assets/js.svg";
import TS from "./assets/ts.svg";
import HTML from "./assets/html.svg";
import CSS from "./assets/css.svg";
import MERN from "./assets/MERN.png";
import NEXT from "./assets/nextjs.svg";
import MySQL from "./assets/mysql.svg";
import Postgresql from "./assets/postgresql.svg";
import Graphql from "./assets/graphql.svg";

import Work1 from "./assets/Work1.png";
import Work2 from "./assets/Work2.png";
import Work3 from "./assets/Work3.png";

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
    no: "1",
    title: "Year of <br /> Experience",
  },

  {
    id: 2,
    no: "3",
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
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "Jul 2024 - Aug 2024",
    title: "SDE Intern <span>Bluestock</span>",
    desc: "As an SDE Intern and team leader at Bluestock, led the development of an IPO web app and REST APIs using Django, PostgreSQL, HTML, CSS, JavaScript, and Bootstrap, focusing on code quality and security.",
  },

  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022 - present",
    title: "B.E Computer engineering <span>Pimpri Chinchwad College of Engineering and Research </span>",
    desc: "University Topper:Engg. Math-1. CGPA: 9.3",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "12th-grade (AISSCE) <span>GG International School </span>",
    desc: "Completed 12th with 95.2%",
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
    title: "Python",
    path: Python,
  },

  {
    id: 3,
    title: "C++",
    path: Cpp,
  },

  {
    id: 4,
    title: "Javascript",
    path: JS,
  },

  {
    id: 5,
    title: "Typescript",
    path: TS,
  },

  {
    id: 6,
    title: "HTML",
    path: HTML,
  },

  {
    id: 7,
    title: "CSS",
    path: CSS,
  },

  {
    id: 8,
    title: "MERN Stack",
    path: MERN,
  },

  {
    id: 9,
    title: "Next.js",
    path: NEXT,
  },

  {
    id: 10,
    title: "MySQL",
    path: MySQL,
  },

  {
    id: 11,
    title: "PostgreSQL",
    path: Postgresql,
  },

  {
    id: 12,
    title: "GraphQL",
    path: Graphql,
  },
  
];

export const project = [
  {
    id: 1,
    img: Work1,
    title: "PixelGenie",
    details: [
      {
        icon: <FaCode />,
        title: "Teck Stack : ",
        desc: "Next.js, TypeScript, Tailwind CSS, Shadcn, MongoDB, Clerk, Cloudinary, Stripe",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "PixelGenie.com",
      },
    ],
    link: "https://pixel-genie-kappa.vercel.app/"
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

  {
    id: 3,
    img: Work3,
    title: "ArticleEase",
    details: [
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React.js, Rapid API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "ArticleEase.com",
      },
    ],
    link: "https://ai-summarizer-shreyarai-1503s-projects.vercel.app/"
  },

];
