import Link from "next/link";

import { createSupabaseServerClient } from "@/lib/supabase-server";

type AdminProyekPageProps = {
    searchParams: Promise<{
        search?: string;
    }>;
};

export default async function AdminProyekPage({
    searchParams,
}: AdminProyekPageProps) {
    const params = await searchParams;
    const search = params.search?.trim() || "";

    const supabase = await createSupabaseServerClient();

    let query = supabase
        .from("proyek")
        .select("*")
        .order("id", { ascending: true });

    // Jika ada pencarian, cari berdasarkan judul proyek
    if (search) {
        query = query.ilike("judul", `%${search}%`);
    }

    const { data: daftarProyek, error } = await query;

    if (error) {
        console.error("Gagal mengambil proyek:", error.message);
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800">
                            Manajemen Proyek
                        </h1>

                        <p className="mt-1 text-sm text-slate-500">
                            Kelola data proyek portfolio
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {/* Kembali ke portfolio */}
                        <Link
                            href="/"
                            className="w-fit rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                        >
                            ← Kembali ke Portofolio
                        </Link>

                        {/* Tambah proyek */}
                        <Link
                            href="/admin/proyek/tambah"
                            className="w-fit rounded-lg bg-slate-800 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                        >
                            + Tambah Proyek
                        </Link>
                    </div>
                </div>

                {/* Search + Total Proyek */}
                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    {/* Total Proyek */}
                    <div className="w-[110px] rounded-lg border border-blue-100 bg-white px-3 py-2 text-center shadow-sm">
                        <p className="text-sm font-medium text-blue-700/60">
                            {search ? "Hasil Ditemukan" : "Total Proyek"}
                        </p>

                        <p className="mt-0.5 text-xl font-bold text-slate-800">
                            {daftarProyek?.length ?? 0}
                        </p>
                    </div>

                    {/* Search */}
                    <form
                        method="GET"
                        className="flex w-full gap-2 sm:w-auto"
                    >
                        <input
                            type="text"
                            name="search"
                            defaultValue={search}
                            placeholder="Cari proyek berdasarkan judul..."
                            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:ring-2 focus:ring-violet-100 sm:w-60"
                        />

                        <button
                            type="submit"
                            className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-700"
                        >
                            Cari
                        </button>

                        {search && (
                            <Link
                                href="/admin/proyek"
                                className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-center text-sm font-medium text-slate-600 transition hover:bg-slate-100"
                            >
                                Reset
                            </Link>
                        )}
                    </form>
                </div>

                {/* Informasi pencarian */}
                {search && (
                    <p className="mb-4 text-sm text-slate-500">
                        Hasil pencarian untuk{" "}
                        <span className="font-semibold text-slate-700">
                            "{search}"
                        </span>
                    </p>
                )}

                {/* Tidak ada data */}
                {(!daftarProyek || daftarProyek.length === 0) && (
                    <div className="rounded-xl border border-slate-200 bg-white px-5 py-10 text-center">
                        <p className="text-slate-400">
                            {search
                                ? `Proyek dengan judul "${search}" tidak ditemukan.`
                                : "Belum ada data proyek."}
                        </p>
                    </div>
                )}

                {/* Jika ada data */}
                {daftarProyek && daftarProyek.length > 0 && (
                    <>
                        {/* Tampilan HP */}
                        <div className="space-y-3 sm:hidden">
                            {daftarProyek.map((proyek, index) => (
                                <div
                                    key={proyek.id}
                                    className="rounded-xl border border-slate-200 bg-white p-4"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <p className="text-xs text-slate-400">
                                                No. {index + 1}
                                            </p>

                                            <p className="font-semibold text-slate-800">
                                                {proyek.judul}
                                            </p>

                                            {proyek.deskripsi && (
                                                <p className="mt-1 text-xs text-slate-400">
                                                    {proyek.deskripsi}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Teknologi */}
                                    <div className="mt-3 flex flex-wrap gap-1.5">
                                        {String(proyek.teknologi || "")
                                            .split(",")
                                            .filter(
                                                (teknologi: string) =>
                                                    teknologi.trim() !== ""
                                            )
                                            .map(
                                                (
                                                    teknologi: string,
                                                    i: number
                                                ) => (
                                                    <span
                                                        key={i}
                                                        className="rounded-md bg-violet-50 px-2.5 py-1 text-xs text-violet-600"
                                                    >
                                                        {teknologi.trim()}
                                                    </span>
                                                )
                                            )}
                                    </div>

                                    {/* Aksi */}
                                    <div className="mt-3 flex gap-2 border-t border-slate-100 pt-3">
                                        <Link
                                            href={`/admin/proyek/edit/${proyek.id}`}
                                            className="flex-1 rounded-md bg-violet-50 px-3 py-1.5 text-center text-xs font-medium text-violet-600 transition hover:bg-violet-100"
                                        >
                                            Edit
                                        </Link>

                                        <Link
                                            href={`/admin/proyek/hapus/${proyek.id}`}
                                            className="flex-1 rounded-md bg-rose-50 px-3 py-1.5 text-center text-xs font-medium text-rose-600 transition hover:bg-rose-100"
                                        >
                                            Hapus
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Tampilan tablet dan desktop */}
                        <div className="hidden overflow-hidden rounded-xl border border-slate-200 bg-white sm:block">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-800 text-white">
                                    <tr>
                                        <th className="px-5 py-4 text-left font-medium">
                                            No
                                        </th>

                                        <th className="px-5 py-4 text-left font-medium">
                                            Judul Proyek
                                        </th>

                                        <th className="px-5 py-4 text-left font-medium">
                                            Teknologi
                                        </th>

                                        <th className="px-5 py-4 text-left font-medium">
                                            Aksi
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {daftarProyek.map((proyek, index) => (
                                        <tr
                                            key={proyek.id}
                                            className="border-b border-slate-200 last:border-b-0 hover:bg-slate-50"
                                        >
                                            {/* No */}
                                            <td className="px-5 py-4 text-slate-400">
                                                {index + 1}
                                            </td>

                                            {/* Judul */}
                                            <td className="px-5 py-4">
                                                <p className="font-semibold text-slate-800">
                                                    {proyek.judul}
                                                </p>

                                                {proyek.deskripsi && (
                                                    <p className="mt-1 max-w-xs truncate text-xs text-slate-400">
                                                        {proyek.deskripsi}
                                                    </p>
                                                )}
                                            </td>

                                            {/* Teknologi */}
                                            <td className="px-5 py-4">
                                                <div className="flex flex-wrap gap-1.5">
                                                    {String(
                                                        proyek.teknologi || ""
                                                    )
                                                        .split(",")
                                                        .filter(
                                                            (
                                                                teknologi: string
                                                            ) =>
                                                                teknologi.trim() !==
                                                                ""
                                                        )
                                                        .map(
                                                            (
                                                                teknologi: string,
                                                                i: number
                                                            ) => (
                                                                <span
                                                                    key={i}
                                                                    className="rounded-md bg-violet-50 px-2.5 py-1 text-xs text-violet-600"
                                                                >
                                                                    {teknologi.trim()}
                                                                </span>
                                                            )
                                                        )}
                                                </div>
                                            </td>

                                            {/* Aksi */}
                                            <td className="px-5 py-4">
                                                <div className="flex gap-2">
                                                    <Link
                                                        href={`/admin/proyek/edit/${proyek.id}`}
                                                        className="rounded-md bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-600 transition hover:bg-violet-100"
                                                    >
                                                        Edit
                                                    </Link>

                                                    <Link
                                                        href={`/admin/proyek/hapus/${proyek.id}`}
                                                        className="rounded-md bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-600 transition hover:bg-rose-100"
                                                    >
                                                        Hapus
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}