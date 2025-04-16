
import React from "react";
import SectionTitle from "./SectionTitle";
import { Phone, MapPin, Instagram } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contato" className="section-padding bg-neutral-100">
      <div className="container mx-auto">
        <SectionTitle
          title="Entre em Contato"
          subtitle="Estamos prontos para ajudar no seu projeto"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-6 max-w-md mx-auto md:mx-0">
              <div className="flex items-start gap-4 appear animate-fade-in">
                <div className="bg-primary p-3 rounded-full">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/5527993163937" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-neutral-800 hover:text-primary transition-colors"
                  >
                    +55 27 99316-3937
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 appear animate-fade-in" style={{ animationDelay: '100ms' }}>
                <div className="bg-primary p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Localização</h3>
                  <p className="text-neutral-800">
                    Serra, Espírito Santo
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 appear animate-fade-in" style={{ animationDelay: '200ms' }}>
                <div className="bg-primary p-3 rounded-full">
                  <Instagram className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Instagram</h3>
                  <p className="text-neutral-800/70 italic">
                    Em breve
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-xl h-[400px] appear animate-fade-in" style={{ animationDelay: '300ms' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60025.972381589805!2d-40.34387425126592!3d-20.12891752092791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81a6d0308b802%3A0xf1a7d05185c4f5e5!2sSerra%2C%20ES!5e0!3m2!1spt-BR!2sbr!4v1656538156498!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da LIFT Empilhadeiras"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
