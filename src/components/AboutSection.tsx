import { Award, Star } from 'lucide-react';
import fotoSolange from '../assets/foto_solange.jpg';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-12 relative">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-6 md:p-8 lg:p-10 border-primary-gold/10 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-gold/10 blur-3xl rounded-full" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <Reveal delay={0}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Conoce a <br/><span className="text-primary-gold">Solange Bianconi</span></h2>
                <p className="text-gray-300 mb-6 text-base leading-relaxed">
                  Soy Solange Bianconi, creadora de este espacio. Me especializo en Cejas (Micropigmentación), Pestañas y Cosmetología Facial. Me apasiona crear miradas armoniosas y lograr que cada clienta viva una experiencia relajante y personalizada. Trabajo con dedicación para que te sientas feliz con el resultado.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-gold/20 p-1.5 rounded-lg text-primary-gold">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">Campeona Championship Brows</h4>
                      <p className="text-gray-400 text-xs">Reconocimiento internacional por excelencia en diseño de cejas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-primary-gold/20 p-1.5 rounded-lg text-primary-gold">
                      <Star size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">Embajadora Thuya Argentina</h4>
                      <p className="text-gray-400 text-xs">Representando a una de las marcas más prestigiosas en cosmética.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative max-w-sm mx-auto mt-8 md:mt-0">
                {/* Photo placeholder (glassy frame) */}
                <div className="aspect-[4/5] rounded-2xl glass-panel p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-dark-bg/80 rounded-xl overflow-hidden flex items-center justify-center relative">
                     <img src={fotoSolange} alt="Solange Bianconi" className="w-full h-full object-cover relative z-10" />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 glass-panel px-4 py-2 rounded-xl border border-primary-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <p className="text-lg font-bold text-primary-gold">+1000</p>
                  <p className="text-[10px] text-gray-300 uppercase tracking-wider">Clientas Felices</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
