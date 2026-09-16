import Link from 'next/link';
import { projects } from '@/src/data/projects';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProyekDetail({ params }: Props) {
  const { id } = await params;
  const proyek = projects.find((item) => item.id === id);

  if (!proyek) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-3">Project Not Found</h2>
          <p className="text-gray-500 mb-6">
            The project you are looking for does not exist.
          </p>
          <Link
            href="/#projects"
            className="rounded-full bg-black px-6 py-3 text-white"
          >
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="mb-8 inline-block text-gray-500 hover:text-black"
        >
          ← Back to Projects
        </Link>

        <div className="rounded-3xl border p-8 shadow-sm">
          <span className="mb-4 inline-block rounded-full bg-gray-100 px-4 py-2 text-sm">
            {proyek.category}
          </span>

          <h1 className="mb-4 text-4xl font-bold">{proyek.title}</h1>

          <p className="mb-8 leading-relaxed text-gray-600">
            {proyek.description}
          </p>

          <h2 className="mb-4 text-xl font-semibold">Technologies</h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {proyek.tags.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-gray-100 px-4 py-2 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href={proyek.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black px-6 py-3 text-white text-sm font-semibold"
            >
              View Live
            </a>
            <a
              href={proyek.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}