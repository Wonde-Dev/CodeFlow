import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { useEffect, useState } from "react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-theme text-theme overflow-hidden">
        <Navbar scrolled={scrolled} />
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
