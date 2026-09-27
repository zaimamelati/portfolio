"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

// ==== DATA KAMU ====
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
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gradient-to-br from-cyan-100 via-blue-50 to-indigo-100 px-6 pb-12 pt-24 md:px-8 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Top: eyebrow + heading + paragraph */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-[3fr_2fr] md:gap-10">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-black dark:bg-white" />
            <span className="text-sm font-semibold tracking-wide dark:text-white">
              CONTACT
            </span>
          </div>
          <h2 className="text-5xl font-black leading-[1.05] md:text-6xl dark:text-white">
            Let&apos;s build
            <br />
            something.
          </h2>
        </div>

        <div className="flex items-center">
          <p className="text-lg text-neutral-500 dark:text-gray-400">
            Pilih salah satu cara di bawah untuk menghubungi saya.
          </p>
        </div>
      </div>

      {/* Bottom: full-width link rows */}
      <div className="mx-auto mt-16 max-w-6xl w-full">
        {contactRows.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-neutral-200 py-6 first:border-t dark:border-gray-700"
          >
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-2 dark:text-white">
                {label}
              </span>
              <span className="text-sm text-neutral-400 dark:text-gray-500">{value}</span>
            </div>
            <ArrowUpRight
              size={22}
              className="shrink-0 text-neutral-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black dark:text-gray-600 dark:group-hover:text-white"
            />
          </a>
        ))}
      </div>

      {/* Form: kirim pesan langsung */}
      <div className="mx-auto mt-16 w-full max-w-2xl">
        <p className="mb-6 text-sm font-semibold tracking-wide text-neutral-500 dark:text-gray-400">
          ATAU KIRIM PESAN LANGSUNG
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nama kamu"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
            className="rounded-xl border border-neutral-300 bg-white/70 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500"
          />
          <textarea
            placeholder="Pesan kamu"
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
            rows={4}
            className="rounded-xl border border-neutral-300 bg-white/70 px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus:border-black focus:outline-none dark:border-gray-700 dark:bg-gray-800/70 dark:text-white dark:placeholder:text-gray-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
          </button>

          {status === "success" && (
            <p className="text-sm text-green-600 dark:text-green-400">
              Pesan berhasil dikirim, terima kasih!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Gagal mengirim pesan, coba lagi.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}