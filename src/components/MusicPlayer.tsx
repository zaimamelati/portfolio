"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 1.0; // Memastikan volume audio maksimal
    }
  }, []);

  const togglePlay = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        // Reset waktu ke awal jika sebelumnya berhenti
        audioRef.current.currentTime = audioRef.current.currentTime || 0;
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Gagal memutar lagu:", error);
        alert("Audio tidak dapat diputar. Pastikan file /music.mp3 ada dan tidak rusak!");
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        src="/music.mp3"
        preload="auto"
        loop
        onError={(e) => {
          console.error("Error memuat file audio:", e);
        }}
      />

      <button
        onClick={togglePlay}
        className={`flex items-center gap-3 rounded-full border px-5 py-2.5 text-xs font-semibold shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPlaying
            ? "border-sky-400 bg-sky-500/20 text-sky-700 dark:text-sky-300 animate-pulse"
            : "border-gray-300 bg-white/80 text-gray-800 dark:border-gray-700 dark:bg-black/70 dark:text-gray-200"
        }`}
      >
        <Music
          size={16}
          className={isPlaying ? "animate-spin text-sky-500" : ""}
          style={{ animationDuration: "3s" }}
        />
        <span>{isPlaying ? "Playing Music" : "Play Music"}</span>
        {isPlaying ? (
          <Volume2 size={16} className="text-sky-500" />
        ) : (
          <VolumeX size={16} />
        )}
      </button>
    </div>
  );
}