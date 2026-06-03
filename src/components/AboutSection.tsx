import { Award, Star } from 'lucide-react';
import fotoSolange from '../assets/foto_solange.jpg';
import { Reveal } from './Reveal';

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel p-8 md:p-12 lg:p-16 border-primary-gold/10 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-gold/10 blur-3xl rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal delay={0}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Conoce a <br/><span className="text-primary-gold">Solange Bianconi</span></h2>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  Especialista en Cejas y Maquillaje Permanente (PMU) con amplia trayectoria en el rubro de la estética. Su pasión por el detalle y la belleza natural la ha llevado a destacarse a nivel internacional.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary-gold/20 p-2 rounded-lg text-primary-gold">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Campeona Championship Brows</h4>
                      <p className="text-gray-400 text-sm">Reconocimiento internacional por excelencia en diseño de cejas.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 bg-primary-gold/20 p-2 rounded-lg text-primary-gold">
                      <Star size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Embajadora Thuya Argentina</h4>
                      <p className="text-gray-400 text-sm">Representando a una de las marcas más prestigiosas en cosmética.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative">
                {/* Photo placeholder (glassy frame) */}
                <div className="aspect-[4/5] rounded-2xl glass-panel p-2 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full bg-dark-bg/80 rounded-xl overflow-hidden flex items-center justify-center relative">
                     <img src={fotoSolange} alt="Solange Bianconi" className="w-full h-full object-cover relative z-10" />
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 rounded-2xl border border-primary-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <p className="text-2xl font-bold text-primary-gold">+1000</p>
                  <p className="text-xs text-gray-300 uppercase tracking-wider">Clientas Felices</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
