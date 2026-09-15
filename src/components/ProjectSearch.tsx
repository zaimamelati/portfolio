"use client";

import { useState } from "react";

type ProjectSearchProps = {
  onSearch: (value: string) => void;
};

export default function ProjectSearch({
  onSearch,
}: ProjectSearchProps) {
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch(value);
  };

  return (
    <div className="mt-8 max-w-md">
      <input
        type="text"
        placeholder="Search project title..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-800 outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200"
      />
    </div>
  );
}