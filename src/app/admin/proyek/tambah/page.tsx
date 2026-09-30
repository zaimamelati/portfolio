import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

async function tambahProyekAction(formData: FormData) {
    'use server';

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.from('proyek').insert({
        judul: formData.get('judul') as string,
        deskripsi: formData.get('deskripsi') as string,
        teknologi: formData.get('teknologi') as string,
        link: (formData.get('link') as string) || null,
    });

    if (error) {
        console.error('Gagal menambah proyek:', error.message);
    }

    revalidatePath('/admin/proyek');
    revalidatePath('/proyek');
    redirect('/admin/proyek');
}

export default function TambahProyekPage() {
    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-slate-800 mb-6">Tambah Proyek Baru</h1>

            <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <form action={tambahProyekAction} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="judul" className="block text-sm font-medium text-slate-700 mb-1">Judul Proyek</label>
                            <input id="judul" name="judul" required
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="teknologi" className="block text-sm font-medium text-slate-700 mb-1">Teknologi</label>
                            <input id="teknologi" name="teknologi" required
                                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="deskripsi" className="block text-sm font-medium text-slate-700 mb-1">Deskripsi</label>
                        <textarea name="deskripsi" id="deskripsi" rows={3}
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label htmlFor="link" className="block text-sm font-medium text-slate-700 mb-1">Link Proyek (opsional)</label>
                        <input id="link" name="link" type="url"
                            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="flex gap-3">
                        <button type="submit"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                            Simpan Proyek
                        </button>
                        <a href="/admin/proyek"
                            className="bg-slate-100 text-slate-700 hover:bg-slate-200 px-5 py-2 rounded-lg text-sm font-medium transition-colors">
                            Batal
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}