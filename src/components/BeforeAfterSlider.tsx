import { useState, useEffect, useRef } from 'react';
import { MousePointer2, MoveHorizontal } from 'lucide-react';
import { Reveal } from './Reveal';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isMobile, setIsMobile] = useState(false);
  const [showAfterMobile, setShowAfterMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isMobile || e.pointerType === 'touch') return;
    setIsDragging(true);
    updateSlider(e);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || isMobile || e.pointerType === 'touch') return;
    updateSlider(e);
  };

  const updateSlider = (e: React.PointerEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  };

  const handleTap = () => {
    if (isMobile) {
      setShowAfterMobile(!showAfterMobile);
    }
  };

  return (
    <Reveal>
      <div className="flex flex-col items-center w-full my-12 px-4">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl font-bold mb-3">Resultados <span className="text-primary-gold">Reales</span></h3>
          <p className="text-gray-400 text-sm md:text-base">
            {isMobile ? "Toca la imagen para ver el asombroso cambio." : "Arrastra la barra para ver la transformación del antes y el después."}
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full max-w-3xl aspect-square sm:aspect-[16/9] rounded-2xl overflow-hidden glass-panel cursor-pointer sm:cursor-ew-resize shadow-2xl border border-white/10"
          onClick={handleTap}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ touchAction: 'pan-y', userSelect: 'none' }}
        >
          {/* Default state is Before image underneath */}
          <img src={beforeImage} alt="Antes" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          
          {/* Label Antes */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-semibold z-20">
            ANTES
          </div>

          {!isMobile ? (
            /* DESKTOP BEHAVIOR: Clip Path Slider */
            <>
              {/* After image with clip-path */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)` }}
              >
                <img src={afterImage} alt="Después" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Slider Line & Handle Visual */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-primary-gold z-20 pointer-events-none transition-all duration-75 ease-linear"
                style={{ left: `calc(${sliderPosition}%)`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary-gold">
                  <MoveHorizontal size={20} className="text-black" />
                </div>
              </div>

              {/* Label Después */}
              <div className="absolute top-4 right-4 bg-primary-gold/90 backdrop-blur-md px-3 py-1 rounded-full text-black text-xs font-bold z-20">
                DESPUÉS
              </div>
            </>
          ) : (
            /* MOBILE BEHAVIOR: Fade on Tap */
            <>
              <div 
                className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out pointer-events-none ${showAfterMobile ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={afterImage} alt="Después" className="absolute inset-0 w-full h-full object-cover" />
              </div>

              {/* Tap instruction */}
              <div className={`absolute inset-0 flex items-center justify-center pointer-events-none z-30 transition-opacity duration-300 ${showAfterMobile ? 'opacity-0' : 'opacity-100'}`}>
                <div className="bg-black/60 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 text-white/90 border border-white/10 animate-pulse">
                  <MousePointer2 size={18} className="text-primary-gold" />
                  <span className="text-sm font-medium tracking-wide">Tocar para ver el cambio</span>
                </div>
              </div>

              {/* Label Después */}
              <div className={`absolute top-4 right-4 bg-primary-gold/90 backdrop-blur-md px-3 py-1 rounded-full text-black text-xs font-bold z-20 transition-opacity duration-700 ${showAfterMobile ? 'opacity-100' : 'opacity-0'}`}>
                DESPUÉS
              </div>
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
}
