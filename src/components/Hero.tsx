
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-neutral-100">
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div 
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: 'url("https://img.freepik.com/free-photo/forklift-transporting-cargo-container-distribution-warehouse-generative-ai_188544-19484.jpg?t=st=1742836448~exp=1742840048~hmac=125f0ef676d8d8209b77d44670943cab2aba9b041a25aaef61223501250336ea&w=1060")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-primary rounded text-sm font-semibold text-black mb-4 appear animate-fade-in">
            Venda e Locação de Equipamentos
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight appear animate-fade-in" style={{ animationDelay: '100ms' }}>
            Soluções em Transporte e Elevação de Cargas
          </h1>
          <p className="text-xl text-slate-300 mb-8 appear animate-fade-in" style={{ animationDelay: '200ms' }}>
            Venda e locação de equipamentos de alta performance para otimizar suas operações logísticas.
          </p>
          <div className="flex flex-wrap gap-4 appear animate-fade-in" style={{ animationDelay: '300ms' }}>
            <a href="#equipamentos" className="btn-primary inline-flex items-center gap-2">
              Conheça Nossos Equipamentos
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contato" className="btn-outline text-white border-white inline-flex items-center">
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#sobre" className="text-neutral-800 hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
