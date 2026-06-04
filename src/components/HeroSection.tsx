import { ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import videoHero from '../assets/videohero.mp4';
import videoWebpFallback from '../assets/videohero.webp';
import { useEffect, useRef, useState } from 'react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          // Autoplay prevented (e.g. iOS low power mode)
          console.log('Autoplay prevented, using WebP fallback:', error);
          setIsPlaying(false);
        });
      }
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video with overlay */}
      <div className="absolute inset-0 z-0 bg-dark-bg">
        {/* WebP Fallback (visible if video is blocked) */}
        <img 
          src={videoWebpFallback} 
          alt="Fondo de Beauty Studio"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* High Quality Video (visible if playing successfully) */}
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={videoHero} type="video/mp4" />
        </video>
        
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-[2px] z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        <Reveal delay={0}>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="px-4 py-1.5 rounded-full border border-primary-gold/30 bg-primary-gold/10 text-primary-gold text-sm font-medium tracking-wide flex items-center">
              Campeona Championship Brows
            </div>
            <a 
              href="https://maps.app.goo.gl/VWrd2KmhGiPybt4D8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 cursor-pointer"
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
