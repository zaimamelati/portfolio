import CardProyek from "@/src/components/CardProyek";
import { daftarProyek } from "@/src/data/proyek";
import Link from "next/link";

interface ProyekPageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function ProyekPage({ searchParams }: ProyekPageProps) {
    const { category } = await searchParams;
    const filtered = category
    ? daftarProyek.filter((p) => p.kategori.toLowerCase() === category.toLowerCase())
    : daftarProyek;

    const categories = ['Semua', 'Web', 'Mobile', 'IoT'];

    return (
        <main className="py-6 space-y-6">
            <div>
                <h1 className="text-3xl font-extrabold text-slate-900">Daftar Karya & Proyek Siswa</h1>
                <p className="text-slate-600 text-sm mt-1">Pilih kategori di bawah untuk menyaring portofolio karya kejuruan:</p>
            </div>

            {/* Filter Kategori berbasis query URL */}
            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                    const isAll = cat === 'Semua';
                    const href = isAll ? '/proyek' : `/proyek?category=${cat.toLowerCase()}`;
                     const isActive = isAll ? !category : category?.toLowerCase() === cat.toLowerCase();

                    return (
                        <Link
                            key={cat}
                            href={href}
                            className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition ${
                                isActive ? 'bg-blue-600 text-white shadow-sm' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                            }`}
                        >
                            {cat}
                        </Link>
                     );
                })}
            </div>

             {/* Grid Kartu */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {filtered.map((item) => (
                    <CardProyek key={item.id} {...item} />
                ))};
             </div>
        </main>
    );
}