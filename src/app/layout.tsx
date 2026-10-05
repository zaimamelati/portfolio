import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase:  new URL ("https://portofolio-zaimamelati.vercel.app/"),
  title: {
    default: "Zaimamelati's Portofolio",
    template: "%s | Zaimamelati's Portofolio",
  },

  description: "Zaimamelati's Portofolio is a showcase of my work, skills, and experience as a web developer. Explore my projects, learn about my expertise, and get in touch to collaborate on exciting opportunities.",
  openGraph: {
    title: "Zaimamelati's Portofolio",
    description: "Zaimamelati's Portofolio is a showcase of my work, skills, and experience as a web developer. Explore my projects, learn about my expertise, and get in touch to collaborate on exciting opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const saved = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
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