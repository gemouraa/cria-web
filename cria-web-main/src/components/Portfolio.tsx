
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl?: string;
}

const ProjectCard = ({ title, description, tags, imageUrl, projectUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="h-48 overflow-hidden bg-gray-200">
        <div 
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold text-portfolio-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-portfolio-accent/10 text-portfolio-accent hover:bg-portfolio-accent/20">
              {tag}
            </Badge>
          ))}
        </div>
        {projectUrl && (
          <div className="mt-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-portfolio-blue hover:text-portfolio-accent"
              onClick={() => window.open(projectUrl, "_blank")}
            >
              <ExternalLink size={16} className="mr-1" /> Visitar
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default function Portfolio() {
  const projects: ProjectProps[] = [
    {
      title: "LIS Sustentável",
      description: "Site institucional para o projeto LIS Sustentável, focado em iniciativas de sustentabilidade e ações ambientais.",
      tags: ["Web", "Institucional", "Sustentabilidade"],
      imageUrl: "https://images.unsplash.com/photo-1464983953574-0892a716854b?q=80&w=1740&auto=format&fit=crop", // Imagem de ecologia
      projectUrl: "https://site-lis-sustentavel.vercel.app/",
    },
    {
      title: "Educa Link",
      description: "O Educa Link é uma plataforma de educação digital, criada para facilitar o aprendizado e a conexão entre alunos e professores. Com foco na acessibilidade e funcionalidade, o projeto foi desenvolvido para apoiar a educação a distância.",
      tags: ["Educação", "Back-End", "API"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1740&auto=format&fit=crop",
      projectUrl: "https://school-success-sphere.vercel.app/",
    },
    {
      title: "App de Gestão de Tarefas",
      description: "Aplicativo web para gestão de tarefas e projetos, com sincronização em tempo real e análise de produtividade.",
      tags: ["Web App", "Produtividade", "SPA"],
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop",
    },
    {
      title: "Nildes festas",
      description: "Site institucional da Nildes Festas, trazendo soluções em festas e eventos personalizados.",
      tags: ["Web", "Eventos", "Institucional"],
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1740&auto=format&fit=crop",
      projectUrl: "https://nildes-festas-site.vercel.app",
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-dark mb-4">Meu Portfólio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos nos quais trabalhei e como ajudei a transformar ideias em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
