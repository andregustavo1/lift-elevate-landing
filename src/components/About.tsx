
import React from "react";
import SectionTitle from "./SectionTitle";
import { CheckCircle } from "lucide-react";

const About: React.FC = () => {
  const diferenciais = [
    "Equipamentos de alta qualidade",
    "Atendimento personalizado",
    "Soluções rápidas e eficientes",
    "Compromisso com a segurança",
  ];

  return (
    <section id="sobre" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="appear animate-fade-in-right">
            <SectionTitle
              title="Sobre a LIFT TRANSPORTES"
              centered={false}
            />
            <p className="text-lg text-neutral-800/80 mb-8">
              A LIFT TRANSPORTES é especializada na venda e locação de equipamentos para transporte e 
              elevação de cargas, com foco em oferecer soluções práticas e seguras para o setor logístico. 
              Nossos equipamentos de alta qualidade são projetados para atender às necessidades específicas 
              de cada cliente, garantindo produtividade e segurança em todas as operações.
            </p>

            <h3 className="text-xl font-semibold mb-4">Nossos diferenciais:</h3>
            <ul className="space-y-3">
              {diferenciais.map((item, index) => (
                <li key={index} className="flex items-start gap-3 appear animate-fade-in" style={{ animationDelay: `${index * 100 + 100}ms` }}>
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl appear animate-fade-in-left">
            <img 
              src="https://images.unsplash.com/photo-1505466607153-5b862f247ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" 
              alt="Equipamentos Lift Transportes em operação" 
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
