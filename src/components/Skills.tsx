const skills = [
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "Figma", color: "#A259FF" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 py-32 md:px-8 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#18181b] dark:bg-white" />
            <p className="text-sm font-bold tracking-wider dark:text-white">MY SKILLS</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl border border-white/50 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="text-xs font-bold text-gray-400 dark:text-gray-500">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-xl font-bold text-[#18181b] dark:text-white">
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