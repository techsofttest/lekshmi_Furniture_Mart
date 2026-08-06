"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionLink = motion.create(Link);
interface Gallery {
  id: number;
  category: string;
  image: string;
}

interface BentoCategoriesProps {
  gallery: Gallery[];
}
interface ParallaxImageProps {
  src: string;
  alt: string;
}

function ParallaxImage({ src,alt }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Maps the scroll progress to a y-axis shift (moving from -10% to 10%)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden bg-gray-200">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] h-[120%] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transform group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
        />
      </motion.div>
    </div>
  );
}

export default function BentoCategories({ gallery }: BentoCategoriesProps) {
  return (
    <section className="py-24 bg-[#FCF8F3] w-full relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-20">

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-xl md:text-2xl font-serif text-[#592915] mb-4 inline-block relative">
            Our Collections
          </h2>
        </motion.div>

        {/* The Grid: 3 columns on row 1, 2 columns on row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 xl:gap-8">
  {gallery.map((item, index) => {
    const layouts = [
      "md:col-span-2",
      "md:col-span-2",
      "md:col-span-2",
      "md:col-span-3",
      "md:col-span-3",
    ];

    return (
      <MotionLink
        key={item.id}
        href={`/gallery?filter=${encodeURIComponent(item.category)}`}
        className={`relative overflow-hidden group col-span-1 ${
          layouts[index % layouts.length]
        } h-[300px] sm:h-[350px] md:h-[400px] rounded-sm block`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
      >
        <ParallaxImage
          src={item.image}
          alt={item.category}
        />

        <div className="absolute inset-0 bg-black/35 group-hover:bg-black/50 transition-colors duration-500" />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <span className="text-white/80 text-xs tracking-[0.25em] uppercase mb-2">
            THE
          </span>

          <h3 className="text-2xl md:text-3xl font-serif text-white uppercase tracking-[0.1em]">
            {item.category}
          </h3>

          <span className="text-white/80 text-xs tracking-[0.25em] uppercase mt-2">
            COLLECTION
          </span>
        </div>
      </MotionLink>
    );
  })}


        </div>
      </div>
    </section>
  );
}
