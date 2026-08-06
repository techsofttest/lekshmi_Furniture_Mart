import { Metadata } from "next";

import InnerPageHero from "@/components/global/InnerPageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import CTA from "@/components/home/CTA";

interface Gallery {
  id: number;
  category_id: string;
  image: string;
  content: string;
  title: string;
  wood: string;
}
interface Category {
  id: number;
  slug: string;
  title: string;
}
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  cta: {
  title:string;
  description:string;
  image: string;
  };
  category:Category[];
  gallery:Gallery[];
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/gallery`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch SEO data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSEO();

  return {
    title: data.seo.meta_title,
    description: data.seo.meta_desc,
    keywords: data.seo.meta_key,
  };
}
export default async function GalleryPage() {
    const data = await getSEO();
  return (
    <div className="bg-white text-[#2A1C14] min-h-screen">
      {/* Shared Hero Banner */}
      <InnerPageHero
        kicker="DESIGN PORTFOLIO"
        title="Our Curated Showcase"
        subtitle="of Teak, Wild Jack & Jackwood Masterworks"
      />

      {/* Gallery Grid Section */}
      <GalleryGrid gallery={data.gallery} category={data.category} />

      {/* Footer CTA Section */}
      <CTA cta={data.cta} />
    </div>
  );
}
