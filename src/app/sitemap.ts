import type { MetadataRoute } from "next";
import { supabase } from "@/lib/supabase";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.zaimamelati.my.id";

  const { data: projects } = await supabase
    .from("proyek")
    .select("id")
    .order("id", { ascending: true });

  const projectUrls: MetadataRoute.Sitemap =
    projects?.map((project) => ({
      url: `${baseUrl}/proyek/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    ...projectUrls,
  ];
}