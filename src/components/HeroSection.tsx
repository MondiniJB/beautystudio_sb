import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import videoHero from '../assets/videohero.mp4';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // El video tiene autoplay nativo. Si iOS lo bloquea por batería,
  // mostrará su botón de play nativo. Como los textos ahora son "transparentes"
  // a los toques (pointer-events-none), el usuario podrá tocar ese botón nativo.

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Video with overlay */}
      <div className="absolute inset-0 z-0 bg-dark-bg">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoHero} type="video/mp4" />
        </video>
        
        {/* Overlay to ensure text readability - pointer-events-none para no bloquear el video */}
        <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-[2px] z-10 pointer-events-none" />
      </div>

      {/* Removed buggy invisible layer that was blocking interactions */}

      {/* Contenedor con pointer-events-none para dejar pasar clicks al video */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pointer-events-none">
        
        <Reveal delay={0}>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="px-4 py-1.5 rounded-full border border-primary-gold/30 bg-primary-gold/10 text-primary-gold text-sm font-medium tracking-wide flex items-center">
              Campeona Championship Brows
            </div>
            <a 
              href="https://maps.app.goo.gl/VWrd2KmhGiPybt4D8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer pointer-events-auto"
            >
              <div className="flex text-primary-gold text-xs">
                ★★★★★
              </div>
              <span className="text-white text-sm font-medium">5.0 en Google</span>
            </a>
          </div>
        </Reveal>
        
        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Resaltá tu belleza <br />
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
          <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
            <a
              href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2 text-lg"
            >
              Reservá tu turno
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#servicios"
              className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-lg font-medium"
            >
              Nuestros servicios
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
