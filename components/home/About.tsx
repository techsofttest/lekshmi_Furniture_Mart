'use client';

import { useState } from "react";
import Image from "next/image";
import {
  CreditCard,
  ShieldCheck,
  Truck,
  Hammer,
  Sparkles,
  Sofa,
  Bed,
  Home,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import SecondaryButton from "@/components/global/SecondaryButton";
import { motion } from "framer-motion";
interface About {
  span:string;
  heading:string;
  content: string | null;
  after?: string | null;
  before?: string | null;
  points:{
    title:string;
    desc:string;
    icon:string;
  }[];
}interface AboutProps {
  about?: About;
}
export default function AboutSection({about}:AboutProps) {
const iconMap: Record<string, LucideIcon> = {
  CreditCard,
  ShieldCheck,
  Truck,
  Hammer,
  Sparkles,
  Sofa,
  Bed,
  Home,
};
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-24 bg-[#FCFAF8] w-full relative">

      {/* items-start is crucial here so the sticky child can track the height of the grid */}
      <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 grid grid-cols-1 xl:grid-cols-2 gap-16 relative z-10 items-start">

        {/* Left Column: Sticky Before & After Slider */}
        <motion.div
          className="sticky top-28 w-full h-[65vh] min-h-[550px] rounded-sm overflow-hidden group"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >

          {/* Base Layer: "Before" Image */}
          <div className="absolute inset-0 w-full h-full">
            {/* Replace with your actual 'Before' image */}
            <Image
              src={about?.before ?? ""}
              alt="Space before customisation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            {/* Optional subtle label */}
            <div className="absolute top-6 left-6 px-4 py-1.5 bg-[#1A120E]/70 backdrop-blur-sm text-[#F4ECE1] text-[10px] uppercase tracking-widest font-bold rounded-sm">
              Before
            </div>
          </div>

          {/* Top Layer: "After" Image wrapped in a clipped div */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            {/* Replace with your actual 'After' image */}
            <Image
              src={about?.after ?? ""}
              alt="Space after customisation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
            <div className="absolute top-6 right-6 px-4 py-1.5 bg-[#592915]/90 backdrop-blur-sm text-white text-[10px] uppercase tracking-widest font-bold rounded-sm">
              After
            </div>
          </div>

          {/* Custom Slider Handle/Thumb */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-[#FFFF] pointer-events-none z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#FFFF] rounded-full flex items-center justify-center text-[#592915] shadow-xl">
              <ChevronLeft size={18} strokeWidth={2.5} className="-mr-1" />
              <ChevronRight size={18} strokeWidth={2.5} className="-ml-1" />
            </div>
          </div>

          {/* Invisible Native Input for perfectly smooth drag & touch access */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 m-0 p-0"
            aria-label="Image comparison slider"
          />
        </motion.div>

        {/* Right Column: Brand Story and Value Grid (Scrolls naturally) */}
        <div className="flex flex-col justify-center">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold mb-4 block">{about?.span}</span>
            <h2 className="text-xl md:text-2xl font-serif text-[#592915] mb-4 leading-tight inline-block relative">
             {about?.heading}
            </h2>
            <div className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed mb-8 max-w-2xl mt-6" dangerouslySetInnerHTML={{ __html: about?.content ?? ''}}/>
            <SecondaryButton href="/customization" variant="dark">
              Explore Services
            </SecondaryButton>
          </motion.div>

          {/* Shadowless, 3-Column Grid with Lucide Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-[#592915]/20">
            {about?.points.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-start group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#F4ECE1] flex items-center justify-center text-[#592915] mb-5 group-hover:bg-[#592915] group-hover:text-[#F4ECE1] transition-colors duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif text-[#592915] mb-2">{value.title}</h4>
                    <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}