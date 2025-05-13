
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Code, FileCode, Laptop, LayoutDashboard, Zap } from "lucide-react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Transforme suas ideias em soluções digitais de qualidade! Especializado em desenvolvimento de sistemas completos para pequenos negócios.";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-blue-50/80 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center space-y-6 order-2 md:order-1 text-center md:text-left">
            <div className="animate-slide-down" style={{animationDelay: "0.1s"}}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-portfolio-dark leading-tight mb-2">
                Cria Web
              </h1>
              <div className="h-1 w-20 bg-portfolio-accent mx-auto md:mx-0 mb-4"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-portfolio-accent leading-tight">
                por Guilherme Moura Vitoriano
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-gray-700 max-w-lg mx-auto md:mx-0 animate-fade-in relative" style={{animationDelay: "0.3s"}}>
              {typedText}
              <span className="animate-pulse">|</span>
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in" style={{animationDelay: "0.5s"}}>
              <div className="flex flex-col items-center bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                <FileCode className="text-portfolio-blue h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
              <div className="flex flex-col items-center bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                <Laptop className="text-portfolio-blue h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Responsive Design</span>
              </div>
              <div className="flex flex-col items-center bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                <LayoutDashboard className="text-portfolio-blue h-8 w-8 mb-2" />
                <span className="text-sm font-medium">Admin Panels</span>
              </div>
              <div className="flex flex-col items-center bg-white/80 rounded-lg p-3 shadow-sm hover:shadow-md transition-all">
                <Zap className="text-portfolio-blue h-8 w-8 mb-2" />
                <span className="text-sm font-medium">API Integration</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-slide-up" style={{animationDelay: "0.7s"}}>
              <Button 
                onClick={() => scrollToSection("#portfolio")}
                className="bg-portfolio-blue hover:bg-portfolio-lightBlue text-white"
                size="lg"
              >
                Ver meus projetos
              </Button>
              <Button 
                onClick={() => scrollToSection("#contact")}
                variant="outline" 
                size="lg"
                className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
              >
                Entre em contato
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-portfolio-blue to-portfolio-accent rounded-full blur opacity-30 animate-pulse"></div>
              <div 
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl relative hover:scale-105 hover:-translate-y-2 transition-all duration-500 cursor-pointer transform-gpu" 
              >
                <Avatar className="w-full h-full rounded-none">
                  <AvatarImage 
                    src="/lovable-uploads/147fe995-6455-417a-8fa5-47ef1ea59747.png" 
                    alt="Guilherme Moura Vitoriano" 
                    className="object-cover w-full h-full" 
                  />
                  <AvatarFallback className="w-full h-full text-6xl font-bold">GM</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
