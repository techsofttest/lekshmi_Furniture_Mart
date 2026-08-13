"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface MaterialItem {
  label: string;
  title: string;
  description: string;
  number: string;
}

interface StatItem {
  value: string;
  label: string;
}

interface ProductResponse {
  workshop?: {
    span: string;
    heading: string;
    desc: string;
    i: string;
  } | null;
  materials?: MaterialItem[] | null;
  stats?: {
    title?: string;
    items?: StatItem[];
  } | null;
}

export default function MaterialsHighlight({
  workshop,
  materials = [],
  stats,
}: ProductResponse) {
  const statItems = stats?.items ?? [];

  return (
    <section className="bg-white overflow-hidden">
      {/* Top: Full-bleed split layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Full-bleed Craftsman Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative min-h-[400px] lg:min-h-full overflow-hidden"
        >
          <Image
            src={workshop?.i || "/images/workshop.jpg"}
            alt="Master craftsman at work"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale"
            priority
          />
          {/* Top + bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

          {/* Top-left: Section header overlay */}
          {workshop && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-8 left-8 lg:top-12 lg:left-12 max-w-md"
            >
              {workshop.span && (
                <span className="text-white/80 font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-2">
                  {workshop.span}
                </span>
              )}
              {workshop.heading && (
                <h2
                  className="text-xl md:text-2xl font-serif text-white leading-tight [&_i]:italic"
                  dangerouslySetInnerHTML={{ __html: workshop.heading }}
                />
              )}
            </motion.div>
          )}

          {/* Bottom caption */}
          {workshop && (
            <div className="absolute bottom-8 left-8 right-8">
              {workshop.desc && (
                <span className="text-white/80 font-sans text-[10px] uppercase tracking-[0.3em] font-bold block mb-1" dangerouslySetInnerHTML={{ __html: workshop.desc }}
                />
              )}
              {/* {workshop.i && (
                <span className="text-white font-serif text-base italic" dangerouslySetInnerHTML={{ __html: workshop.i }}
                />
             
              )} */}
            </div>
          )}
        </motion.div>

        {/* Right: Stacked Material Panels */}
        <div className="flex flex-col bg-[#FCFAF8]">
          {materials && materials.length > 0 ? (
            materials.map((mat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group px-6 md:px-10 lg:px-16 py-10 border-b border-[#592915]/10 flex gap-8 items-start hover:bg-white transition-colors duration-500"
              >
                {/* Large ordinal number */}
                {mat.number && (
                  <span className="text-[#592915]/15 font-serif text-5xl font-light select-none leading-none mt-1 shrink-0 group-hover:text-[#592915]/25 transition-colors duration-500">
                    {mat.number}
                  </span>
                )}

                <div className="space-y-3 flex-1">
                  {mat.label && (
                    <span className="text-[#592915] font-serif text-sm italic block">
                      {mat.label}
                    </span>
                  )}
                  {mat.title && (
                    <h3 className="text-lg font-serif text-[#2A1C14] group-hover:text-[#592915] transition-colors duration-500">
                      {mat.title}
                    </h3>
                  )}
                  {mat.description && (
                    <p className="text-[#2A1C14]/65 font-sans text-sm leading-relaxed">
                      {mat.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div className="p-12 text-center text-[#2A1C14]/50 italic font-serif">
              No materials data available.
            </div>
          )}
        </div>
      </div>

      {/* Bottom: Stat Bar */}
      {statItems.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#592915] grid grid-cols-2 md:grid-cols-4"
        >
          {statItems.map((stat, idx) => (
            <div
              key={idx}
              className={`px-8 py-8 text-center border-r border-white/10 last:border-r-0 ${
                idx === 2 ? "md:border-r border-white/10" : ""
              }`}
            >
              <span className="text-white font-serif text-3xl md:text-4xl font-light block mb-1">
                {stat.label}
              </span>
              <span className="text-white/80 font-sans text-[10px] uppercase tracking-[0.2em] font-bold">
                {stat.value}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}