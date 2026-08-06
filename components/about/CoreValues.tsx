"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Compass, Heart, Award, LucideIcon } from "lucide-react";

interface CoreItem {
  title: string;
  desc: string;
  icon: string;
}

interface CoreValuesProps {
  containerVariants: any;
  itemVariants: any;
  core?: {
    span: string;
    items: CoreItem[];
  } | null;
}

export default function CoreValues({
  containerVariants,
  itemVariants,
  core,
}: CoreValuesProps) {
  const iconMap: Record<string, LucideIcon> = {
    Compass,
    ShieldCheck,
    Heart,
    Award,
  };

  if (!core || !core.items || core.items.length === 0) {
    return null;
  }

  return (
    <section className="py-24 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold block">
          OUR CORE VALUES
        </span>
        {core.span && (
          <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
            {core.span}
          </h2>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {core.items.map((val, idx) => {
          // Resolve icon safely, fallback to Compass if missing or string mismatch
          const IconComponent = iconMap[val.icon] || Compass;

          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-[#FCFAF8] p-8 border border-gray-100 rounded-sm hover:border-[#592915]/40 hover:shadow-md transition-all duration-500 flex flex-col justify-start text-center md:text-left items-center md:items-start group"
            >
              <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#592915] mb-6 group-hover:bg-[#592915] group-hover:text-[#F4ECE1] transition-colors duration-500">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif text-[#592915] mb-3 font-semibold">
                {val.title}
              </h3>
              <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}