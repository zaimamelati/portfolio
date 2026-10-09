"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Send, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Masukkan daftar path foto-fotomu di sini
const photos = [
  "/foto.jpeg",
  "/foto2.jpeg", // ganti dengan path foto kedua kamu
  "/foto3.jpeg", // ganti dengan path foto ketiga kamu
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide setiap 4 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">

        {/* LEFT - DIBERIKAN PERBAIKAN DI SINI */}
        {/* Menambahkan 'relative z-10' untuk memastikan konten berada di atas background */}
        <div className="relative z-10">
          {/* Introduction */}
          <div className="mb-6 flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#18181b] dark:bg-white" />
            <p className="text-lg font-semibold text-gray-900 dark:text-gray-200">
              Hi, I'm{" "}
              <span className="font-black text-black dark:text-white">Zaima Melati</span>
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[0.95] tracking-[-2px] text-black sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-[-3px] dark:text-white">
            SOFTWARE ENGINEERING STUDENT
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-gray-900 md:text-lg dark:text-gray-200">
            Saya adalah siswa Rekayasa Perangkat Lunak di SMK Negeri 1 Pasuruan
            yang tertarik pada web development, UI/UX design, database, dan
            teknologi digital. Saya terus belajar dan mengembangkan kemampuan
            melalui tugas sekolah, latihan, dan berbagai proyek.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-slate-300 dark:border-gray-600 bg-white/80 dark:bg-transparent px-7 py-4 text-sm font-medium text-black dark:text-white backdrop-blur-sm"
            >
              Contact <Send size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col items-center justify-center lg:items-end">
          <div className="group relative rotate-3">
            {/* Photo Container */}
            <div className="relative h-[320px] w-[250px] max-w-full overflow-hidden rounded-2xl border-2 border-[#18181b] bg-gray-200 shadow-xl backdrop-blur-md sm:h-[420px] sm:w-[310px] dark:border-white dark:bg-black/20">
              {photos.map((src, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Zaima Melati ${index + 1}`}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Tombol Panah Navigasi Manual (Muncul saat Hover) */}
              <button
                onClick={handlePrev}
                aria-label="Previous Photo"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-2 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next Photo"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-2 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Indikator Titik (Dots) di Bawah Foto */}
          <div className="mt-6 flex items-center justify-center gap-2 pr-0 lg:pr-8">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-black dark:bg-white"
                    : "w-2.5 bg-gray-400/60 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}