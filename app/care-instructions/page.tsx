import { Metadata } from "next";
import PaymentOptionsPage from "./care"; // Adjusted to match export component name
export interface PaymentApiResponse {
  seo: {
    meta_title: string;
    meta_key: string;
    meta_desc: string;
  } | null;

  page: {
    span: string;
    heading?: string;
    content: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  page1: {
    span: string;
    heading?: string;
    content: Array<{
      heading: string;
      ordered: string[];
      unordered: string[];
    }>;
  };

  page2: {
    span: string;
    heading?: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  faq: {
    span: string;
    heading?: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  cta: {
    title: string;
    description: string;
    image: string;
  };
}
async function getPaymentData(): Promise<PaymentApiResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/care`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch care instructions data");
  }

  return res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getPaymentData();

  return {
    title: data.seo?.meta_title ?? "Payment Options",
    description: data.seo?.meta_desc ?? "Explore payment methods for custom furniture",
    keywords: data.seo?.meta_key ?? "payment, financing, bespoke furniture",
  };
}

export default async function Page() {
  const data = await getPaymentData();

  return (
    <main className="w-full min-h-screen bg-background">
      <PaymentOptionsPage data={data} />
    </main>
  );
}