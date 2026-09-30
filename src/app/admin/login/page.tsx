import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from '@/lib/supabase-server';

async function loginAction(formData: FormData) {
    'use server';

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const supabase = await createSupabaseServerClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        redirect('/admin/login?error=Kredensial+tidak+valid');
    }

    redirect('/admin/proyek');
}

export default async function AdminLoginPage({
    searchParams,
}: {
    searchParams: Promise<{ error?: string }>;
}) {
    const params = await searchParams;

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-xs rounded-2xl bg-white p-6 shadow-lg sm:max-w-sm sm:p-8">
                <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">Admin Login</h1>
                <p className="mb-6 mt-2 text-sm text-slate-500">
                    Masuk untuk mengelola data portofolio
                </p>

                {params.error && (
                    <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
                        {params.error}
                    </p>
                )}

                <form action={loginAction} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="mb-1 block text-sm font-medium text-slate-700">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition-colors hover:bg-blue-700"
                    >
                        Masuk
                    </button>
                </form>
            </div>
        </main>
    );
}