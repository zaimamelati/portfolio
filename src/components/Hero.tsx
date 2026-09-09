import { ArrowDownRight, ArrowRight, Send } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 px-6 pb-12 pt-24 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">

        {/* LEFT */}
        <div>

          {/* Introduction */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#18181b]" />

            <p className="text-lg text-gray-600">
              Hi, I'm{" "}
              <span className="font-bold text-[#18181b]">
                Zaima Melati
              </span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-6xl font-black leading-[0.95] tracking-[-3px] md:text-7xl">
            SOFTWARE ENGINEERING
            <br />
            STUDENT
          </h1>


          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-black-500 md:text-lg">
            Saya tertarik pada teknologi, pengembangan website, desain UI/UX, dan produk digital. 
            Saya terus belajar dan mengembangkan kemampuan melalui berbagai proyek dan latihan.
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
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 text-sm font-medium text-black"
            >
              Contact <Send size={16} />
            </a>

          </div>
        </div>


        {/* RIGHT */}
        <div className="flex justify-center lg:justify-end">

          <div className="relative rotate-3">

            {/* Photo */}
            <div className="relative h-[420px] w-[310px] overflow-hidden rounded-2xl border-2 border-[#18181b] bg-gray-200">

              <img
                src="/foto.jpeg"
                alt="Profile"
                className="h-full w-full object-cover"
              />

              {/* Location */}
              <div className="absolute bottom-5 left-5 right-5 bg-white px-5 py-4 shadow-lg">

                <p className="text-xs font-medium text-gray-400">
                  BASED IN
                </p>

                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold text-black">
                    Pasuruan, Indonesia
                  </p>
                  <ArrowDownRight size={18} className="text-slate-400" />
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}