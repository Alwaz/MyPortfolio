import {
  FaGitSquare,
  FaGithub,
  FaJsSquare,
  FaCss3,
  FaPython,
  FaReact,
  FaWindows,
  FaAppStoreIos,
} from "react-icons/fa";
import { SiPostman, SiTailwindcss, SiTypescript } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandVscode,
  TbBrandSvelte,
  TbBrandRedux,
  TbBrandReactNative,
} from "react-icons/tb";

export const technologies = [
  {
    category: "Programming Languages",
    items: [
      { name: "JavaScript", icon: <FaJsSquare size={32} /> },
      { name: "TypeScript", icon: <SiTypescript size={32} /> },
      { name: "Python", icon: <FaPython size={32} /> },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React", icon: <FaReact size={32} /> },
      { name: "Redux", icon: <TbBrandRedux size={32} /> },
      { name: "Next.js", icon: <TbBrandNextjs size={32} /> },
      { name: "SvelteKit", icon: <TbBrandSvelte size={32} /> },
      { name: "React Native", icon: <TbBrandReactNative size={32} /> },
      { name: "CSS", icon: <FaCss3 size={32} /> },
      { name: "TailwindCSS", icon: <SiTailwindcss size={32} /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <FaGitSquare size={32} /> },
      { name: "GitHub", icon: <FaGithub size={32} /> },
      { name: "Postman", icon: <SiPostman size={32} /> },
      { name: "VsCode", icon: <TbBrandVscode size={32} /> },
    ],
  },
  {
    category: "OS",
    items: [
      { name: "Windows", icon: <FaWindows size={32} /> },
      { name: "iOS", icon: <FaAppStoreIos size={32} /> },
    ],
  },
];
