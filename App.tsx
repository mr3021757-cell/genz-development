import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Reviews from "./components/Reviews";
import VideoTestimonials from "./components/VideoTestimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";

// Homepage combination component
function HomePage() {
  return (
    <div className="relative bg-dark-deep min-h-screen text-gold-100 flex flex-col selection:bg-gold-400/30 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <VideoTestimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      )}
    </>
  );
}
