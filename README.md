# Website Profil Siswa & Portfolio

Website portofolio pribadi siswa SMK Rekayasa Perangkat Lunak (RPL), dibangun menggunakan **Next.js 15 (App Router)**, **TypeScript**, dan **Tailwind CSS**. Project ini merupakan pengembangan lanjutan dari Tugas 1, dengan penambahan styling responsif, arsitektur komponen reusable, interaktivitas client-side, dan dynamic routing.

---

## 🚀 Fitur yang Ditambahkan

### 1. Styling Tailwind CSS (Mobile-First)
Seluruh halaman dirombak dari tampilan teks polos menjadi antarmuka modern dan responsif menggunakan utility class Tailwind CSS:
- Layout **Flexbox** dan **CSS Grid** untuk penyusunan konten
- Prinsip **Mobile-First**, dengan breakpoint `sm:`, `md:`, `lg:` untuk menyesuaikan tampilan di berbagai ukuran layar (smartphone, tablet, laptop)
- Efek visual seperti gradient background, hover transition, dan shadow pada kartu maupun tombol
- Diuji bebas dari overflow horizontal pada layar smartphone (375px) menggunakan Chrome DevTools

### 2. Arsitektur Komponen Reusable
Kode yang sebelumnya menumpuk di satu file kini dipecah menjadi komponen-komponen kecil dan reusable di dalam folder `components/`, masing-masing dengan tipe data props berbasis **TypeScript interface**.

### 3. Interaktivitas Client Component
Ditambahkan komponen interaktif menggunakan direktif `"use client"`, hook `useState`, dan event `onClick` untuk memberikan pengalaman yang lebih hidup bagi pengunjung — di antaranya tombol apresiasi dan kotak pencarian proyek.

### 4. Dynamic Routing
Halaman detail proyek menggunakan **dynamic segment** `[id]`, sehingga satu halaman cetakan dapat menangani puluhan proyek portofolio tanpa perlu membuat folder manual satu per satu.

### 5. Filter & Pencarian Proyek
- Filter kategori (`Web`, `Mobile`, `IoT`) berbasis query URL (`searchParams`), sehingga tautan filter dapat dibagikan dan tetap aktif saat dibuka orang lain.
- Kotak pencarian judul proyek (`ProjectSearch.tsx`) berbasis Client Component untuk menyaring proyek secara langsung di sisi klien.

### 6. Penanganan Error 404
Menggunakan fungsi `notFound()` dari `next/navigation` untuk menampilkan halaman error 404 kustom saat ID proyek tidak ditemukan.

---

## 🧩 Daftar Komponen (`src/components/`)

| Komponen | Tipe | Fungsi |
|---|---|---|
| `Navbar.tsx` | Server Component | Navigasi utama dengan menu Home, About, Skills, Projects, Contact |
| `Hero.tsx` | Server Component | Bagian hero/perkenalan di halaman utama |
| `Intro.tsx` | Server Component | Bagian pengantar/introduksi profil |
| `About.tsx` | Server Component | Bagian "About Me" berisi deskripsi diri dan target karir, dilengkapi tombol apresiasi |
| `TechStack.tsx` | Server Component | Menampilkan daftar teknologi yang dikuasai |
| `Skills.tsx` | Server Component | Grid kartu kemampuan (HTML, CSS, Tailwind, Figma, dll) |
| `Projects.tsx` | Server Component | Menampilkan katalog/grid kartu proyek |
| `ProjectSearch.tsx` | **Client Component** | Kotak pencarian judul proyek secara real-time |
| `Contact.tsx` | Client Component | Bagian kontak dengan tautan Email dan Instagram |
| `Badge.tsx` | Server Component | Label kategori proyek (Web/Mobile/IoT) dengan variasi warna |
| `CounterApresiasi.tsx` | **Client Component** | Tombol interaktif apresiasi karya menggunakan `useState` |

---

## 🗂️ Struktur Rute (App Router)

```
src/app/
├── layout.tsx              # Root layout (Navbar + Footer global)
├── page.tsx                # Beranda
├── not-found.tsx           # Halaman 404 kustom
├── about/
│   └── page.tsx            # Halaman/Section About Me
└── Proyek/
    ├── page.tsx            # Katalog proyek + filter searchParams (?category=)
    └── [id]/
        └── page.tsx        # Rute dinamis — detail proyek berdasarkan ID
```

### Data Lokal
Data proyek disimpan di `src/data/projects.ts` menggunakan interface TypeScript, dan diimpor oleh komponen `Projects.tsx` serta halaman detail dinamis.

### Rute Dinamis `/proyek/[id]`
- URL seperti `/proyek/1`, `/proyek/2`, hingga `/proyek/100` ditangani oleh **satu file** `app/Proyek/[id]/page.tsx`
- Parameter `id` bersifat asinkron (`Promise<{ id: string }>`), sesuai standar Next.js 15+, sehingga wajib diambil dengan `await params`
- Jika `id` tidak ditemukan di `data/projects.ts`, fungsi `notFound()` dipanggil dan Next.js otomatis mengarahkan ke `app/not-found.tsx`

Contoh pengujian rute 404: buka `/proyek/999` (ID yang tidak terdaftar) untuk melihat halaman error kustom.

---

## 🛠️ Teknologi yang Digunakan

- **Next.js 15** (App Router, Server & Client Components)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (ikon)

---

## ▶️ Cara Menjalankan Project

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Buka di browser
http://localhost:3000
```

---

## 📌 Catatan Pengembangan Selanjutnya

Project ini akan dihubungkan dengan **database cloud Supabase (PostgreSQL)** pada pertemuan berikutnya, untuk memungkinkan penyimpanan data proyek secara dinamis dan form kontak yang tersambung ke backend.

---

*Dibuat sebagai bagian dari Tugas Mandiri — Kelas Industri Next.js Dasar sampai Mahir, SMK RPL 2026/2027, Pertemuan 02.*