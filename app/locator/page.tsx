import { Metadata } from "next";
import LocatorPage from "./locator"; // Ensure casing matches your component name

export interface LocatorApiResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  } | null;
  page: {
    span: string;
    heading: string;
    description: string;
  } | null;
  contact: {
    address: string;
    email: string;
    phone: string;
    whatsapp: string;
    map: string;
    open: string;
  } | null;
  about: {
    span: string;
    heading: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  } | null;
  info: {
    span: string;
    heading: string;
    description: string;
  } | null;
  cta: {
    title: string;
    description: string;
    image: string | null;
  } | null;
}

async function getLocatorData(): Promise<LocatorApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/locator`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch store locator data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getLocatorData();

  return {
    title: data.seo?.meta_title ?? "Store Locator",
    description: data.seo?.meta_desc ?? "Find our location",
    keywords: data.seo?.meta_key ?? "furniture, store, locator",
  };
}

export default async function Home() {
  const data = await getLocatorData();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <LocatorPage initialData={data} />
    </div>
  );
}