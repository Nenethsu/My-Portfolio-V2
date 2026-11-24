import { FiBriefcase, FiCalendar } from "react-icons/fi";

const Experience = () => (
  <div className="space-y-5">
    <div><p className="section-eyebrow">Career timeline</p><h2 className="section-title">Experience</h2><p className="section-copy">My professional experience at Dynamic Global Soft Inc.</p></div>
    <div className="dashboard-panel p-6 sm:p-8">
      <div>
        <div className="flex gap-5">
          <div className="flex shrink-0 flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"><FiBriefcase /></div>
            <div className="my-2 w-px flex-1 bg-blue-100 dark:bg-blue-500/20" />
          </div>
          <div className="space-y-3 pb-8"><div className="flex flex-wrap items-center gap-3"><h3 className="text-base font-bold text-slate-900 dark:text-white">Frontend Developer</h3><span className="status-pill">Present</span></div><p className="text-sm font-medium text-blue-600 dark:text-blue-400">Dynamic Global Soft Inc. · Probationary Employee with a position as a Frontend Developer</p><p className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"><FiCalendar /> June 9, 2026 - Present</p><p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">Working as a Frontend Developer at Dynamic Global Soft Inc.</p></div>
        </div>
        <div className="flex gap-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"><FiBriefcase /></div>
          <div className="space-y-3"><div className="flex flex-wrap items-center gap-3"><h3 className="text-base font-bold text-slate-900 dark:text-white">Frontend Developer Intern</h3><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:bg-slate-800 dark:text-slate-300">Internship</span></div><p className="text-sm font-medium text-blue-600 dark:text-blue-400">Dynamic Global Soft Inc.</p><p className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"><FiCalendar /> February 27, 2026 - April 22, 2026</p><p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">Completed a frontend development internship at Dynamic Global Soft Inc.</p></div>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
