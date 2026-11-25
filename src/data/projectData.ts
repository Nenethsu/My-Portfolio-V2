import portfolio from "../assets/portfolio.jpg";
import portfolioV1 from "../assets/portfolioV1.jpg";
import taytay from "../assets/taytay.jpg";
import guideurself from "../assets/guideurself.jpg";
import tinygpt from "../assets/tinygpt.jpg";

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  type: string;
  link: string;
  codelink: string;
  date: string;
}

export const projectsData = [
  {
    id: 5,
    title: "Tiny GPT",
    type: "AI",
    description:
      "A 4.8M-parameter language model I built and trained from scratch with PyTorch. It writes short stories one letter at a time.",
    image: tinygpt,
    link: "https://github.com/Nenethsu/tiny-gpt",
    codelink: "https://github.com/Nenethsu/tiny-gpt",
    date: "November 25, 2026",
  },
  {
    id: 1,
    title: "Personal Portfolio V1",
    type: "Frontend",
    description:
      "My first version portfolio website , created using HTML and CSS.",
    image: portfolioV1,
    link: "https://nenethss.github.io/KennethSanPedro/",
    codelink: "https://github.com/Nenethss/KennethSanPedro",
    date: "December 23, 2025",
  },
  {
    id: 2,
    title: "Personal Portfolio V2",
    type: "Frontend",
    description:
      "My second version portfolio website , created using ReactJS and TailwindCSS.",
    image: portfolio,
    link: "https://sanpedrokenneth.netlify.app/",
    codelink: "https://github.com/Nenethsu/My-Portfolio-V2",
    date: "May 23, 2023",
  },
  {
    id: 3,
    title: "E-Tiangge Taytay",
    type: "Fullstack",
    description:
      "A full-stack online product advertisement platform created using MongoDB, React, and Node.js.",
    image: taytay,
    link: "https://taytay-marketplace.netlify.app/",
    codelink: "https://github.com/Nenethss/taytay-marketplace",
    date: "March 15, 2025",
  },
  {
    id: 4,
    title: "GuideURSelf",
    type: "Fullstack",
    description:
      "A university service desk system created using the MERN stack for the web app and Flutter for the mobile application.",
    image: guideurself,
    link: "https://guideurself.com/",
    codelink: "https://github.com/Nenethss/guideurself",
    date: "September 18, 2025",
  },
];
