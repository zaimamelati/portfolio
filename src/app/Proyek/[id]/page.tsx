import { supabase } from '@/lib/supabase';

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

export default async function ProyekDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { data: proyek, error } = await supabase
    .from('proyek')
    .select('*')
    .eq('id', id)
    .single<ProyekRow>();

  if (error || !proyek) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Proyek tidak ditemukan
        </h1>
        <p className="mt-2 text-gray-500">
          Proyek dengan id "{id}" tidak ada di database.
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <span className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
        {proyek.category}
      </span>

      <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900">
        {proyek.judul}
      </h1>

      {proyek.image && (
        <img
          src={proyek.image}
          alt={proyek.judul}
          className="mb-8 w-full rounded-2xl border object-cover"
        />
      )}

      <p className="mb-8 text-lg leading-8 text-gray-700">
        {proyek.deskripsi_lengkap || proyek.deskripsi}
      </p>

      {proyek.teknologi && (
        <div className="mb-8 flex flex-wrap gap-2">
          {proyek.teknologi.split(',').map((tech) => (
            <span
              key={tech.trim()}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            >
              {tech.trim()}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-6">
        {proyek.link && (
          <a
            href={proyek.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            View Project →
          </a>
        )}

        {proyek.githubUrl && (
          <a
            href={proyek.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gray-600 hover:text-gray-900"
          >
            Github →
          </a>
        )}
      </div>
    </main>
  );
}