import { Metadata } from "next";
import SiteMap from "./site";

export interface DropdownItem {
  name: string;
  href: string;
}

export interface MenuItem {
  label: string;
  slug: string;
  icon: string | null;
  href: string;
  dropdown?: DropdownItem[];
}

interface ApiResponse {
  status: string;
  data: MenuItem[]; // 👈 Changed from `menu` to `data` to match your API response
  seo: {
    meta_title: string;
    meta_desc: string;
    meta_key: string;
  };
}

async function getSEO(): Promise<ApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/sitemap`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const response = await getSEO();

  return {
    title: response.seo?.meta_title || "Sitemap",
    description: response.seo?.meta_desc || "Every page at a glance.",
    keywords: response.seo?.meta_key || "Sitemap",
  };
}

export default async function ClientsPage() {
  const response = await getSEO();

  return (
    <div className="bg-white text-[#2A1C14] min-h-screen">
      {/* 👈 Pass response.data instead of response.menu */}
      <SiteMap menu={response.data || []} />
    </div>
  );
}