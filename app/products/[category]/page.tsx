import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: categorySlug } = await params;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api";

  try {
    // Attempt to validate category against your Laravel API
    const res = await fetch(`${apiUrl}/products/${categorySlug}/all`, {
      cache: "no-store",
    });

    if (res.ok) {
      redirect(`/products/${categorySlug}/all`);
    }
  } catch (error) {
    // If redirect was thrown by Next.js, let it propagate
    if ((error as Error).message === "NEXT_REDIRECT") {
      throw error;
    }
    console.error("Error validating category route:", error);
  }

  // Fallback if category doesn't exist or API fails
  redirect("/");
}