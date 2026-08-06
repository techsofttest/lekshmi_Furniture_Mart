"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
interface HistoryData{
   history: {
  span:string;
  heading:string;
  content: string;
  image: string;
  };
}
export default function BrandHistory({history}:HistoryData) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 w-full bg-[#1A120E] overflow-hidden border-t border-white/10 relative">
      {/* Background Image with Low Opacity & Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
          <Image
            src={history.image}
            alt="Brand History Background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        {/* Dark Gradient Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>



      <div className="max-w-4xl mx-auto px-4 lg:px-24 relative z-10">
        <motion.div
          className="flex flex-col justify-center items-center text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Kicker */}
          <span className="text-[#F4ECE1]/80 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-6 block">
            {history.span}
          </span>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F4ECE1] mb-6 leading-tight [&_i]:italic" dangerouslySetInnerHTML={{ __html: history.heading }}/>

          <div className="w-16 h-[1px] bg-white/20 mb-10" />

          <div className="space-y-6 text-[#F4ECE1]/90 font-sans text-sm md:text-base lg:text-lg leading-relaxed [&_strong]:font-semibold [&_strong]:text-white [&_strong]:tracking-wide" dangerouslySetInnerHTML={{ __html: history.content }}/>
           
        </motion.div>
      </div>
    </section>
  );
}
