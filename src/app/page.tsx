import ProjectSearch from "../components/ProjectSearch";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { supabase } from "@/lib/supabase";
export const dynamic = "force-dynamic"

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

      <main>
        <Hero />
        <TechStack />
        <About />
        <Skills />
        <Projects initialProjects={proyek ?? []} />
        <Contact />
      </main>

      <Footer />
    </>
  );
}