import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageSquare, 
  ArrowDown, 
  ArrowRight, 
  Code2, 
  Check, 
  Terminal, 
  Activity, 
  Sparkles, 
  Cpu, 
  Smartphone, 
  Zap, 
  Globe
} from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<"code" | "schema" | "css">("code");
  const [vitalsPulse, setVitalsPulse] = useState(100);
  const [activeMetric, setActiveMetric] = useState<string>("Speed Index");

  // Track cursor position to build luxury pseudo-3D parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    // Smoothly spring back to center
    setMousePos({ x: 0, y: 0 });
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappUrl = "https://wa.me/923495167062";

  // Dynamic typing simulator for code pane
  const [typedText, setTypedText] = useState("");
  const codeSnippet = [
    "// Instantiate bespoke experience",
    "const studio = new GenzDevelopment({",
    "  design: 'ultra-premium',",
    "  engineering: 'flawless',",
    "  vitals: 'exceptional'",
    "});",
    "",
    "await studio.transform({",
    "  concept: 'Your Bold Idea',",
    "  destination: 'Stunning Reality'",
    "});",
    "// 100% Core Web Vitals Ready"
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentChar = 0;
    let buffer = "";
    
    const interval = setInterval(() => {
      if (currentLine < codeSnippet.length) {
        const line = codeSnippet[currentLine];
        if (currentChar < line.length) {
          buffer += line[currentChar];
          setTypedText(buffer);
          currentChar++;
        } else {
          buffer += "\n";
          setTypedText(buffer);
          currentLine++;
          currentChar = 0;
        }
      } else {
        // Pause at end, then loop
        clearInterval(interval);
        setTimeout(() => {
          setTypedText("");
          currentLine = 0;
          currentChar = 0;
          buffer = "";
          // restart
          const newInterval = setInterval(() => {
            if (currentLine < codeSnippet.length) {
              const line = codeSnippet[currentLine];
              if (currentChar < line.length) {
                buffer += line[currentChar];
                setTypedText(buffer);
                currentChar++;
              } else {
                buffer += "\n";
                setTypedText(buffer);
                currentLine++;
                currentChar = 0;
              }
            } else {
              clearInterval(newInterval);
            }
          }, 18);
        }, 4000);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  // Soft pulsing vitals indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setVitalsPulse(prev => (prev === 100 ? 99 : 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const trustBadges = [
    { label: "Mobile First Design", desc: "Pixel-perfect fluid styling across all viewport sizes" },
    { label: "Premium UI/UX", desc: "Bespoke layouts with delightful micro-interactions" },
    { label: "Fast Delivery", desc: "Agile sprints compiled with premium production speed" },
    { label: "Modern Technologies", desc: "React, Framer Motion, Tailwinds & Scalable Architectures" }
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen lg:h-screen w-full flex flex-col items-center justify-center bg-dark-deep overflow-hidden pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24"
    >
      {/* Absolute Moving Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Cinematic Soft Radial Overlays */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      
      {/* Interactive Floating Gold Light Orb (Tesla Premium Aura) */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none transition-transform duration-1000 ease-out" 
        style={{
          transform: `translate3d(${mousePos.x * 40}px, ${mousePos.y * 40}px, 0) translate(-50%, -50%)`
        }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-gold-400/5 blur-[120px] pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -60}px, ${mousePos.y * -60}px, 0)`
        }}
      />

      {/* Continuously floating interactive stars/particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[2px] h-[2px] bg-gold-300/40 rounded-full"
            style={{
              left: `${15 + (i * 6.5) % 80}%`,
              top: `${10 + (i * 11) % 80}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.65, 0.15],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + (i % 5) * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center relative z-10 h-full">
        
        {/* Left Content Side: High-End Headline & CTA */}
        <div className="lg:col-span-6 flex flex-col space-y-8 text-left items-start">
          
          {/* Animated Chip Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center space-x-2 bg-gold-950/45 border border-gold-400/15 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={12} className="text-gold-300 animate-pulse" />
            <span className="text-mono text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold-200">
              Futuristic Software Atelier
            </span>
          </motion.div>

          {/* Premium Main Headline */}
          <div className="space-y-4">
            <h1 className="text-display font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight uppercase">
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="block text-gold-100"
              >
                FROM IDEA
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-gold-gradient block mt-1"
              >
                TO REALITY
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-sans text-gold-100/75 text-base sm:text-lg md:text-xl max-w-xl font-light leading-relaxed tracking-wide"
            >
              We engineer ultra-polished digital storefronts, custom interactive software, and flawless user interfaces for brands that refuse to compromise.
            </motion.p>
          </div>

          {/* CTA Buttons with Premium Glows & Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* View Services CTA */}
            <button
              onClick={() => handleScrollTo("services")}
              className="relative overflow-hidden w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient text-dark-deep font-display font-bold text-xs tracking-[0.15em] uppercase hover:brightness-110 active:scale-98 transition-all duration-300 shadow-[0_4px_30px_rgba(212,175,55,0.18)] hover:shadow-[0_4px_40px_rgba(212,175,55,0.35)] flex items-center justify-center space-x-2 group cursor-pointer"
            >
              {/* Premium Light Reflection Slide Effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
              <span>View Services</span>
              <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300 stroke-[2.5]" />
            </button>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-dark-card/60 hover:bg-gold-500/10 border border-gold-400/20 hover:border-gold-400/50 text-gold-300 font-display font-bold text-xs tracking-[0.15em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-md"
            >
              <MessageSquare size={14} className="text-gold-400" />
              <span>Contact on WhatsApp</span>
            </a>
          </motion.div>

          {/* Premium Horizontal Trust Badges Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="pt-8 border-t border-gold-400/10 w-full"
          >
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:gap-x-6 sm:max-w-xl">
              {trustBadges.map((badge, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start space-x-2.5 group cursor-default"
                >
                  <span className="flex-shrink-0 w-4.5 h-4.5 rounded-full bg-gold-400/10 border border-gold-400/25 flex items-center justify-center text-gold-400 group-hover:bg-gold-400/20 group-hover:border-gold-400/50 transition-colors duration-300 mt-0.5">
                    <Check size={10} className="stroke-[3]" />
                  </span>
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-gold-200 group-hover:text-gold-300 transition-colors duration-300 leading-tight">
                      {badge.label}
                    </h4>
                    <p className="font-sans text-[10px] text-gold-100/40 mt-0.5 leading-tight line-clamp-1">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Right Content Side: Futuristic Interactive Developer Workspace (3D Parallax Scene) */}
        <div className="lg:col-span-6 relative flex items-center justify-center h-[350px] sm:h-[450px] lg:h-full mt-6 lg:mt-0 select-none">
          
          {/* Main IDE Frame with mouse reactive transform */}
          <div 
            className="relative w-full max-w-lg aspect-[1.15/1] rounded-2xl border border-gold-400/15 overflow-hidden bg-dark-card/65 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-transform duration-500 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * -16}px, 0) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`
            }}
          >
            {/* Top Editor Bar */}
            <div className="h-10 border-b border-gold-400/10 bg-black/50 px-4 flex items-center justify-between">
              {/* Window Controls */}
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              </div>
              
              {/* Filename Breadcrumb */}
              <div className="flex items-center space-x-1.5 font-mono text-[10px] text-gold-400/50">
                <Terminal size={10} />
                <span>src/layouts/Atelier.tsx</span>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                <span className="font-mono text-[9px] uppercase tracking-wider text-gold-300">Active compile</span>
              </div>
            </div>

            {/* Editor Workspace Container */}
            <div className="grid grid-cols-12 h-[calc(100%-40px)]">
              {/* Folder Sidebar */}
              <div className="col-span-3 border-r border-gold-400/10 bg-black/20 p-3 flex flex-col space-y-3.5 font-mono text-[9px] text-gold-200/50">
                <div className="space-y-1.5">
                  <span className="uppercase text-[8px] tracking-wider opacity-40">Workspace</span>
                  <div className="flex items-center space-x-1 text-gold-400/80">
                    <span className="text-gold-500 font-bold">📁</span>
                    <span>components</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gold-300/90 pl-2">
                    <span className="text-gold-400">📄</span>
                    <span className="font-medium">Atelier.tsx</span>
                  </div>
                  <div className="flex items-center space-x-1 pl-2">
                    <span>📄</span>
                    <span>Navbar.tsx</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span>📁</span>
                    <span>services</span>
                  </div>
                </div>

                <div className="space-y-1.5 pt-2">
                  <span className="uppercase text-[8px] tracking-wider opacity-40 font-semibold">Live Branch</span>
                  <div className="flex items-center space-x-1 text-gold-400">
                    <span>git:</span>
                    <span className="font-semibold text-[8px] px-1 py-0.5 bg-gold-500/10 border border-gold-400/20 rounded">production</span>
                  </div>
                </div>
              </div>

              {/* Interactive Code typing environment */}
              <div className="col-span-9 p-4 bg-black/40 font-mono text-[11px] leading-relaxed overflow-hidden relative">
                {/* Simulated file tabs */}
                <div className="flex space-x-2 pb-3 mb-3 border-b border-gold-400/5 text-[9px]">
                  <button 
                    onClick={() => setActiveTab("code")}
                    className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${activeTab === "code" ? "bg-gold-500/10 text-gold-300 font-bold border border-gold-400/20" : "text-gold-200/40"}`}
                  >
                    Atelier.tsx
                  </button>
                  <button 
                    onClick={() => setActiveTab("schema")}
                    className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${activeTab === "schema" ? "bg-gold-500/10 text-gold-300 font-bold border border-gold-400/20" : "text-gold-200/40"}`}
                  >
                    database.sql
                  </button>
                  <button 
                    onClick={() => setActiveTab("css")}
                    className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${activeTab === "css" ? "bg-gold-500/10 text-gold-300 font-bold border border-gold-400/20" : "text-gold-200/40"}`}
                  >
                    theme.css
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {activeTab === "code" && (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-gold-100/90"
                    >
                      <pre className="whitespace-pre-wrap select-text selection:bg-gold-500/30">
                        {typedText}
                        <span className="inline-block w-1.5 h-3.5 bg-gold-400 animate-pulse ml-0.5 align-middle" />
                      </pre>
                    </motion.div>
                  )}

                  {activeTab === "schema" && (
                    <motion.div
                      key="schema"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-amber-100/70 space-y-1.5"
                    >
                      <p><span className="text-purple-400">CREATE TABLE</span> solutions (</p>
                      <p className="pl-4">id <span className="text-emerald-400">UUID PRIMARY KEY</span>,</p>
                      <p className="pl-4">name <span className="text-emerald-400">VARCHAR</span>,</p>
                      <p className="pl-4">vitals <span className="text-emerald-400">INT DEFAULT 100</span>,</p>
                      <p className="pl-4">status <span className="text-emerald-400">'LIVE'</span></p>
                      <p>);</p>
                      <p className="text-gold-400/40 mt-2">-- Row index structured on cloud instance</p>
                    </motion.div>
                  )}

                  {activeTab === "css" && (
                    <motion.div
                      key="css"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-blue-200/70 space-y-1.5"
                    >
                      <p><span className="text-pink-400">@theme</span> &#123;</p>
                      <p className="pl-4">--brand-gold: <span className="text-gold-300">#d4af37</span>;</p>
                      <p className="pl-4">--dark-canvas: <span className="text-gold-300">#050505</span>;</p>
                      <p className="pl-4">--motion-easing: <span className="text-gold-300">cubic-bezier(0.16, 1, 0.3, 1)</span>;</p>
                      <p>&#125;</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Floating Vitals Badge (Core Web Vitals Metric Card) */}
          <div 
            className="absolute top-1/4 -right-6 px-4 py-3 bg-dark-card/90 border border-gold-400/20 hover:border-gold-400/40 rounded-xl shadow-2xl flex flex-col space-y-1.5 backdrop-blur-md transition-all duration-500 ease-out cursor-pointer hover:scale-105"
            style={{
              transform: `translate3d(${mousePos.x * 24}px, ${mousePos.y * 24}px, 0)`
            }}
            onClick={() => setActiveMetric(prev => prev === "Speed Index" ? "First Contentful Paint" : "Speed Index")}
          >
            <div className="flex items-center justify-between space-x-8">
              <span className="text-mono text-[9px] uppercase tracking-wider text-gold-300 flex items-center space-x-1">
                <Activity size={10} className="text-gold-400 animate-pulse" />
                <span>Core Web Vitals</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            
            <div className="flex items-end space-x-4">
              <div>
                <span className="font-mono text-xl font-bold text-gold-100">{vitalsPulse}%</span>
                <span className="font-mono text-[8px] text-emerald-400 block font-medium">OPTIMIZED</span>
              </div>
              <div className="border-l border-gold-400/10 pl-3">
                <span className="font-sans text-[8px] text-gold-100/40 block">METRIC</span>
                <span className="font-mono text-[9px] text-gold-200 font-semibold">{activeMetric}</span>
              </div>
            </div>
          </div>

          {/* Floating Device Preview (Interactive Browser Component Visualizer) */}
          <div 
            className="absolute bottom-1/4 -left-8 w-44 rounded-xl border border-gold-400/15 overflow-hidden bg-black/85 shadow-2xl backdrop-blur-lg p-3 transition-transform duration-500 ease-out hover:scale-105 hover:border-gold-400/30 cursor-pointer"
            style={{
              transform: `translate3d(${mousePos.x * -32}px, ${mousePos.y * -32}px, 0)`
            }}
          >
            <div className="flex items-center justify-between border-b border-gold-400/10 pb-1.5 mb-2">
              <span className="font-mono text-[8px] text-gold-200/50">PREVIEW PORT</span>
              <div className="flex space-x-1">
                <Smartphone size={8} className="text-gold-400" />
                <Globe size={8} className="text-gold-400/50" />
              </div>
            </div>

            {/* Rotating / Interactive Visual Element inside preview */}
            <div className="relative aspect-[1.5/1] rounded-lg bg-gold-950/20 border border-gold-400/10 flex items-center justify-center overflow-hidden group/item">
              {/* Subtle background waves */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08),transparent_70%)]" />
              
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 rounded-full border-2 border-dashed border-gold-400/40 flex items-center justify-center"
              >
                <div className="w-3 h-3 rounded-full bg-gold-gradient shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
              </motion.div>

              <div className="absolute bottom-1 right-2 flex flex-col items-end">
                <span className="font-mono text-[6px] text-gold-300">CONVERSION</span>
                <span className="font-mono text-[8px] text-gold-100 font-bold">+240%</span>
              </div>
            </div>
          </div>

          {/* Micro-panel: Compiler logs */}
          <div 
            className="absolute -bottom-4 right-4 px-3 py-1.5 bg-gold-950/60 border border-gold-400/20 rounded-lg shadow-lg flex items-center space-x-2 backdrop-blur-md transition-all duration-500 ease-out"
            style={{
              transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
            }}
          >
            <Cpu size={10} className="text-gold-400" />
            <span className="font-mono text-[8px] text-gold-200 tracking-widest uppercase">compiler ready (42ms)</span>
          </div>

          {/* Interactive Sparkles behind */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gold-500/5 blur-[50px] pointer-events-none"
            style={{
              transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0) translate(-50%, -50%)`
            }}
          />

        </div>

      </div>

      {/* Premium Apple-Style Animated Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => handleScrollTo("services")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-50 hover:opacity-100 transition-all z-10 duration-300"
      >
        <span className="text-mono text-[9px] uppercase tracking-[0.25em] text-gold-300 mb-2.5">Explore Atelier</span>
        <div className="w-[18px] h-[30px] rounded-full border border-gold-400/30 p-1 flex justify-center">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-gold-300 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
}

