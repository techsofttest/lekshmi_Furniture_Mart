"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface LegacyStoryProps {
  heritage: {
    span: string;
    heading: string;
    desc: string;
  } | null;
  containerVariants: any;
  itemVariants: any;
}

export default function LegacyStory({
  heritage,
  containerVariants,
  itemVariants,
}: LegacyStoryProps) {
  // Fallback check if no API data is available
  if (!heritage) return null;

  return (
    <section className="bg-[#592915] py-24 w-full relative overflow-hidden">
      {/* Premium Wood Ring Background Pattern (Low Opacity) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="woodGrainLegacy"
              x="0"
              y="0"
              width="300"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="150" cy="150" r="140" stroke="#F4ECE1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="150" r="110" stroke="#F4ECE1" strokeWidth="1" strokeDasharray="5 5" fill="none" />
              <circle cx="150" cy="150" r="80" stroke="#F4ECE1" strokeWidth="1.5" fill="none" />
              <circle cx="150" cy="150" r="50" stroke="#F4ECE1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="150" r="20" stroke="#F4ECE1" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#woodGrainLegacy)" />
        </svg>
      </div>

      <div className="max-w-[1000px] mx-auto px-4 lg:px-8 text-center flex flex-col items-center relative z-10 space-y-16">
        {/* ----------------- HERITAGE SECTION ----------------- */}
        {heritage && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4 flex flex-col items-center">
              {heritage.span && (
                <span className="text-[#F4ECE1]/80 font-sans text-[10px] uppercase tracking-[0.2em] font-bold block">
                  {heritage.span}
                </span>
              )}

              {heritage.heading && (
                <h2
                  className="text-xl md:text-2xl font-serif text-[#F4ECE1] leading-tight"
                  dangerouslySetInnerHTML={{ __html: heritage.heading }}
                />
              )}
            </motion.div>

            {heritage.desc && (
              <motion.div variants={itemVariants} className="space-y-6 max-w-3xl mx-auto">
                <div
                  className="text-[#F4ECE1]/90 font-sans text-base md:text-lg leading-relaxed [&>p]:mb-4 [&>strong]:text-white [&>strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: heritage.desc }}
                />
              </motion.div>
            )}
          </motion.div>
        )}
       
      </div>
    </section>
  );
}