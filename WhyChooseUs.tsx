import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Globe, 
  Cpu, 
  HeartHandshake, 
  ChevronRight,
  X,
  CheckCircle,
  TrendingUp,
  Star,
  Users,
  Clock,
  Gauge,
  Sparkles,
  Award,
  Terminal,
  ShieldCheck,
  MousePointerClick
} from "lucide-react";

interface FeatureDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
  whatItMeans: string;
  whyItMatters: string;
  benefits: string[];
  technologies: string[];
  realWorldImpact: string;
}

// Custom light count-up component to animate the stats when they enter the viewport
function AnimatedStatNumber({ value, suffix = "" }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayVal, setDisplayVal] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse the numeric part of the value
    const numericPart = parseFloat(value.replace(/[^0-9.]/g, ""));
    const isLte = value.includes("<");
    if (isNaN(numericPart)) {
      setDisplayVal(value);
      return;
    }

    const duration = 1500; // ms
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * numericPart);

      if (isLte) {
        setDisplayVal(`< ${current}`);
      } else {
        setDisplayVal(current.toString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayVal(value);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-gold-gradient tracking-tight">
      {displayVal}
      {suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const [selectedFeatureIdx, setSelectedFeatureIdx] = useState<number | null>(null);

  const features: FeatureDetail[] = [
    {
      icon: <Palette size={26} className="text-gold-400" />,
      title: "Premium UI/UX Design",
      description: "Modern and visually appealing interfaces designed to increase engagement and improve customer experience.",
      whatItMeans: "We build tailored, high-end user interfaces starting from custom typography pairing to complete spacing control, completely avoiding generic, off-the-shelf design templates.",
      whyItMatters: "A pristine aesthetic is the primary catalyst for immediate business trust. First impressions occur in milliseconds; high-fidelity styling sets your business apart instantly.",
      benefits: [
        "Establishes a premium, premium-tier brand presence online",
        "Significantly increases page dwell time and user engagement",
        "Provides frictionless, intuitive navigation flows for clients",
        "Built-in eye accessibility and optimal responsive contrast ratios"
      ],
      technologies: ["Figma Prototyping", "Tailwind CSS Grid Foundations", "Framer Motion Animations", "Custom Typography Pairs"],
      realWorldImpact: "Substantially lowers bounce rates, keeping high-value potential customers scrolling and learning more about your business services."
    },
    {
      icon: <Smartphone size={26} className="text-gold-400" />,
      title: "Mobile First Development",
      description: "Every website is optimized for mobile devices to ensure a smooth experience across all screen sizes.",
      whatItMeans: "We write highly adaptive mobile-first code, testing every visual asset, form flow, and layout spacing on active smartphone device simulations first.",
      whyItMatters: "Over 70% of Pakistani and international business traffic operates entirely on mobile smartphones. Desktop layouts that shrink down poorly destroy potential conversion rates.",
      benefits: [
        "Perfect layouts on all devices (iOS, Android, Tablets, Laptops)",
        "Fully optimized touch target buttons (min-height 44px spacing)",
        "Direct call to actions (WhatsApp widgets, tap-to-dial numbers)",
        "Saves user network bandwidth by optimizing images on mobile"
      ],
      technologies: ["React Adaptive Hydration", "Tailwind CSS Responsive Modifiers", "Touch Event Handlers", "Media Query Breakpoints"],
      realWorldImpact: "Our clients see up to a 60% boost in direct mobile sales, table bookings, and lead inquiries after upgrading to our mobile-optimized setups."
    },
    {
      icon: <Zap size={26} className="text-gold-400" />,
      title: "Fast Performance",
      description: "Lightning-fast websites optimized for speed, responsiveness, and user satisfaction.",
      whatItMeans: "We engineer lightweight codebases with minimal dependency overhead, optimized assets, and clean asynchronous loading routines.",
      whyItMatters: "A 1-second delay can drop conversions by over 20%. Fast-loading pages keep visitors focused on your offerings instead of a loading spinner.",
      benefits: [
        "Sub-0.5 second Core Web Vital scores (First Contentful Paint)",
        "Incredibly fluid page changes and instant form submissions",
        "Reduced server-side latency and superior memory utilization",
        "Optimal performance even on limited local mobile network speeds (3G/4G)"
      ],
      technologies: ["Vite Fast Bundling", "Code Splitting & Lazy Rendering", "Optimized WebP/AVIF Delivery", "Minified Production Assets"],
      realWorldImpact: "Achieves perfect 95+ performance scores on Google Lighthouse, guaranteeing your audience doesn't abandon your site due to lag."
    },
    {
      icon: <Globe size={26} className="text-gold-400" />,
      title: "SEO Friendly Structure",
      description: "Built with modern SEO practices to improve visibility and search engine rankings.",
      whatItMeans: "We embed structured metadata, clean semantic tags, and local search schemas into the very core code of your platform, making it easily searchable.",
      whyItMatters: "If your business fails to rank on Page 1 for local search terms (e.g., 'best restaurant Lahore' or 'top clinic Islamabad'), your competitors capture all organic leads.",
      benefits: [
        "Seamless indexing by Google, Bing, and other search engine bots",
        "Rich search result snippets with optimized Local Business JSON-LD schemas",
        "Clear Heading Hierarchy (H1, H2, H3) for proper structural parsing",
        "Automatic SEO-friendly URL paths and metadata header configuration"
      ],
      technologies: ["Semantic HTML5 Layouts", "Local Schema Markup (JSON-LD)", "Dynamic Sitemap Generator", "Metadata Optimization Tools"],
      realWorldImpact: "Consistent streams of direct, zero-cost organic leads from high-intent local clients seeking your services, reducing paid ad dependancy."
    },
    {
      icon: <Cpu size={26} className="text-gold-400" />,
      title: "Custom Solutions",
      description: "Every project is designed according to business goals instead of using generic templates.",
      whatItMeans: "We design and build custom-tailored database connections, booking wizards, and digital menus directly to match your unique real-world workflows.",
      whyItMatters: "Rigid theme templates restrict how your business operates. A custom solution adapts perfectly to your service guidelines and corporate logic.",
      benefits: [
        "100% control over interactive forms, dashboards, and booking engines",
        "Zero hidden licensing or template subscription fees",
        "Easily scale and expand feature sets as your business expands",
        "Robust, clean integrations with local APIs and storage systems"
      ],
      technologies: ["Modular React Components", "State Managers (useState, useEffect)", "Durable Client Storage", "Server-Proxy API Architecture"],
      realWorldImpact: "Fosters custom-built solutions that match real-world business flows with 100% precision, giving you a powerful unfair market advantage."
    },
    {
      icon: <HeartHandshake size={26} className="text-gold-400" />,
      title: "Dedicated Support",
      description: "We provide guidance, updates, and ongoing support to help businesses succeed online.",
      whatItMeans: "We provide direct, professional developer communications, routine performance audits, and priority hotlines to ensure your platform runs flawlessly.",
      whyItMatters: "A high-performing corporate website is an active asset that requires expert supervision to scale, secure, and continuously update.",
      benefits: [
        "Direct communication channels without tedious ticketing wait times",
        "Regular code safety audits and proactive version patching",
        "Rapid updates for new service additions, price lists, or gallery updates",
        "Guaranteed uptime supervision and instantaneous error response"
      ],
      technologies: ["WhatsApp Direct Support", "GitHub Automation Workflows", "Uptime Monitoring Tools", "Sentry Diagnostic Logs"],
      realWorldImpact: "Offers absolute peace of mind, leaving you to focus entirely on your core business while we handle your digital operations."
    }
  ];

  const stats = [
    {
      value: "25",
      suffix: "+",
      label: "Projects Completed",
      icon: <Users size={16} className="text-gold-400/80" />
    },
    {
      value: "100",
      suffix: "%",
      label: "Client Satisfaction",
      icon: <Star size={16} className="text-gold-400/80" />
    },
    {
      value: "< 15",
      suffix: " Mins",
      label: "Average Response",
      icon: <Clock size={16} className="text-gold-400/80" />
    },
    {
      value: "95",
      suffix: "+",
      label: "Mobile Performance",
      icon: <Gauge size={16} className="text-gold-400/80" />
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-24 bg-dark-deep relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      {/* Absolute Decorative Glow Elements */}
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-gold-400/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[250px] h-[250px] bg-gold-400/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
            Our Commitment to Excellence
          </div>
          <h2 className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            WHY CHOOSE <span className="text-gold-gradient">GEN'Z DEVELOPMENT</span>
          </h2>
          <p className="text-gold-100/60 max-w-2xl text-sm md:text-base font-light leading-relaxed">
            We combine creativity, strategy, and modern technologies to build websites that help businesses grow faster and stand out online.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -8, 
                borderColor: "rgba(212, 175, 55, 0.45)",
                boxShadow: "0 25px 45px -15px rgba(212, 175, 55, 0.18)"
              }}
              onClick={() => setSelectedFeatureIdx(idx)}
              className="group p-8 rounded-2xl bg-dark-card/45 border border-gold-400/10 transition-all duration-500 ease-out flex flex-col justify-between relative overflow-hidden cursor-pointer shadow-xl"
            >
              {/* Subtle top golden light line inside card on hover */}
              <div className="absolute top-0 left-0 w-full h-[2.5px] bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="space-y-5">
                {/* Icon container with premium micro-pulse hover */}
                <div className="w-12 h-12 rounded-xl bg-gold-500/5 border border-gold-400/15 flex items-center justify-center transition-all duration-300 group-hover:bg-gold-500/10 group-hover:border-gold-400/35 group-hover:scale-105">
                  <span className="transition-transform duration-500 group-hover:rotate-6">
                    {feature.icon}
                  </span>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-gold-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gold-100/60 text-xs sm:text-sm font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Action Indicator */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase text-gold-400/50 group-hover:text-gold-400 transition-colors duration-300 flex items-center space-x-1">
                  <MousePointerClick size={12} />
                  <span>Click to Learn More</span>
                </span>
                <ChevronRight size={14} className="text-gold-400/30 group-hover:text-gold-400 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Premium Stats Row below cards */}
        <div className="relative rounded-3xl bg-gradient-to-r from-dark-card/40 via-dark-card/60 to-dark-card/40 border border-gold-400/15 p-8 sm:p-10 shadow-2xl overflow-hidden">
          {/* Inner ambient light overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_100%)] pointer-events-none" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {stats.map((stat, sIdx) => (
              <div 
                key={sIdx} 
                className="text-center space-y-2 flex flex-col items-center justify-center p-3 border-r border-gold-400/5 last:border-r-0 max-sm:border-r-0 max-sm:odd:border-r max-sm:odd:border-gold-400/5"
              >
                {/* Stat Icon */}
                <div className="w-8 h-8 rounded-full bg-gold-500/5 border border-gold-400/10 flex items-center justify-center mb-1">
                  {stat.icon}
                </div>

                {/* Animated Stat Value */}
                <div className="flex items-baseline">
                  <AnimatedStatNumber value={stat.value} suffix={stat.suffix} />
                </div>

                {/* Label */}
                <span className="font-sans font-medium text-[10px] sm:text-xs text-gold-200/70 uppercase tracking-widest text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Premium Modal */}
      <AnimatePresence>
        {selectedFeatureIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFeatureIdx(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-2xl w-full bg-dark-card/95 border border-gold-400/25 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] z-10 flex flex-col max-h-[90vh]"
            >
              {/* Header */}
              <div className="p-6 sm:p-8 border-b border-gold-400/10 bg-gold-950/20 flex items-center justify-between relative shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/20 flex items-center justify-center">
                    {features[selectedFeatureIdx].icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-semibold block">
                      Core Growth Standard
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                      {features[selectedFeatureIdx].title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedFeatureIdx(null)}
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-gold-400/20 hover:border-gold-400/40 text-gold-100 flex items-center justify-center transition-all cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Modal Content */}
              <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm leading-relaxed text-gold-100/90">
                
                {/* Row 1: What it means & Why it matters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-5 border-b border-gold-400/5">
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold flex items-center space-x-1">
                      <Terminal size={12} />
                      <span>What It Means</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {features[selectedFeatureIdx].whatItMeans}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold flex items-center space-x-1">
                      <Award size={12} />
                      <span>Why It Matters</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                      {features[selectedFeatureIdx].whyItMatters}
                    </p>
                  </div>
                </div>

                {/* Section 2: Business Benefits Checkmarks */}
                <div className="space-y-3 pb-5 border-b border-gold-400/5">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold flex items-center space-x-1">
                    <CheckCircle size={12} className="text-gold-400" />
                    <span>Business Benefits</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {features[selectedFeatureIdx].benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-100 font-light">
                        <span className="text-gold-400 select-none shrink-0 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Row 3: Technologies Used & Real World Business Impact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Technologies */}
                  <div className="space-y-2.5">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold flex items-center space-x-1">
                      <Cpu size={12} />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {features[selectedFeatureIdx].technologies.map((tech, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded bg-gold-500/5 border border-gold-400/15 font-mono text-[9px] uppercase tracking-widest text-gold-300 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real World Impact */}
                  <div className="space-y-1.5 p-4 rounded-xl bg-gold-950/20 border border-gold-400/15">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold flex items-center space-x-1.5">
                      <TrendingUp size={12} className="text-gold-400 animate-pulse" />
                      <span>Real-World Impact</span>
                    </h4>
                    <p className="text-xs text-gold-100/90 font-light leading-relaxed">
                      {features[selectedFeatureIdx].realWorldImpact}
                    </p>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-4 sm:p-5 border-t border-gold-400/10 bg-black/60 flex justify-between items-center shrink-0 text-[10px] font-mono text-gold-200/40">
                <span>MODULE DETAILS IN BRIEF</span>
                <span className="text-gold-400/60 font-semibold uppercase tracking-wider">★ PREMIUM STANDARD WORKFLOW</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
