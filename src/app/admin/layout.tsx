import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';
import Link from 'next/link';

async function logoutAction() {
    'use server';
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect('/admin/login');
}

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();

    // Belum login (sedang di halaman /admin/login) -> tidak perlu header + tombol Logout
    if (!user) {
        return <div className="min-h-screen bg-slate-50">{children}</div>;
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <header className="bg-white border-b border-slate-200 px-4 py-3 sm:px-6 sm:py-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <span className="font-bold text-slate-800 whitespace-nowrap">Admin Panel</span>
                        <nav className="flex gap-4">
                            <Link href="/admin/proyek"
                                className="text-sm text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap">
                                Manajemen Proyek
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center justify-between gap-3 sm:justify-end">
                        <span className="text-xs text-slate-500 truncate sm:text-sm">{user.email}</span>
                        <form action={logoutAction}>
                            <button type="submit"
                                className="shrink-0 text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-colors">
                                Logout
                            </button>
                        </form>
                    </div>
                </div>
            </header>
            <main className="max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8">{children}</main>
        </div>
    );
}