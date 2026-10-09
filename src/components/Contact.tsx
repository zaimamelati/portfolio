"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const CONTACT_INFO = {
  whatsappMessage: "Halo, saya tertarik untuk berdiskusi tentang proyek.",
  email: "zaimamelati@email.com",
  instagramUsername: "melltyyy",
};

const contactRows = [
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
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama, pesan }),
      });

      if (res.ok) {
        setStatus("success");
        setNama("");
        setPesan("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section 
      id="contact" 
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 py-16 pb-32 md:px-8"
    >
      {/* Top: eyebrow + heading + paragraph */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-[3fr_2fr] md:gap-10">
        <div>
          <div className="mb-3 flex items-center gap-2.5 sm:mb-6 sm:gap-3">
            <span className="h-[2px] w-6 bg-black sm:w-8 dark:bg-white" />
            <span className="text-xs font-extrabold tracking-wider text-black sm:text-sm dark:text-white">
              CONTACT
            </span>
          </div>
          <h2 className="text-3xl font-black leading-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Let&apos;s build
            <br />
            something.
          </h2>
        </div>

        <div className="flex items-center pt-2 md:pt-0">
          <p className="text-sm font-bold text-gray-800 sm:text-lg dark:text-gray-200">
            Pilih salah satu cara di bawah untuk mehubungi saya.
          </p>
        </div>
      </div>

      {/* Bottom: full-width link rows */}
      <div className="mx-auto mt-8 w-full max-w-6xl sm:mt-12">
        {contactRows.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b-2 border-neutral-300 py-4 first:border-t-2 sm:py-6 dark:border-gray-700"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
              <span className="text-lg font-black tracking-tight text-gray-900 transition-transform duration-200 group-hover:translate-x-2 sm:text-2xl dark:text-white">
                {label}
              </span>
              <span className="text-xs font-bold text-gray-700 sm:text-base dark:text-gray-300">
                {value}
              </span>
            </div>
            <ArrowUpRight
              size={20}
              className="shrink-0 stroke-[2.5] text-gray-800 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black sm:size-6 dark:text-gray-300 dark:group-hover:text-white"
            />
          </a>
        ))}
      </div>

      {/* Form: kirim pesan langsung */}
      <div className="mx-auto mt-10 w-full max-w-2xl sm:mt-16">
        <p className="mb-4 text-xs font-black tracking-wider text-black sm:mb-6 sm:text-sm dark:text-white">
          ATAU KIRIM PESAN LANGSUNG
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Nama kamu"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="rounded-xl border-2 border-neutral-300 bg-white/80 px-4 py-2.5 text-xs font-semibold text-gray-900 placeholder:font-medium placeholder:text-gray-500 focus:border-black focus:outline-none sm:py-3 sm:text-sm dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-white"
          />
          <textarea
            placeholder="Pesan kamu"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
            rows={4}
            className="rounded-xl border-2 border-neutral-300 bg-white/80 px-4 py-2.5 text-xs font-semibold text-gray-900 placeholder:font-medium placeholder:text-gray-500 focus:border-black focus:outline-none sm:py-3 sm:text-sm dark:border-gray-600 dark:bg-gray-800/80 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-white"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-fit rounded-xl bg-black px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-neutral-800 disabled:opacity-50 sm:px-6 sm:py-3 sm:text-sm dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "success" && (
            <p className="text-xs font-bold text-green-600 sm:text-sm dark:text-green-400">
              Pesan berhasil dikirim, terima kasih!
            </p>
          )}
          {status === "error" && (
            <p className="text-xs font-bold text-red-600 sm:text-sm dark:text-red-400">
              Gagal mengirim pesan, coba lagi.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}