import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';

interface DetailProps {
  params: Promise<{ id: string }>;
}

type ProyekRow = {
  id: number;
  judul: string;
  category: string;
  deskripsi: string;
  image: string | null;
};

export async function generateMetadata({ params }: DetailProps): Promise<Metadata> {
  const { id } = await params;
  const { data: proyek } = await supabase
    .from('proyek')
    .select('judul, deskripsi')
    .eq('id', id)
    .single();

  if (!proyek) {
    return { title: 'Proyek Tidak Ditemukan' };
  }

  return {
    title: proyek.judul,
    description: proyek.deskripsi,
    openGraph: {
      title: proyek.judul,
      description: proyek.deskripsi,
    },
  };
}

export default async function ProyekDetailPage({ params }: DetailProps) {
  const { id } = await params;
  const { data: proyek } = await supabase
    .from('proyek')
    .select('id, judul, category, deskripsi, image')
    .eq('id', id)
    .single<ProyekRow>();

  if (!proyek) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/proyek" className="mb-8 inline-block text-sm text-slate-600 hover:underline">
        ← Kembali ke semua proyek
      </Link>

      {proyek.image && (
        <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={proyek.image}
            alt={`Tampilan proyek ${proyek.judul}`}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            priority
            className="object-cover"
          />
        </div>
      )}

      <span className="mb-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
        {proyek.category}
      </span>

      <h1 className="mb-4 text-4xl font-black tracking-tight text-slate-900">
        {proyek.judul}
      </h1>

      <p className="text-gray-600">{proyek.deskripsi}</p>
    </main>
  );
}