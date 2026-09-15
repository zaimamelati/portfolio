import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zaima — Portfolio",
  description: "Personal portfolio of Zaima",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}