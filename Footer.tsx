import React from "react";
import { motion } from "motion/react";
import { Cpu, Mail, MapPin, Terminal, Heart, ShieldCheck, ExternalLink } from "lucide-react";

// Official WhatsApp icon SVG in high fidelity with custom green fill
const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.993L2 22l5.13-1.347a9.95 9.95 0 0 0 4.88 1.274h.005c5.505 0 9.99-4.478 9.99-9.986 0-2.67-1.037-5.178-2.923-7.064A9.92 9.92 0 0 0 12.012 2zm5.835 14.12c-.255.715-1.258 1.302-1.77 1.354-.47.047-.94.07-1.58-.15a13.36 13.36 0 0 1-5.185-3.238c-1.36-1.354-2.284-3.003-2.64-3.51-.354-.51-.383-.79-.383-1.11 0-.32.17-.47.23-.538.058-.067.128-.1.19-.148a.42.42 0 0 1 .283-.06.094.01.19.018.273.064.085.047.665 1.62.72 1.734.057.113.01.246-.04.34-.05.093-.075.148-.15.234a4.4 4.4 0 0 0-.253.332c-.085.11-.184.226-.078.41.106.18.47.78.994 1.25a8.11 8.11 0 0 0 1.48 1.05.3.3 0 0 0 .41-.04c.113-.125.485-.562.613-.75.127-.19.255-.16.425-.1.17.06.1.1 1.085.584.98.487 1.635.81 1.764.922.127.113.127.32.04.538z" />
  </svg>
);

