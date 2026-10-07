import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-100 via-white to-blue-100 px-6 pb-12 pt-24 md:px-8 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">

        {/* LEFT */}
        <div>
          {/* Introduction */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#18181b] dark:bg-white" />
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Hi, I'm{" "}
              <span className="font-bold text-[#18181b] dark:text-white">Zaima Melati</span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[0.95] tracking-[-2px] sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-[-3px] dark:text-white">
            SOFTWARE ENGINEERING
            <br />
            STUDENT
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600 md:text-lg dark:text-gray-300">
            Saya tertarik pada teknologi, pengembangan website, desain UI/UX,
            dan produk digital. Saya terus belajar dan mengembangkan
            kemampuan melalui berbagai proyek dan latihan.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-gray-600 bg-white dark:bg-transparent px-7 py-4 text-sm font-medium text-black dark:text-white"
            >
              Contact <Send size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rotate-3">
            {/* Photo */}
            <div className="relative h-[320px] w-[250px] max-w-full overflow-hidden rounded-2xl border-2 border-[#18181b] dark:border-white bg-gray-200 sm:h-[420px] sm:w-[310px]">
              <Image
                src="/foto.jpeg"
                alt="Profile"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}