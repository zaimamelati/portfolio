"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">

        {/* Logo */}
        <a
          href="#home"
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#18181b] text-sm font-bold text-white"
        >
          Mell
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <a
            href="#home"
            className="nav-link active"
          >
            Home
          </a>

          <a href="#projects" className="nav-link">
            Projects
          </a>

          <a href="#about" className="nav-link">
            About
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Theme */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-10 w-16 items-center justify-center rounded-full border border-gray-200 bg-white text-sm shadow-sm"
          >
            {darkMode ? "☾" : "☼"}
          </button>

          {/* Resume */}
          <button className="hidden rounded-full border border-gray-200 bg-white px-6 py-3 text-sm md:block">
            Resume
          </button>

          {/* Hire */}
          <button className="flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white">
              Hire Me <ArrowUpRight size={16} />
            </button>

        </div>
      </div>
    </nav>
  );
}