import { Metadata } from "next";

import InnerPageHero from "@/components/global/InnerPageHero";
import ProjectsList from "@/components/projects/ProjectsList";
import Timeline from "@/components/projects/Timeline";
import ArchitectCTA from "@/components/projects/ArchitectCTA";
import CTA from "@/components/home/CTA";
import HeritageProjects from "@/components/home/HeritageProjects";
interface Heritage{
  span:string;
  heading:string;
  content: string;
  project:{
    name:string;
  }[];
  }
interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  timeline: {
  span:string;
  heading:string;
  content: string;
  after?: string | null;
  before?: string | null;
  points:{
    title:string;
    desc:string;
    number:string;
  }[];}
  cta: {
  title:string;
  description:string;
  image: string;
  };
heritage:Heritage;

}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/client`, {
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
export default async function ClientsPage() {
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
        kicker="Our Clients & Partners"
        title="Bespoke Collaborations"
        subtitle="& Heritage Restorations"
      />

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
        {/* Project Showcases */}
        {/* <ProjectsList /> */}

        {/* Heritage Projects Carousel */}
        <HeritageProjects heritage={data.heritage} />

        {/* Collaboration Process */}
        <Timeline timeline={data.timeline}
          containerVariants={containerVariants}
          itemVariants={itemVariants}
        />

        {/* Architectural Partnership CTA */}
        {/* <ArchitectCTA /> */}
      </div>

      {/* Footer CTA Section */}
      <CTA cta={data.cta}  />
    </div>
  );
}
