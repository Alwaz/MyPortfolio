import { Project } from "@/Interface/projects";
import SS from "../public/selectsuite.png";
import SAAS from "../public/landing-page.png";
import ZIARAT from "../public/ziarat-landing-page.png";
import FDS from "../public/fds.png";

export const projects: Project[] = [
  {
    slug: "fastdatascience",
    title: "Clinical Trial Risk Tool",
    brief:
      "The Clinical Trial Risk Tool by Fast Data Science is a dashboard designed to analyze clinical trial protocols and estimate the cost in dollars and the risk of the trial ending uninformatively.",
    description:
      "The Clinical Trial Risk Tool helps users estimate the cost and risk of clinical trials by analyzing uploaded PDF documents. It provides quick estimates without requiring a login and allows users to adjust settings for more accurate results. Users can view document history, compare original files with analysis, and easily spot important sections using visual highlights and heatmaps. Role-based access keeps the platform secure for different user types, while guest mode lets anyone explore the tool. These features make complex data easy to understand, helping teams make faster and better decisions.",
    image: FDS,
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Material tailwind",
      "D3.js",
      "Axios",
      "ESLint",
      "Jotai",
    ],
    url: "https://clinical.fastdatascience.com/",
    repository: "",
  },
  {
    slug: "ziarat-landing-page",
    title: "Ziarat landing page",
    brief:
      "Designed and developed a fully responsive landing page for a pre-seed startup to help build their online presence.",
    description:
      "Worked closely with the founding team to understand their vision and goals, incorporating their feedback and ideas into the website's design.",
    image: ZIARAT,
    stack: [
      "ReactJS",
      "Typescript",
      "Firebase",
      "Tailwind CSS",
      "Figma(Software)",
      "UI/UX",
    ],
    url: "https://ziarat.xyz/s",
    repository: "",
  },
  {
    slug: "saas-animated-landing-page",
    title: "Saas landing page",
    brief: "An animated Saas landing page using NextJs and framer motion.",
    description:
      "An animated Saas landing page using NextJs, tailwindCSS and framer motion.",
    image: SAAS,
    stack: ["NextJs", "Typescript", "Framer motion", "Tailwind CSS"],
    url: "https://saas-landing-page-sigma-pink.vercel.app/",
    repository: "https://github.com/Alwaz/saas-landing-page",
  },
  {
    slug: "selectsuite",
    title: "SelectSuite",
    brief:
      "SelectSuite is a SaaS tool that streamlines recruitment for agencies by automating candidate management, selection, and data access based on employer needs.",
    description:
      "A management tool for recruiters (manpower providers agencies) who currently have manual processes to Store, Edit, Present, Manage, Give Access and Select candidates based on specific requirements from employer side",
    image: SS,
    stack: [
      "NextJS 14",
      "Vite",
      "Shadcn",
      "NodeJs",
      "TypeScript",
      "MongoDB",
      "Tailwind CSS",
      "AWS",
    ],
    url: "https://www.selectsuite.net",
    repository: "",
  },

  // {
  //   slug: "medicare",
  //   title: "Medicare",
  //   brief: "Easy doctor appointments, quick bookings.",
  //   description:
  //     "Book doctor appointments hassle-free with our simple web app. Quick and secure payments included.",
  //   image: Medicare,
  //   stack: [
  //     "React",
  //     "JavaScript",
  //     "MongoDB",
  //     "Node.js",
  //     "Express.js",
  //     "Tailwind CSS",
  //   ],
  //   url: "",
  //   repository:
  //     "https://github.com/MohamedBoukthir/Doctor-Appointment-Booking-MERN-Stack",
  // },
  // {
  //   slug: "shop",
  //   title: "Shop",
  //   brief:
  //     "Your go-to for easy, secure online shopping. Explore, click, and enjoy doorstep delivery. ",
  //   description:
  //     "Welcome to Shop Now – where your online shopping experience is simplified. Discover a world of products, click to purchase, and enjoy seamless doorstep delivery. Easy, secure, and at your fingertips.",
  //   image: Shop,
  //   stack: [
  //     "React",
  //     "JavaScript",
  //     "Redux",
  //     "Node.js",
  //     "Firebase",
  //     "Tailwind CSS",
  //   ],
  //   url: "",
  //   repository: "https://github.com/MohamedBoukthir/Shop-Ecommerce",
  // },
  // {
  //   slug: "java-growth",
  //   title: "JavaGrowth",
  //   brief:
  //     "Your quick reference for mastering Java programming. Essential syntax, key concepts, and tips at your fingertips.",
  //   description:
  //     "your go-to resource for mastering Java programming. Whether you're a beginner or an experienced developer, this concise guide provides essential syntax, key concepts, and valuable tips to enhance your coding skills. ",
  //   image: Java,
  //   stack: ["Java", "OOP", "IntelliJ idea"],
  //   url: "",
  //   repository: "https://github.com/MohamedBoukthir/JavaGrowth",
  // },
  // {
  //   slug: "web-security",
  //   title: "WebSecurity",
  //   brief:
  //     "Set up authentication, user registration, and control access effortlessly. Explore the world of safe coding with RESTful APIs.",
  //   description:
  //     "Learn to easily add authentication, manage user registration, and control access. Dive into the secure realm of RESTful APIs, where coding becomes safer and more straightforward.",
  //   image: Security,
  //   stack: [
  //     "Java",
  //     "JWT",
  //     "IntelliJ idea",
  //     "Spring",
  //     "Spring Security",
  //     "Spring Boot",
  //     "Spring Data JPA",
  //     "MySQL",
  //   ],
  //   url: "",
  //   repository: "https://github.com/MohamedBoukthir/webSecurity",
  // },
];
