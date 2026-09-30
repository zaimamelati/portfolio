import Link from 'next/link';
import { supabase } from '@/lib/supabase';

type ProyekRow = {
  id: number;
  judul: string;
  category: string;
  deskripsi: string;
  image: string | null;
};

export default async function ProyekListPage() {
  const { data: proyekList, error } = await supabase
    .from('proyek')
    .select('id, judul, category, deskripsi, image')
    .order('id', { ascending: false })
    .returns<ProyekRow[]>();

  if (error) {
    return (
      <main className="py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900">
          Gagal memuat proyek
        </h1>
        <p className="mt-2 text-gray-500">{error.message}</p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-12">
        <span className="mb-4 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
          PROYEK
        </span>
        <h1 className="text-4xl font-black tracking-tight text-slate-900">
          Semua Proyek
        </h1>
      </div>

      {(!proyekList || proyekList.length === 0) ? (
        <p className="text-gray-500">Belum ada proyek yang ditambahkan.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {proyekList.map((proyek) => (
            <Link
              key={proyek.id}
              href={`/proyek/${proyek.id}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              {proyek.image && (
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={proyek.image}
                    alt={proyek.judul}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="p-6">
                <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  {proyek.category}
                </span>

                <h2 className="mb-2 text-xl font-bold text-slate-900">
                  {proyek.judul}
                </h2>

                <p className="line-clamp-2 text-sm text-gray-500">
                  {proyek.deskripsi}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}