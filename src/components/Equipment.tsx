
import React from "react";
import SectionTitle from "./SectionTitle";

const Equipment: React.FC = () => {
  const equipment = [
    {
      name: "Empilhadeiras",
      description: "Para transporte de grandes cargas",
      image: "https://images.unsplash.com/photo-1635774855717-1a3eea0f7eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
    },
    {
      name: "Transpaleteiras",
      description: "Facilita o manuseio de pallets",
      image: "https://images.unsplash.com/photo-1624365169161-ffc754adc4c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Paleteiras",
      description: "Para movimentação de pallets em espaços reduzidos",
      image: "https://images.unsplash.com/photo-1678993218899-2e9f8fba409f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      name: "Plataformas Elevatórias",
      description: "Solução para elevação segura de cargas",
      image: "https://images.unsplash.com/photo-1601372806627-3d4329a5e6ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section id="equipamentos" className="section-padding bg-white">
      <div className="container mx-auto">
        <SectionTitle
          title="Equipamentos Especializados"
          subtitle="Soluções completas para transporte e elevação de cargas"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {equipment.map((item, index) => (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden shadow-lg transition-all duration-500 appear animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
