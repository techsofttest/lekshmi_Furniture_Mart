'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface Testimony{
    id:string;
    name: string;
    location: string;
    avatar: string;
    text: string;
    rating: string;
}
interface TestimonyData{
testimony:Testimony[]
}
export default function Testimonials({testimony}:TestimonyData) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimony.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimony.length) % testimony.length);
  };

useEffect(() => {
  if (!testimony.length) return;

  const timer = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % testimony.length);
  }, 6000);

  return () => clearInterval(timer);
}, [testimony.length]);
if (!testimony || testimony.length === 0) {
  return null;
}
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF8] w-full relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex flex-col items-center text-center"
        >
          <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block">
            What Our Clients Say
          </span>
          <h2 className="text-xl md:text-2xl font-serif text-[#592915] mb-4 inline-block relative pb-4">
            Trusted Since 1990
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[1px] bg-[#592915]/40" />
          </h2>
        </motion.div>

        {/* Testimonial Container */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Left Control */}
          <button
            onClick={prevTestimonial}
            className="hidden sm:flex absolute left-0 md:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 text-[#592915]/40 hover:text-[#592915] transition-colors duration-300 z-20 p-2"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>

          {/* Right Control */}
          <button
            onClick={nextTestimonial}
            className="hidden sm:flex absolute right-0 md:-right-12 lg:-right-16 top-1/2 -translate-y-1/2 text-[#592915]/40 hover:text-[#592915] transition-colors duration-300 z-20 p-2"
            aria-label="Next Testimonial"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Testimonial Card */}
          <motion.div
            className="bg-[#FCFAF8] border border-[#FCF8F3] px-6 sm:px-10 md:px-16 py-8 md:py-12 rounded-sm min-h-[380px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[380px] flex flex-col justify-center overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center justify-center w-full"
              >
                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-8">
                  {Array.from({ length: Number(testimony[currentIndex].rating) }).map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#592915] fill-[#592915]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[#2A1C14]/75 font-sans text-base md:text-lg leading-relaxed italic mb-12 text-center">
                  "{testimony[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden">
                    <img
                      src={testimony[currentIndex].avatar}
                      alt={testimony[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="font-serif text-[#592915] text-lg">
                      {testimony[currentIndex].name}
                    </h4>
                    <p className="text-[#2A1C14]/70 font-sans text-xs">
                      {testimony[currentIndex].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Separator Line */}
        {/* <div className="w-full max-w-xs mx-auto h-[1px] bg-[#B28544]/20 mt-12" /> */}

        {/* Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {testimony.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-[1px] transition-all duration-500 ${index === currentIndex
                ? "bg-[#592915] w-8"
                : "bg-[#592915]/30 w-4 hover:bg-[#592915]/50"
                }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
