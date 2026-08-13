"use client";

import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  MessageCircle,
  ChevronRight,
  Car,Bike,
  Train,
} from "lucide-react";
import type { LocatorApiResponse } from "./page";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

// Map backend icon string names to Lucide icon components dynamically
const getHowToReachIcon = (iconName: string) => {
  switch (iconName?.toLowerCase()) {
    case "train":
      return Train;
      case "bike":
      return Bike;
    case "car":
    default:
      return Car;
  }
};

interface LocatorPageProps {
  initialData: LocatorApiResponse;
}

export default function LocatorPage({ initialData }: LocatorPageProps) {
  const { contact, page, about, info,cta } = initialData;

  const mapSrc =
    contact?.map ||
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.847512838!2d76.20500!3d10.34200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0808f0a1234567%3A0xabcdef1234567890!2sIrinjalakuda%2C%20Kerala!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin";

  const directionsUrl = `https://maps.google.com/?q=${encodeURIComponent( "Lekshmi Furniture Mart" )}`;

  return (
    <div className="bg-white text-[#2A1C14]">
      <InnerPageHero
        kicker="Visit Us In Person"
        title="Find Our Showroom"
        subtitle="Experience the craft, up close."
      />

      {/* ── Store Selector + Map ── */}
      <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
          variants={fadeUp}
        >
          <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
            {page?.span ?? "Our Location"}
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#592915]">
            {page?.heading ?? "Come, Experience the Craft"}
          </h2>
          <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
          <div className="text-[#2A1C14]/60 font-sans text-sm md:text-base leading-relaxed mt-5 max-w-xl mx-auto" dangerouslySetInnerHTML={{ __html: page?.description ?? "Visit our showroom to explore our bespoke furniture collection and witness the craftsmanship firsthand." }}/>
        </motion.div>

        {/* Map + Details grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-gray-100 shadow-md rounded-sm overflow-hidden"
        >
          {/* ── Map ── */}
          <div className="lg:col-span-3 relative min-h-[380px] md:min-h-[480px] bg-[#F4ECE1]">
            <iframe
              id="store-map"
              src={mapSrc}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Map"
            />

            {/* Get Directions badge */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="get-directions-btn"
              className="absolute bottom-4 left-4 flex items-center gap-2 bg-[#592915] text-white px-5 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all shadow-lg z-10"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>

          {/* ── Store Details ── */}
          <div className="lg:col-span-2 bg-[#FCFAF8] p-8 md:p-10 flex flex-col gap-8 border-l border-gray-100">
            <div>
              <h3 className="font-serif text-xl text-[#592915] leading-snug">
                Lekshmi Furniture Mart
              </h3>
            </div>

            {/* Address */}
            {contact?.address && (
              <div className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-[#592915] mt-1 flex-shrink-0" />
                <div className="text-sm text-[#2A1C14]/75 leading-relaxed" dangerouslySetInnerHTML={{ __html: contact.address }}/>
              </div>
            )}

            {/* Hours */}
            {contact?.open && (
              <div className="flex gap-3 items-start">
                <Clock className="w-4 h-4 text-[#592915] mt-1 flex-shrink-0" />
                <div className="space-y-1.5 text-sm text-[#2A1C14]/75">
                  <span className="font-semibold text-[#2A1C14]">
                    Working Hours:
                  </span>{" "}
                  {contact.open}
                </div>
              </div>
            )}

            <div className="w-full h-px bg-gray-200" />

            {/* Contact Details */}
            <div className="flex flex-col gap-4">
              {contact?.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  id="store-phone-link"
                  className="flex items-center gap-3 group"
                >
                  <Phone className="w-4 h-4 text-[#592915] flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-[#592915] transition-colors">
                    {contact.phone}
                  </span>
                </a>
              )}
              {contact?.email && (
                <a
                  href={`mailto:${contact.email}`}
                  id="store-email-link"
                  className="flex items-center gap-3 group"
                >
                  <Mail className="w-4 h-4 text-[#592915] flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-[#592915] transition-colors break-all">
                    {contact.email}
                  </span>
                </a>
              )}
              {contact?.whatsapp && (
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="store-whatsapp-link"
                  className="flex items-center gap-3 group"
                >
                  <MessageCircle className="w-4 h-4 text-[#592915] flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-[#592915] transition-colors">
                    WhatsApp Us
                  </span>
                </a>
              )}
            </div>

            {/* Directions CTA */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center justify-between w-full bg-[#592915] text-white px-6 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all group/dir"
            >
              Open in Google Maps
              <ChevronRight className="w-4 h-4 group-hover/dir:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* ── How to Reach / About Section ── */}
      {about && about.points.length > 0 && (
        <section className="bg-[#FCFAF8] border-y border-gray-100 py-20">
          <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
                {about.span}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif text-[#592915]">
                {about.heading}
              </h2>
              <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
            </motion.div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto justify-center justify-items-center">
              {about.points.map((item, i) => {
                const IconComponent = getHowToReachIcon(item.icon);
                return (
                  <motion.div
                    key={item.title || i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 1}
                    variants={fadeUp}
                    className={`bg-white border border-gray-100 p-8 rounded-sm flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow w-full ${
                      about.points.length === 1 ? 'sm:col-span-2 max-w-md mx-auto' : ''
                    }`}
                  >
                    <div className="w-10 h-10 flex items-center justify-center bg-[#F4ECE1] rounded-full flex-shrink-0">
                      <IconComponent className="w-5 h-5 text-[#592915]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#592915] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#2A1C14]/65 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
                      </div>
        </section>
      )}

      {/* ── Visit Prompt Strip ── */}
      <section className="py-16 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-8 bg-[#FCFAF8] border border-gray-100 px-10 py-10 rounded-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          custom={0}
          variants={fadeUp}
        >
          <div className="max-w-xl">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70 block mb-3">
              {info?.span ?? "Plan Your Visit"}
            </span>
            <h3 className="font-serif text-xl md:text-2xl text-[#592915] leading-snug mb-3">
              {info?.heading ?? "Can't visit right now?"}
            </h3>
            <p className="text-sm text-[#2A1C14]/65 leading-relaxed"  dangerouslySetInnerHTML={{ __html: info?.description ?? "Message us on WhatsApp and our team will schedule a consultation at your convenience." }}/>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            {contact?.whatsapp && (
              <Link
                href={contact.whatsapp}
                target="_blank"
                id="visit-whatsapp-cta"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#592915] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </Link>
            )}
            <Link
              href="/custom-designs"
              id="visit-custom-cta"
              className="inline-flex items-center gap-2 px-8 py-4 border border-[#592915] text-[#592915] text-[10px] uppercase tracking-widest font-bold hover:bg-[#592915]/5 transition-all"
            >
              Custom Orders
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>

       {cta && cta.image ? <CTA cta={{ ...cta, image: cta.image }} /> : null}
    </div>
  );
}