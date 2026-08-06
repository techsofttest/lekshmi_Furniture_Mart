"use client";
import {
  Hammer,
  ShieldCheck,
  Sparkles,
  Sofa,
  Bed,
  Home,
  LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";

interface CustomizedData{
  customized :{
  desc:string;
  title: string;
  icon: string,
}[]

}

export default function Highlights({customized}:CustomizedData) {
  const iconMap: Record<string, LucideIcon> = {
  Hammer,
  ShieldCheck,
  Sparkles,
  Sofa,
  Bed,
  Home,
};
  return (
    <section className="py-12 md:py-16 bg-[#1A120E] w-full relative overflow-hidden border-b border-white/10">

      {/* Premium Wood Ring Background Pattern (Low Opacity) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="woodGrainPattern" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="150" cy="150" r="140" stroke="#F4ECE1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="150" r="110" stroke="#F4ECE1" strokeWidth="1" strokeDasharray="5 5" fill="none" />
              <circle cx="150" cy="150" r="80" stroke="#F4ECE1" strokeWidth="1.5" fill="none" />
              <circle cx="150" cy="150" r="50" stroke="#F4ECE1" strokeWidth="1" fill="none" />
              <circle cx="150" cy="150" r="20" stroke="#F4ECE1" strokeWidth="2" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#woodGrainPattern)" />
        </svg>
      </div>

      {/* Traditional Indian Mandala Background Motif - Top Left */}
      <div className="absolute -top-20 -left-20 z-0 opacity-[0.04] pointer-events-none text-[#F4ECE1]">
        <svg width="350" height="350" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <path
                key={i}
                d="M 50 50 Q 46 25 50 15 Q 54 25 50 50"
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>
      </div>

      {/* Traditional Indian Mandala Background Motif - Bottom Right */}
      <div className="absolute -bottom-20 -right-20 z-0 opacity-[0.04] pointer-events-none text-[#F4ECE1]">
        <svg width="350" height="350" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <path
                key={i}
                d="M 50 50 Q 46 25 50 15 Q 54 25 50 50"
                transform={`rotate(${angle} 50 50)`}
              />
            );
          })}
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 xl:gap-16 text-center">

       {customized.map((item, idx) => {
        const Icon = iconMap[item.icon] || Sparkles;

        return (
          <motion.div
            key={idx}
            className="flex flex-col items-center group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: idx * 0.15 }}
          >
            <div className="w-12 h-12 mb-4 flex items-center justify-center text-[#F4ECE1]/80 group-hover:text-white group-hover:scale-105 transition-all duration-500">
              <Icon size={32} strokeWidth={1.2} />
            </div>

            <h3 className="text-lg font-serif text-[#F4ECE1] tracking-[0.15em] mb-2 uppercase">
              {item.title}
            </h3>

            <p className="text-[#F4ECE1]/80 font-sans text-sm md:text-base leading-relaxed max-w-xs">
              {item.desc}
            </p>
          </motion.div>
        );
      })}

        </div>
      </div>
    </section>
  );
}
