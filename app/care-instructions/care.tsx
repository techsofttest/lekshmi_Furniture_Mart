"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import Link from "next/link";
import {
    Droplets,
    Sun,
    Wind,
    ShieldCheck,
    AlertTriangle,
    Sparkles,
    Bug,
    Thermometer,
    CheckCircle2,
    XCircle,
    ChevronDown,
    HelpCircle,LucideIcon,
} from "lucide-react";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
    }),
};

// ─── Data ──────────────────────────────────────────────────────────────────────
const woodTypes = [
    {
        color: "#8B5E3C",
    },
    {
        color: "#6B2D2D",
    },
    {
        color: "#7A4A2A",
    },
    {
        color: "#9C7B5A",
    },
];

const dos = [
    "Dust regularly with a soft, lint-free cloth to prevent surface build-up.",
    "Use a mild, furniture-safe cleaner for spot cleaning spills.",
    "Place felt pads or coasters under objects to prevent scratches.",
    "Oil or condition wood surfaces every 6–12 months as recommended.",
    "Keep furniture in well-ventilated spaces with stable humidity.",
    "Rotate decorative objects periodically to ensure even sun exposure.",
];

const donts = [
    "Never place hot items (pots, irons) directly on wood surfaces.",
    "Avoid harsh chemical cleaners, bleach, or abrasive scrubbers.",
    "Do not soak wood with water — excessive moisture causes warping.",
    "Keep out of direct sunlight for prolonged periods to prevent fading.",
    "Avoid dragging furniture across hard floors — lift to move.",
    "Do not use silicone-based sprays which can build up and cloud the finish.",
];


export interface PaymentApiResponse {
  page: {
    span: string;
    heading?: string;
    content: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  page1: {
    span: string;
    heading?: string;
    content: Array<{
      heading: string;
      ordered: string[];
      unordered: string[];
    }>;
  };

  page2: {
    span: string;
    heading?: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  faq: {
    span: string;
    heading?: string;
    points: Array<{
      title: string;
      desc: string;
      icon: string;
    }>;
  };

  cta: {
    title: string;
    description: string;
    image: string ;
  };
}
// ─── Page ──────────────────────────────────────────────────────────────────────
export default function CareInstructionsPage({data}: {data: PaymentApiResponse}) {
    
      const ICON_MAP: Record<string, LucideIcon> = {
    ChevronDown,    Droplets,
    Sun,
    Wind,
    ShieldCheck,
    AlertTriangle,
    Sparkles,
    Bug,
    Thermometer,
    CheckCircle2,
    XCircle,
    HelpCircle, // Registered Columns
      };
       const renderIcon = (icon: string) => {
    const Icon = ICON_MAP[icon] || HelpCircle;

    return (
        <Icon
            className="w-5 h-5 text-[#592915] mb-4"
            strokeWidth={1.5}
        />
    );
};
const doSection = data.page1.content.find(
    item => item.heading === "Do This"
);

const dontSection = data.page1.content.find(
    item => item.heading === "Avoid This"
);
    return (
        <div className="bg-white text-[#2A1C14]">
            <InnerPageHero
                kicker="Preserve the Craft"
                title="Care Instructions"
                subtitle="Keep your furniture beautiful, for generations."
            />

            {/* Intro */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="max-w-3xl mx-auto text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-4">
                        {data.page.span}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-serif text-[#592915] mb-6">
                        {data.page.heading}
                    </h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mb-6" />
                    <div className="text-[#2A1C14]/65 font-sans text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: data.page.content }} />
                </motion.div>
            </section>

            {/* By Wood Type */}
            <section className="py-16 bg-[#FCFAF8]">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                    <motion.div
                        className="text-center mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                            Material-Specific Guidance
                        </span>
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                            Care by Wood Type
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {data.page.points.map((wood, i) => (
                            <motion.div
                                key={wood.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                custom={i + 1}
                                variants={fadeUp}
                                className="bg-white border border-gray-100 p-7 rounded-sm"
                            >
                                <div
                                    className="w-10 h-[3px] rounded-full mb-5"
                                    style={{ backgroundColor: woodTypes[i % woodTypes.length].color }}
                                />
                                <h3 className="font-serif text-lg text-[#592915] mb-1">{wood.icon}</h3>
                                <p className="text-[9px] uppercase tracking-widest font-bold text-[#592915]/70 mb-4">
                                    {wood.title}
                                </p>
                                <p className="text-sm text-[#2A1C14]/70 leading-relaxed font-sans">
                                    {wood.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DOs and DON'Ts */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                      {data.page1.span}
                    </span>
                    <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                       {data.page1.heading}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* DOs */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={1}
                        variants={fadeUp}
                        className="bg-[#FCFAF8] border border-gray-100 p-8 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <CheckCircle2 className="w-5 h-5 text-[#592915]" />
                            <h3 className="font-serif text-xl text-[#592915]">{doSection?.heading}</h3>
                        </div>
                        <ul className="space-y-4">
                               {doSection?.unordered.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[#2A1C14]/75 font-sans leading-relaxed">
                                    <span className="text-[#592915] mt-0.5 shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* DON'Ts */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={2}
                        variants={fadeUp}
                        className="bg-white border border-gray-100 p-8 rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <XCircle className="w-5 h-5 text-[#8B3A3A]" />
                            <h3 className="font-serif text-xl text-[#2A1C14]">{dontSection?.heading}</h3>
                        </div>
                        <ul className="space-y-4">
                              {dontSection?.ordered.map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm text-[#2A1C14]/75 font-sans leading-relaxed">
                                    <span className="text-[#8B3A3A] mt-0.5 shrink-0">✗</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Special Care Topics */}
            <section className="py-16 bg-[#FCFAF8]">
                <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                    <motion.div
                        className="text-center mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0}
                        variants={fadeUp}
                    >
                        <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">{data.page2.span}</span>
                        <h2 className="text-xl md:text-2xl font-serif text-[#592915]">{data.page2.heading}</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.page2.points.map((item, i) => {
                            return (
                                <motion.div
                                    key={item.title}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    custom={i + 1}
                                    variants={fadeUp}
                                    className="bg-white border border-gray-100 p-7 rounded-sm"
                                >
                                   {renderIcon(item.icon)}
                                    <h3 className="font-serif text-base text-[#592915] mb-2">{item.title}</h3>
                                    <p className="text-sm text-[#2A1C14]/65 leading-relaxed font-sans">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
                <motion.div
                    className="text-center mb-14"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0}
                    variants={fadeUp}
                >
                    <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">{data.faq.span}</span>
                    <h2 className="text-xl md:text-2xl font-serif text-[#592915]">{data.faq.heading}</h2>
                    <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {data.faq.points.map((faq, i) => (
                        <FAQItem key={i} question={faq.title} answer={faq.desc} custom={i + 1} />
                    ))}
                </div>
            </section>

        {data.cta && data.cta.image ? <CTA cta={{ ...data.cta, image: data.cta.image }} /> : null}
        </div>
    );
}

function FAQItem({ question, answer, custom }: { question: string, answer: string, custom: number }) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={custom}
            variants={fadeUp}
            className="border-b border-gray-100 last:border-b-0"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5"
            >
                <h3 className="text-base md:text-lg font-serif text-[#592915]">{question}</h3>
                <ChevronDown className={`w-5 h-5 text-[#592915]/60 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}>
                        <p className="pb-6 text-sm text-[#2A1C14]/70 font-sans leading-relaxed pr-8">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
