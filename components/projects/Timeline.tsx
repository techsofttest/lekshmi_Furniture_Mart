"use client";

import { motion } from "framer-motion";

interface TimelineProps {
  containerVariants: any;
  itemVariants: any;
    timeline: {
  span:string;
  heading:string;
  content: string;
  after?: string | null;
  before?: string | null;
  points:{
    title:string;
    desc:string;
    number:string;
  }[];}
}

const timelineSteps = [
  {
    phase: "01",
    title: "Bespoke Consultation",
    description:
      "We collaborate directly with homeowners, architects, and designers to interpret spatial requirements, preferred style guides, and dimension specs.",
  },
  {
    phase: "02",
    title: "Wood Sourcing & Seasoning",
    description:
      "Each log of Nilambur Teak or Kerala Wild Jack & Jackwood is handpicked and undergoes rigorous seasoning to ensure structural integrity and lifetime endurance.",
  },
  {
    phase: "03",
    title: "Master Carpentry",
    description:
      "Master artisans construct each piece using traditional mortise-and-tenon joints, applying delicate hand-carvings matching legacy design briefs.",
  },
  {
    phase: "04",
    title: "Fine Polishing & Installation",
    description:
      "Finished with premium oils and hand-rubbed polishes to elevate natural woodgrains, followed by custom packaging and white-glove setup.",
  },
];

export default function Timeline({ containerVariants, itemVariants ,timeline}: TimelineProps) {
  return (
    <section className="py-20 bg-[#FCFAF8] border-y border-[#B28544]/10 -mx-6 lg:-mx-12 xl:-mx-24 px-6 lg:px-12 xl:px-24">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.2em] font-bold block">
            {timeline.span}
          </span>
          <h2 className="text-xl font-serif text-[#592915]">
            {timeline.heading}
          </h2>
          <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: timeline.content }}/>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {timelineSteps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 border border-[#B28544]/10 rounded-sm relative flex flex-col justify-between group hover:border-[#B28544]/40 transition-colors duration-500"
            >
              <div>
                <span className="text-[#592915]/80 font-serif text-2xl font-light italic mb-4 block">
                  {step.phase}
                </span>
                <h3 className="text-lg font-serif text-[#592915] mb-3 font-semibold">
                  {step.title}
                </h3>
                <p className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
