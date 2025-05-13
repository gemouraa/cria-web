
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const downloadCV = () => {
    // Create a link to download the PDF CV
    const pdfUrl = "/Guilherme_Moura_Vitoriano_CV.pdf"; // This file should be added to the public folder
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = "Guilherme_Moura_Vitoriano_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-dark mb-6">Sobre mim</h2>
            <p className="text-gray-700 mb-4">
              Olá! Sou Guilherme Moura, desenvolvedor em formação com foco em soluções web e sistemas completos. Atuo principalmente como back-end, mas venho me aperfeiçoando no front-end para entregar projetos mais completos e funcionais.
            </p>
            <p className="text-gray-700 mb-4">
              Atualmente estou finalizando o curso técnico em Desenvolvimento de Sistemas pelo SENAI, onde tive contato prático com linguagens como Java, C++ e Python. Tenho mais experiência no back-end com Java (Spring Boot), criação de APIs e manipulação de bancos de dados relacionais. Também venho aprendendo React e explorando ferramentas modernas de front-end com o apoio de IA, o que tem me ajudado bastante a evoluir.
            </p>
            <p className="text-gray-700 mb-6">
              Gosto de resolver problemas de forma simples, objetiva e funcional. Meu objetivo é crescer como freelancer e oferecer soluções acessíveis para pessoas e negócios que precisam se digitalizar — principalmente na minha cidade, Salvador.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-lightBlue text-white"
                onClick={downloadCV}
              >
                <FileText className="mr-2 h-4 w-4" />
                Baixar Currículo
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg bg-gradient-to-br from-portfolio-blue to-portfolio-accent opacity-20 absolute -top-4 -right-4"></div>
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-lg bg-gray-200 relative z-10 overflow-hidden group">
                <Avatar className="w-full h-full rounded-lg transition-transform duration-300 group-hover:scale-105">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-portfolio-blue mb-2">Habilidades</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Java (Spring Boot)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>SQL (Banco de dados)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>APIs RESTful</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Desenvolvimento de sistemas completos</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-portfolio-blue mb-2">Educação</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Colégio Wallon (2020-2023) - Ensino médio completo</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Desenvolvimento de Sistemas - SENAI (Cursando)</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Instituto Coca-Cola para jovens</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-portfolio-blue mb-2">Tecnologias</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Spring Boot</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>Git/GitHub</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>MySQL/PostgreSQL</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-portfolio-accent mr-2"></div>
                <span>APIs e Integrações</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
