import type { Metadata } from "next";
import "./globals.css";
import VideoBackground from "@/components/VideoBackground";
import MusicPlayer from "@/components/MusicPlayer";

export const metadata: Metadata = {
  // Wajib ditambahkan agar Next.js bisa membentuk Absolute URL untuk gambar OpenGraph
  metadataBase: new URL("https://www.zaimamelati.my.id"),

  title: "Zaima Melati - Software Engineering Student",
  description:
    "Portofolio Zaima Melati, siswa Rekayasa Perangkat Lunak SMKN 1 Pasuruan yang berfokus pada Web Development dan UI/UX Design.",

  // Metadata OpenGraph untuk WhatsApp / Facebook / LinkedIn
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

      <body className="relative min-h-screen bg-[#fafafa] text-[#18181b] antialiased selection:bg-sky-300 selection:text-black dark:bg-[#0f172a] dark:text-white">
        <VideoBackground />
        
        {/* Konten Utama Halaman */}
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
        
        {/* Pemutar musik ditaruh di dalam body agar z-index nya aman dan tampil melayang */}
        <MusicPlayer />
      </body>
    </html>
  );
}