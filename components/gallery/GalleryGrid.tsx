"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface Gallery {
  id: number;
  category_id: string;
  image: string | null;
  content: string;
  title: string;
  wood: string;
}

interface Category {
  id: number;
  slug: string;
  title: string;
}
interface gallerydata {
  gallery:Gallery[];
  category:Category[];
}
export default function GalleryGrid({gallery,category}:gallerydata) {
const [filter, setFilter] = useState<string>("all");

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const queryFilter = params.get("filter");

  if (queryFilter) {
    setFilter(queryFilter);
  }
}, []);

  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; wood: string; description: string } | null>(null);
const categories = [
  {
    id: 0,
    value: "all",
    label: "All Masterpieces",
  },
  ...category.map((cat) => ({
    id: cat.id,
    value: cat.slug,
    label: cat.title,
  })),
];
const selectedCategory = category.find(
  (cat) => cat.slug === filter
);

const filteredItems =
  filter === "all"
    ? gallery
    : gallery.filter(
        (item) => item.category_id === selectedCategory?.title
      );

  return (
    <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 py-16 md:py-24">
      <div className="flex flex-nowrap md:flex-wrap items-center justify-start md:justify-center gap-3 md:gap-6 mb-16 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
       {categories.map((cat) => (
  <button
    key={cat.value}
    onClick={() => setFilter(cat.value)}
    className={`px-6 py-2.5 rounded-none text-[10px] uppercase tracking-[0.2em] transition-all duration-300 font-bold border shrink-0 ${
      filter === cat.value
        ? "bg-[#592915] text-white border-[#592915]"
        : "bg-transparent text-[#2A1C14]/60 border-gray-200 hover:border-[#592915] hover:text-[#592915]"
    }`}
  >
    {cat.label}
  </button>
))}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedImage({ src: item.image ?? "", title: item.title, wood: item.wood, description: item.content ?? "" })}
              className="group relative flex flex-col bg-[#FCFAF8] border border-gray-100 rounded-sm overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={item.image ?? ""}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                />
              </div>

              {/* Metadata Below Image (always visible on mobile/desktop without hover) */}
              <div className="p-6 flex flex-col justify-between border-t border-gray-100 flex-1 bg-white">
                <div>
                  <span className="text-[#592915] font-sans text-[10px] uppercase tracking-widest font-bold block mb-1">
                    {item.category_id} • {item.wood}
                  </span>
                  <h4 className="font-serif text-lg text-[#592915] group-hover:text-[#B28544] transition-colors duration-300">
                    {item.title}
                  </h4>
                  <div className="text-[#2A1C14]/70 font-sans text-sm leading-relaxed mt-2 line-clamp-2" dangerouslySetInnerHTML={{ __html: item.content }}/>

                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <div
              className="relative max-w-4xl w-full h-[60vh] sm:h-[70vh] md:h-[80vh] flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-[#B28544] transition-colors p-2 text-xs uppercase tracking-widest font-bold font-sans flex items-center gap-1"
                aria-label="Close Lightbox"
              >
                ✕ Close
              </button>

              {/* Lightbox Image */}
              <div className="relative w-full h-full bg-black/40 rounded-sm overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Lightbox Metadata */}
              <div className="text-center mt-6 text-[#FCFAF8] max-w-xl px-4 cursor-default">
                <span className="text-[#B28544] font-sans text-[10px] uppercase tracking-widest font-bold block mb-1">
                  {selectedImage.wood}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">
                  {selectedImage.title}
                </h3>
                <div className="text-white/70 font-sans text-xs sm:text-sm leading-relaxed"  dangerouslySetInnerHTML={{ __html: selectedImage.description }}/>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
