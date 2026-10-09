import type { Metadata } from "next";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";
import MusicPlayer from "@/components/MusicPlayer"; // 1. Import komponen

export const metadata: Metadata = {
  // ...metadata kamu yang sudah ada
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem("theme");
                const prefersDark = window.matchMedia(
                  "(prefers-color-scheme: dark)"
                ).matches;

                if (saved === "dark" || (!saved && prefersDark)) {
                  document.documentElement.classList.add("dark");
                }
              })();
            `,
          }}
        />
      </head>

      <body>
        <VideoBackground />
        {children}
        
        {/* 2. Tambahkan tombol pemutar musik di sini */}
        <MusicPlayer />
      </body>
    </html>
  );
}