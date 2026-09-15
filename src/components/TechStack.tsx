const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "MySQL",
  "Git",
  "Figma",
];

export default function TechStack() {
  return (
    <section className="border-y border-gray-200 bg-white py-6 overflow-hidden">

      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-8 md:gap-12">

        {skills.map((skill) => (
          <span
            key={skill}
            className="text-sm font-bold uppercase tracking-wide text-gray-400 md:text-base"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}