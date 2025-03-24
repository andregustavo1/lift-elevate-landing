
import React from "react";
import SectionTitle from "./SectionTitle";
import { 
  Award, 
  Shield, 
  Clock, 
  Settings
} from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Award,
      title: "Alta Performance",
      description: "Equipamentos para as mais diversas necessidades logísticas"
    },
    {
      icon: Shield,
      title: "Segurança Garantida",
      description: "Compromisso com a segurança nas operações"
    },
    {
      icon: Clock,
      title: "Atendimento Ágil",
      description: "Entrega e locação rápidas"
    },
    {
      icon: Settings,
      title: "Soluções Personalizadas",
      description: "Atendimento que atende às necessidades específicas de cada cliente"
    }
  ];

  return (
    <section id="diferenciais" className="section-padding bg-neutral-200">
      <div className="container mx-auto">
        <SectionTitle
          title="Por Que Nos Escolher?"
          subtitle="Equipamentos de qualidade e atendimento ágil para suas operações logísticas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="card-neomorphic appear animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-primary p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-neutral-800/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
