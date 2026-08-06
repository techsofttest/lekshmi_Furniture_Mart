import { Metadata } from "next";

import InnerPageHero from "@/components/global/InnerPageHero";
import LegacyStory from "@/components/about/LegacyStory";
import MaterialsHighlight from "@/components/about/MaterialsHighlight";
import CoreValues from "@/components/about/CoreValues";
import CTA from "@/components/home/CTA";
import WoodTypes from "@/components/home/WoodTypes";

// Interface matching the Laravel API output structure
interface MaterialItem {
  label: string;
  title: string;
  description: string;
  number: string;
}

interface StatItem {
  value: string;
  label: string;
}
interface CoreItem {
  title: string;
  desc: string;
  icon: string;
}
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  heritage: {
    span: string;
    heading: string;
    desc: string;
  } | null;
  workshop: {
    span: string;
    heading: string;
    desc: string;
    i: string;
  } | null;
  materials: MaterialItem[] | null;
  stats: {
    title: string;
    items: StatItem[];
  } | null;
  core: {
    span: string;
    items: CoreItem[];
  } | null;
  wood: {
    span: string;
    heading: string;
    content: string;
    image: string;
  } | null;
  cta: {
    title: string;
    description: string;
    image: string;
  } | null;
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/about`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch About page data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getSEO();

  return {
    title: data?.seo?.meta_title || "About Us",
    description: data?.seo?.meta_desc || "",
    keywords: data?.seo?.meta_key || "",
  };
}

export default async function AboutPage() {
  const data = await getSEO();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <div className="bg-white text-[#2A1C14] min-h-screen">
      {/* Shared Hero Banner */}
      <InnerPageHero
        kicker="Our Story"
        title="Crafting Legacy &"
        subtitle="Bespoke Elegance"
      />

      {/* Legacy & Story Section */}
      <LegacyStory
        heritage={data.heritage}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Materials & Woodcraft Highlight */}
      <MaterialsHighlight   workshop={data.workshop} materials={data.materials}  stats={data.stats} />

      {/* Wood Types Section */}
      {data.wood && <WoodTypes wood={data.wood} />}

      {/* Stats / Values Section */}
      <CoreValues core={data.core}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      {/* Showroom CTA Section */}
      {data.cta && <CTA cta={data.cta} />}
    </div>
  );
}