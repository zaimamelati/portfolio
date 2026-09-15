import Link from "next/link";
import Badge from "./Badge";

export interface CardProyekProps {
    id: string;
    judul: string;
    kategori: string;
    deskripsiSingkat: string;
    teknologi: string[];
}

export default function CardProyek({
    id,
    judul,
    kategori,
    deskripsiSingkat,
    teknologi,
}: CardProyekProps) {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition">
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <Badge label={kategori} />
                    <span className="text-xs font-mono text-slate-400">#{id}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{judul}</h3>
                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{deskripsiSingkat}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                    {teknologi.slice(0, 2).map((t) => (
                        <span key={t} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">{t}</span>
                    ))}
                </div>
                <Link href={`/proyek/${id}`} className="text-xs font-semibold text-blue-600 hover:underline">
                    Detail &rarr;
                </Link>
            </div>
        </div>
    );
}