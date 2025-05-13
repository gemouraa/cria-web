
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-portfolio-dark mb-4">Entre em Contato</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estou disponível para novos projetos e parcerias. Entre em contato pelo WhatsApp para conversarmos sobre como posso ajudar a impulsionar seu negócio.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-2xl font-bold text-portfolio-dark mb-6 text-center">Contato via WhatsApp</h3>
            
            <div className="flex justify-center">
              <Button 
                className="w-full py-6 mb-3 bg-green-600 hover:bg-green-700 text-white text-lg" 
                onClick={() => window.open("https://wa.me/71988514981", "_blank")}
              >
                <MessageSquare className="mr-3 h-6 w-6" />
                Chamar no WhatsApp
              </Button>
            </div>
            
            <p className="text-center text-gray-600 mt-6">
              Respondo mensagens em horário comercial.<br />
              Para propostas de trabalho, por favor, envie detalhes do seu projeto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