export default function Footer() {
  const whatsappUrl = "https://wa.me/923495167062";

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer 
      id="footer" 
      className="bg-black border-t border-gold-400/10 pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Premium ambient glows */}
      <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-gold-400/3 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[250px] h-[250px] bg-gold-400/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 border-b border-gold-400/10">
          
          {/* Column 1: Brand info (GEN'Z Development) */}
          <div className="md:col-span-5 flex flex-col space-y-5">
            <div 
              className="flex items-center space-x-3 cursor-pointer group w-fit" 
              onClick={() => handleScrollTo("hero")}
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-xl border border-gold-400/20 bg-neutral-900 group-hover:border-gold-400/40 transition-colors duration-300">
                <Cpu size={18} className="text-gold-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-wider text-gold-gradient block leading-none">
                  GEN'Z DEVELOPMENT
                </span>
                <span className="text-[10px] font-mono text-gold-400/60 uppercase tracking-widest mt-1 block">
                  From Idea to Reality
                </span>
              </div>
            </div>
            
            <p className="font-sans text-xs sm:text-sm text-gold-100/60 font-light max-w-md leading-relaxed">
              We help startups, entrepreneurs, and local businesses build modern websites, e-commerce stores, landing pages, and custom digital solutions that drive real business growth. Our focus is delivering unmatched device-specific responsiveness, lighting-fast speed, and robust architectures.
            </p>

            <div className="flex items-center space-x-2 text-[10px] font-mono text-gold-400/40 uppercase tracking-wider">
              <ShieldCheck size={12} className="text-gold-400/50" />
              <span>ELITE DEVELOPMENT PARTNER</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gold-400 flex items-center space-x-1.5">
              <Terminal size={12} />
              <span>Quick Navigation</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-sans font-light text-gold-100/50">
              <li>
                <button 
                  onClick={() => handleScrollTo("hero")} 
                  className="hover:text-gold-300 hover:translate-x-1 transition-all cursor-pointer flex items-center space-x-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400 mr-1">›</span>
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("services")} 
                  className="hover:text-gold-300 hover:translate-x-1 transition-all cursor-pointer flex items-center space-x-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400 mr-1">›</span>
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("portfolio")} 
                  className="hover:text-gold-300 hover:translate-x-1 transition-all cursor-pointer flex items-center space-x-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400 mr-1">›</span>
                  <span>Projects</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("reviews")} 
                  className="hover:text-gold-300 hover:translate-x-1 transition-all cursor-pointer flex items-center space-x-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400 mr-1">›</span>
                  <span>Reviews</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollTo("contact")} 
                  className="hover:text-gold-300 hover:translate-x-1 transition-all cursor-pointer flex items-center space-x-1 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-gold-400 mr-1">›</span>
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-gold-400 flex items-center space-x-1.5">
              <Mail size={12} />
              <span>Contact Information</span>
            </h4>
            
            <ul className="space-y-4 text-xs sm:text-sm font-sans font-light text-gold-100/50">
              
              {/* Clickable Email Item */}
              <li>
                <a 
                  href="mailto:shaheryarm345@gmail.com?subject=Website%20Inquiry" 
                  className="inline-flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-gold-400/5 border border-gold-400/10 flex items-center justify-center shrink-0 group-hover:bg-gold-400/10 transition-all duration-300">
                    <Mail size={14} className="text-gold-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 block leading-tight font-mono uppercase tracking-wider">EMAIL</span>
                    <span className="text-white hover:text-gold-300 hover:shadow-[0_0_8px_rgba(212,175,55,0.2)] relative transition-all duration-300 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gold-400 after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
                      shaheryarm345@gmail.com
                    </span>
                  </div>
                </a>
              </li>

              {/* Clickable WhatsApp Dedicated Item (Single Option) */}
              <li>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/5 border border-[#25D366]/25 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/15 group-hover:scale-110 transition-all duration-300">
                    <WhatsAppIcon className="text-[#25D366]" />
                  </div>
                  <div className="transition-all duration-300 group-hover:text-gold-300">
                    <span className="text-[10px] text-[#25D366] font-semibold block leading-tight font-mono uppercase tracking-wider flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></span>
                      <span>WhatsApp</span>
                    </span>
                    <span className="text-white font-medium block transition-all duration-300 group-hover:text-gold-400 group-hover:drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]">
                      +92 349 5167062
                    </span>
                  </div>
                </a>
              </li>

              {/* Location Item with Small Glowing Icon */}
              <li className="flex items-center space-x-3">
                <div className="relative w-8 h-8 rounded-lg bg-gold-400/5 border border-gold-400/10 flex items-center justify-center shrink-0">
                  {/* Subtle pulsing background dot behind location pin */}
                  <span className="absolute w-2 h-2 rounded-full bg-gold-400/40 animate-ping pointer-events-none" />
                  <MapPin size={14} className="text-gold-400 relative z-10" />
                </div>
                <div>
                  <span className="text-[10px] text-white/40 block leading-tight font-mono uppercase tracking-wider">LOCATION</span>
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <span>Rawalpindi, Punjab, Pakistan</span>
                  </span>
                </div>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom copyright & tagline */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs font-mono text-gold-200/30 uppercase tracking-widest">
              © 2026 GEN'Z Development. All Rights Reserved.
            </p>
            <p className="text-[10px] font-mono text-gold-400/50 uppercase tracking-widest font-semibold flex items-center justify-center md:justify-start gap-1">
              <span>From Idea to Reality</span>
              <span>•</span>
              <span className="flex items-center gap-0.5">
                <span>Crafted with</span>
                <Heart size={10} className="fill-gold-400 text-gold-400 inline" />
              </span>
            </p>
          </div>
          <div className="text-[9px] font-mono text-gold-200/20 uppercase tracking-widest border border-gold-400/5 rounded-full px-4 py-1.5 bg-neutral-900/40">
            METALLIC GOLD PREMIUM ENVIRONMENT
          </div>
        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON (Fixed bottom-right corner, visible on every page with active pulse glows) */}
      <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 group">
        
        {/* Radiating golden background pulses */}
        <motion.div 
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gold-400/15 blur-sm pointer-events-none"
        />
        <motion.div 
          animate={{ scale: [1, 1.7, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-gold-400/10 blur-md pointer-events-none"
        />

        {/* Tooltip visible on hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-neutral-900/95 border border-gold-400/25 text-gold-200 px-3.5 py-1.5 rounded-xl text-[10px] font-mono tracking-widest uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-md shadow-2xl">
          Contact us on WhatsApp
        </span>

        {/* Interactive Floating Button Link */}
        <a 
          href={whatsappUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          referrerPolicy="no-referrer"
          className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-neutral-900 to-black border-2 border-gold-400 text-gold-400 hover:text-black hover:bg-gold-gradient hover:scale-115 flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.45)] cursor-pointer z-10"
        >
          {/* Subtle micro rotation on hover */}
          <span className="transition-transform duration-500 group-hover:rotate-12">
            <WhatsAppIcon className="w-6 h-6" />
          </span>
        </a>
      </div>

    </footer>
  );
}
