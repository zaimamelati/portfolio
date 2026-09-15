export interface ProyekItem {
  id: string;
  judul: string;
  kategori: 'Web' | 'Mobile' | 'IoT';
  deskripsiSingkat: string;
  deskripsiLengkap: string;
  teknologi: string[];
}

export const daftarProyek: ProyekItem[] = [
  {
    id: '1',
    judul: 'Manajemen Siswa',
    kategori: 'Web',
    deskripsiSingkat:
      'Sistem informasi manajemen sekolah untuk menilai, mengelola, dan memantau data seluruh murid secara terpusat.',
    deskripsiLengkap:
      'Aplikasi ini membantu pihak sekolah mengelola data siswa, nilai, dan kehadiran dalam satu dashboard terpusat. Dibangun menggunakan Supabase sebagai backend untuk penyimpanan data real-time, dengan tampilan antarmuka yang rapi menggunakan Shadcn UI.',
    teknologi: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Supabase'],
  },
  {
    id: '2',
    judul: 'My App',
    kategori: 'Web',
    deskripsiSingkat:
      'Project frontend untuk mencoba dan mengeksplorasi berbagai fitur dashboard analitik menggunakan Next.js.',
    deskripsiLengkap:
      'Project eksplorasi fitur-fitur teknis Next.js, mencakup dashboard analitik, optimasi gambar otomatis, penyimpanan data (Web Storage, IndexDB, Realtime DB), pemrosesan gambar, dan integrasi peta.',
    teknologi: ['Next.js', 'Tailwind CSS', 'Shadcn UI'],
  },
  {
    id: '3',
    judul: 'MenuKu',
    kategori: 'Web',
    deskripsiSingkat:
      'Desain UI aplikasi rekomendasi menu makanan berdasarkan bahan yang tersedia di rumah.',
    deskripsiLengkap:
      'Desain antarmuka aplikasi web untuk merekomendasikan menu makanan berdasarkan bahan yang tersedia di rumah pengguna, lengkap dengan alur login, daftar bahan, dan kategori waktu makan. Dirancang penuh menggunakan Figma dengan tampilan desktop/browser.',
    teknologi: ['Figma'],
  },
];