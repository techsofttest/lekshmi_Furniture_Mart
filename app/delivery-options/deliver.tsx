"use client";

import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import {
  Truck,
  PackageCheck,
  ShieldCheck,
  Wrench,
  Map,
  Factory,
  Phone,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import type { LocatorApiResponse } from "./page";

// Centralized icon mapping (lowercase keys for case-insensitive matching)
const ICON_MAP: Record<string, LucideIcon> = {
  truck: Truck,
  map: Map,
  factory: Factory,
  phone: Phone,
  shieldcheck: ShieldCheck,
  packagecheck: PackageCheck,
  wrench: Wrench,
};

function DynamicIcon({ name }: { name?: string }) {
  if (!name) return <HelpCircle className="w-6 h-6 text-[#592915]" strokeWidth={1.5} />;

  const key = name.toLowerCase().trim();
  const IconComponent = ICON_MAP[key] || HelpCircle;

  return <IconComponent className="w-6 h-6 text-[#592915]" strokeWidth={1.5} />;
}

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function DeliveryOptionsPage({
  initialData,
}: {
  initialData: LocatorApiResponse;
}) {
  const { data, about, cta } = initialData || {};

  return (
    <div className="bg-white text-[#2A1C14]">
      <InnerPageHero
        kicker="Seamless & Secure"
        title="Delivery & Installation"
        subtitle="Bringing craftsmanship to your doorstep."
      />

      {/* Delivery Process Section */}
      {about && (
        <section className="py-24 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
              {about.span}
            </span>
            <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
              {about.heading}
            </h2>
            <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
          </motion.div>

          {about.points && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {about.points.map((item, i) => (
                <motion.div
                  key={item.title || i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="text-center flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FCFAF8] border border-gray-100 flex items-center justify-center mb-5">
                    {/* Renders number if numeric (e.g. "01"), else renders Lucide Icon */}
                    {item.icon && !isNaN(Number(item.icon)) ? (
                      <span className="font-serif text-lg font-bold text-[#592915]">
                        {item.icon}
                      </span>
                    ) : (
                      <DynamicIcon name={item.icon} />
                    )}
                  </div>
                  <h3 className="font-serif text-lg text-[#592915] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#2A1C14]/70 leading-relaxed font-sans max-w-xs">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Options & Charges Section */}
      {data && (
        <section className="py-24 bg-[#FCFAF8] border-y border-gray-100">
          <div className="max-w-5xl mx-auto px-4 lg:px-8 xl:px-16">
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                {data.span}
              </span>
              <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                {data.heading}
              </h2>
            </motion.div>

            {data.points && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.points.map((item, i) => (
                  <motion.div
                    key={item.title || i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i + 1}
                    variants={fadeUp}
                    className="bg-white border border-gray-100 p-8 rounded-sm flex gap-6"
                  >
                    <div className="mt-1 shrink-0">
                      <DynamicIcon name={item.icon} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-[#592915] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#2A1C14]/70 leading-relaxed font-sans">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {cta && cta.image ? <CTA cta={{ ...cta, image: cta.image }} /> : null}
    </div>
  );
}