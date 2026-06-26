import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { FirebaseService } from "../lib/firebase";
import { Mail, Lock, Sparkles, Cpu, ArrowLeft, Chrome, AlertCircle } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successUser, setSuccessUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user already logged in
    const user = FirebaseService.getCurrentUser();
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage("Please input both email and password parameters.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await FirebaseService.loginWithEmail(email, password);
      setIsLoading(false);
      if (res.success && res.user) {
        setSuccessUser(res.user);
        // Beautiful success popup then navigate
        setTimeout(() => {
          navigate("/");
        }, 1800);
      } else {
        setErrorMessage(res.error || "Authentication failed. Try again.");
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMessage("System error on security handshake.");
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const res = await FirebaseService.loginWithGoogle();
      setIsLoading(false);
      if (res.success && res.user) {
        setSuccessUser(res.user);
        setTimeout(() => {
          navigate("/");
        }, 1800);
      } else {
        setErrorMessage(res.error || "Google authentication handshake failed.");
      }
    } catch (err) {
      setIsLoading(false);
      setErrorMessage("System error on Google security link.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-dark-deep bg-grid-pattern px-6 py-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[150px] pointer-events-none" />

      {/* Floating Home Link */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center space-x-2 text-gold-400/60 hover:text-gold-400 text-xs font-mono uppercase tracking-wider transition-colors"
      >
        <ArrowLeft size={14} />
        <span>Back to Atelier</span>
      </Link>

      <div className="w-full max-w-md relative z-10">
        
        {/* Logo Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2.5 mb-4 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl border border-gold-400/25 bg-dark-card/60">
              <Cpu size={18} className="text-gold-400" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-gold-gradient">
              GEN'Z
            </span>
          </Link>
          <p className="text-xs font-mono text-gold-300/40 uppercase tracking-widest">
            AUTHENTICATION PORTAL
          </p>
        </div>

        {/* Auth Deck */}
        <div className="p-8 md:p-10 rounded-3xl bg-dark-card/40 border border-gold-400/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!successUser ? (
              <motion.div
                key="login-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Greeting */}
                <div className="mb-6 text-center sm:text-left">
                  <h2 className="font-display font-semibold text-xl text-white tracking-wide">
                    Access Code Core
                  </h2>
                  <p className="text-gold-100/50 text-xs font-light mt-1">
                    Connect your professional parameters to synchronize configurations.
                  </p>
                </div>

                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center space-x-2 text-red-400 text-xs font-light"
                  >
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleEmailLogin} className="space-y-4">
                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-mono text-[9px] uppercase tracking-wider text-gold-400/60 block">
                      Secure Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400/30 w-4 h-4" />
                      <input
                        type="email"
                        required
                        disabled={isLoading}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="developer@genz.dev"
                        className="w-full pl-10 pr-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/10 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div className="space-y-1.5">
                    <label className="text-mono text-[9px] uppercase tracking-wider text-gold-400/60 block">
                      Access Key / Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold-400/30 w-4 h-4" />
                      <input
                        type="password"
                        required
                        disabled={isLoading}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-dark-deep border border-gold-400/10 focus:border-gold-400/50 rounded-xl text-sm text-gold-100 placeholder-gold-300/10 outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-3.5 rounded-xl bg-gold-gradient text-dark-deep font-display font-semibold text-xs tracking-widest uppercase hover:brightness-110 active:scale-98 transition-all disabled:opacity-50 flex items-center justify-center space-x-1.5 cursor-pointer shadow-[0_4px_15px_rgba(212,175,55,0.15)]"
                    >
                      {isLoading ? (
                        <div className="w-4 h-4 border-2 border-dark-deep border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <span>INITIATE SIGN IN</span>
                      )}
                    </button>
                  </div>
                </form>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gold-400/10"></div>
                  </div>
                  <span className="relative px-3 bg-dark-card text-[9px] font-mono text-gold-300/20 uppercase tracking-widest">
                    OR SECURE CORRIDOR
                  </span>
                </div>

                {/* Google Provider Button */}
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl bg-dark-deep hover:bg-gold-500/5 border border-gold-400/10 hover:border-gold-400/30 text-gold-200 text-xs font-mono tracking-wider uppercase transition-colors flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Chrome size={14} className="text-gold-400" />
                  <span>Google Provider Portal</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="login-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-400/40 flex items-center justify-center text-gold-400 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.3)] animate-bounce">
                  <Sparkles size={28} />
                </div>
                
                <h3 className="font-display font-bold text-2xl text-white uppercase tracking-wide">
                  Welcome back
                </h3>
                
                <p className="text-gold-gradient text-sm font-semibold tracking-wider uppercase mt-1">
                  {successUser.displayName}
                </p>

                <p className="text-gold-100/40 text-xs font-mono mt-4">
                  Establishing security tunnels...
                </p>

                <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden mt-6 mx-auto">
                  <motion.div
                    initial={{ left: "-100%" }}
                    animate={{ left: "100%" }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="relative h-full w-1/2 bg-gold-400"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Footer info */}
        <p className="text-center text-[10px] font-mono text-gold-300/20 uppercase tracking-widest mt-8">
          GEN'Z DEVELOPMENT CORE © 2026-PRESENT // CRYPTO SAFE
        </p>
      </div>
    </div>
  );
}
