import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="min-h-screen flex items-center justify-center text-center px-4 py-12 bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100">
            <div className="space-y-4 max-w-md">
                <span className="text-6xl font-extrabold text-blue-600 font-mono">404</span>
                <h1 className="text-2xl font-bold text-slate-900">Halaman Proyek Tidak Ditemukan</h1>
                <p className="text-slate-600 text-sm leading-relaxed">
                    Maaf, data karya proyek yang kamu masukkan tidak tersedia di sistem portofolio.
                </p>
                <Link
                    href="/"
                    className="inline-block px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition shadow-md"
                >
                    Kembali ke Beranda
                </Link>
            </div>
        </main>
    );
}