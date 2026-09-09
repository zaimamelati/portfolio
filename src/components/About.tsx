import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-32 md:px-8"
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

              Learning the
              <br />

              future with{" "}
              <span className="text-black-400">
                code
              </span>

              <br />

              and{" "}
              <span className="text-black-400">
                creativity.
              </span>

            </h2>

          </div>


          {/* RIGHT */}
          <div className="max-w-2xl">

            <p className="text-2xl font-light leading-relaxed text-black-500">
              Saya adalah siswa Rekayasa Perangkat Lunak yang tertarik pada pengembangan web, desain UI/UX, database, 
              dan teknologi digital. Saya terus belajar dan meningkatkan kemampuan melalui tugas-tugas sekolah, latihan, 
              dan proyek pribadi.
            </p>

            <button className="mt-8 flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white">
              See my projects <ArrowRight size={16} />
            </button>

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