// ExpData.js
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaVuejs,
} from "react-icons/fa";
import {IoLogoJavascript} from "react-icons/io";
import {SiTailwindcss, SiChakraui} from "react-icons/si";

import {TbSeo} from "react-icons/tb";

export const ExpData = [
  {
    company: "Hubble42 Inc",
    jobtitle: "Frontend Developer | Feb 2023 - Present",
    desc: "Upgraded websites by integrating innovative features using JavaScript, React, and Next.js. Led projects aimed at introducing new functionalities and ensuring smooth behind-the-scenes operations. Crafted user-friendly, responsive designs optimized for diverse browsers, enhancing overall user experience and maintaining consistency across platforms.",
    iconNames: [FaReact, FaVuejs, SiTailwindcss, SiChakraui, FaGithub],
    label: ["React Js", "Vue JS", "TailwindCSS", "ChakraUI", "Git"],
  },
  {
    company: "TechnoDesert",
    jobtitle: "Frontend Developer | Sep 2022 - Jun 2023",
    desc: "Implemented automated front-end tests for seamless apps updates, utilizing HTML5 CSS3 and JS for designing, developing, and debugging web applications. Managed code repositories and continuous integration processes, improving website analytics and enhancing end-user feedback.",
    iconNames: [FaHtml5, FaCss3Alt, IoLogoJavascript, FaBootstrap, FaFigma],
    label: ["HTML", "CSS", "Javascript", "Bootstrap", "Figma"],
  },
];
