import { Metadata } from "next";
import HeroSlider from "@/components/home/HeroSlider";
import BentoCategories from "@/components/home/BentoCategories";
import Highlights from "@/components/home/Highlights";
import About from "@/components/home/About";
import HeritageProjects from "@/components/home/HeritageProjects";
import ProductList from "@/components/home/ProductList";
import Customization from "@/components/home/Customization";
import BrandHistory from "@/components/home/BrandHistory";
import CTA from "@/components/home/CTA";
import Testimonials from "@/components/home/Testimonials";
import WoodTypes from "@/components/home/WoodTypes";
import GoogleReviews from "@/components/home/GoogleReviews";

interface Banner {
  id:string;
  cta:string;
  title: string;
  href: string;
  image: string;
}
interface Product {
  title: string;
  href: string;
  image: string;
}
interface About {
  span:string;
  heading:string;
  content: string;
  after: string;
  before: string;
  points:{
    title:string;
    desc:string;
    icon:string;
  }[];
}
  interface Heritage{
  span:string;
  heading:string;
  content: string;
  project:{
    name:string;
  }[];
  }
  interface Testimony{
    id:string;
    name: string;
    location: string;
    avatar: string;
    text: string;
    rating: string;
}
interface Customized {
  desc:string;
  title: string;
  icon: string;
}
interface Gallery {
  id: number;
  category: string;
  image: string;
}

interface ProductResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  };
  wood: {
  span:string;
  heading:string;
  content: string;
  image: string;
  };
  history: {
  span:string;
  heading:string;
  content: string;
  image: string;
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
heritage:Heritage;
  about:About;
  gallery:Gallery[];
  banner: Banner[];
  customized:Customized[];
  product:Product[];
  testimony:Testimony[];
}

async function getSEO(): Promise<ProductResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/pages`, {
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
export default async function Home() {
    const data = await getSEO();
  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {/*Hero Section */}
      <HeroSlider banner={data.banner}/>

      {/*Bento Categories Section */}
      <BentoCategories  gallery={data.gallery} />

      {/* Highlights Section */}
      <Highlights customized={data.customized} />

      {/*About Section */}
      <About about={data.about} />

      {/*Product List Section */}
      <ProductList product={data.product} />

      {/*New Wood Types Section */}
      <WoodTypes wood={data.wood} />

      {/*Customization Section */}
      <Customization cuz={data.cuz} />

      {/*Brand History Section */}
      <BrandHistory history={data.history} />

      {/*Heritage Projects Carousel */}
      <HeritageProjects heritage={data.heritage} />

      {/*Testimonials Section */}
      <Testimonials testimony={data.testimony} />

      {/*Google Reviews Section */}
      {/* <GoogleReviews /> */}

      {/*CTA Section */}
      <CTA cta={data.cta}  />
    </div>
  );
}