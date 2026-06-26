import { motion } from "motion/react";
import { SERVICES } from "../data";
import { Code, ShoppingBag, Target, Briefcase, Layers, Cpu, ArrowUpRight, Check } from "lucide-react";

// Icon mapping dictionary
const iconMap: Record<string, any> = {
  Code: Code,
  ShoppingBag: ShoppingBag,
  Target: Target,
  Briefcase: Briefcase,
  Layers: Layers,
  Cpu: Cpu,
};

export default function Services() {
  const whatsappUrl = "https://wa.me/923495167062";

  return (
    <section
      id="services"
      className="py-24 bg-dark-deep bg-radial-fade relative overflow-hidden px-6 md:px-12"
    >
      {/* Decorative Golden Ambient Lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-0 w-[300px] h-[300px] rounded-full bg-gold-400/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3"
          >
            Capabilities & Mastery
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4"
          >
            OUR PREMIUM <span className="text-gold-gradient">SERVICES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-gold-100/60 max-w-xl text-sm md:text-base font-light"
          >
            We curate high-end digital architecture designed to elevate status, ensure bulletproof security, and drive peak conversions.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-dark-card/50 border border-gold-400/10 hover:border-gold-400/35 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)] transition-all duration-300 backdrop-blur-md overflow-hidden"
              >
                {/* Micro golden glowing line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-400/20 text-gold-400 group-hover:bg-gold-500/20 group-hover:border-gold-400 transition-all duration-300">
                      <IconComponent size={22} className="stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-[10px] text-gold-400/30 tracking-widest">
                      0{idx + 1} //
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-semibold text-xl text-white mb-3 tracking-wide group-hover:text-gold-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gold-100/60 text-xs md:text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] bg-gold-400/10 my-4" />

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2 mb-8">
                    {service.detailedPoints.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start space-x-2 text-[11px] md:text-xs text-gold-100/50">
                        <Check size={12} className="text-gold-400 mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Call to Action inside card */}
                <div>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs font-mono tracking-wider uppercase text-gold-400 hover:text-gold-200 transition-colors"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
