// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/online_study.png';
import agcLogo from './assets/company_logo/online.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/microsoft.png';
import bsaLogo from './assets/education_logo/ibm.png';
import alchemy from './assets/education_logo/alchemy.png';
import SocketLogo from './assets/tech_logo/socket_logo.png'
import certImg from './assets/certificate.png'


import gaslessVideo from './assets/project_videos/gasless_voting.mp4';
import jobPortalVideo from './assets/project_videos/job_portal.mp4';
import ecommerceVideo from './assets/project_videos/ecommerce_store.mp4';
import certEmail from './assets/email.pdf';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Web-Socket', logo: SocketLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
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
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "MERN-Stack Developer",
      company: "Online Courses",
      date: "2023 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: agcLogo,
      role: "Fullstack Engineer",
      company: "Online Courses",
      date: "2023 - Present",
      desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, Python, NoSQL, C++, DevOps, Web-Socket.",
      skills: [
        "JavaScript",
        "Python",
        "C++",
        "DevOps",
        "HTML",
        "CSS",
        "NoSQL",
        "Web-Socket",
      ],
    },
  
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Microsoft",
      grade: "99% / Duration 39 hr",
      desc: "Completed Microsoft Full-Stack course covering Computational Thinking, Algorithms, Programming Principles, C#, Back-End and Full-Stack Web Development, Git/GitHub version control, pseudocode, and program development, gaining hands-on experience in building complete web applications.",
      degree: "Foundations of Coding Full-Stack by Microsoft",
      certLink: "https://coursera.org/share/ff26961293d485ad8e0888bd056cd898",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "IBM",
      grade: "95% / Duration 9 hr",
      desc: "Completed IBM Introduction to DevOps course, learning DevOps practices including Scrum, CI/CD, Test-Driven Development, Cloud-Native Computing, Microservices, Performance Metrics, and cross-functional collaboration to drive team-oriented culture transformation",
      certLink: "https://coursera.org/share/b7424cd1af2b9ecf81efbddf2b5229d7",
    },
    {
      id: 2,
      img: alchemy,
      school: "Alchemy University",
      grade: "95% / Duration 15+ hr",
      desc: "Alchemy EVM Chain Developer program, covering the fundamentals and advanced concepts of Ethereum Virtual Machine (EVM) development. Gained hands-on experience with smart contracts, Solidity programming, decentralized applications (dApps), blockchain architecture, gas optimization, and on-chain debugging using Alchemy tools. Demonstrated proficiency in building, testing, and deploying secure and scalable smart contracts on EVM-compatible networks.",
      certImg: certImg,
      certEmail: certEmail
    },
  ];
  
export const projects = [
  {
    id: 0,
    title: "GasLess Voting dApp",
    description:
      `A decentralized voting platform that eliminates gas fees for users through innovative meta-transactions. Built with Solidity smart contracts deployed on Ethereum Sepolia testnet, featuring secure poll creation and transparent voting mechanisms. The React frontend provides an intuitive interface while the Node.js backend acts as a gas relayer. This full-stack dApp leverages Alchemy for reliable blockchain connectivity and real-time data. Experience truly accessible Web3 voting where users only sign messages without needing cryptocurrency. 

🚀Core Technologies & Architecture

Smart Contracts: Solidity on Ethereum Sepolia
Frontend: React.js with Vite, Tailwind CSS, Ethers.js
Backend: Node.js, Express.js with gas relayer system
Blockchain Infrastructure: Alchemy RPC, MetaMask integration
Architecture: Meta-transaction pattern with signed message verification

💡Key Features

Gasless voting and poll creation
Real-time results with live updates
Poll management (create, end, extend polls)
Secure wallet authentication
Transparent on-chain voting records
User poll history tracking
      `,
    tags: ["Web3", "dApp", "Blockchain", "DeFi", "SmartContracts"],
    github: "https://github.com/salahuddin-mehsud/Gasless_Voting_DApp",
    videoUrl: gaslessVideo,
  },
  {
    id: 1,
    title: "Job Portal",
    description:
      `A MERN stack job portal with real-time interactions. The platform enables job searching and hiring through live chat messaging, social networking features, and instant notifications. Employers can create detailed job postings while candidates build professional profiles and connect with companies. The integrated real-time chat system allows direct communication between job seekers and employers, while social features enable following companies and tracking application statuses with live updates.

🚀 Core Technologies & Architecture

Frontend: React.js, Vite, Tailwind CSS, Context API
Backend: Node.js, Express.js, Socket.io
Database: MongoDB with Mongoose ODM
Authentication: JWT Tokens with role-based access
File Storage: Cloudinary for resumes and images
Real-time: WebSocket connections for live features

💡 Key Features

Real-time Communication:
Live chat messaging between candidates and employers
Typing indicators and online status
Instant notifications for new messages and applications

Social Networking:
Company following system
Professional profile connections
Activity feeds and updates

Job Management:
Advanced job search with multiple filters
Save jobs functionality with dedicated saved jobs page
One-click applications with resume upload
Job posting creation and management dashboard

Live Notifications:
Real-time application status updates
Instant alerts for new job matches
Live notification system for all user activities
      `,
    tags: ["React JS", "Node.js", "Socket.io", "RESTfulAPI", "tailwindcss", "JavaScript"],
    github: "https://github.com/salahuddin-mehsud/Job-Portals",
    // Add video properties
    videoUrl: jobPortalVideo,
  },
  {
    id: 2,
    title: "E-Commerce Store",
    description:
      `Developed a full-stack MERN e-commerce solution featuring a custom recommendation system that analyzes user behavior and purchase patterns to deliver personalized shopping experiences.
      
🚀Technical Architecture

Frontend: React with Vite, Tailwind CSS, Context API for state management
Backend: Node.js, Express.js, MongoDB with Mongoose ODM
Authentication: JWT-based secure authentication with role-based access
File Management: Cloudinary integration for optimized image handling
Payment Processing: Stripe and PayPal gateway integrations

💡Key Features

User Experience: Seamless shopping cart, wishlist, order tracking
Admin Dashboard: Complete product/order management with bulk image uploads
Recommendation Engine: Custom algorithm analyzing user preferences and product relationships
Real-time Updates: Live cart synchronization and inventory management
Review System: Customer ratings and feedback integration
      `,
    tags: ["React JS", "Node.js", "Express", "Custom Recommendations", "Admin Dashboard", "Payment Integration", "User Analytics"],
    github: "https://github.com/salahuddin-mehsud/E-Commerce-Store.git",
    videoUrl: ecommerceVideo,
  },
];
