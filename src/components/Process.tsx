
import React from "react";
import SectionTitle from "./SectionTitle";
import { 
  MessageSquare, 
  FileSearch, 
  ClipboardList, 
  Truck, 
  HeadphonesIcon 
} from "lucide-react";

const Process: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consulta Inicial",
      description: "Entendimento das necessidades do cliente"
    },
    {
      icon: FileSearch,
      title: "Análise Técnica",
      description: "Escolha do equipamento adequado"
    },
    {
      icon: ClipboardList,
      title: "Proposta Detalhada",
      description: "Definição de prazos e condições"
    },
    {
      icon: Truck,
      title: "Locação ou Venda",
      description: "Entrega do equipamento"
    },
    {
      icon: HeadphonesIcon,
      title: "Acompanhamento",
      description: "Suporte durante o uso do equipamento"
    }
  ];

  return (
    <section id="processo" className="section-padding bg-secondary text-white">
      <div className="container mx-auto">
        <SectionTitle
          title="Como Trabalhamos"
          subtitle="Um processo eficiente para entregar as melhores soluções"
          light={true}
        />

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-4 top-8 bottom-8 w-1 bg-primary hidden md:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative flex flex-col md:flex-row md:items-start gap-6 appear animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 z-10 bg-primary rounded-full w-10 h-10 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-secondary" />
                </div>
                
                <div className="md:pt-0">
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {step.title}
                  </h3>
                  <p className="text-white/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
