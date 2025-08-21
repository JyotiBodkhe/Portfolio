// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postgreLogo from './assets/tech_logo/postgre.png';


// Experience Section Logo's
import leopardLogo from './assets/company_logo/leopardLogo.png';


// Education Section Logo's
import Bansal from './assets/education_logo/Bansal.png';
import mp from './assets/education_logo/mp.png';


// Project Section Logo's
import VirtualLogo from './assets/work_logo/Virtual.png';
import skiperLogo from './assets/work_logo/skiper.png';
import startechLogo from './assets/work_logo/startech.png';

import LazarevLogo from './assets/work_logo/Lazarev.png';
import BrandiumLogo from './assets/work_logo/Brandium.png';
import cmLogo from './assets/work_logo/cm.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'TailwindCSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      
    ],
  },
  {
    title: 'Backend',
    skills: [
     
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
    
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
     
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: leopardLogo,
      role: "Frontend Developer",
      company: "Leopardruns Innovation & Technology",
      date: "Sep 2024 - Nov 2024",
      desc: "Developed dynamic and scalable web applications using the React.js, handling frontend development. Collaborated with cross-functional teams to build responsive UI, and optimize application performance in an Flexible environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Tailwind CSS",
        " Next Js",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: Bansal,
      school: "Bansal Institute of Research and Technology, Bhopal",
      date: "Sept 2022 - June 2026",
      grade: "7.14 CGPA (Till 6th Sem)",
      desc: "I am currently pursuing a B.Tech in Computer Science and Engineering, now in my 4th year. Along with my academic learning, I have developed strong skills in the MERN stack and Java programming. Through projects and practical work, I have gained hands-on experience in building web applications and solving real-world problems.",
      degree: "Bachelor of Technology (B.Tech)",
    },
    
    {
      id: 1,
      img: mp,
      school: "Govt. Naveen Higher Secondary School, Multai",
      date: "July 2021 - Feb 2022",
      grade: "70.4%",
      desc: "I completed my class 12 education from Govt. Naveen Higher Secondary School, Multai, under the MP board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "Class(XII) - PCM",
    },
    {
      id: 2,
      img: mp,
      school: "Govt. High Secondary School, Paradsinga",
      date: "July 2018 - March 2019",
      grade: "84.8%",
      desc: "I completed my class 10 education from Govt. High Secondary School, Paradsinga, under the MP board.",
      degree: "Class(X).",
    },
  ];
  
  export const projects = [


    {
      id: 0,
      title: "Coding Master",
      description:
        "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
      image: cmLogo,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
      github: "https://codingmasterweb.in/",
      webapp: "https://codingmasterweb.in/",
    },

    {
      id: 1,
      title: "Virtual-Assistant",
      description:
        "I developed a virtual assistant using the MERN stack that enables users to interact through natural language for various tasks. It leverages AI (via Gemini) to provide intelligent responses, manage user queries, and streamline digital assistance within a web interface.",
      image: VirtualLogo,
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Gemini API"],
      github: "https://github.com/krishjain-23/VirtualAssistant",
      webapp: "https://virtualassistant-9yks.onrender.com",
    },
    {
      id: 2,
      title: "Skiper-UI",
      description:
        "I developed Skiper UI, a modern and responsive user interface built with Next.js and TypeScript, leveraging the Sciperr UI component library. The project focuses on clean design, reusability, and efficient frontend architecture for scalable web applications.",
      image: skiperLogo,
      tags: ["Next.jS", "TypeScript", "Skiper-UI"],
      github: "https://github.com/krishjain-23/Skiper-UI",
      webapp: "https://skiper-ui.onrender.com/",
    },
    {
      id: 3,
      title: "Startech-Awards",
      description:
        "I recreated the StarTech Awards website using HTML, CSS, and JavaScript, focusing on responsive design and interactive UI elements. The project showcases modern web design principles and clean code structure for a visually engaging user experience.",
      image: startechLogo,
      tags: [ "HTML", "CSS", "JavaScript", "Gsap", "Scrolltrigger"],
      github: "https://github.com/JyotiBodkhe/startech-awards",
      webapp: "https://jyotibodkhe.github.io/startech-awards/",
    },
    {
      id: 4,
      title: "Lazarev",
      description:
        "I recreated the Lazrev website using HTML, CSS, JavaScript, and Tailwind CSS, integrating Shery.js for smooth animations and interactive effects. The project focuses on delivering a high-performance, visually dynamic UI with modern design and motion elements.",
      image: LazarevLogo,
      tags: ["HTML", "CSS", "JavaScript", "TailwindCss", "Shery.js"],
      github: "https://github.com/JyotiBodkhe/lazarev",
      webapp: "https://jyotibodkhe.github.io/lazarev/",
    },
    {
      id: 5,
      title: "Brandium Website",
      description:
        "I recreated the Brandium website using HTML, CSS, JavaScript, and Tailwind CSS, enhanced with Shery.js for smooth animations and scroll effects. The project emphasizes modern UI/UX design, responsiveness, and interactive visual transitions for an engaging user experience.",
      image: BrandiumLogo,
      tags: [ "HTML", "CSS", "JavaScript", "TailwindCss", "Shery.js"],
      github: "https://github.com/JyotiBodkhe/Brandium",
      webapp: "https://jyotibodkhe.github.io/Brandium/",
    },
   
    
   
  ] 