
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ShoppingBag, Settings, LayoutDashboard, Share2 } from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="p-3 rounded-lg bg-portfolio-accent/10 w-fit mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold text-portfolio-dark">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-700 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default function Services() {
  const services = [
    {
      title: "🖥️ Criação de Sites Profissionais",
      description: "Sites institucionais, páginas de apresentação ou portfólios pessoais. Layout moderno e responsivo. Pode incluir formulário de contato, Google Maps, galeria de fotos e botão do WhatsApp.",
      icon: <Globe className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      title: "🛒 Lojas e Catálogos Online Simples",
      description: "Páginas para exibição de kits de festas, produtos ou serviços. Vitrine com informações organizadas e botão de contato direto.",
      icon: <ShoppingBag className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      title: "🛠️ Sistemas Web Personalizados",
      description: "Desenvolvimento sob demanda para clínicas, escolas, comércios, etc. Exemplo: gestão de pacientes, controle de estoque, agenda de serviços.",
      icon: <Settings className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      title: "📊 Painéis Administrativos com Dashboard",
      description: "Acesso restrito para controlar informações, dados e pedidos. Interface com gráficos, listas, filtros e relatórios.",
      icon: <LayoutDashboard className="w-6 h-6 text-portfolio-accent" />,
    },
    {
      title: "🌐 Integração com APIs",
      description: "Conexão com serviços externos como consulta de CEP, localização, envio automático de mensagens, entre outros.",
      icon: <Share2 className="w-6 h-6 text-portfolio-accent" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-dark mb-4">Serviços Oferecidos</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Como desenvolvedor Full Stack em formação pelo SENAI, ofereço soluções digitais completas, pensadas para pequenos negócios, empreendedores e profissionais autônomos que desejam marcar presença online de forma acessível e eficiente. Confira abaixo os serviços que posso desenvolver para você ou sua empresa:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
