'use client';

import { useState, useRef, useEffect } from "react";
import Card from "@/components/global/Card";
import { motion, useMotionValue, animate, useAnimationFrame } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  title: string;
  href: string  |"/products/living/shoe-racks/premium-wooden-corner-stand";
  image: string;
}
interface productProps{
product:Product[];
}
// Triple for seamless continuous loop on all screens


export default function ProductList({product}:productProps) {
  const items = [...product, ...product, ...product];
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [oneSetWidth, setOneSetWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const calculateWidths = () => {
      if (carouselRef.current && containerRef.current) {
        const fullWidth = carouselRef.current.scrollWidth;
        const cWidth = containerRef.current.offsetWidth;
        setContainerWidth(cWidth);
        // Since we tripled the items, one set is exactly 1/3 of the scrollWidth
        setOneSetWidth(fullWidth / 3);
      }
    };

    calculateWidths();
    window.addEventListener("resize", calculateWidths);
    // Recalculate after a brief delay to ensure images are loaded
    const timer = setTimeout(calculateWidths, 1000);
    return () => {
      window.removeEventListener("resize", calculateWidths);
      clearTimeout(timer);
    };
  }, []);

  useAnimationFrame((t, delta) => {
    if (isHovered || isDragging || isAnimating || x.isAnimating() || !oneSetWidth) return;
    let currentX = x.get();
    // Scroll continuously to the left
    currentX -= Math.min(delta, 50) * 0.05;
    // Wrap around smoothly when one full set has scrolled past
    if (currentX <= -oneSetWidth) {
      currentX += oneSetWidth;
    }
    x.set(currentX);
  });

  const handleNav = (direction: "prev" | "next") => {
    if (!oneSetWidth) return;
    setIsAnimating(true);
    const scrollAmount = containerWidth * 0.7;
    const currentX = x.get();
    const targetX = direction === "prev" ? currentX + scrollAmount : currentX - scrollAmount;

    animate(x, targetX, {
      type: "spring",
      stiffness: 300,
      damping: 35,
      onUpdate: (latest) => {
        if (oneSetWidth) {
          // Keep it wrapped within the single set boundary
          if (latest > 0) x.set(latest - oneSetWidth);
          else if (latest < -oneSetWidth) x.set(latest + oneSetWidth);
        }
      },
      onComplete: () => setIsAnimating(false)
    });
  };

  return (
    <section className="py-24 bg-white w-full border-t border-[#F4ECE1]">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">

        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block">
            Most Loved
          </span>
          <h2 className="text-xl md:text-2xl font-serif text-[#592915] mb-4 inline-block relative">
            Signature Masterpieces
          </h2>
        </motion.div>

        {/* Carousel */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Controls */}
          <button
            onClick={() => handleNav("prev")}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#592915] hover:bg-white transition-all"
            aria-label="Previous Product"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => handleNav("next")}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-[#592915] hover:bg-white transition-all"
            aria-label="Next Product"
          >
            <ChevronRight size={28} />
          </button>

          {/* Carousel Track */}
          <motion.div ref={containerRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
            <motion.div
              ref={carouselRef}
              className="flex gap-4 w-max"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -oneSetWidth, right: 0 }}
              dragElastic={0.05}
              onDragStart={() => setIsDragging(true)}
              onUpdate={() => {
                const currentX = x.get();
                if (oneSetWidth) {
                  if (currentX > 0) x.set(currentX - oneSetWidth);
                  else if (currentX < -oneSetWidth) x.set(currentX + oneSetWidth);
                }
              }}
              onDragEnd={() => setIsDragging(false)}
              whileTap={{ cursor: "grabbing" }}
            >
              {items.map((product, idx) => (
                <div key={idx} className="w-[280px] sm:w-[350px] md:w-[400px] shrink-0">
                  <Card title={product.title} image={product.image} href={product.href || "#"} />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}