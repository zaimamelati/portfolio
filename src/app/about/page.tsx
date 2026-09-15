import CounterApresiasi from "@/src/components/CounterApresiasi";

export default function About() {
  return (
    <main className="py-6 space-y-6 max-w-3xl">
      <h1 className="text-3xl font-extrabold text-slate-900">Tentang Saya</h1>
      <p className="text-slate-600 leading-relaxed">
        Saya adalah siswa SMK jurusan Rekayasa Perangkat Lunak (RPL). Halaman ini
        merupakan pengembangan lanjutan dari Tugas 1 yang kini telah dilengkapi
        interaktivitas antarmuka dan penataan komponen yang rapi.
      </p>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="font-bold text-slate-900 text-sm">
            Beri Dukungan untuk Karya Siswa
          </h2>
          <p className="text-xs text-slate-600 mt-1">
            Klik tombol apresiasi di samping untuk mencoba fitur interaktivitas Client Component:
          </p>
        </div>
        <CounterApresiasi />
      </div>
    </main>
  );
}