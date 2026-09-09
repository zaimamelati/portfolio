import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";

// Icon Github manual (tidak lagi tersedia sebagai export di lucide-react)
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.15-.02-2.09-3.16.69-3.83-1.34-3.83-1.34-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.16a10.9 10.9 0 0 1 5.72 0c2.18-1.47 3.14-1.16 3.14-1.16.62 1.58.23 2.75.11 3.04.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.66.79.55A11.26 11.26 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5Z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-blue-100 via-purple-50 to-white px-6 pb-12 pt-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16">

          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-white" />

            <p className="text-sm font-bold tracking-wider">
              PROJECTS
            </p>
          </div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            Things I’ve built.
          </h2>

        </div>


        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-2 hover:bg-white/10"
            >

              {/* Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">

                <div className="mb-6 flex items-center justify-between">

                  <span className="text-sm text-gray-400">
                    0{index + 1}
                  </span>

                  <span className="text-sm text-gray-400">
                    {project.category}
                  </span>

                </div>


                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-800">
                  {project.description}
                </p>

                <div className="mt-8 flex items-center gap-5">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 font-medium hover:text-gray-300"
                    >
                      View project <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white"
                    >
                      <GithubIcon size={16} /> Github
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}