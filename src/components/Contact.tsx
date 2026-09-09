"use client";

import { ArrowUpRight } from "lucide-react";

// ==== GANTI DATA DI BAWAH INI DENGAN DATA KAMU ====
const CONTACT_INFO = {
  whatsappNumber: "6281575592928", // format: kode negara tanpa "+" atau "0" di depan
  whatsappMessage: "Halo, saya tertarik untuk berdiskusi tentang proyek.",
  email: "zaimamelati@email.com",
  instagramUsername: "melltyyy",
};
// ====================================================

const contactRows = [
  {
    label: "WhatsApp",
    value: "Chat langsung",
    href: `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
      CONTACT_INFO.whatsappMessage
    )}`,
  },
  {
    label: "Email",
    value: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    label: "Instagram",
    value: `@${CONTACT_INFO.instagramUsername}`,
    href: `https://instagram.com/${CONTACT_INFO.instagramUsername}`,
  },
];

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100 px-6 pb-12 pt-24 md:px-8"
    >
      {/* Top: eyebrow + heading + paragraph */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[3fr_2fr] md:gap-10">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-black" />
            <span className="text-sm font-semibold tracking-wide">
              CONTACT
            </span>
          </div>
          <h2 className="text-5xl font-black leading-[1.05] md:text-6xl">
            Let&apos;s build
            <br />
            something.
          </h2>
        </div>

        <div className="flex items-center">
          <p className="text-lg text-neutral-500">
            Pilih salah satu cara di samping untuk menghubungi saya.
          </p>
        </div>
      </div>

      {/* Bottom: full-width link rows */}
      <div className="mx-auto mt-16 max-w-6xl">
        {contactRows.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-neutral-200 py-6 first:border-t"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-2">
                {label}
              </span>
              <span className="text-sm text-neutral-400">{value}</span>
            </div>
            <ArrowUpRight
              size={22}
              className="shrink-0 text-neutral-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black"
            />
          </a>
        ))}
      </div>
    </section>
  );
}