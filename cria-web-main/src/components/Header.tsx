
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "Portfólio", href: "#portfolio" },
  { label: "Sobre", href: "#about" },
  { label: "Contato", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for header styling
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine which section is currently in view
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          if (section.id) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="font-bold text-xl text-portfolio-blue">Cria Web</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`cursor-pointer transition-colors font-medium ${
                activeSection === item.href.substring(1) 
                  ? "text-portfolio-accent" 
                  : "text-gray-700 hover:text-portfolio-accent"
              }`}
            >
              {item.label}
            </a>
          ))}
          
          <a 
            href="https://github.com/gemouraa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-portfolio-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          
          <Button 
            onClick={() => window.open("https://wa.me/71988514981", "_blank")}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            WhatsApp
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="https://github.com/gemouraa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-portfolio-blue"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMenu} 
            className="text-portfolio-blue"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`py-2 cursor-pointer font-medium ${
                  activeSection === item.href.substring(1) 
                    ? "text-portfolio-accent" 
                    : "text-gray-700 hover:text-portfolio-accent"
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button 
              onClick={() => window.open("https://wa.me/71988514981", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white w-full"
            >
              WhatsApp
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
