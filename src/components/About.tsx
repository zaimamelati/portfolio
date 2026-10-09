import { ArrowRight } from "lucide-react";
import CounterApresiasi from "@/components/CounterApresiasi";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 pb-28 md:px-8 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="mx-auto max-w-7xl w-full">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT */}
          <div>
            <div className="mb-4 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
              <div className="h-[2px] w-6 bg-black sm:w-8 dark:bg-white" />
              <p className="text-xs font-bold tracking-wider text-black sm:text-sm dark:text-white">
                ABOUT ME
              </p>
            </div>

            <h2 className="max-w-lg text-3xl font-black leading-tight tracking-tight text-black sm:text-5xl md:text-6xl dark:text-white">
              Learning, creating,
              <br />
              and growing{" "}
              <span className="text-gray-500 dark:text-gray-400">with code.</span>
            </h2>
          </div>

          {/* RIGHT */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium leading-relaxed text-gray-900 sm:text-lg dark:text-gray-100">
              Saya adalah Zaima Melati Putri, siswa Rekayasa Perangkat Lunak
              di SMK Negeri 1 Pasuruan yang tertarik pada pengembangan web,
              desain UI/UX, database, dan teknologi digital. Saya terus belajar
              dan meningkatkan kemampuan melalui tugas sekolah, latihan,
              dan proyek pribadi.
            </p>

            <div className="mt-5 rounded-2xl border border-gray-200 bg-white/80 p-5 sm:mt-6 sm:p-6 dark:border-gray-700 dark:bg-white/5">
              <p className="text-xs font-bold tracking-wide text-gray-800 sm:text-sm dark:text-gray-300">
                WHAT I&apos;M WORKING TOWARDS
              </p>

              <p className="mt-2 text-xs font-medium leading-relaxed text-gray-900 sm:text-base dark:text-gray-200">
                Menjadi Full Stack Developer yang bisa membangun produk digital
                yang benar-benar bermanfaat, sambil terus memperdalam UI/UX dan
                sistem backend yang scalable.
              </p>
            </div>

            {/* Beri Dukungan / Counter Apresiasi */}
            <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 sm:mt-6 sm:flex-row sm:items-center sm:p-6 dark:border-gray-700 dark:bg-white/5">
              <div>
                <p className="mb-1 text-xs font-bold tracking-wide text-gray-500 sm:text-sm dark:text-gray-400">
                  BERI DUKUNGAN
                </p>

                <p className="text-xs font-medium text-gray-800 sm:text-sm dark:text-gray-300">
                  Klik tombol di samping untuk memberi apresiasi.
                </p>
              </div>

              <CounterApresiasi />
            </div>

            <div className="mt-6 flex gap-8 sm:mt-8">
              <div>
                <p className="text-2xl font-black sm:text-3xl dark:text-white">2</p>
                <p className="text-xs font-medium text-gray-800 sm:text-sm dark:text-gray-300">Projects</p>
              </div>

              <div>
                <p className="text-2xl font-black sm:text-3xl dark:text-white">1+</p>
                <p className="text-xs font-medium text-gray-800 sm:text-sm dark:text-gray-300">Tahun Belajar</p>
              </div>
            </div>

            <a
              href="#projects"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-medium text-white sm:mt-8 sm:px-7 sm:py-4 sm:text-sm dark:bg-white dark:text-black"
            >
              See my projects
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-16 flex justify-center sm:mt-24">
          <a
            href="#home"
            className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-xs text-gray-600 shadow-md sm:px-6 sm:py-3 sm:text-sm dark:border-gray-700 dark:bg-transparent dark:text-gray-300"
          >
            ↑ &nbsp; Back to top
          </a>
        </div>
      </div>
    </section>
  );
}