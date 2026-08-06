"use client";

import InnerPageHero from "@/components/global/InnerPageHero";
import CTA from "@/components/home/CTA";
import type { PaymentApiResponse } from "./page";

export default function PaymentOptionsPage({
  initialData,
}: {
  initialData: PaymentApiResponse;
}) {
  const { data, about, cta } = initialData || {};

  return (
    <div className="bg-white text-[#2A1C14]">
      <InnerPageHero
        kicker="Flexible & Secure"
        title="Payment Options"
        subtitle="Choose the best way to pay for your bespoke furniture."
      />

      {/* Content Section */}
      <section className="py-24 max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16">
        <div className="max-w-5xl mx-auto">
          {about && (
            <>
              <div className="text-center mb-20">
                <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                  {about.span}
                </h2>
                {about.content && (
                  <p
                    className="text-[#2A1C14]/70 font-sans text-sm md:text-normal leading-relaxed mt-4 max-w-2xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: about.content }}
                  />
                )}
              </div>

              {about.points && about.points.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center mb-24 max-w-3xl mx-auto">
                  {about.points.map((item, i) => (
                    <div
                      className="bg-[#FCFAF8] p-8 border border-gray-100 rounded-sm"
                      key={i}
                    >
                      <h3 className="text-4xl font-serif text-[#592915] mb-2">
                        {item.icon}
                      </h3>
                      <p className="text-sm uppercase tracking-widest font-sans font-semibold text-[#592915]/80">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#2A1C14]/70 mt-3">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {data && (
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-xl md:text-2xl font-serif text-[#592915]">
                {data.title}
              </h2>
              <div className="w-16 h-[1px] bg-[#592915]/30 my-6 mx-auto" />
              <p
                className="text-[#2A1C14]/70 font-sans text-base md:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          )}
        </div>
      </section>

      {cta && cta.image && <CTA cta={cta as any} />}
    </div>
  );
}