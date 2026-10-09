"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import ProjectSearch from "./ProjectSearch";

// Icon Github manual
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

type ProyekRow = {
  id: number;
  judul: string;
  category: string;
  deskripsi: string;
  deskripsi_lengkap: string | null;
  image: string | null;
  teknologi: string | null;
  link: string | null;
  githubUrl: string | null;
};

export default function Projects({
  initialProjects = [],
}: {
  initialProjects: ProyekRow[];
}) {
  const [search, setSearch] = useState("");

  const filteredProjects = initialProjects.filter((project) =>
    project.judul.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section
      id="projects"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 pb-28 md:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-8 sm:mb-16">
          <div className="mb-3 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
            <div className="h-[2px] w-6 bg-[#18181b] sm:w-8 dark:bg-white" />
            <p className="text-xs font-bold tracking-wider sm:text-sm dark:text-white">
              PROJECTS
            </p>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl md:text-6xl dark:text-white">
            Things I&apos;ve built.
          </h2>

          {/* Search */}
          <div className="mt-4 sm:mt-6">
            <ProjectSearch onSearch={setSearch} />
          </div>
        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const techList = project.teknologi
                ? project.teknologi.split(",").map((tech) => tech.trim())
                : [];

              return (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-white/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/20 dark:bg-black/40"
                >
                  <div>
                    {/* Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/10">
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.judul}
                          fill
                          className="object-cover object-top transition duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-6">
                      <div className="mb-3 flex items-center justify-between sm:mb-6">
                        <span className="text-xs font-bold text-gray-800 sm:text-sm dark:text-gray-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-xs font-semibold text-gray-800 sm:text-sm dark:text-gray-300">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-black text-gray-900 sm:text-2xl dark:text-white">
                        {project.judul}
                      </h3>

                      <p className="mt-2 text-xs font-medium leading-relaxed text-gray-900 sm:mt-4 sm:text-sm sm:leading-7 dark:text-gray-200">
                        {project.deskripsi}
                      </p>

                      {/* Section Teknologi / Tags */}
                      {techList.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
                          {techList.map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-md border border-black/10 bg-black/10 px-2 py-0.5 text-[11px] font-bold text-gray-900 sm:px-2.5 sm:py-1 sm:text-xs dark:border-white/20 dark:bg-white/10 dark:text-gray-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Link */}
                  <div className="flex flex-wrap items-center gap-4 p-4 pt-0 sm:gap-5 sm:p-6 sm:pt-0">
                    <Link
                      href={`/proyek/${project.id}`}
                      className="flex items-center gap-1.5 text-xs font-bold text-gray-800 transition hover:text-black sm:text-sm dark:text-gray-300 dark:hover:text-white"
                    >
                      Detail
                      <ArrowUpRight size={14} />
                    </Link>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-extrabold text-gray-900 transition hover:opacity-80 sm:text-sm dark:text-white"
                      >
                        View project
                        <ArrowUpRight size={14} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold text-gray-800 transition hover:text-black sm:text-sm dark:text-gray-300 dark:hover:text-white"
                      >
                        <GithubIcon size={14} />
                        Github
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-sm font-semibold text-gray-700 sm:text-lg dark:text-gray-300">
              Project not found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}