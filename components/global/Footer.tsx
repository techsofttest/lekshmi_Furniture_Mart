import Link from "next/link";
import Image from "next/image";
// Removed social icons from Lucide to prevent errors. Kept only utility icons.
import { MapPin, Mail, Phone, MessageCircle, ChevronDown } from "lucide-react";

export interface NavigationItem {
  label: string;
  slug: string;
  href: string;
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
export default function Footer({ menu, contact }: HeaderProps) {
const footerLinks = [
    {
        title: "ABOUT LEKSHMI",
        items: [
            { name: "Our Story", href: "/about" },
            { name: "Our Craft", href: "/about#craft" },
            { name: "In The Media", href: "/media" },
            { name: "Gallery", href: "/gallery" },
            { name: "Careers", href: "/careers" },
        ],
    },
       {
    title: "OUR CATALOG",
    items: menu.map((item) => ({
        name: item.label,
        href: item.href,
    })),
},
    {
        title: "QUICK LINKS",
        items: [
            { name: "Custom Designs", href: "/custom-designs" },
            { name: "Shop Locator", href: "/locator" },
            { name: "Payment Options", href: "/payment-options" },
            { name: "Delivery Options", href: "/delivery-options" },
            { name: "Contact Us", href: "/contact" },
        ],
    },
    {
        title: "HELP & SUPPORT",
        items: [
            { name: "Care Instructions", href: "/care-instructions" },
            // { name: "Terms Of Use", href: "/help#terms" },
            // { name: "Privacy Policy", href: "/help#privacy" },
            { name: "Sitemap", href: "/sitemap" },
        ],
    },
     {
            title: "CONNECT",
            items: [
                {
                    type: "contact",
                    icon: Mail,
                    text: contact.email,
                    href: `mailto:${contact.email}`,
                },
                {
                    type: "contact",
                    icon: Phone,
                    text: contact.phone,
                    href: `tel:${contact.phone}`,
                },
                {
                    type: "contact",
                    icon: MessageCircle,
                    text: `${contact.phone} (WhatsApp)`,
                    href: contact.whatsapp,
                },
                {
                    type: "hours",
                    text: `${contact.open}`,
                },
            ],
        },
];

    return (
        <footer className="w-full flex flex-col pt-12 text-[#2A1C14] bg-[#FCFAF8]">

            {/* Top Area: Multi-column links & locator */}
            <div className="max-w-[1600px] mx-auto w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 md:gap-8 py-16 px-4 lg:px-8 xl:px-16 z-10 relative">

                {/* Logo, Find Us & Locator column */}
                <div className="col-span-2 md:col-span-1 flex flex-col gap-10">

                    {/* Logo added here */}
                    <Link href="/" className="mb-2 block">
                        <Image
                            src="/logo/logo2.png"
                            alt="Lekshmi Furniture Mart"
                            width={160}
                            height={180}
                            className="h-24 w-auto object-contain"
                        />
                    </Link>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#592915] font-sans text-xs uppercase tracking-[0.2em] font-semibold mb-2 block">FIND US ON</h4>
                        <div className="flex gap-6 items-center">
                            {/* Hardcoded SVGs to prevent Lucide-React brand icon errors */}
                            <Link href={contact.facebook} className="w-5 h-5 text-[#592915] hover:text-black transition-colors">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </Link>
                            <Link href={contact.instagram} className="w-5 h-5 text-[#592915] hover:text-black transition-colors">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </Link>
                            {/* <Link href={contact.youtube} className="w-5 h-5 text-[#592915] hover:text-black transition-colors">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            </Link> */}
                        </div>
                    </div>

                    {/* <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-2 cursor-pointer w-full text-sm font-medium">
                            <MapPin size={18} strokeWidth={1} className="text-[#B28544]" />
                            <span className="flex-1">India</span>
                            <ChevronDown size={18} strokeWidth={1.5} className="text-[#B28544]" />
                        </div>
                        <h4 className="text-[#B28544] font-sans text-xs uppercase tracking-[0.2em] font-semibold mt-4 block">SHOP LOCATOR</h4>
                        <Link 
                            href="/locator" 
                            className="inline-flex items-center justify-center w-full px-8 py-3 bg-[#FCFAF8] border border-[#B28544]/30 text-[#592915] text-[10px] font-bold uppercase tracking-widest hover:bg-[#B28544]/10 transition-all rounded-sm"
                        >
                            <ChevronDown size={16} strokeWidth={1.5} className="mr-2 text-[#B28544] rotate-90" />
                            Store Locator
                        </Link>
                    </div> */}
                </div>

                {/* Adaptive Columns 2-5 */}
                {footerLinks.slice(1).map((column, idx) => (
                    <div key={idx} className="col-span-1 flex flex-col gap-4">
                        <h4 className="text-[#592915] font-sans text-xs uppercase tracking-[0.2em] font-semibold mb-4 block">
                            {column.title}
                        </h4>
                        <ul className="space-y-4">
                            {column.items.map((item, subIdx) => {
                                if ('type' in item && item.type === "contact") {
                                    if (!('icon' in item)) return null;
                                    const Icon = item.icon;
                                    return (
                                        <li key={subIdx} className="flex gap-4 items-start font-medium">
                                            {typeof Icon === 'function' && <Icon size={18} strokeWidth={1} className="text-[#592915] w-4 h-4 mt-0.5" />}

                                            <Link href={item.href || "#"} className="text-sm hover:text-black transition-colors break-all">
                                                {item.text}
                                            </Link>
                                        </li>
                                    );
                                } else if ('type' in item && item.type === "hours") {
                                    return (
                                        <li key={subIdx} className="text-sm font-medium">
                                            {'text' in item ? item.text : ''}
                                        </li>
                                    );
                                } else {
                                    return (
                                        <li key={subIdx} className="font-medium text-sm">
                                            <Link href={item.href || "#"} className="hover:text-black transition-colors">
                                                {'name' in item ? item.name : ''}
                                            </Link>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Elegant Woodblock Tree Pattern Bottom Border */}
            {/* This uses an inline SVG pattern so it loads instantly without needing external images */}
            <div className="w-full h-[80px] border-t border-[#592915]/20 opacity-60">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="forestPattern" x="0" y="0" width="120" height="80" patternUnits="userSpaceOnUse">
                            {/* Stylized Indian Woodblock Tree - Trunk & Branches */}
                            <path d="M60 80 L60 40 M60 40 Q45 35 40 20 M60 50 Q75 45 80 30 M60 30 Q50 20 55 10 M60 30 Q70 20 65 10" stroke="#592915" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                            {/* Stylized Leaves / Canopy accents */}
                            <circle cx="60" cy="10" r="12" fill="#592915" opacity="0.3" />
                            <circle cx="40" cy="25" r="10" fill="#592915" opacity="0.3" />
                            <circle cx="80" cy="35" r="10" fill="#592915" opacity="0.3" />
                            <circle cx="50" cy="45" r="8" fill="#592915" opacity="0.3" />

                            {/* Smaller background tree for depth */}
                            <path d="M110 80 L110 50 M110 50 Q100 45 95 35 M110 60 Q120 55 125 45" stroke="#592915" strokeWidth="1" fill="none" opacity="0.5" strokeLinecap="round" />
                            <circle cx="110" cy="35" r="8" fill="#592915" opacity="0.15" />
                            <circle cx="95" cy="40" r="6" fill="#592915" opacity="0.15" />
                            <circle cx="125" cy="50" r="6" fill="#592915" opacity="0.15" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#forestPattern)" />
                </svg>
            </div>

        </footer>
    );
}