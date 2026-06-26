import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_IMAGES } from "../data";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

export default function Gallery() {
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx === null) return;
    setActiveImageIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : GALLERY_IMAGES.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx === null) return;
    setActiveImageIdx((prev) => (prev !== null && prev < GALLERY_IMAGES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      className="py-24 bg-dark-deep relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-gold-400/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
            Our Development Ecosystem
          </div>
          <h2 className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            BEHIND <span className="text-gold-gradient">THE SCREENS</span>
          </h2>
          <p className="text-gold-100/60 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            Take a look at our workflow, development process, creative environment, and the systems behind every successful project.
          </p>
        </div>

        {/* Premium Masonry Grid with Smooth Lift and Golden Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {GALLERY_IMAGES.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setActiveImageIdx(idx)}
              className={`group relative overflow-hidden rounded-2xl border border-gold-400/10 hover:border-gold-400/35 cursor-pointer shadow-xl transition-all duration-500 ease-out hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] flex flex-col justify-end ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              {/* Luxury dark mask with golden text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />
              
              {/* Interactive subtle golden glow border around card on hover */}
              <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/30 rounded-2xl transition-all duration-500 pointer-events-none" />

              <div className="relative p-6 z-10 flex flex-col justify-end h-full translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div>
                  <span className="inline-block text-[9px] font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-2.5 py-0.5 rounded-full mb-2.5 border border-gold-400/20 font-semibold">
                    {img.category}
                  </span>
                  <h4 className="font-display font-bold text-white text-base sm:text-lg mt-0.5 flex items-center justify-between">
                    <span>{img.title}</span>
                    <Maximize2 size={13} className="text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-2 shrink-0" />
                  </h4>
                  {/* Hover reveal description */}
                  <p className="text-[11px] text-gray-300/90 font-light mt-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Image Viewer */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Dark blur background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveImageIdx(null)}
              className="absolute inset-0 bg-dark-deep/98 backdrop-blur-xl"
            />

            {/* Carousel Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full aspect-[16/10] bg-dark-card/50 border border-gold-400/15 rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col justify-between"
            >
              {/* Header inside lightbox */}
              <div className="p-6 bg-gradient-to-b from-dark-deep to-transparent flex items-center justify-between relative z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-semibold">
                    {GALLERY_IMAGES[activeImageIdx].category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mt-1">
                    {GALLERY_IMAGES[activeImageIdx].title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveImageIdx(null)}
                  className="w-10 h-10 rounded-full bg-dark-deep/80 border border-gold-400/20 hover:border-gold-400/40 text-gold-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Image View */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 pb-24">
                <motion.img
                  key={activeImageIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={GALLERY_IMAGES[activeImageIdx].url}
                  alt={GALLERY_IMAGES[activeImageIdx].title}
                  className="max-h-[75%] max-w-full object-contain rounded-xl border border-gold-400/15 shadow-2xl bg-neutral-900"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informative description panel overlay inside lightbox */}
              <div className="absolute bottom-16 left-6 right-6 p-4 bg-black/80 border border-gold-400/15 rounded-2xl backdrop-blur-md z-10 space-y-1 max-w-xl mx-auto text-center">
                <p className="text-xs text-gold-100 font-semibold tracking-wide">
                  {GALLERY_IMAGES[activeImageIdx].title} Process
                </p>
                <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                  {GALLERY_IMAGES[activeImageIdx].description}
                </p>
              </div>

              {/* Navigators */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-10">
                <button
                  onClick={handlePrev}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-dark-deep/80 border border-gold-400/15 text-gold-100 hover:text-gold-400 hover:border-gold-400/30 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="pointer-events-auto w-12 h-12 rounded-full bg-dark-deep/80 border border-gold-400/15 text-gold-100 hover:text-gold-400 hover:border-gold-400/30 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Footer info inside lightbox */}
              <div className="p-6 bg-gradient-to-t from-dark-deep to-transparent flex justify-between items-center relative z-10 text-[10px] font-mono text-gold-200/40">
                <span>WORKFLOW MODULE {activeImageIdx + 1} OF {GALLERY_IMAGES.length}</span>
                <span>ELITE SOFTWARE ENGINEERING WORKFLOW</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
