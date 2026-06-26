import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { 
  Eye, 
  BookOpen, 
  X, 
  CheckCircle, 
  ExternalLink, 
  Sparkles,
  TrendingUp,
  Smartphone,
  Monitor,
  Tablet,
  RefreshCw,
  Utensils,
  Calendar,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  User,
  Stethoscope,
  Award,
  Target,
  Mail,
  Zap,
  Globe,
  Star,
  ChevronRight,
  ArrowRight,
  Heart,
  Briefcase
} from "lucide-react";

export default function Portfolio() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<Project | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<Project | null>(null);
  const [deviceMode, setDeviceMode] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [activeSubTab, setActiveSubTab] = useState<string>("home");
  
  // Interactive Simulator Form States
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formDate, setFormDate] = useState("2026-06-26");
  const [formGuests, setFormGuests] = useState("2");
  const [formDoctor, setFormDoctor] = useState("Dr. Kamran Khan");
  const [formMsg, setFormMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loadingStep, setLoadingStep] = useState(false);

  // Reset simulator sub tab & form states when preview changes
  useEffect(() => {
    setActiveSubTab("home");
    setFormSubmitted(false);
    setFormName("");
    setFormPhone("");
    setFormEmail("");
    setFormMsg("");
  }, [selectedPreview]);

  const handleCloseModal = () => {
    setSelectedCaseStudy(null);
    setSelectedPreview(null);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoadingStep(true);
    setTimeout(() => {
      setLoadingStep(false);
      setFormSubmitted(true);
    }, 900);
  };

  // Helper to render the live demo mockup pages inside the browser mockup
  const renderDemoContent = (project: Project) => {
    const isRestaurant = project.id === "restaurant-1";
    const isClinic = project.id === "clinic-2";
    const isAgency = project.id === "agency-3";

    // --- RESTAURANT DEMO VIEWS ---
    if (isRestaurant) {
      switch (activeSubTab) {
        case "menu":
          return (
            <div className="space-y-6 text-white animate-fadeIn">
              <div className="text-center pb-4 border-b border-gold-400/10">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">The Culinary Art</span>
                <h4 className="font-display font-bold text-lg text-gold-100">Bespoke Digital Menu</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <h5 className="font-display font-semibold text-xs text-gold-400 tracking-wider uppercase border-l-2 border-gold-400 pl-2">Karahi & Handi</h5>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex justify-between items-start">
                    <div>
                      <h6 className="font-sans font-bold text-sm text-white">Savoury Mutton Karahi</h6>
                      <p className="text-[10px] text-gray-400 mt-1">Organic mutton cooked in premium local spices and pure butter.</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-300">Rs. 1,850 <span className="text-[8px] text-gray-500">Half</span></span>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex justify-between items-start">
                    <div>
                      <h6 className="font-sans font-bold text-sm text-white">Creamy Chicken Handi</h6>
                      <p className="text-[10px] text-gray-400 mt-1">Boneless pieces cooked in rich clay pot cream gravy.</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-300">Rs. 1,490</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h5 className="font-display font-semibold text-xs text-gold-400 tracking-wider uppercase border-l-2 border-gold-400 pl-2">Rice & Naan</h5>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex justify-between items-start">
                    <div>
                      <h6 className="font-sans font-bold text-sm text-white">Special Beef Biryani</h6>
                      <p className="text-[10px] text-gray-400 mt-1">Double spiced Basmati rice layered with juicy local beef cuts.</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-300">Rs. 890</span>
                  </div>
                  <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex justify-between items-start">
                    <div>
                      <h6 className="font-sans font-bold text-sm text-white">Stuffed Cheese Naan</h6>
                      <p className="text-[10px] text-gray-400 mt-1">Freshly baked in clay tandoor with real local mozzarella cheese.</p>
                    </div>
                    <span className="font-mono text-xs font-bold text-gold-300">Rs. 450</span>
                  </div>
                </div>
              </div>
            </div>
          );
        case "reservation":
          return (
            <div className="max-w-md mx-auto text-white animate-fadeIn">
              <div className="text-center mb-6">
                <Utensils size={24} className="text-gold-400 mx-auto mb-2" />
                <h4 className="font-display font-bold text-lg text-gold-100">VIP Table Reservation</h4>
                <p className="text-xs text-gray-400 mt-1">Book your spot instantly with live automated SMS confirmation</p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-400/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto text-lg">✓</div>
                  <h5 className="font-sans font-bold text-base text-gold-200">Table Reserved Successfully!</h5>
                  <p className="text-xs text-gray-300">
                    Hello <span className="font-semibold text-white">{formName}</span>, your table for <span className="font-semibold text-white">{formGuests} guests</span> on <span className="font-semibold text-white">{formDate}</span> is confirmed. An automated SMS ticket has been sent to <span className="font-semibold text-white">{formPhone}</span>.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-gold-400 hover:underline cursor-pointer"
                  >
                    Reserve another table
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Bilal Khan" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">WhatsApp/Phone</label>
                      <input 
                        type="tel" 
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 03001234567" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Guests</label>
                      <select 
                        value={formGuests}
                        onChange={(e) => setFormGuests(e.target.value)}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="6">6+ Family Lounge</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Date</label>
                      <input 
                        type="date" 
                        required
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loadingStep}
                    className="w-full py-3 rounded-lg bg-gold-gradient text-dark-deep font-sans font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {loadingStep ? (
                      <span className="w-4 h-4 border-2 border-dark-deep border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Calendar size={14} />
                        <span>Reserve My Table</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          );
        case "contact":
          return (
            <div className="space-y-6 text-white animate-fadeIn max-w-lg mx-auto">
              <div className="text-center pb-4 border-b border-gold-400/10">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase font-semibold">Location & Timings</span>
                <h4 className="font-display font-bold text-lg text-gold-100">Find Us In Lahore</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold font-sans">Main Address</h5>
                      <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                        M.M. Alam Road, Gulberg III, (Opposite Xinhua Mall), Lahore, Punjab, Pakistan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone size={16} className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold font-sans">Booking Hotlines</h5>
                      <p className="text-[10px] text-gray-400 mt-1 font-mono">
                        +92 42 111-827-892<br />
                        +92 300 9876543
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 border-t sm:border-t-0 sm:border-l border-white/5 sm:pl-4">
                  <div className="flex items-start space-x-3">
                    <Clock size={16} className="text-gold-400 mt-0.5 shrink-0" />
                    <div>
                      <h5 className="text-xs font-bold font-sans">Operational Hours</h5>
                      <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
                        Monday - Thursday: 12:00 PM - 12:00 AM<br />
                        Friday - Sunday: 12:00 PM - 1:00 AM<br />
                        <span className="text-gold-400/80 font-mono font-medium block mt-1">★ Live Ghazal on Weekends</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        default: // home
          return (
            <div className="text-center py-6 sm:py-10 text-white animate-fadeIn space-y-6">
              <div className="inline-flex items-center space-x-1 px-2.5 py-1 rounded bg-gold-400/10 border border-gold-400/20">
                <Star size={10} className="text-gold-400 fill-gold-400" />
                <span className="font-mono text-[8px] font-bold text-gold-300 uppercase tracking-widest">Lahore's Elite Dining Experience</span>
              </div>
              <h4 className="font-display font-extrabold text-2xl sm:text-4xl text-gold-100 tracking-tight leading-tight uppercase">
                CHOOSE TASTE,<br />
                <span className="text-gold-gradient">FEEL PREMIUM</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                Indulge in authentic local traditional Karahis, gourmet Handis, and premium continental delicacies crafted by world-class local chefs.
              </p>
              <div className="flex justify-center space-x-3 pt-2">
                <button 
                  onClick={() => setActiveSubTab("reservation")}
                  className="px-5 py-2.5 rounded-lg bg-gold-gradient text-dark-deep font-sans font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  Reserve VIP Table
                </button>
                <button 
                  onClick={() => setActiveSubTab("menu")}
                  className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-semibold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
                >
                  Explore Menu
                </button>
              </div>
            </div>
          );
      }
    }

    // --- CLINIC DEMO VIEWS ---
    if (isClinic) {
      switch (activeSubTab) {
        case "doctors":
          return (
            <div className="space-y-6 text-white animate-fadeIn">
              <div className="text-center pb-4 border-b border-gold-400/10">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">Expert Specialists</span>
                <h4 className="font-display font-bold text-lg text-gold-100">Meet Our Certified Consultants</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mx-auto text-gold-400 font-bold">DK</div>
                  <h5 className="text-xs font-bold font-sans">Dr. Kamran Khan</h5>
                  <p className="text-[9px] font-mono text-gold-300">Consultant Pediatrician</p>
                  <p className="text-[9px] text-gray-400">MBBS, FCPS // 15 Yrs Exp</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mx-auto text-gold-400 font-bold">ZM</div>
                  <h5 className="text-xs font-bold font-sans">Dr. Zainab Malik</h5>
                  <p className="text-[9px] font-mono text-gold-300">Senior Cardiologist</p>
                  <p className="text-[9px] text-gray-400">MBBS, MD // 12 Yrs Exp</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center mx-auto text-gold-400 font-bold">SA</div>
                  <h5 className="text-xs font-bold font-sans">Dr. Sarah Ahmed</h5>
                  <p className="text-[9px] font-mono text-gold-300">General Physician</p>
                  <p className="text-[9px] text-gray-400">MBBS // 8 Yrs Exp</p>
                </div>
              </div>
            </div>
          );
        case "services":
          return (
            <div className="space-y-6 text-white animate-fadeIn">
              <div className="text-center pb-4 border-b border-gold-400/10">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase font-semibold">Specialized Care</span>
                <h4 className="font-display font-bold text-lg text-gold-100">Our Healthcare Coverages</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-start space-x-3">
                  <Stethoscope className="text-gold-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <h5 className="text-xs font-bold">General Consultation</h5>
                    <p className="text-[10px] text-gray-400 mt-1">Complete diagnosis, pathology guidance, and health audits.</p>
                    <span className="text-[9px] font-mono text-gold-300 font-semibold block mt-1">CONSULTATION: Rs. 1,500</span>
                  </div>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-start space-x-3">
                  <Heart className="text-gold-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <h5 className="text-xs font-bold">Cardiac Screening</h5>
                    <p className="text-[10px] text-gray-400 mt-1">ECG, echocardiography guidance, and premium cardiac profile testing.</p>
                    <span className="text-[9px] font-mono text-gold-300 font-semibold block mt-1">CONSULTATION: Rs. 4,500</span>
                  </div>
                </div>
              </div>
            </div>
          );
        case "appointments":
          return (
            <div className="max-w-md mx-auto text-white animate-fadeIn">
              <div className="text-center mb-6">
                <Calendar size={24} className="text-gold-400 mx-auto mb-2" />
                <h4 className="font-display font-bold text-lg text-gold-100">Digital Clinic Intake</h4>
                <p className="text-xs text-gray-400 mt-1">Securely reserve your specialized doctor consultation slot</p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-400/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-lg font-bold">✓</div>
                  <h5 className="font-sans font-bold text-base text-emerald-300">Appointment Saved!</h5>
                  <p className="text-xs text-gray-300">
                    Dear <span className="font-semibold text-white">{formName}</span>, your request with <span className="font-semibold text-white">{formDoctor}</span> is registered for <span className="font-semibold text-white">{formDate}</span>. Our clinic officer will call <span className="font-semibold text-white">{formPhone}</span> shortly to confirm the timeslot.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-gold-400 hover:underline cursor-pointer"
                  >
                    Request another appointment
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Patient Name</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Zain Malik" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">WhatsApp/Phone</label>
                      <input 
                        type="tel" 
                        required
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        placeholder="e.g. 03121112233" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Select Doctor</label>
                      <select 
                        value={formDoctor}
                        onChange={(e) => setFormDoctor(e.target.value)}
                        className="w-full bg-neutral-900 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      >
                        <option value="Dr. Kamran Khan">Dr. Kamran Khan (Pediatrician)</option>
                        <option value="Dr. Zainab Malik">Dr. Zainab Malik (Cardiologist)</option>
                        <option value="Dr. Sarah Ahmed">Dr. Sarah Ahmed (General GP)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Date</label>
                      <input 
                        type="date" 
                        required
                        value={formDate}
                        onChange={(e) => setFormDate(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={loadingStep}
                    className="w-full py-3 rounded-lg bg-gold-gradient text-dark-deep font-sans font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {loadingStep ? (
                      <span className="w-4 h-4 border-2 border-dark-deep border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <ShieldCheck size={14} />
                        <span>Book Clinic Slot</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          );
        default: // home
          return (
            <div className="text-center py-6 sm:py-10 text-white animate-fadeIn space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-widest">PMC Verified Consultants Active</span>
              </div>
              <h4 className="font-display font-extrabold text-2xl sm:text-4xl text-gold-100 tracking-tight leading-tight uppercase">
                YOUR HEALTH,<br />
                <span className="text-gold-gradient">OUR SACRED PRIORITY</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                Connect with Islamabad & Lahore's highly qualified medical consultants. Get modern care, premium diagnostic facilities, and seamless digital booking.
              </p>
              <div className="flex justify-center space-x-3 pt-2">
                <button 
                  onClick={() => setActiveSubTab("appointments")}
                  className="px-5 py-2.5 rounded-lg bg-gold-gradient text-dark-deep font-sans font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  Book Specialist Appointment
                </button>
                <button 
                  onClick={() => setActiveSubTab("doctors")}
                  className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-semibold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
                >
                  View Team
                </button>
              </div>
            </div>
          );
      }
    }

    // --- AGENCY DEMO VIEWS ---
    if (isAgency) {
      switch (activeSubTab) {
        case "services":
          return (
            <div className="space-y-6 text-white animate-fadeIn">
              <div className="text-center pb-4 border-b border-gold-400/10">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">Performance Marketing</span>
                <h4 className="font-display font-bold text-lg text-gold-100">Revenue-Focused Marketing Solutions</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2 text-gold-400">
                    <Target size={14} />
                    <h5 className="text-xs font-bold">Search Engine Optimization</h5>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">Rank on Page 1 of Google in Pakistan and international markets. Includes dynamic local keyword schema, backlinks, and core-web-vitals coding audits.</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/5 rounded-lg space-y-2">
                  <div className="flex items-center space-x-2 text-gold-400">
                    <TrendingUp size={14} />
                    <h5 className="text-xs font-bold">Social Media Management</h5>
                  </div>
                  <p className="text-[10px] text-gray-400 leading-relaxed">High-converting ad campaigns on Instagram, Facebook, and TikTok. Tailored content hooks designed to secure leads and boost sales conversions.</p>
                </div>
              </div>
            </div>
          );
        case "portfolio":
          return (
            <div className="space-y-6 text-white animate-fadeIn">
              <div className="text-center pb-4 border-b border-gold-400/10">
                <span className="font-mono text-[9px] text-gold-400 tracking-widest uppercase">Client Triumphs</span>
                <h4 className="font-display font-bold text-lg text-gold-100">Our High-Impact Case Studies</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-2">
                  <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-400/15">E-COMMERCE SCALE-UP</span>
                  <h5 className="text-xs font-bold font-sans">Premium Leather Retailer</h5>
                  <p className="text-[10px] text-gray-400">Scaled monthly direct Shopify orders by +320% through targeted social funnel restructuring and high-status creative ad production.</p>
                  <span className="text-xs font-mono text-gold-300 font-bold block pt-1">+320% Revenue Scale</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl space-y-2">
                  <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-400/15">LEAD GENERATION</span>
                  <h5 className="text-xs font-bold font-sans">Upscale Real Estate Project</h5>
                  <p className="text-[10px] text-gray-400">Generated 1,200+ qualified overseas Pakistani buyers for premium high-rise apartments in Islamabad using precise Facebook lead ads.</p>
                  <span className="text-xs font-mono text-gold-300 font-bold block pt-1">1,200+ High-Ticket Leads</span>
                </div>
              </div>
            </div>
          );
        case "contact":
          return (
            <div className="max-w-md mx-auto text-white animate-fadeIn">
              <div className="text-center mb-6">
                <Mail size={24} className="text-gold-400 mx-auto mb-2" />
                <h4 className="font-display font-bold text-lg text-gold-100">Get a Free Marketing Audit</h4>
                <p className="text-xs text-gray-400 mt-1">Our strategists will analyze your online presence & send an audit report</p>
              </div>

              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-gold-500/10 border border-gold-400/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400/20 text-gold-400 flex items-center justify-center mx-auto text-lg">✓</div>
                  <h5 className="font-sans font-bold text-base text-gold-200">Strategy Requested!</h5>
                  <p className="text-xs text-gray-300">
                    Thank you <span className="font-semibold text-white">{formName}</span>. A marketing strategist is conducting a preliminary audit of your business requirements. We will contact you at <span className="font-semibold text-white">{formEmail}</span> within 2 hours.
                  </p>
                  <button 
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-gold-400 hover:underline cursor-pointer"
                  >
                    Request another analysis
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Business Representative</label>
                      <input 
                        type="text" 
                        required
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        placeholder="e.g. Hammad Malik" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Corporate Email</label>
                      <input 
                        type="email" 
                        required
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        placeholder="e.g. hammad@company.pk" 
                        className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-mono tracking-wider text-gray-400 mb-1">Primary Growth Challenge</label>
                    <textarea 
                      rows={2}
                      value={formMsg}
                      onChange={(e) => setFormMsg(e.target.value)}
                      placeholder="e.g. We want to double our digital sales and fix our low conversions..." 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-gold-400 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loadingStep}
                    className="w-full py-3 rounded-lg bg-gold-gradient text-dark-deep font-sans font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {loadingStep ? (
                      <span className="w-4 h-4 border-2 border-dark-deep border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Zap size={14} />
                        <span>Send Free Audit Proposal</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          );
        default: // home
          return (
            <div className="text-center py-6 sm:py-10 text-white animate-fadeIn space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-gold-400/10 border border-gold-400/20 text-gold-300">
                <Award size={10} className="text-gold-400" />
                <span className="font-mono text-[8px] font-bold uppercase tracking-widest">Top Rated Local Agency 2026</span>
              </div>
              <h4 className="font-display font-extrabold text-2xl sm:text-4xl text-gold-100 tracking-tight leading-tight uppercase">
                WE DRIVE UNSTOPPABLE<br />
                <span className="text-gold-gradient">DIGITAL REVENUE</span>
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto font-light leading-relaxed">
                Hyper-focused search optimization, social campaigns, and elite digital identity construction built for local startups and multi-national groups.
              </p>
              <div className="flex justify-center space-x-3 pt-2">
                <button 
                  onClick={() => setActiveSubTab("contact")}
                  className="px-5 py-2.5 rounded-lg bg-gold-gradient text-dark-deep font-sans font-bold text-[10px] uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  Claim My Free Growth Audit
                </button>
                <button 
                  onClick={() => setActiveSubTab("services")}
                  className="px-5 py-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-white font-sans font-semibold text-[10px] uppercase tracking-wider transition-all cursor-pointer"
                >
                  Our Marketing Coverages
                </button>
              </div>
            </div>
          );
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="py-24 bg-dark-deep relative overflow-hidden px-6 md:px-12 border-t border-gold-400/5"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="text-mono text-xs font-semibold text-gold-400 uppercase tracking-widest mb-3">
            Handcrafted Masterpieces
          </div>
          <h2 className="text-display font-bold text-3xl md:text-5xl uppercase tracking-tight text-white mb-4">
            FEATURED <span className="text-gold-gradient">PROJECTS</span>
          </h2>
          <p className="text-gold-100/60 max-w-xl text-sm md:text-base font-light mb-6">
            An exclusive gallery of performance-tested business web solutions engineered to convert local and global traffic into dedicated customers.
          </p>
        </div>

        {/* Premium Core Trust Indicators Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-16 py-4 px-6 border-y border-gold-400/10 bg-gold-950/20 max-w-3xl mx-auto rounded-xl">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="font-mono text-[10px] sm:text-[11px] text-gold-300/90 tracking-wider font-semibold uppercase">✓ Mobile Responsive</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="font-mono text-[10px] sm:text-[11px] text-gold-300/90 tracking-wider font-semibold uppercase">✓ SEO Optimized</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="font-mono text-[10px] sm:text-[11px] text-gold-300/90 tracking-wider font-semibold uppercase">✓ Fast Loading</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="font-mono text-[10px] sm:text-[11px] text-gold-300/90 tracking-wider font-semibold uppercase">✓ Modern UI/UX</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.15)",
                borderColor: "rgba(212, 175, 55, 0.4)"
              }}
              className="group rounded-2xl bg-dark-card/45 border border-gold-400/10 overflow-hidden transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col h-full relative"
            >
              {/* Premium Top Golden Accent Highlight on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Image Container with Cover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-deep via-transparent to-transparent opacity-85" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded bg-dark-deep/90 border border-gold-400/20 text-[9px] font-mono uppercase tracking-widest text-gold-300 font-semibold backdrop-blur-md">
                  {project.category}
                </div>

                {/* Business Result Overlay Badge */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/85 border border-gold-400/35 font-mono text-xs font-bold text-gold-200 backdrop-blur-md shadow-lg flex items-center space-x-1.5">
                  <TrendingUp size={12} className="text-emerald-400 animate-pulse stroke-[2.5]" />
                  <span>{project.businessResult}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2.5 group-hover:text-gold-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gold-100/70 text-xs md:text-sm font-light leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-0.5 rounded bg-gold-500/5 border border-gold-400/10 font-mono text-[9px] uppercase text-gold-300/80 tracking-widest"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <button
                    onClick={() => setSelectedPreview(project)}
                    className="flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-dark-card border border-gold-400/15 hover:border-gold-400/40 text-gold-200 hover:text-gold-100 text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
                  >
                    <Eye size={13} className="text-gold-400" />
                    <span>Live Preview</span>
                  </button>

                  <button
                    onClick={() => setSelectedCaseStudy(project)}
                    className="flex items-center justify-center space-x-1.5 py-3 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-400/20 hover:border-gold-400/40 text-gold-400 hover:text-gold-300 text-xs font-mono tracking-wider uppercase transition-all duration-300 cursor-pointer"
                  >
                    <BookOpen size={13} className="text-gold-400" />
                    <span>Case Study</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal Overlay */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-dark-deep/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-dark-card border border-gold-400/20 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.8)] z-10"
            >
              {/* Banner/Header */}
              <div className="relative h-44 sm:h-52 overflow-hidden">
                <img
                  src={selectedCaseStudy.imageUrl}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-deep/80 border border-gold-400/15 flex items-center justify-center text-gold-100 hover:text-gold-400 transition-colors"
                >
                  <X size={18} />
                </button>
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 bg-gold-400/10 px-2 py-1 rounded font-semibold border border-gold-400/20">
                    {selectedCaseStudy.category}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-2">
                    {selectedCaseStudy.title}
                  </h3>
                </div>
              </div>

              {/* Content Panels */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 flex items-center space-x-1.5 font-bold">
                    <span>The Challenge</span>
                  </h4>
                  <p className="text-gold-100/70 text-sm font-light leading-relaxed">
                    {selectedCaseStudy.caseStudy.problem}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
                    Our Solution
                  </h4>
                  <p className="text-gold-100/70 text-sm font-light leading-relaxed">
                    {selectedCaseStudy.caseStudy.solution}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
                    Business Results
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedCaseStudy.caseStudy.results.map((result, rIdx) => (
                      <li key={rIdx} className="flex items-start space-x-2 text-sm text-gold-100">
                        <CheckCircle size={15} className="text-emerald-400 mt-0.5 shrink-0 stroke-[2.5]" />
                        <span className="font-sans text-xs sm:text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sticky bottom CTA in Case Study */}
              <div className="p-6 border-t border-gold-400/10 flex items-center justify-between bg-dark-deep/50">
                <span className="text-xs font-mono text-gold-200/40 uppercase font-semibold">Case ID // {selectedCaseStudy.id}</span>
                <a
                  href="https://wa.me/923495167062"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-gold-gradient text-dark-deep font-display font-bold text-xs uppercase tracking-wider cursor-pointer hover:brightness-110 active:scale-98 transition-all"
                >
                  Acquire Similar Build
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Interactive Live Preview Modal Overlay - IMMERSIVE WEB DEVICE SIMULATOR */}
      <AnimatePresence>
        {selectedPreview && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-dark-deep/95 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl bg-dark-card border border-gold-400/20 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 flex flex-col max-h-[90vh]"
            >
              {/* Immersive Toolbar & Device Switcher */}
              <div className="p-4 bg-dark-deep border-b border-gold-400/10 flex flex-col sm:flex-row items-center justify-between gap-3 select-none">
                {/* Simulated URL Bar & Dots */}
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <div className="flex items-center space-x-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  
                  <div className="flex items-center space-x-2 bg-neutral-900 border border-gold-400/10 px-3 py-1 rounded-lg text-[11px] text-gold-300/60 font-mono w-full sm:w-72">
                    <Globe size={11} className="text-gold-400/45" />
                    <span className="truncate">https://client.genzdevelopment.com/{selectedPreview.id}</span>
                  </div>
                </div>

                {/* Device Switcher Controls (Mobile First showcases!) */}
                <div className="flex items-center space-x-1 bg-neutral-900 border border-gold-400/10 p-1 rounded-lg">
                  <button 
                    onClick={() => setDeviceMode("desktop")}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${deviceMode === "desktop" ? "bg-gold-500/10 text-gold-300" : "text-gray-500 hover:text-gray-300"}`}
                    title="Simulate Desktop View"
                  >
                    <Monitor size={14} />
                  </button>
                  <button 
                    onClick={() => setDeviceMode("tablet")}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${deviceMode === "tablet" ? "bg-gold-500/10 text-gold-300" : "text-gray-500 hover:text-gray-300"}`}
                    title="Simulate Tablet View"
                  >
                    <Tablet size={14} />
                  </button>
                  <button 
                    onClick={() => setDeviceMode("mobile")}
                    className={`p-1.5 rounded transition-colors cursor-pointer ${deviceMode === "mobile" ? "bg-gold-500/10 text-gold-300" : "text-gray-500 hover:text-gray-300"}`}
                    title="Simulate Mobile First View"
                  >
                    <Smartphone size={14} />
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={handleCloseModal}
                  className="w-8 h-8 rounded-full bg-dark-card border border-gold-400/10 hover:border-gold-400/30 flex items-center justify-center text-gold-100 hover:text-gold-400 transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Dynamic Resizing Simulated Webpage Screen Container */}
              <div className="flex-grow overflow-y-auto bg-neutral-950 p-4 sm:p-6 flex items-start justify-center min-h-[350px] max-h-[65vh]">
                <motion.div
                  animate={{ 
                    width: deviceMode === "mobile" ? "340px" : deviceMode === "tablet" ? "680px" : "100%"
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="bg-black border border-gold-400/10 rounded-xl overflow-hidden shadow-2xl flex flex-col w-full h-full max-w-full"
                >
                  {/* Embedded Custom Website Simulated Header */}
                  <div className="bg-neutral-900 border-b border-gold-400/5 px-4 py-3 flex items-center justify-between">
                    <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest text-gold-gradient uppercase">
                      {selectedPreview.title.split(" ")[0]}
                    </span>
                    
                    {/* Simulated Sub Tab Navigation Menu */}
                    <div className="flex space-x-1.5 sm:space-x-3 text-[10px] sm:text-xs">
                      {selectedPreview.id === "restaurant-1" && (
                        <>
                          <button 
                            onClick={() => { setActiveSubTab("home"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "home" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Home
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("menu"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "menu" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Menu
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("reservation"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "reservation" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Reservation
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("contact"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "contact" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Contact
                          </button>
                        </>
                      )}

                      {selectedPreview.id === "clinic-2" && (
                        <>
                          <button 
                            onClick={() => { setActiveSubTab("home"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "home" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Home
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("doctors"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "doctors" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Doctors
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("services"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "services" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Services
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("appointments"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "appointments" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Appointments
                          </button>
                        </>
                      )}

                      {selectedPreview.id === "agency-3" && (
                        <>
                          <button 
                            onClick={() => { setActiveSubTab("home"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "home" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Home
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("services"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "services" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Services
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("portfolio"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "portfolio" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Portfolio
                          </button>
                          <button 
                            onClick={() => { setActiveSubTab("contact"); setFormSubmitted(false); }}
                            className={`px-1.5 sm:px-2 py-0.5 rounded cursor-pointer ${activeSubTab === "contact" ? "text-gold-300 font-bold border-b border-gold-400" : "text-gray-400"}`}
                          >
                            Contact
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Simulated Inner Page Body with realistic background image */}
                  <div className="relative p-6 sm:p-10 bg-neutral-900/95 overflow-hidden flex-grow flex items-center justify-center min-h-[250px]">
                    <div className="absolute inset-0 z-0">
                      <img 
                        src={selectedPreview.imageUrl}
                        alt="Background Banner"
                        className="w-full h-full object-cover opacity-15 select-none pointer-events-none"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-neutral-950/80" />
                    </div>

                    <div className="relative z-10 w-full">
                      {renderDemoContent(selectedPreview)}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sticky bottom Simulator Status info */}
              <div className="p-4 bg-dark-deep border-t border-gold-400/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-gold-300/40 select-none">
                <span className="uppercase text-[10px] tracking-widest font-semibold flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5 animate-pulse" />
                  <span>Interactive High-Fidelity Sandbox Preview</span>
                </span>
                
                <a
                  href="https://wa.me/923495167062"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-gold-400 hover:text-gold-200 uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  <span>Build For My Business</span>
                  <ExternalLink size={12} className="stroke-[2]" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

