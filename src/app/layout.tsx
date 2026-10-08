import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://zaimamelati.my.id"),

  title: {
    default: "Zaima Melati || Software Engineering",
    template: "%s | Zaima Melati Putri",
  },

  description:
    "Portfolio Zaima Melati Putri, siswa Rekayasa Perangkat Lunak dari SMK Negeri 1 Pasuruan yang tertarik pada web development, UI/UX design, database, dan teknologi digital.",

  keywords: [
    "Zaima Melati",
    "Zaima Melati Putri",
    "Portfolio Zaima Melati",
    "Portofolio Zaima Melati",
    "Zaimamelati Portfolio",
    "siswa RPL",
    "siswa Rekayasa Perangkat Lunak",
    "siswa RPL Pasuruan",
    "SMK Negeri 1 Pasuruan",
    "web development",
    "web developer",
    "UI/UX design",
    "Next.js",
    "Supabase",
    "Tailwind CSS",
    "Figma",
    "database",
    "website portfolio",
    "portfolio siswa RPL",
  ],

  authors: [
    {
      name: "Zaima Melati Putri",
    },
  ],

  creator: "Zaima Melati Putri",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Zaima Melati || Software Engineering",
    description:
      "Portfolio Zaima Melati Putri, siswa Rekayasa Perangkat Lunak yang tertarik pada web development, UI/UX design, database, dan teknologi digital.",
    url: "https://zaimamelati.my.id",
    siteName: "Zaima Melati Putri Portfolio",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaima Melati || Software Engineering",
    description:
      "Portfolio Zaima Melati Putri, siswa Rekayasa Perangkat Lunak yang tertarik pada web development, UI/UX design, database, dan teknologi digital.",
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

      <body>{children}</body>
    </html>
  );
}