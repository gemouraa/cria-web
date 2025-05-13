
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Guilherme Moura | Desenvolvedor Full Stack";
    
    // Add entrance animation to sections with a smooth staggered delay
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation with staggered delay
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 }); // Slightly higher threshold for better timing
    
    sections.forEach(section => {
      if (section.id !== 'home') { // Skip the hero section as it has its own animations
        observer.observe(section);
      }
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
