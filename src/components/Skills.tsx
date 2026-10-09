const skills = [
  { name: "Next.js", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "GitHub", color: "#A259FF" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-16 pb-28 md:px-8 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header Section */}
        <div className="mb-8 sm:mb-16">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="h-[2px] w-6 bg-[#18181b] sm:w-8 dark:bg-white" />
            <p className="text-xs font-bold tracking-wider sm:text-sm dark:text-white">
              MY SKILLS
            </p>
          </div>
        </div>

        {/* Grid Skills */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-4 transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-6 dark:border-white/10 dark:bg-white/5"
            >
              <span className="text-[10px] font-bold text-gray-400 sm:text-xs dark:text-gray-500">
                0{index + 1}
              </span>

              <h3 className="mt-4 text-base font-bold text-[#18181b] sm:mt-6 sm:text-xl dark:text-white">
                {skill.name}
              </h3>

              <div
                className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}