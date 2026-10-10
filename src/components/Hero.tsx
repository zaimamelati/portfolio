"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Send, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const photos = [
  { src: "/foto.jpeg", label: "Photo 1" },
  { src: "/foto2.jpeg", label: "Photo 2" },
  { src: "/foto3.jpeg", label: "Photo 3" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide setiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000);

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
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-12 sm:pt-28 md:px-8"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2">

        {/* LEFT */}
        <div className="relative z-10">
          {/* Introduction */}
          <div className="mb-3 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
            <div className="h-[2px] w-6 bg-[#18181b] sm:w-8 dark:bg-white" />
            <p className="text-base font-semibold text-gray-900 sm:text-lg dark:text-gray-200">
              Hi, I'm{" "}
              <span className="font-black text-black dark:text-white">Zaima Melati</span>
            </p>
          </div>

          {/* Heading - Diperbesar ukurannya di mobile */}
          <h1 className="text-3xl font-black leading-tight tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-[-3px] dark:text-white">
            SOFTWARE ENGINEERING STUDENT
          </h1>

          {/* Description - Diperbesar ukurannya di mobile */}
          <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-gray-900 sm:mt-8 sm:text-base md:text-lg dark:text-gray-200">
            Saya adalah siswa Rekayasa Perangkat Lunak di SMK Negeri 1 Pasuruan 
            yang fokus mendalami web development dan database.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-semibold text-white transition hover:bg-neutral-800 sm:px-7 sm:py-4 sm:text-sm dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-xs font-semibold text-black backdrop-blur-sm sm:px-7 sm:py-4 sm:text-sm dark:border-gray-600 dark:bg-transparent dark:text-white"
            >
              Contact <Send size={16} />
            </a>
          </div>
        </div>

        {/* RIGHT - BINGKAI FOTO BERTUMPUK (STACKED) */}
        <div className="flex flex-col items-center justify-center lg:items-end">
          <div className="group relative h-[300px] w-[230px] sm:h-[440px] sm:w-[320px] flex items-center justify-center">
            
            {/* Mapping Bingkai Foto Bertumpuk */}
            {photos.map((item, index) => {
              const offset = (index - currentIndex + photos.length) % photos.length;
              
              let styleClass = "";
              let shouldRender = false;

              if (offset === 0) {
                styleClass = "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 z-30 shadow-2xl";
                shouldRender = true;
              } else if (offset === 1) {
                styleClass = "translate-x-6 sm:translate-x-10 translate-y-4 sm:translate-y-6 rotate-6 scale-95 opacity-80 z-20 shadow-lg";
                shouldRender = true;
              } else if (offset === photos.length - 1) {
                styleClass = "-translate-x-6 sm:-translate-x-10 translate-y-8 sm:translate-y-12 -rotate-6 scale-90 opacity-60 z-10 shadow-md";
                shouldRender = true;
              }

              if (!shouldRender) return null;

              return (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`absolute h-[260px] w-[200px] sm:h-[400px] sm:w-[290px] cursor-pointer overflow-hidden rounded-2xl border-4 border-[#18181b] bg-white transition-all duration-700 ease-in-out dark:border-white dark:bg-black/80 ${styleClass}`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                </div>
              );
            })}

            {/* Tombol Panah Navigasi Manual */}
            <button
              onClick={handlePrev}
              aria-label="Previous Photo"
              className="absolute -left-2 sm:-left-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-2 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              aria-label="Next Photo"
              className="absolute -right-2 sm:-right-4 top-1/2 z-40 -translate-y-1/2 rounded-full border border-white/40 bg-black/40 p-2 text-white backdrop-blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-black/70"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Indikator Titik (Dots) di Bawah Bingkai */}
          <div className="mt-8 flex items-center justify-center gap-2 pr-0 lg:pr-8">
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