import { ArrowRight } from "lucide-react";
import CounterApresiasi from "@/src/components/CounterApresiasi";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-blue-100 via-purple-50 to-white px-6 pb-12 pt-24 md:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="mb-8 flex items-center gap-3">
              <div className="h-[2px] w-8 bg-[#18181b]" />

              <p className="text-sm font-bold tracking-wider">
                ABOUT ME
              </p>
            </div>

            <h2 className="max-w-lg text-5xl font-black leading-tight tracking-[-2px] md:text-6xl">

              Learning, creating,
              <br />

              and growing{" "}
              <span className="text-black-400">
                with code.
              </span>
            </h2>

          </div>


          {/* RIGHT */}
          <div className="max-w-2xl">

            <p className="text-xl font-light leading-relaxed text-black-500">
              Saya adalah siswa Rekayasa Perangkat Lunak yang tertarik pada pengembangan web, 
              desain UI/UX, database, dan teknologi digital. Saya terus belajar dan meningkatkan 
              kemampuan melalui tugas-tugas sekolah, latihan, dan proyek pribadi.
            </p>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white/60 p-6">
                <p className="mb-2 text-sm font-bold tracking-wide text-gray-500">
                  WHAT I'M WORKING TOWARDS
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                  Menjadi Full Stack Developer yang bisa membangun produk digital yang
                  benar-benar bermanfaat, sambil terus memperdalam UI/UX dan sistem
                  backend yang scalable.
                </p>
              </div>

              {/* Beri Dukungan / Counter Apresiasi */}
            <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white/60 p-6">
              <div>
                <p className="mb-1 text-sm font-bold tracking-wide text-gray-500">
                  BERI DUKUNGAN
                </p>
                <p className="text-sm text-gray-600">
                  Klik tombol di samping untuk memberi apresiasi.
                </p>
              </div>
              <CounterApresiasi />
            </div>

            <div className="mt-8 flex gap-8">
            <div>
              <p className="text-3xl font-black">2</p>
              <p className="text-sm text-gray-500">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-black">1+</p>
              <p className="text-sm text-gray-500">Tahun Belajar</p>
            </div>
          </div>

            <a           
              href="#projects"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white"
            >
              See my projects <ArrowRight size={16} />
            </a>

          </div>

        </div>


        {/* Back to top */}
        <div className="mt-24 flex justify-center">

          <a
            href="#home"
            className="rounded-full border border-gray-200 bg-white px-6 py-3 text-sm text-gray-600 shadow-md"
          >
            ↑ &nbsp; Back to top
          </a>

        </div>

      </div>
    </section>
  );
}