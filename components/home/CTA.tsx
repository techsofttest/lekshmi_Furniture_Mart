'use client';

import { useRef } from "react";
import PrimaryButton from "@/components/global/PrimaryButton";
import SecondaryButton from "@/components/global/SecondaryButton";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
interface CtaData{
  cta: {
  title:string;
  description:string;
  image: string;
  };
}
export default function CTA( {cta}:CtaData) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#1A120E] w-full relative overflow-hidden border-t border-white/10">

      {/* Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0 opacity-50 pointer-events-none overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
          <Image
            src={cta.image}
            alt="Call to action background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
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
              <path key={i} d="M 50 50 Q 46 25 50 15 Q 54 25 50 50" transform={`rotate(${angle} 50 50)`} />
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
              <path key={i} d="M 50 50 Q 46 25 50 15 Q 54 25 50 50" transform={`rotate(${angle} 50 50)`} />
            );
          })}
        </svg>
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-4 lg:px-8 relative z-10 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Kicker */}
        <span className="text-[#F4ECE1]/80 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-6 block">
          {cta.title}
        </span>

        {/* CTA Heading */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F4ECE1] mb-6 leading-tight [&_i]:italic [&_br]:hidden sm:block" dangerouslySetInnerHTML={{ __html: cta.description }}/>
        {/* CTA Buttons */}
        <div className="flex pt-4 flex-col sm:flex-row items-center justify-center gap-6">
          <PrimaryButton href="/quote" variant="light">
            Get a Free Quote
          </PrimaryButton>
        </div>
      </motion.div>
    </section>
  );
}
