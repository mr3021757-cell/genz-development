import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageSquare, Cpu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location]);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      // Let the homepage load, then scroll
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappUrl = "https://wa.me/923495167062";

  const navItems = [
    { label: "Home", action: () => handleNavClick("hero") },
    { label: "Services", action: () => handleNavClick("services") },
    { label: "Projects", action: () => handleNavClick("portfolio") },
    { label: "Contact", action: () => handleNavClick("contact") },
  ];

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-dark-deep/80 backdrop-blur-xl border-b border-gold-400/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("hero")}
            className="flex items-center space-x-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-gold-400/25 bg-dark-card/60 transition-all duration-300 group-hover:border-gold-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Cpu size={18} className="text-gold-400 transition-transform duration-500 group-hover:rotate-180" />
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-wider text-gold-gradient">
              GEN'Z
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                className="font-sans text-sm font-medium tracking-wide text-gold-100/70 hover:text-gold-300 cursor-pointer transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-dark-card hover:bg-gold-500/10 border border-gold-400/20 hover:border-gold-400/50 rounded-xl px-5 py-2.5 text-gold-400 text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)] group"
            >
              <MessageSquare size={16} className="text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Contact on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <a
              href={whatsappUrl}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-dark-card border border-gold-400/25 text-gold-400"
              aria-label="Contact WhatsApp"
            >
              <MessageSquare size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-xl bg-dark-card border border-gold-400/15 text-gold-100/80 hover:text-gold-300 hover:border-gold-400/40 transition-colors duration-200"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 top-[72px] z-30 bg-dark-deep/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-8 border-t border-gold-400/10"
          >
            <div className="flex flex-col space-y-6 pt-4">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={item.action}
                  className="text-left font-display text-2xl font-semibold tracking-wide text-gold-100 hover:text-gold-400 transition-colors duration-200"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Drawer Bottom Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col space-y-4 pb-12"
            >
              <div className="h-[1px] w-full bg-gold-400/10" />
              <p className="text-xs font-mono text-gold-300/40 uppercase tracking-widest text-center">
                GEN'Z Development — FROM IDEA TO REALITY
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gold-gradient text-dark-deep text-center font-display font-bold text-sm tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-[0_4px_20px_rgba(212,175,55,0.25)] flex items-center justify-center space-x-2"
              >
                <MessageSquare size={16} />
                <span>START CONVERSATION</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
