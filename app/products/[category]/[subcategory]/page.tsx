import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Card from "@/components/global/Card";

interface SiblingItem {
  name: string;
  slug: string;
}

interface ProductItem {
  id: number;
  name: string;
  slug: string;
  categorySlug: string;
  subcategorySlug: string;
  image: string;
  meta_title?: string;
  meta_key?: string;
  meta_desc?: string;
}

interface ApiResponse {
  status: string;
  data: {
    category: {
      id: number;
      name: string;
      slug: string;
    };
    subcategory: {
      name: string;
      slug: string;
    };
    siblings: SiblingItem[];
    products: ProductItem[];
  };
}

interface PageProps {
  params: Promise<{ category: string; subcategory: string }>;
}

async function fetchSubcategoryData(
  category: string,
  subcategory: string
): Promise<ApiResponse | null> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";
    const res = await fetch(`${apiUrl}/products/${category}/${subcategory}`, {
      cache: "no-store",
    });

    if (!res.ok) return null;

    return await res.json();
  } catch (error) {
    console.error("Error fetching products from Laravel API:", error);
    return null;
  }
}

export default async function SubcategoryPage({ params }: PageProps) {
  const { category: categorySlug, subcategory: subcategorySlug } = await params;

  const response = await fetchSubcategoryData(categorySlug, subcategorySlug);

  if (!response || response.status !== "success") {
    notFound();
  }

  const { category, subcategory, siblings, products } = response.data;

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-100 py-4 mt-2">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 flex items-center gap-2 text-xs font-sans text-[#2A1C14]/50">
          <Link href="/" className="hover:text-[#592915] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            href={`/products/${category.slug}/all`}
            className="hover:text-[#592915] transition-colors"
          >
            {category.name}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#592915] font-semibold">{subcategory.name}</span>
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 w-full flex-1 py-4 md:py-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          {/* Sidebar — Sibling Category Navigation */}
          <aside className="w-full lg:w-56 xl:w-64 shrink-0 lg:sticky lg:top-28 self-start lg:border-r lg:border-gray-200 lg:pr-8">
            <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#592915] font-bold mb-4 font-sans">
              {category.name}
            </h3>
            <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              <Link
                href={`/products/${category.slug}/all`}
                className={`whitespace-nowrap text-sm font-sans px-3 py-2 rounded-sm transition-all duration-200 ${
                  subcategorySlug === "all"
                    ? "bg-[#592915] text-white font-semibold"
                    : "text-[#2A1C14]/65 hover:bg-[#F4ECE1]/60 hover:text-[#592915]"
                }`}
              >
                All
              </Link>
              {siblings.map((item) => {
                const isActive = item.slug === subcategorySlug;
                return (
                  <Link
                    key={item.slug}
                    href={`/products/${category.slug}/${item.slug}`}
                    className={`whitespace-nowrap text-sm font-sans px-3 py-2 rounded-sm transition-all duration-200 ${
                      isActive
                        ? "bg-[#592915] text-white font-semibold"
                        : "text-[#2A1C14]/65 hover:bg-[#F4ECE1]/60 hover:text-[#592915]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Back to category */}
            <Link
              href={`/products/${category.slug}/all`}
              className="hidden lg:inline-flex items-center gap-1.5 mt-8 text-[12px] uppercase tracking-[0.15em] text-[#2A1C14]/70 hover:text-[#592915] font-bold transition-colors"
            >
              ← All {category.name}
            </Link>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 overflow-x-auto lg:overflow-x-visible">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#592915] leading-tight">
                  {subcategory.name}
                </h1>
                <p className="text-sm text-[#2A1C14]/50 font-sans mt-2">
                  {products.length} handcrafted {products.length === 1 ? "piece" : "pieces"} available
                </p>
              </div>
            </div>

            {/* Product Grid */}
            {products.length === 0 ? (
              <div className="text-center py-24 border border-dashed border-gray-200 rounded-sm">
                <p className="text-lg text-[#2A1C14]/50 font-serif">No products found yet.</p>
                <p className="text-sm text-[#2A1C14]/40 mt-2 font-sans">
                  New handcrafted pieces are added regularly.
                </p>
                <Link
                  href={`/products/${category.slug}/all`}
                  className="inline-block mt-6 text-xs uppercase tracking-widest text-[#B28544] font-bold hover:text-[#592915] transition-colors"
                >
                  Browse all {category.name} →
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    title={product.name}
                    image={product.image}
                    href={`/products/${categorySlug}/${product.subcategorySlug}/${product.slug}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}