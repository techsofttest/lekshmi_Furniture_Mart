"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  Sparkles,
  Tag,
  Armchair,
  Tv,
  BedDouble,
  Utensils,
  Moon,
  BookOpen,
  Archive,
  Palette,
  Phone,
  Mail,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  LucideIcon,
} from "lucide-react";

// Map dynamic string identifiers from Laravel API to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Armchair,
  Tv,
  BedDouble,
  Utensils,
  Moon,
  BookOpen,
  Archive,
  Palette,
  Sparkles,
  Tag,
};
export interface NavigationItem {
  label: string;
  slug: string;
  icon: string | null; // String identifier from API
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
}

interface HeaderProps {
  menu: NavigationItem[];
  contact: ContactInfo;
}

const utilityLinks = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/projects" },
  { label: "Contact Us", href: "/contact" },
  { label: "Custom Designs", href: "/custom-designs" },
  { label: "Shop Locator", href: "/locator" },
];

export default function Header({ menu, contact }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeDrawer = () => {
    setMobileOpen(false);
    setExpandedCategory(null);
  };

  // Helper to dynamically resolve Lucide Icons from string identifiers
  const renderIcon = (iconName: string | null) => {
    if (!iconName) return null;
    const IconComponent = ICON_MAP[iconName] || Tag;
    return <IconComponent className="w-[14px] h-[14px]" />;
  };

  const renderMobileIcon = (iconName: string | null) => {
    const IconComponent = (iconName && ICON_MAP[iconName]) || Tag;
    return <IconComponent className="w-4 h-4 text-[#592915]" strokeWidth={1.5} />;
  };

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full bg-[#FCF8F3] backdrop-blur-md border-b border-gray-100 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
          <div className="flex items-stretch justify-between py-2 relative">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center pr-4 lg:pr-8 xl:pr-16 relative z-10">
              <Link href="/" className="hover:opacity-90 transition-opacity">
                <Image
                  src="/logo/logo2.png"
                  alt="Lekshmi Furniture Mart"
                  width={160}
                  height={180}
                  className="h-16 sm:h-20 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Layout */}
            <div className="hidden xl:flex flex-col justify-center flex-1 py-1">
              {/* Utility Bar */}
              <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-2">
                <nav className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-[#2A1C14] font-sans font-semibold">
                  <Link href="/about" className="hover:text-[#592915] transition-colors">
                    About Us
                  </Link>
                  <Link href="/gallery" className="hover:text-[#592915] transition-colors">
                    Gallery
                  </Link>
                  <Link href="/projects" className="hover:text-[#592915] transition-colors">
                    Clients
                  </Link>
                </nav>
                <div className="flex items-center gap-4 text-sm text-[#2A1C14]">
                  {contact?.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#592915]" />
                      <span>{contact.phone}</span>
                    </div>
                  )}
                  {contact?.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#592915]" />
                      <span>{contact.email}</span>
                    </div>
                  )}
                </div>
                {contact?.whatsapp && (
                  <Link
                    href={contact.whatsapp}
                    target="_blank"
                    className="px-6 py-2 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A1C14] transition-all relative z-10"
                  >
                    WhatsApp Us
                  </Link>
                )}
              </div>

              {/* Navigation Menu */}
              <nav className="flex justify-end items-center gap-3 2xl:gap-5 text-[13px] font-bold text-[#2A1C14] tracking-wide">
                {menu?.map((item) => (
                  <div key={item.label} className="group pb-4 -mb-4">
                    <Link
                      href={item.href}
                      className={`relative hover:text-[#592915] transition-colors py-2 whitespace-nowrap flex items-center gap-1.5 group/link ${
                        pathname?.startsWith(item.href) ? "text-[#592915]" : ""
                      }`}
                    >
                      {renderIcon(item.icon)}
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#592915] transition-transform duration-300 ${
                          pathname?.startsWith(item.href)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover/link:scale-x-50"
                        }`}
                      />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div className="absolute left-0 right-0 top-full mt-4 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-out z-50 rounded-sm overflow-hidden">
                      <div className="flex">
                        {/* Promo Item */}
                        {item.dropdown?.promo && (
                          <Link
                            href={item.dropdown.promo.href}
                            className="w-1/3 bg-[#FCFAF8] p-4 flex flex-col justify-between hover:bg-[#FCF8F3]/30 transition-colors group/promo"
                          >
                            <div className="relative">
                              <div className="relative aspect-[2/1] mb-2">
                                <div className="relative h-full w-full overflow-hidden rounded-lg">
                                  <Image
                                    src={item.dropdown.promo.image}
                                    alt={item.dropdown.promo.subtitle}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    className="object-cover group-hover/promo:scale-105 transition-transform duration-700"
                                  />
                                </div>
                              </div>
                              <div className="relative z-10">
                                <h3 className="font-serif text-lg text-[#592915] mb-0.5 leading-snug">
                                  {item.dropdown.promo.title}
                                </h3>
                                <p className="text-xs text-[#2A1C14]/60 mb-1">
                                  {item.dropdown.promo.subtitle}
                                </p>
                                <p className="text-[#592915] font-bold text-sm">
                                  {item.dropdown.promo.price}
                                </p>
                              </div>
                            </div>
                          </Link>
                        )}

                        {/* Subcategories */}
                        <div className="w-2/3 p-6 grid grid-cols-3 gap-x-4 gap-y-3 items-start content-start overflow-y-auto max-h-[450px]">
                          {item.dropdown?.items?.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="text-xs uppercase tracking-wider text-[#2A1C14]/85 hover:text-[#592915] font-bold transition-colors font-sans block leading-snug"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </nav>
            </div>

            {/* Mobile Controls */}
            <div className="xl:hidden flex items-center gap-2 sm:gap-3">
              {contact?.whatsapp && (
                <Link
                  href={contact.whatsapp}
                  target="_blank"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A1C14] transition-all"
                >
                  WhatsApp
                </Link>
              )}
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation menu"
                className="flex items-center justify-center w-10 h-10 text-[#592915] hover:bg-[#F4ECE1] rounded-sm transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 xl:hidden ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm z-[70] bg-[#FCF8F3] shadow-2xl flex flex-col transition-transform duration-300 ease-out xl:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
          <Link href="/" onClick={closeDrawer}>
            <Image
              src="/logo/logo2.png"
              alt="Lekshmi Furniture Mart"
              width={120}
              height={140}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <button
            id="mobile-menu-close"
            onClick={closeDrawer}
            aria-label="Close navigation menu"
            className="flex items-center justify-center w-9 h-9 text-[#592915] hover:bg-[#F4ECE1] rounded-sm transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-1">
          <div className="mb-4 pb-4 border-b border-gray-100">
            <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#592915]/60 mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2">
              {utilityLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeDrawer}
                  className="text-sm font-sans font-semibold text-[#2A1C14] hover:text-[#592915] transition-colors py-1"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#592915]/60 mb-3">
            Shop by Category
          </p>
          {menu?.map((item) => {
            const isExpanded = expandedCategory === item.label;
            const allItems = item.dropdown?.items || [];
            return (
              <div key={item.label} className="border-b border-gray-100 last:border-0">
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : item.label)}
                  className="flex items-center justify-between w-full py-3 text-left"
                  aria-expanded={isExpanded}
                >
                  <span className="flex items-center gap-2.5 text-sm font-bold text-[#2A1C14] font-sans tracking-wide">
                    {renderMobileIcon(item.icon)}
                    {item.label}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#592915]/60 transition-transform duration-200 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="pb-3 pl-6 grid grid-cols-1 gap-1">
                    {allItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeDrawer}
                        className="flex items-center gap-1.5 text-sm text-[#2A1C14]/75 hover:text-[#592915] font-sans py-1.5 transition-colors"
                      >
                        <ChevronRight className="w-3 h-3 text-[#592915]/40 shrink-0" />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="shrink-0 px-6 py-4 border-t border-gray-100 bg-white space-y-3">
          {contact?.phone && (
            <a href={`tel:${contact.phone}`} className="flex items-center gap-2.5 text-sm text-[#2A1C14] font-sans">
              <Phone className="w-4 h-4 text-[#592915]" />
              {contact.phone}
            </a>
          )}
          {contact?.whatsapp && (
            <Link
              href={contact.whatsapp}
              target="_blank"
              onClick={closeDrawer}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#592915] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A1C14] transition-all"
            >
              WhatsApp Us
            </Link>
          )}
        </div>
      </div>
    </>
  );
}