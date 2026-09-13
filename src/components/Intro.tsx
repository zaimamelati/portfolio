"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-700">
      <div className="mb-8 flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl bg-black text-lg font-bold text-white">
        Mellatyy
      </div>

      <div className="mb-4 flex items-center gap-3">
        <div className="h-px w-8 bg-gray-300" />
        <p className="text-xs font-bold tracking-widest text-gray-400">
          WELCOME
        </p>
        <div className="h-px w-8 bg-gray-300" />
      </div>

      <h1 className="animate-pulse text-5xl font-black tracking-tight">
        Mell<span className="text-gray-300">.</span>
      </h1>

      <p className="mt-4 text-sm font-medium tracking-widest text-gray-400">
        ZAIMA MELATI
      </p>
      <p className="mt-1 text-xs tracking-widest text-gray-300">
        WEB DEVELOPER
      </p>
    </div>
  );
}