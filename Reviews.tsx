import React from "react";
import { motion } from "motion/react";
import { REVIEWS } from "../data";
import { 
  Star, 
  Quote, 
  CheckCircle, 
  ThumbsUp, 
  Zap, 
  Smartphone, 
  Play, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award
} from "lucide-react";

export default function Reviews() {
  const trustMetrics = [
    {
      icon: <CheckCircle className="text-gold-400" size={18} />,
      title: "25+ Projects",
      subtitle: "Delivered Successfully"
    },
    {
      icon: <ThumbsUp className="text-gold-400" size={18} />,
      title: "100% Satisfaction",
      subtitle: "Client Feedback"
    },
    {
      icon: <Zap className="text-gold-400" size={18} />,
      title: "Fast Response",
      subtitle: "Dedicated Service"
    },
    {
      icon: <Smartphone className="text-gold-400" size={18} />,
      title: "Mobile-Optimized",
      subtitle: "Fluid Solutions"
    }
  ];

  return (
    <section
      id="reviews"
      className="py-24 bg-black relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      {/* Premium ambient glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-400/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gold-400/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3 flex items-center gap-1.5">
            <Award size={14} />
            <span>Reputation & Client Praise</span>
          </div>
          <h2 className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            CLIENT <span className="text-gold-gradient">SUCCESS STORIES</span>
          </h2>
          <p className="text-gold-100/60 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            Hear from business owners and entrepreneurs who trusted GEN'Z Development to bring their ideas to reality.
          </p>
        </div>

        {/* TRUST METRICS ROW ABOVE TESTIMONIALS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="flex items-center space-x-3.5 p-5 rounded-2xl bg-dark-card/30 border border-gold-400/10 backdrop-blur-md hover:border-gold-400/25 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-400/5 border border-gold-400/15 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-gold-400/10 transition-transform duration-300">
                {metric.icon}
              </div>
              <div>
                <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-gold-300 transition-colors duration-300">
                  {metric.title}
                </h4>
                <p className="text-gold-100/50 text-[10px] sm:text-xs font-light">
                  {metric.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TESTIMONIALS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -6, 
                borderColor: "rgba(212, 175, 55, 0.4)",
                boxShadow: "0 20px 40px -15px rgba(212, 175, 55, 0.15)"
              }}
              className="group p-8 rounded-2xl bg-dark-card/40 border border-gold-400/10 backdrop-blur-md transition-all duration-500 ease-out flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle visual glow on border hover */}
              <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/25 rounded-2xl transition-all duration-500 pointer-events-none" />

              {/* Luxury Quote Icon overlay */}
              <Quote size={32} className="absolute top-6 right-6 text-gold-400/5 group-hover:text-gold-400/10 transition-colors duration-500" />

              <div className="space-y-5">
                {/* Gold Rating Stars with slight stagger entrance */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: review.rating }).map((_, sIdx) => (
                    <motion.span
                      key={sIdx}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx * 0.08) + (sIdx * 0.05), duration: 0.3 }}
                    >
                      <Star size={13} className="fill-gold-400 text-gold-400" />
                    </motion.span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-200 font-sans font-light text-xs sm:text-sm leading-relaxed italic relative z-10">
                  "{review.content}"
                </p>
              </div>

              {/* Reviewer Bio Panel */}
              <div className="flex items-center space-x-4 mt-8 pt-5 border-t border-gold-400/5">
                {/* Stylized placeholder or premium portrait */}
                <div className="relative">
                  <img
                    src={review.imageUrl}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover border border-gold-400/20 group-hover:border-gold-400/40 transition-colors duration-300"
                    referrerPolicy="no-referrer"
                  />
                  {/* Small gold status indicator dot */}
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-gold-400 rounded-full border-2 border-black flex items-center justify-center shadow">
                    <div className="w-1 h-1 bg-black rounded-full" />
                  </div>
                </div>
                <div>
                  <div className="font-display font-semibold text-white text-xs sm:text-sm">
                    {review.name}
                  </div>
                  <div className="text-mono text-[9px] text-gold-300/70 uppercase tracking-widest mt-0.5">
                    {review.role} • <span className="text-white/40">{review.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* PREMIUM VIDEO TESTIMONIALS COMING SOON CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 4 * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              y: -6, 
              borderColor: "rgba(212, 175, 55, 0.45)",
              boxShadow: "0 20px 40px -15px rgba(212, 175, 55, 0.18)"
            }}
            className="group rounded-2xl bg-dark-card/40 border border-gold-400/10 backdrop-blur-md transition-all duration-500 ease-out flex flex-col justify-between overflow-hidden relative min-h-[320px]"
          >
            {/* Visual background placeholder with a gorgeous dark mask */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600" 
                alt="Workspace video placeholder" 
                className="w-full h-full object-cover opacity-20 filter grayscale transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            {/* Glowing gold border on hover */}
            <div className="absolute inset-0 border border-gold-400/0 group-hover:border-gold-400/30 rounded-2xl transition-all duration-500 pointer-events-none z-10" />

            {/* Main Content Overlay */}
            <div className="relative z-10 p-8 flex flex-col justify-between h-full space-y-6">
              
              {/* Coming Soon Indicator Badge */}
              <div className="flex justify-between items-start">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/25 font-mono text-[8px] uppercase tracking-widest text-gold-400 font-bold">
                  <Sparkles size={8} className="animate-spin text-gold-400" />
                  <span>Interactive Series</span>
                </span>
                
                <span className="font-mono text-[9px] text-gold-300/40">
                  VOL // 01
                </span>
              </div>

              {/* Play Button Overlay with beautiful pulse wave */}
              <div className="flex flex-col items-center justify-center py-4 space-y-3">
                <div className="relative">
                  {/* Subtle radiating golden wave */}
                  <div className="absolute inset-0 rounded-full bg-gold-400/20 blur-md animate-ping" />
                  
                  <div className="w-14 h-14 rounded-full bg-black/60 border border-gold-400/40 flex items-center justify-center text-gold-400 group-hover:text-black group-hover:bg-gold-400 group-hover:border-gold-400 transition-all duration-500 shadow-2xl relative z-10">
                    <Play size={20} className="ml-1 fill-current" />
                  </div>
                </div>
              </div>

              {/* Bottom description */}
              <div className="space-y-1.5 pt-4 border-t border-white/5">
                <h4 className="font-display font-bold text-sm text-white group-hover:text-gold-300 transition-colors duration-300">
                  Video Case Studies
                </h4>
                <div className="flex items-center justify-between text-[11px] text-gold-200/50">
                  <span className="font-light">Coming Soon from Lahore & Karachi</span>
                  <ArrowRight size={12} className="text-gold-400/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
