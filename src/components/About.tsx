import { ArrowRight } from "lucide-react";
import CounterApresiasi from "@/components/CounterApresiasi";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 pb-12 pt-24 md:px-8 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#18181b] dark:bg-white" />
              <p className="text-sm font-bold tracking-wider dark:text-white">
                ABOUT ME
              </p>
            </div>

            <h2 className="max-w-lg text-5xl font-black leading-tight tracking-[-2px] md:text-6xl dark:text-white">
              Learning, creating,
              <br />
              and growing{" "}
              <span className="text-black-400">with code.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl">
            <p className="text-xl font-light leading-relaxed text-black-500 dark:text-gray-300">
              Saya adalah Zaima Melati Putri, siswa Rekayasa Perangkat Lunak
              di SMK Negeri 1 Pasuruan yang tertarik pada pengembangan web,
              desain UI/UX, database, dan teknologi digital. Saya terus belajar
              dan meningkatkan kemampuan melalui tugas sekolah, latihan,
              dan proyek pribadi.
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/5 p-6">
              <p className="mb-2 text-sm font-bold tracking-wide text-gray-500 dark:text-gray-400">
                WHAT I'M WORKING TOWARDS
              </p>

              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                Menjadi Full Stack Developer yang bisa membangun produk digital
                yang benar-benar bermanfaat, sambil terus memperdalam UI/UX dan
                sistem backend yang scalable.
              </p>
            </div>

            {/* Beri Dukungan / Counter Apresiasi */}
            <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-white/5 p-6 sm:flex-row sm:items-center">
              <div>
                <p className="mb-1 text-sm font-bold tracking-wide text-gray-500 dark:text-gray-400">
                  BERI DUKUNGAN
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Klik tombol di samping untuk memberi apresiasi.
                </p>
              </div>

              <CounterApresiasi />
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="text-3xl font-black dark:text-white">2</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
              </div>

              <div>
                <p className="text-3xl font-black dark:text-white">1+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tahun Belajar</p>
              </div>
            </div>

            <a
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white"
            >
              See my projects
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-24 flex justify-center">
          <a
            href="#home"
            className="rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-transparent px-6 py-3 text-sm text-gray-600 dark:text-gray-300 shadow-md"
          >
            ↑ &nbsp; Back to top
          </a>
        </div>
      </div>
    </section>
  );
}