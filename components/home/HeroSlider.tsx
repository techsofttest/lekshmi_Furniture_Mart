"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton from "@/components/global/PrimaryButton";

interface Banner{
  id:string;
  cta:string;
  title: string;
  href: string;
  image: string;
}
interface BannerData{
  banner:Banner[];
}

export default function HeroSlider({banner}:BannerData) {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banner.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[70vh] min-h-[400px] w-full overflow-hidden bg-[#1A120E]">
      <AnimatePresence mode="wait">
        <motion.div
          key={banner[current].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          {/* Background Image */}
          <Image
            src={banner[current].image}
            alt={banner[current].title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          {/* Minimalist Dark Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent" />

          {/* Content Layer */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 w-full flex justify-end">
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="max-w-xl text-right"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#F4ECE1] mb-6 md:leading-[1.1] whitespace-pre-line tracking-wide font-normal">
                  {banner[current].title}
                </h1>
                {/* <p className="text-sm md:text-base font-sans text-white/70 mb-10 leading-relaxed font-light max-w-md ml-auto">
                  {slides[current].description}
                </p> */}
                <PrimaryButton href={banner[current].href} variant="light">
                  {banner[current].cta}
                </PrimaryButton>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Minimal Slider Indicators */}
      <div className="absolute bottom-10 left-6 lg:left-12 xl:left-24 flex items-center gap-8 z-20">
        <span className="text-[#F4ECE1]/80 text-xs font-light font-sans tracking-[0.2em]">0{current + 1}</span>
        <div className="flex gap-4">
          {banner.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-[1px] transition-all duration-700 ${current === idx ? "bg-[#F4ECE1] w-16" : "bg-[#F4ECE1]/30 w-8 hover:bg-[#F4ECE1]/60"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <span className="text-[#F4ECE1]/80 text-xs font-light font-sans tracking-[0.2em]">04</span>
      </div>
    </section>
  );
}