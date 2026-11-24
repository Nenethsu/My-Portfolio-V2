import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import { FiCode } from "react-icons/fi";
import { SiExpress, SiGit, SiGithub, SiMongodb, SiMysql, SiObsidian, SiOpenai, SiTailwindcss } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import type { IconType } from "react-icons";
import { PlaywrightIcon, TanStackIcon } from "../components/Skills/BrandIcons";

const skillIcons: Record<string, IconType> = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJsSquare,
  "React JS": FaReact,
  "Node JS": FaNodeJs,
  "Express JS": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  "React Native": FaReact,
  NativeWind: SiTailwindcss,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": VscVscode,
  "Tailwind CSS": SiTailwindcss,
  "Prompt Engineering": SiOpenai,
  Obsidian: SiObsidian,
  Playwright: PlaywrightIcon,
  TanStack: TanStackIcon,
};

const categories = [
  { title: "Core web", names: ["HTML", "CSS", "JavaScript", "React JS"] },
  {
    title: "Application development",
    names: [
      "Node JS",
      "Express JS",
      "MongoDB",
      "MySQL",
      "React Native",
      "NativeWind",
    ],
  },
  {
    title: "Tools & workflow",
    names: [
      "Git",
      "GitHub",
      "VS Code",
      "Tailwind CSS",
      "Prompt Engineering",
      "Obsidian",
      "Playwright",
      "TanStack",
    ],
  },
];

const Skills = () => (
  <div className="space-y-5">
    <div>
      <p className="section-eyebrow">Technical toolkit</p>
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-copy">
        The technologies and tools I currently use while learning and building
        projects.
      </p>
    </div>
    <div className="grid gap-5 lg:grid-cols-3">
      {categories.map((category) => (
        <div key={category.title} className="dashboard-panel p-5">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-slate-800">
            <span className="rounded-xl bg-blue-50 p-2.5 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
              <FiCode />
            </span>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {category.title}
            </h3>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {category.names.map((name) => {
              const Icon = skillIcons[name] ?? FiCode;
              return (
                <div
                  key={name}
                  className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70"
                >
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-blue-500 dark:text-blue-400" />
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;
