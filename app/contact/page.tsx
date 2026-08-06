import { Metadata } from "next";
import ContactPage from "./contact"; // Adjusted to match export component name

export interface ContactApiResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  } | null;
   contact: {
    address: string;
    email: string;
    phone: string;
    whatsapp: string;
    map: string;
    open: string;
  } | null;
}

async function getContactData(): Promise<ContactApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/contact`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch contact data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactData();

  return {
    title: data.seo?.meta_title ?? "Contact Us",
    description: data.seo?.meta_desc ?? "Get in touch with our team for any inquiries or assistance",
    keywords: data.seo?.meta_key ?? "contact, information, support",
  };
}

export default async function Page() {
  const data = await getContactData();

  return (
    <main className="w-full min-h-screen bg-background">
      <ContactPage initialData={data} />
    </main>
  );
}