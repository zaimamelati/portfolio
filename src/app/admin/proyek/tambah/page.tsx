import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";

const MAX_SIZE = 5 * 1024 * 1024; // 5 MB
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

async function tambahProyekAction(formData: FormData) {
    'use server';

    const supabase = await createSupabaseServerClient();

    // Upload gambar (opsional)
    let imageUrl: string | null = null;
    const file = formData.get('image') as File | null;

    if (file && file.size > 0) {
        if (!ALLOWED_TYPES.includes(file.type) || file.size > MAX_SIZE) {
            console.error('File tidak valid: harus PNG/JPG/WEBP dan maksimal 5 MB');
            redirect('/admin/proyek/tambah');
        }

        const ext = file.name.split('.').pop();
        const fileName = `${Date.now()}.${ext}`;

        const { error: uploadError } = await supabase.storage
            .from('proyek-images')
            .upload(fileName, file, { contentType: file.type });

        if (uploadError) {
            console.error('Gagal upload gambar:', uploadError.message);
        } else {
            const { data } = supabase.storage
                .from('proyek-images')
                .getPublicUrl(fileName);
            imageUrl = data.publicUrl;
        }
    }

    const { error } = await supabase.from('proyek').insert({
        judul: formData.get('judul') as string,
        deskripsi: formData.get('deskripsi') as string,
        teknologi: formData.get('teknologi') as string,
        link: (formData.get('link') as string) || null,
        image: imageUrl,
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
                        <label htmlFor="image" className="block text-sm font-medium text-slate-700 mb-1">Gambar Proyek (opsional)</label>
                        <input id="image" name="image" type="file"
                            accept="image/png,image/jpeg,image/webp"
                            className="block w-full text-sm text-slate-600 border border-slate-300 rounded-lg p-2 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-blue-700" />
                        <p className="mt-1 text-xs text-slate-500">PNG, JPG, atau WEBP. Maksimal 5 MB.</p>
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