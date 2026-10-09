import ProjectSearch from "../components/ProjectSearch";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { supabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: proyek, error } = await supabase
    .from("proyek")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Gagal fetch proyek:", error);
  }

  return (
    <>
      <Intro />
      <Navbar />

      <main className="flex flex-col gap-16 md:gap-24">
        <Hero />
        
        {/* Divider 1 */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="h-[2px] w-full rounded-full bg-gray-900/40 dark:bg-white/40 shadow-sm backdrop-blur-sm" />
        </div>

        <About />

        {/* Divider 2 */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="h-[2px] w-full rounded-full bg-gray-900/40 dark:bg-white/40 shadow-sm backdrop-blur-sm" />
        </div>

        <Skills />

        {/* Divider 3 */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="h-[2px] w-full rounded-full bg-gray-900/40 dark:bg-white/40 shadow-sm backdrop-blur-sm" />
        </div>

        <Projects initialProjects={proyek ?? []} />

        {/* Divider 4 */}
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="h-[2px] w-full rounded-full bg-gray-900/40 dark:bg-white/40 shadow-sm backdrop-blur-sm" />
        </div>

        <Contact />
      </main>

      <Footer />
    </>
  );
}