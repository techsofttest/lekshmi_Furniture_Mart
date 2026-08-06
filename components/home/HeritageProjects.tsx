"use client";

import { motion } from "framer-motion";
interface Heritage {
  span:string;
  heading:string;
  content: string;
  project:{
    name:string;
  }[];
}
interface HeritageProps {
  heritage: Heritage;
}

export default function HeritageProjects({heritage}:HeritageProps) {
  return (
    <section className="py-24 bg-[#FCFAF8] w-full border-t border-[#592915]/10 relative overflow-hidden">
      {/* Traditional Indian Mandala Background Motif */}
      <div className="absolute -top-40 -left-40 z-0 opacity-[0.02] pointer-events-none text-[#592915]">
        <svg width="600" height="600" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          <circle cx="50" cy="50" r="25" />
          <path d="M 50 0 L 50 100 M 0 50 L 100 50 M 15 15 L 85 85 M 15 85 L 85 15" />
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <path key={i} d="M 50 50 Q 46 25 50 15 Q 54 25 50 50" transform={`rotate(${angle} 50 50)`} />
            );
          })}
        </svg>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
        <div className="flex flex-col gap-16 items-center">

          {/* Top: Section Header */}
          <div className="w-full flex flex-col items-center text-center max-w-3xl">
            <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold mb-4 block">
              {heritage.span}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#592915] mb-6 leading-tight">
            {heritage.heading}
            </h2>
            <div className="w-14 h-[1.5px] bg-[#592915]/20 mb-6" />
            <p className="text-[#2A1C14]/70 font-sans text-sm md:text-base leading-relaxed">{heritage.content}</p>
          </div>

          {/* Bottom: Stylish Boxed Grid (No carousel, no images, no shadows) */}
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {heritage.project.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative overflow-hidden border border-[#592915]/15 bg-white/40 backdrop-blur-[2px] p-8 text-center flex items-center justify-center min-h-[120px] transition-all duration-300 hover:border-[#592915] hover:bg-[#592915] group"
              >
                {/* Micro-graphic background pattern */}
                <svg className="absolute -right-6 -bottom-6 w-24 h-24 transition-all duration-500 group-hover:scale-110 pointer-events-none stroke-[#592915] opacity-[0.04] group-hover:stroke-[#F4ECE1] group-hover:opacity-[0.08]" viewBox="0 0 100 100" fill="none" strokeWidth="0.75">
                  <circle cx="50" cy="50" r="40" />
                  <circle cx="50" cy="50" r="30" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="20" />
                  <path d="M 50 10 L 50 90 M 10 50 L 90 50" />
                  <path d="M 22 22 L 78 78 M 22 78 L 78 22" strokeDasharray="2 2" />
                </svg>

                <span className="relative z-10 text-[#592915] font-serif text-lg tracking-[0.08em] uppercase transition-colors duration-300 group-hover:text-[#F4ECE1]">
                  {project.name}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
