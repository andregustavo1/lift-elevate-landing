
import React from "react";
import { Phone, Instagram, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="text-2xl font-bold mb-6 inline-block">
              LIFT <span className="text-primary">TRANSPORTES</span>
            </a>
            <p className="text-white/70 mt-4 max-w-xs">
              Soluções em transporte e elevação de cargas, venda e locação de equipamentos de alta performance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#sobre" className="text-white/70 hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-white/70 hover:text-primary transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#equipamentos" className="text-white/70 hover:text-primary transition-colors">
                  Equipamentos
                </a>
              </li>
              <li>
                <a href="#processo" className="text-white/70 hover:text-primary transition-colors">
                  Nosso Processo
                </a>
              </li>
              <li>
                <a href="#contato" className="text-white/70 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a 
                  href="https://wa.me/5527993163937" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-white/70 hover:text-white transition-colors"
                >
                  +55 27 99316-3937
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary" />
                <span className="text-white/70 italic">
                  Em breve
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-white/70">
                  Serra, Espírito Santo
                </span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Horário de Atendimento</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                Segunda - Sexta: 8h às 18h
              </li>
              <li className="text-white/70">
                Sábado: 8h às 12h
              </li>
              <li className="text-white/70">
                Domingo: Fechado
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50">
            © {new Date().getFullYear()} LIFT Empilhadeiras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
