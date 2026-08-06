import { Metadata } from "next";
import ProductDetailClient from "./product"; // Client component split for interactivity
import React from "react";

interface PageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    product: string;
  }>;
}
interface Point {
  title: string;
  desc: string;
}
interface AboutPoint {
  title: string;
  desc: string;
  icon: string;
}

interface About {
  points: AboutPoint[];
}
interface RelatedProduct {
  title: string;
  images: string;
  href: string;
}
interface ProductData {
  id: number;
  name: string;
  slug: string;
  description: string;
  points: Point[];
  images: string;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  whatsapp: string;
  meta_title: string;
  meta_key: string;
  meta_desc: string;
}
interface ApiResponse {
   about: About;
  status: string;
  data: ProductData;
   related: RelatedProduct[];
}

// 1. Dynamic Meta Title, Keywords, and Description Generator
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, subcategory, product } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${category}/${subcategory}/${product}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return { title: "Product Not Found" };
    }

const responseData: ApiResponse = await res.json();
const productData = responseData.data;
 
  const mainImage = productData.images;
    return {
      title: productData.meta_title || productData.name,
      description: productData.meta_desc || productData.description,
      keywords: productData.meta_key ? productData.meta_key.split(",") : [],
      openGraph: {
        title: productData.meta_title || productData.name,
        description: productData.meta_desc || productData.description,
        images: mainImage ? [{ url: mainImage, alt: productData.name }] : [],
      },
    };
  } catch (error) {
    return { title: "Product Detail" };
  }
}

// 2. Main Page Component
export default async function Page({ params }: PageProps) {
  const { category, subcategory, product } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${category}/${subcategory}/${product}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-500">
        Product not found
      </div>
    );
  }

const initialData = await res.json();


  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      <ProductDetailClient
  productData={initialData.data}
   about={initialData.about}
    relatedProducts={initialData.related}
/>
    </div>
  );
}