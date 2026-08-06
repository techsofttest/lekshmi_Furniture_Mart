"use client";

import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import Link from "next/link";
import {
  Home,
  Info,
  ShoppingBag,
  Brush,
  Image as ImageIcon,
  Users,
  MapPin,
  CreditCard,
  HeartHandshake,
  BookOpen,
  Map,
  Sparkles,
  Tag,
  Armchair,
  Tv,
  BedDouble,
  Utensils,
  Moon,
  Archive,
  Palette,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Columns, // Added missing icon
  LucideIcon,
} from "lucide-react";

export interface DropdownItem {
  name: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  icon: string | null;
  href: string;
  // Support both dropdown formats from API
  dropdown?: DropdownItem[] | { items: DropdownItem[] };
}

interface HeaderProps {
  menu?: NavigationItem[] | { data?: NavigationItem[] };
}

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function SitemapPage({ menu }: HeaderProps) {
  // Normalize menu input in case the full response object is passed by mistake
  const rawMenuItems: NavigationItem[] = Array.isArray(menu)
    ? menu
    : menu?.data && Array.isArray(menu.data)
    ? menu.data
    : [];

  const ICON_MAP: Record<string, LucideIcon> = {
    Home,
    Info,
    ShoppingBag,
    Brush,
    ImageIcon,
    Users,
    MapPin,
    CreditCard,
    HeartHandshake,
    BookOpen,
    Map,
    Sparkles,
    Tag,
    Armchair,
    Tv,
    BedDouble,
    Utensils,
    Moon,
    Archive,
    Palette,
    Phone,
    Mail,
    Menu,
    X,
    ChevronDown,
    Columns, // Registered Columns
  };

  const renderIcon = (icon: LucideIcon | string | null) => {
    if (!icon) return <Tag className="w-4 h-4 text-[#592915]" strokeWidth={1.5} />;

    if (typeof icon === "string") {
      const IconComponent = ICON_MAP[icon] || Tag;
      return <IconComponent className="w-4 h-4 text-[#592915]" strokeWidth={1.5} />;
    }

    const IconComponent = icon;
    return <IconComponent className="w-4 h-4 text-[#592915]" strokeWidth={1.5} />;
  };

  // Process dynamic categories flexibly
  const dynamicMenuSections = rawMenuItems.map((item) => {
    // Extract sub-items safely from either dropdown structure
    let subItems: DropdownItem[] = [];
    if (Array.isArray(item.dropdown)) {
      subItems = item.dropdown;
    } else if (item.dropdown?.items && Array.isArray(item.dropdown.items)) {
      subItems = item.dropdown.items;
    }

    return {
      icon: item.icon,
      title: item.label,
      links: subItems.length
        ? subItems.map((subItem) => ({
            label: subItem.name,
            href: subItem.href,
          }))
        : [{ label: item.label, href: item.href || "#" }],
    };
  });

  const sections = [
    {
      icon: Home,
      title: "Home",
      links: [{ label: "Homepage", href: "/" }],
    },
    {
      icon: Info,
      title: "About",
      links: [
        { label: "Our Story", href: "/about" },
        { label: "Gallery", href: "/gallery" },
        { label: "Client Projects", href: "/projects" },
      ],
    },
    ...dynamicMenuSections,
    {
      icon: Brush,
      title: "Services",
      links: [
        { label: "Custom Designs", href: "/custom-designs" },
        { label: "Shop Locator", href: "/locator" },
        { label: "Payment Options", href: "/payment-options" },
      ],
    },
    {
      icon: HeartHandshake,
      title: "Help & Support",
      links: [
        { label: "Care Instructions", href: "/care-instructions" },
        { label: "Sitemap", href: "/sitemap" },
      ],
    },
  ];

  return (
    <div className="bg-white text-[#2A1C14]">
      <InnerPageHero
        kicker="Navigate with Ease"
        title="Sitemap"
        subtitle="Every page, at a glance."
      />

      <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sections.map((section, i) => (
            <motion.div
              key={`${section.title}-${i}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              variants={fadeUp}
              className="bg-[#FCFAF8] border border-gray-100 rounded-sm p-7"
            >
              <div className="flex items-center gap-2 mb-5">
                {renderIcon(section.icon)}
                <h3 className="font-serif text-base text-[#592915]">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {section.links.map((link, idx) => (
                  <li key={`${link.href}-${idx}`}>
                    <Link
                      href={link.href || "#"}
                      className="flex items-center gap-1.5 text-sm text-[#2A1C14]/70 hover:text-[#592915] font-sans transition-colors group"
                    >
                      <ChevronRight className="w-3 h-3 shrink-0 text-[#592915]/40 group-hover:text-[#592915] transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}