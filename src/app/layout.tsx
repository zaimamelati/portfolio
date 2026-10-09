import type { Metadata } from "next";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  // 1. Wajib tambahkan ini agar Next.js bisa membentuk Absolute URL untuk gambar OpenGraph
  metadataBase: new URL("https://www.zaimamelati.my.id"),

  title: "Zaima Melati - Software Engineering Student",
  description:
    "Portofolio Zaima Melati, siswa Rekayasa Perangkat Lunak SMKN 1 Pasuruan yang berfokus pada Web Development dan UI/UX Design.",

  // 2. Metadata OpenGraph untuk WhatsApp / Facebook / LinkedIn
  openGraph: {
    title: "Zaima Melati - Software Engineering Student",
    description:
      "Portofolio Zaima Melati, siswa Rekayasa Perangkat Lunak SMKN 1 Pasuruan.",
    url: "https://www.zaimamelati.my.id",
    siteName: "Zaima Melati Portfolio",
    locale: "id_ID",
    type: "website",
  },
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
        
        {/* Pemutar musik */}
        <MusicPlayer />
      </body>
    </html>
  );
}