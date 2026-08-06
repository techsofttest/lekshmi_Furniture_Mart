import { Metadata } from "next";

import InnerPageHero from "@/components/global/InnerPageHero";
import AboutSection from "@/components/home/About";
import CTA from "@/components/home/CTA";
import Customization from "@/components/home/Customization";

interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
 cuz: {
  title:string;
  description:string;
  image2: string;
  image: string;
  };
  cta: {
  title:string;
  description:string;
  image: string;
  };
about:{span:string;
  heading:string;
  content: string;
  after: string;
  before: string;
  points:{
    title:string;
    desc:string;
    icon:string;
  }[];}

}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/custom`, {
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
export default async function CustomDesignsPage() {
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
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const },
        },
    };

    return (
        <div className="bg-white text-[#2A1C14] min-h-screen">
            {/* Hero Banner */}
            <InnerPageHero
                kicker="Bespoke Creations"
                title="Your Vision, Our Craftsmanship"
                subtitle="Tailored furniture from premium Teak, Wild Jack & Jackwood"
            />

            {/* Before & After Slider Section */}
            <AboutSection about={data.about}/>

            {/* Custom Crafted Furniture Section */}
           <Customization cuz={data.cuz} />
           
            {/* Final CTA */}
            <CTA cta={data.cta} />
        </div>
    );
}