"use client";

import ProjectSearch from "../../components/ProjectSearch";

export default function ProjectsPage() {
  const handleSearch = (value: string) => {
    console.log("Search:", value);
  };

  return (
    <main>
      <h1>Katalog Proyek</h1>

      <ProjectSearch onSearch={handleSearch} />

      {/* kartu-kartu proyek */}
    </main>
  );
}