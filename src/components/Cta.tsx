
import React from "react";

const Cta: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-neutral-800 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1635774855717-1a3eea0f7eb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 appear animate-fade-in">
            Pronto para Otimizar Suas Operações?
          </h2>
          <p className="text-xl text-white/80 mb-8 appear animate-fade-in" style={{ animationDelay: '100ms' }}>
            Solicite um orçamento e melhore sua logística com equipamentos de alta performance
          </p>
          <a 
            href="https://wa.me/5527993163937?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20da%20LIFT%20TRANSPORTES." 
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex appear animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            Fale com um Especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
