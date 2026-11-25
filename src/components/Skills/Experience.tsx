const experiences = [
  {
    year: "2026",
    title: "Front-End Developer",
    company: "Dynamic Global Soft Inc.",
    period: "June 9, 2026 - Present",
  },
  {
    year: "2026",
    title: "Front-End Developer Intern",
    company: "Dynamic Global Soft Inc.",
    period: "February 27, 2026 - April 22, 2026",
  },
];

const Experience = () => {
  return (
    <div className="flex-1 w-full lg:w-1/3 flex justify-center xl8:justify-start">
      {/* One column for every row, so the years and titles line up. */}
      <div className="flex flex-col gap-6 text-left">
        {experiences.map((experience) => (
          <div
            key={experience.title}
            className="flex flex-row items-start gap-4 sm:gap-8"
          >
            <p className="w-12 shrink-0 text-blue-500 dark:text-white text-md font-bold">
              {experience.year}
            </p>
            <div className="flex flex-col justify-between">
              <p className="font-semibold text-md">{experience.title}</p>
              <p className="italic text-xs text-gray-500">
                {experience.company}
              </p>
              <p className="text-xs text-gray-500">{experience.period}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Experience;
