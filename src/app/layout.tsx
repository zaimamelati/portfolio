import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = {
  title: 'Website Profil Siswa & Portfolio — Next.js',
  description: 'Portofolio karya teknologi siswa SMK RPL',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
        {/* Navigasi Utama Global */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-extrabold text-lg text-slate-900 tracking-tight">
              Profil<span className="text-blue-600">Siswa</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
              <Link href="/" className="hover:text-blue-600 transition">Beranda</Link>
              <Link href="/tentang" className="hover:text-blue-600 transition">Tentang</Link>
              <Link href="/keahlian" className="hover:text-blue-600 transition">Keahlian</Link>
              <Link href="/proyek" className="hover:text-blue-600 transition">Proyek</Link>
              <Link href="/kontak" className="hover:text-blue-600 transition">KontaK</Link>
            </nav>
          </div>
        </header>
        {/* Konten Halaman Dinamis */}
        <div className="flex-1 max-w-5xl mx-auto px-4 py-8 w-full">
          {children}
        </div>
        {/* Footer Global */}
        <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
          <p>Project Pembelajaran Next.js App Router — SMK RPL / PPLG</p>
        </footer>
      </body>
    </html>
  );
  }