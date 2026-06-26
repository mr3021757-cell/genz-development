import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FirebaseService } from "../lib/firebase";
import { ContactFormData } from "../types";
import { MessageSquare, Sparkles, Send, CheckCircle, Smartphone, User, Mail, Briefcase, ChevronDown } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    projectType: "Website Development",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const projectTypes = [
    "Website Development",
    "E-Commerce Stores",
    "Landing Pages",
    "Business Websites",
    "Portfolio Websites",
    "Custom Coding"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    setIsLoading(true);

    try {
      // Connects to Firebase structure (simulated DB store)
      const res = await FirebaseService.submitContactLead(formData);
      
      if (res.success) {
        setIsLoading(false);
        setShowSuccess(true);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = "https://wa.me/923495167062";
    
    // Redirect cleanly
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setShowSuccess(false);
    
    // Clear form
    setFormData({
      name: "",
      email: "",
      phone: "",
      companyName: "",
      projectType: "Website Development",
      message: ""
    });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-dark-deep bg-grid-pattern relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-400/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Contact Info & Vibe */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div className="space-y-6">
              <div className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest">
                Initiate Architecture
              </div>
              <h2 className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight">
                LET'S BRING YOUR <br />
                <span className="text-gold-gradient">IDEAS TO LIFE</span>
              </h2>
              <p className="font-sans text-gold-100/60 text-sm md:text-base font-light leading-relaxed">
                Fill out the request form to submit your parameters directly to our engineering core. Once submitted, we will immediately process your ticket and redirect you to WhatsApp for direct luxury consulting.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="space-y-6 pt-10 border-t border-gold-400/10 mt-10 lg:mt-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs tracking-wider uppercase">Average Response Time</h4>
                  <p className="text-gold-200/60 text-xs mt-0.5">Direct response on WhatsApp in under 15 minutes.</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-400/20 flex items-center justify-center text-gold-400 shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white text-xs tracking-wider uppercase">Direct Email Corridor</h4>
                  <p className="text-gold-200/60 text-xs mt-0.5">hello@genz.development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphism Form Container */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-dark-card/40 border border-gold-400/10 backdrop-blur-xl shadow-2xl relative"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-mono text-[10px] uppercase tracking-wider text-gold-400/80 block">
                      Your Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400/40 w-4 h-4" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-mono text-[10px] uppercase tracking-wider text-gold-400/80 block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400/40 w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/20 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-mono text-[10px] uppercase tracking-wider text-gold-400/80 block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Smartphone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400/40 w-4 h-4" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/20 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company Name field */}
                  <div className="space-y-2">
                    <label className="text-mono text-[10px] uppercase tracking-wider text-gold-400/80 block">
                      Company / Organization
                    </label>
                    <div className="relative">
                      <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400/40 w-4 h-4" />
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Acme Corp"
                        className="w-full pl-10 pr-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/20 outline-none transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Type Dropdown */}
                <div className="space-y-2">
                  <label className="text-mono text-[10px] uppercase tracking-wider text-gold-400/80 block">
                    Project Genre
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-dark-card text-gold-100">
                          {type}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gold-400 pointer-events-none w-4 h-4" />
                  </div>
                </div>

                {/* Brief Message field */}
                <div className="space-y-2">
                  <label className="text-mono text-[10px] uppercase tracking-wider text-gold-400/80 block">
                    Tell us about your idea
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your goals, desired scope, or inspiration..."
                    className="w-full px-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/20 outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-gold-gradient text-dark-deep font-display font-bold text-sm tracking-widest uppercase hover:brightness-115 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer shadow-[0_4px_25px_rgba(212,175,55,0.2)]"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-dark-deep border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      <span>SUBMIT PARAMETERS</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Elegant Success Modal Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark-deep/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md bg-dark-card border border-gold-400/30 rounded-2xl p-8 text-center shadow-[0_25px_50px_rgba(212,175,55,0.15)] z-10"
            >
              {/* Success Sparkle Glow Icon */}
              <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/40 flex items-center justify-center text-gold-400 mx-auto mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)] animate-pulse">
                <CheckCircle size={32} className="stroke-[1.5]" />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-3">
                PARAMETERS RECORDED
              </h3>
              
              <p className="text-gold-100/60 text-sm font-light leading-relaxed mb-8">
                Your lead was successfully saved into our Firebase system structure. Click the button below to bridge the link and open the WhatsApp conversation directly.
              </p>

              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-4 rounded-xl bg-gold-gradient text-dark-deep font-display font-bold text-sm tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-[0_4px_20px_rgba(212,175,55,0.25)]"
              >
                <MessageSquare size={16} />
                <span>CONTINUE TO WHATSAPP</span>
              </button>

              <p className="text-[10px] font-mono text-gold-300/30 uppercase tracking-widest mt-4">
                Redirection safe & secure
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
