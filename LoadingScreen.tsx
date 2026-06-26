import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Terminal, Cpu } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200); // 3.2 seconds display

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-deep bg-grid-pattern text-white"
        >
          {/* Ambient Gold Aura Grid Overlay */}
          <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

          {/* Golden Center Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center px-4">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative mb-6 flex items-center justify-center w-24 h-24 rounded-2xl border border-gold-400/20 bg-dark-card/80 backdrop-blur-xl shadow-[0_0_50px_rgba(212,175,55,0.1)] overflow-hidden"
            >
              {/* Spinning subtle gold borders inside */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-gold-400/10 rounded-2xl"
              />
              
              <div className="relative flex items-center justify-center text-gold-400">
                <Cpu size={42} className="stroke-[1.5]" />
              </div>

              {/* Shimmer overlay */}
              <motion.div
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-gold-200/10 to-transparent skew-x-12"
              />
            </motion.div>

            {/* Title with Gold Metallic Gradient */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="text-display font-bold text-3xl md:text-5xl tracking-widest text-gold-gradient uppercase"
            >
              GEN'Z
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
              className="h-[1px] w-36 bg-gradient-to-r from-transparent via-gold-400 to-transparent my-4"
            />

            {/* Tagline Reveal */}
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.25em" }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-mono text-xs md:text-sm font-light text-gold-200/60 uppercase tracking-widest"
            >
              From Idea To Reality
            </motion.p>
          </div>

          {/* Futuristic bottom loading indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2">
            <div className="flex items-center space-x-1 text-[10px] font-mono text-gold-400/40 uppercase tracking-widest">
              <Terminal size={10} />
              <span>Establishing Quantum Link...</span>
            </div>
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                  ease: "easeInOut"
                }}
                className="relative h-full w-1/2 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
