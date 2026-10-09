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
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#18181b] dark:bg-white" />
            <p className="text-sm font-bold tracking-wider dark:text-white">
              PROJECTS
            </p>
          </div>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl dark:text-white">
            Things I've built.
          </h2>

          {/* Search */}
          <ProjectSearch onSearch={setSearch} />
        </div>

        {/* Project Cards */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => {
              // Mengubah string teknologi dari Supabase menjadi Array
              const techList = project.teknologi
                ? project.teknologi.split(",").map((tech) => tech.trim())
                : [];

              return (
                <div
                  key={project.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-white/20 dark:border-white/20 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
                    <div className="p-6">
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                        {project.judul}
                      </h3>

                      <p className="mt-4 leading-7 font-medium text-gray-900 dark:text-gray-200">
                        {project.deskripsi}
                      </p>

                      {/* Section Teknologi / Tags */}
                      {techList.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {techList.map((tech, idx) => (
                            <span
                              key={idx}
                              className="rounded-md bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/20 px-2.5 py-1 text-xs font-bold text-gray-900 dark:text-gray-100"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Link */}
                  <div className="p-6 pt-0 mt-4 flex items-center gap-5">
                    <Link
                      href={`/proyek/${project.id}`}
                      className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-gray-300 transition hover:text-black dark:hover:text-white"
                    >
                      Detail
                      <ArrowUpRight size={16} />
                    </Link>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-extrabold text-gray-900 dark:text-white transition hover:opacity-80"
                      >
                        View project
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-gray-300 transition hover:text-black dark:hover:text-white"
                      >
                        <GithubIcon size={16} />
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
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Project not found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}