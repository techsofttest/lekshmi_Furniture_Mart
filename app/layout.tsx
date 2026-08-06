import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

// High-contrast, elegant serif for Headings
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Clean, highly readable sans-serif for UI and Body text
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});
export interface NavigationItem {
  label: string;
  slug: string;
  icon: string | null;
  href: string;
  dropdown: {
    items: {
      name: string;
      href: string;
      image: string | null;
    }[];
    promo: {
      title: string;
      subtitle: string;
      price: string;
      image: string;
      href: string;
    };
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  open:string;
    facebook:string;
  youtube:string;
  instagram:string;
}
interface HeaderProps {
  menu: NavigationItem[];
  contact: ContactInfo;
}

export async function getNavigation() {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/navbar`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch navigation");

  return res.json();
}
export const metadata: Metadata = {
  title: "Lekshmi Furniture Mart | Custom Crafted Elegance",
  description: "Premium custom wooden furniture tailored to your exact specifications. Crafting comfort and elegance since 1990. Pan-India delivery available.",
};

export default async function RootLayout({
   children,
}: Readonly<{
  children: React.ReactNode;
}>) { const nav = await getNavigation(); 
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased scroll-smooth overflow-x-hidden`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-brand-gold selection:text-brand-dark">
  

<Header
    menu={nav.data}
    contact={nav.contact}
/>
        {/* main wrapper ensures the footer (when added) gets pushed to the bottom if content is short */}
        <main className="flex-1 flex flex-col w-full relative pt-20 xl:pt-[92px]">
          {children}
          <Footer      menu={nav.data}
    contact={nav.contact}/>
        </main>
      </body>
    </html>
  );
}