import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg/80 via-dark-bg/90 to-dark-bg z-10" />
        {/* Placeholder for an actual background image later. We use a subtle gold radial gradient for now */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <Reveal delay={0}>
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-primary-gold/30 bg-primary-gold/10 text-primary-gold text-sm font-medium tracking-wide">
            Campeona Championship Brows
          </div>
        </Reveal>
        
        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Realza tu belleza <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-gold via-[#f3e5ab] to-primary-gold">
              natural
            </span>
          </h1>
        </Reveal>
        
        <Reveal delay={200}>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
            SB Solange Bianconi | Especialista en Cejas & PMU
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 text-lg"
            >
              Reservá tu turno
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 transition-colors flex items-center justify-center"
            >
              Nuestros Servicios
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
