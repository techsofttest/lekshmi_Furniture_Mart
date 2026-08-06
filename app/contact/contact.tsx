"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import InnerPageHero from "@/components/global/InnerPageHero";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import type { ContactApiResponse } from "./page";

// ─── Animation Variants ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function ContactPage({
  initialData,
}: {
  initialData: ContactApiResponse;
}) {
  const { contact } = initialData || {};

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Helper: Strip non-numeric/plus characters for tel/whatsapp links
  const cleanPhone = (num?: string) =>
    num ? num.replace(/[^0-9+]/g, "") : "";
  
  const plainAddress =
  typeof window !== "undefined"
    ? new DOMParser().parseFromString(contact?.address || "", "text/html").body.textContent || ""
    : "";

  const contactDetails = [
    {
      icon: MapPin,
      label: "Visit Us",
      lines: contact?.address ? plainAddress.split("\n") : '',
      href: contact?.map || null,
      linkLabel: "Get Directions →",
    },
    {
      icon: Phone,
      label: "Call Us",
      lines: contact?.phone ? contact.phone : '',
      href: contact?.phone ? `tel:${cleanPhone(contact.phone)}` : null,
      linkLabel: "Call Now →",
    },
    {
      icon: Mail,
      label: "Email Us",
      lines: contact?.email ? contact.email : '',
      href: contact?.email ? `mailto:${contact.email}` : null,
      linkLabel: "Send Email →",
    },
    {
      icon: Clock,
      label: "Opening Hours",
      lines: contact?.open ? contact.open.split("\n") : '',
      href: null,
      linkLabel: null,
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/submit`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message || "Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white text-[#2A1C14]">
      <InnerPageHero
        kicker="We'd Love to Hear From You"
        title="Contact Us"
        subtitle="Questions, orders, or just a hello."
      />

      {/* ── Contact Details ── */}
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
            Reach Out
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#592915]">
            Get in Touch
          </h2>
          <div className="w-14 h-[1.5px] bg-[#592915]/30 mx-auto mt-5" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {contactDetails.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="bg-[#FCFAF8] border border-gray-100 rounded-sm p-8 flex flex-col"
              >
                <Icon
                  className="w-5 h-5 text-[#592915] mb-5 shrink-0"
                  strokeWidth={1.5}
                />
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/60 mb-3">
                  {item.label}
                </p>
                <div className="flex-1">
                    <p
                      className="text-sm text-[#2A1C14]/80 font-sans leading-relaxed">
                      {item.lines}
                    </p>
                </div>
                {item.href && item.linkLabel && (
                  <Link
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    className="inline-block mt-4 text-[10px] uppercase tracking-widest font-bold text-[#592915] hover:underline underline-offset-4 transition-all"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic WhatsApp Banner */}
        {contact?.whatsapp && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={5}
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#592915] text-white rounded-sm px-8 py-7"
          >
            <div className="flex items-center gap-4">
              <MessageCircle
                className="w-6 h-6 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-serif text-lg leading-snug">
                  Prefer WhatsApp?
                </p>
                <p className="text-white/70 text-sm font-sans">
                  Chat with our team directly — fastest response guaranteed.
                </p>
              </div>
            </div>
            <Link
              href={contact.whatsapp}
              target="_blank"
              id="contact-whatsapp-cta"
              className="shrink-0 inline-flex items-center gap-2 px-8 py-3 bg-white text-[#592915] text-[10px] uppercase tracking-widest font-bold hover:bg-[#F4ECE1] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </Link>
          </motion.div>
        )}
      </section>

      {/* ── Dynamic Google Map ── */}
      {contact?.map && (
        <section className="w-full bg-[#FCFAF8] border-t border-gray-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 py-16"
          >
            <div className="mb-8">
              <span className="text-[#592915] font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
                Find Us
              </span>
              <h2 className="text-xl md:text-2xl font-serif text-[#592915] relative pb-4 inline-block">
                Our Location
                <span className="absolute bottom-0 left-0 w-14 h-[1.5px] bg-[#592915]/30" />
              </h2>
            </div>
            <div className="w-full overflow-hidden rounded-sm border border-gray-200">
              <iframe
                src={contact.map}
                width="100%"
                height="450"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Location Map"
              />
            </div>
          </motion.div>
        </section>
      )}

      {/* ── Contact Form ── */}
      <section className="py-20 relative overflow-hidden bg-[#1A120E]">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Image
            src="/banner/banner-7b.png"
            alt="Contact form background wood texture"
            fill
            sizes="100vw"
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/60" />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 xl:px-16 relative z-10">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="text-[#F4ECE1]/80 font-sans text-[10px] uppercase tracking-[0.25em] font-bold block mb-3">
              Drop Us a Message
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#F4ECE1]">
              Send an Enquiry
            </h2>
            <div className="w-14 h-[1.5px] bg-[#F4ECE1]/30 mx-auto mt-5" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={fadeUp}
            className="max-w-3xl mx-auto bg-white border border-gray-100 rounded-sm p-8 md:p-12"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <CheckCircle2
                  className="w-12 h-12 text-[#592915]"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-2xl text-[#592915]">
                  Message Received
                </h3>
                <p className="text-sm text-[#2A1C14]/65 font-sans max-w-sm leading-relaxed">
                  Thank you for reaching out. We'll be in touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                    });
                  }}
                  className="mt-2 text-[10px] uppercase tracking-widest font-bold text-[#592915] hover:underline underline-offset-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-sm">
                    {errorMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-phone"
                      className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-subject"
                      className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                    >
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors appearance-none"
                    >
                      <option value="" disabled>
                        Select a subject…
                      </option>
                      <option value="product-enquiry">Product Enquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="delivery">Delivery &amp; Logistics</option>
                      <option value="after-sales">After-Sales Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#592915]/70"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help…"
                    className="border border-gray-300 rounded-sm px-4 py-3 text-sm font-sans text-[#2A1C14] bg-[#FCFAF8] focus:outline-none focus:border-[#592915] transition-colors placeholder:text-[#2A1C14]/50 resize-none"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <p className="text-[10px] text-[#2A1C14]/40 font-sans">
                    Fields marked <span className="text-red-400">*</span> are required.
                  </p>
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#592915] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#2A1C14] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="animate-pulse">Sending…</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}