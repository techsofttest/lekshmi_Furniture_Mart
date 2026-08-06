"use client";

import React, { useState } from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Hammer,Sparkles,Ruler,Truck,ShieldCheck,MessageCircle,ChevronRight} from "lucide-react";
import Card from "@/components/global/Card";
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
interface RelatedProduct {
  title: string;
  images: string;
  href: string;
}
interface About {
  points: AboutPoint[];
}
interface ProductData {
  id: number;
  name: string;
  slug: string;
  description: string;
  points: Point[];
  images: string;
  // images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
  };
  subcategory: {
    id: number;
    name: string;
    slug: string;
  };
  whatsapp: string;
  meta_title: string;
  meta_key: string;
  meta_desc: string;
}
interface ProductDetailClientProps {
  productData: ProductData;
   about: About;
   relatedProducts: RelatedProduct[]; 
}
export default function ProductDetailClient({ productData,about,relatedProducts}: ProductDetailClientProps){
  const params = useParams() as { category: string; subcategory: string; product: string };
  const { category: categorySlug, subcategory: subcategorySlug, product: productSlug } = params;

  const product = productData;
  const categories = product.category;
  const iconMap = {
    Sparkles,
    Hammer,
    Ruler,
    Truck,
    ShieldCheck,
  };
  if (!categories || !product) {
    notFound();
  }
  // Find subcategory name for breadcrumb
  const subcategoryName = product.subcategory;

  const waMessage = encodeURIComponent(
    `Hello Lekshmi Furniture Mart, I am interested in the "${product.name}" under the ${categories.name} collection. Please share details on customizations.`
  );
  const waUrl = `${product.whatsapp}?text=${waMessage}`;

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">

      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-4 mt-2">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 flex items-center gap-2 text-xs font-sans text-[#2A1C14]/50 flex-wrap">
          <Link href="/" className="hover:text-[#592915] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/products/${categorySlug}/all`} className="hover:text-[#592915] transition-colors">{categories.name}</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href={`/products/${categorySlug}/${subcategorySlug}`} className="hover:text-[#592915] transition-colors capitalize">
            {subcategoryName.name}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#592915] font-semibold truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      {/* Product Detail Grid */}
      <section className="py-10 md:py-16 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16">

          {/* Gallery */}
          <div className="lg:col-span-8 lg:sticky lg:top-28 self-start">
  <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#F4ECE1] rounded-sm">
    <Image
      src={product.images}
      alt={product.name}
      fill
      priority
      sizes="(max-width: 1024px) 100vw, 66vw"
      className="object-contain"
    />
  </div>
</div>
  {/* {product.images.length > 1 && (
              <div className="flex lg:flex-col gap-3 shrink-0">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 lg:w-20 lg:h-20 overflow-hidden bg-[#F4ECE1] rounded-sm transition-all duration-200 ${activeImage === img
                      ? "ring-2 ring-[#592915] ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )} */}


          {/* Product Info */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold mb-4 block">
              {categories.name} Collection
            </span>
            <h1 className="text-2xl md:text-3xl xl:text-4xl font-serif text-[#592915] leading-tight mb-5">
              {product.name}
            </h1>

            <div className="text-[#2A1C14]/70 font-sans text-sm leading-relaxed mb-8" dangerouslySetInnerHTML={{ __html: product.description }} />

            {/* WhatsApp CTA */}
            <Link
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#592915] hover:bg-[#B28544] text-white font-sans text-xs uppercase tracking-[0.15em] font-bold py-4 px-8 transition-all duration-300 rounded-none mb-3"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </Link>
            <p className="text-[10px] text-[#2A1C14]/40 font-sans text-center mb-10 tracking-wide">
              Discuss sizes, wood types, finishes & custom requirements
            </p>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-6 mb-8">
              <div className="text-center">
                <Hammer className="w-5 h-5 text-[#592915] mx-auto mb-2" />
                <h4 className="text-[10px] uppercase tracking-wider text-[#592915] font-bold leading-tight">Solid Wood</h4>
              </div>
              <div className="text-center">
                <ShieldCheck className="w-5 h-5 text-[#592915] mx-auto mb-2" />
                <h4 className="text-[10px] uppercase tracking-wider text-[#592915] font-bold leading-tight">10-Year Warranty</h4>
              </div>
              <div className="text-center">
                <Truck className="w-5 h-5 text-[#592915] mx-auto mb-2" />
                <h4 className="text-[10px] uppercase tracking-wider text-[#592915] font-bold leading-tight">Pan-India</h4>
              </div>
            </div>
          
            {/* Specifications */}
         {product.points?.length > 0 && (
            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-xs uppercase tracking-[0.15em] text-[#592915] font-bold mb-4 font-sans">
                Specifications
              </h3>

              <dl className="space-y-0">
                {product.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex justify-between py-2.5 border-b border-gray-50 last:border-0"
                  >
                    <dt className="text-[#2A1C14]/50 font-sans text-xs uppercase tracking-wider font-semibold">
                      {point.title}
                    </dt>

                    <dd className="text-[#2A1C14] font-sans text-xs text-right max-w-[60%]">
                      {point.desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* Craftsmanship Highlights — Compact */}
      <section className="border-t border-gray-100 py-12">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 grid grid-cols-1 md:grid-cols-3 gap-10">
            {about.points.map((item, index) => {
              const Icon =
                iconMap[item.icon as keyof typeof iconMap] ?? Sparkles;

              return (
                <div key={index} className="flex gap-4">
                  <Icon className="w-5 h-5 text-[#592915] shrink-0 mt-0.5" />

                  <div>
                    <h3 className="font-serif text-base text-[#592915] mb-1.5">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#2A1C14]/55 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      {/* Related Products */}
     {relatedProducts?.length > 0 && (
  <section className="py-16 border-t border-gray-100">
    <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-2">
            You May Also Like
          </span>
          <h2 className="text-2xl font-serif text-[#592915]">
            Related Pieces
          </h2>
        </div>

        <Link
          href={`/products/${categorySlug}/${subcategorySlug}`}
          className="hidden md:inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] text-[#592915] font-bold hover:text-[#2A1C14] transition-colors"
        >
          View All
          <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
        {relatedProducts.map((p) => (
          <Card
            key={p.href}
            title={p.title}
            image={Array.isArray(p.images) ? p.images[0] ?? "" : p.images}
            href={p.href}
          />
        ))}
      </div>
    </div>
  </section>
)}
    </div>
  );
}
