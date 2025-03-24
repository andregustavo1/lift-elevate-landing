
import React from "react";
import SectionTitle from "./SectionTitle";

const Equipment: React.FC = () => {
  const equipment = [
    {
      name: "Empilhadeiras",
      description: "Para transporte de grandes cargas",
      image: "https://img.freepik.com/free-photo/industrial-building-large-warehouse-interior-with-forklift-palette-with-goods-shelves_342744-1492.jpg?t=st=1742837033~exp=1742840633~hmac=e2e87559f048a2b38b40368896a75b0c322841738fad9e96f0e7285c64d9f48f&w=996"
    },
    {
      name: "Transpaleteiras",
      description: "Facilita o manuseio de pallets",
      image: "https://img.freepik.com/free-photo/woman-warehouse-worker-operating-forklift-machine-large-distribution-warehouse-center_342744-1466.jpg?t=st=1742836977~exp=1742840577~hmac=80d9646d5e93d690c1942bc9df9905c6b2c99746e5c182675cc1397038ab06f9&w=996"
    },
    {
      name: "Paleteiras",
      description: "Para movimentação de pallets em espaços reduzidos",
      image: "https://img.freepik.com/free-photo/colleagues-safety-equipment-working_23-2148976303.jpg?t=st=1742837025~exp=1742840625~hmac=1fe496547f7f83c6dccb6f2454fad8b9486d2c37c1a8f764a14f91b2a91ca9f2&w=1380"
    },
    {
      name: "Plataformas Elevatórias",
      description: "Solução para elevação segura de cargas",
      image: "https://img.freepik.com/free-photo/factory-workshop-interior-machines-glass-industry-background-process-production_645730-553.jpg?t=st=1742837103~exp=1742840703~hmac=eaef40162c18329d437a63799325ff667314a4ef8af3cddad5459425817e950c&w=996"
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
