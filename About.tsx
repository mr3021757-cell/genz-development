import { motion } from "motion/react";
import { ShieldCheck, Flame, Zap, Award } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Client Satisfaction", value: "100%", icon: ShieldCheck },
    { label: "Average Page Load Speed", value: "<0.5s", icon: Zap },
    { label: "Successful Deployments", value: "48+", icon: Award },
    { label: "Core Web Vitals", value: "Grade A", icon: Flame },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-dark-deep bg-radial-fade relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Stats Bento Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 order-2 lg:order-1">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-dark-card/50 border border-gold-400/5 hover:border-gold-400/20 transition-colors backdrop-blur-md flex flex-col justify-between aspect-square"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <Icon size={18} className="stroke-[1.5]" />
                  </div>
                  <div className="mt-4">
                    <div className="text-display font-bold text-2xl md:text-3xl text-white">
                      {stat.value}
                    </div>
                    <div className="text-mono text-[9px] md:text-[10px] text-gold-200/50 uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest"
            >
              Who We Are
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight"
            >
              WE ENGINEER DIGITAL <br />
              <span className="text-gold-gradient">SUPREMACY</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="font-sans text-gold-100/80 text-sm md:text-base font-light leading-relaxed space-y-4"
            >
              GEN'Z Development is a modern software development company focused on creating powerful digital experiences for businesses. We help brands establish a strong online presence through premium websites, e-commerce solutions, landing pages, and custom development services. Our mission is to transform ideas into high-performing digital products that help businesses grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 }}
              className="p-4 border-l-2 border-gold-400 bg-gold-400/5 rounded-r-xl"
            >
              <p className="text-xs font-mono text-gold-300 italic">
                "Code is the secondary canvas. Our primary target is the user's focus and our client's compound conversion rate."
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
