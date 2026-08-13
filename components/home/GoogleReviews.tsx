'use client';

import { useEffect } from 'react';
import { motion } from "framer-motion";
export default function GoogleReviews() {
  useEffect(() => {
    const scriptId = 'elfsight-platform-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Elfsight Google Reviews Widget */}
        <div
          className="elfsight-app-6f3058e8-98c4-450b-8f39-023a88722b92"
          data-elfsight-app-lazy
        />
      </div>
       {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-10"
            >
              <a
                href="https://www.google.com/search?sca_esv=264d1bbe941da2eb&rlz=1CDGOYI_enGB1174GB1175&hl=en-GB&sxsrf=APpeQnsSmxkuZ7X5jiYJW9MCoonx3_tv3g:1785330986997&kgmid=/g/11z51y0t66&q=Lekshmi+furniture+mart&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/act/m1/3&kgs=1a0a8077a300e281&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/act/m1/3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#592915]/30 text-[#592915] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#592915] hover:text-white transition-all duration-300"
              >
                Write a Review on Google
              </a>
            </motion.div> */}
    </section>
  );
}