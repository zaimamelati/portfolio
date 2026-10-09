"use client";

import { useState, useRef } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.error("Gagal memutar audio:", err);
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[99999] pointer-events-auto">
      <audio ref={audioRef} src="/music.mp3" preload="auto" loop />

      <button
        onClick={togglePlay}
        aria-label="Toggle Music"
        className={`flex items-center gap-2 rounded-full px-4 py-3 shadow-2xl transition-all duration-300 font-semibold text-xs ${
          isPlaying
            ? "bg-sky-500 text-white shadow-sky-500/50"
            : "bg-black text-white dark:bg-white dark:text-black shadow-black/30"
        }`}
      >
        <Music size={18} className={isPlaying ? "animate-spin" : ""} />
        <span>{isPlaying ? "Playing..." : "Play Music"}</span>
        {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
      </button>
    </div>
  );
}