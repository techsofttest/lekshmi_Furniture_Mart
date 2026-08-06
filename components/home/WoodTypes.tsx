"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import SecondaryButton from "../global/SecondaryButton";
interface Woodprops {
 wood: {
  span:string;
  heading:string;
  content: string;
  image: string;
  };
  }
export default function WoodTypes({wood} : Woodprops) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="py-24 md:py-32 w-full bg-[#1A120E] overflow-hidden relative border-t border-white/10">
            {/* Background Image with Parallax */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-x-0 -top-[15%] h-[130%] w-full">
                    <Image
                        src={wood.image}
                        alt="Premium wood grains"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />
                </motion.div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/80 to-[#1A120E]/90" />
                {/* <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#1A120E]/40 to-[#1A120E]" /> */}
            </div>

            <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
                <div className="flex justify-end">
                    <motion.div
                        className="max-w-2xl text-left flex flex-col"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Kicker */}
                        <span className="text-[#F4ECE1]/80 font-sans text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold mb-6 block ">
                          {wood.span}
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F4ECE1] mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: wood.heading }}/>
                        
                            {/* <br />
                            <span className="italic">Premium Heritage Woods</span> */}
                        

                        <div className="space-y-6 text-[#F4ECE1]/90 font-sans text-sm md:text-base lg:text-lg leading-relaxed [&>strong]font-semibold [&>strong]text-white [&>strong]tracking-wide" dangerouslySetInnerHTML={{ __html: wood.content }}/>

                        {/* <div className="mt-10">
                            <SecondaryButton href="/about" variant="light">
                                Learn About Our Process
                            </SecondaryButton>
                        </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}