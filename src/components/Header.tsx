
import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass shadow-sm opacity-100"
          : "py-6 opacity-0"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-secondary transition-colors">
            LIFT <span className="text-primary">TRANSPORTES</span>
          </a>
        </div>

        <nav className="hidden md:flex space-x-8">
          <a
            href="#sobre"
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Sobre
          </a>
          <a
            href="#diferenciais"
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Diferenciais
          </a>
          <a
            href="#equipamentos"
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Equipamentos
          </a>
          <a
            href="#processo"
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Processo
          </a>
          <a
            href="#contato"
            className="text-secondary hover:text-primary transition-colors font-medium"
          >
            Contato
          </a>
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex btn-primary"
        >
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
};

export default Header;
