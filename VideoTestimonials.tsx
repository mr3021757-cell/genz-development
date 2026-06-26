import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIAL_VIDEOS } from "../data";
import { Play, Sparkles, Tv, HelpCircle } from "lucide-react";

export default function VideoTestimonials() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  return (
    <section
      id="testimonials-video"
      className="py-24 bg-dark-deep relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold-400/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
            In Their Own Words
          </div>
          <h2 className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            VIDEO <span className="text-gold-gradient">TESTIMONIALS</span>
          </h2>
          <p className="text-gold-100/60 max-w-xl text-sm md:text-base font-light">
            Watch immersive debriefs from executives explaining how custom engineering revolutionized their technical status.
          </p>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIAL_VIDEOS.map((vid, idx) => {
            const isPlaying = activeVideoId === vid.id;

            return (
              <motion.div
                key={vid.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group rounded-2xl bg-dark-card/40 border border-gold-400/10 hover:border-gold-400/30 overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.6)] flex flex-col justify-between"
              >
                {/* Embed Video Aspect Area */}
                <div className="relative aspect-video bg-black overflow-hidden w-full flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!isPlaying ? (
                      <motion.div
                        key="thumbnail"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 w-full h-full cursor-pointer"
                        onClick={() => setActiveVideoId(vid.id)}
                      >
                        {/* Realistic Video Thumbnail */}
                        <img
                          src={vid.thumbnailUrl}
                          alt={vid.title}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-102 transition-all duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-deep/90 via-transparent to-transparent" />
                        
                        {/* Golden Metallic Pulsing Play Button */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gold-gradient text-dark-deep hover:scale-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] z-10">
                          <Play size={20} className="fill-dark-deep ml-1" />
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="iframe"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 w-full h-full"
                      >
                        {/* Clean Embedded Responsive YouTube Player */}
                        <iframe
                          src={`https://www.youtube.com/embed/${vid.youtubeId}?autoplay=1&rel=0`}
                          title={vid.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Video Info Footer */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-1 text-gold-400">
                      <Tv size={12} />
                      <span className="text-mono text-[9px] uppercase tracking-widest font-medium">Verified Case debrief</span>
                    </div>
                    <h3 className="font-display font-semibold text-white text-base md:text-lg">
                      {vid.title}
                    </h3>
                  </div>
                  
                  <div className="flex justify-between items-center mt-6 pt-4 border-t border-gold-400/5 text-xs text-gold-100/40 font-mono">
                    <span>{vid.clientName}</span>
                    <span className="text-gold-400">{vid.companyName}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
