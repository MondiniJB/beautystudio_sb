import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';

export function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Detectar si es celular (pantalla menor a 768px)
    const isMobile = window.innerWidth < 768;
    // En celular queremos que salte a los 2s para asegurar el toque para el video. En PC a los 10s.
    const delay = isMobile ? 2000 : 10000;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBook = () => {
    navigator.clipboard.writeText('BEAUTYWEB');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Fondo oscuro - al hacer click se cierra el popup y se activa el video */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />
      
      {/* Contenido del Modal */}
      <div className="relative glass-panel bg-dark-bg/90 w-full max-w-md p-8 text-center animate-in fade-in zoom-in duration-300">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="w-16 h-16 bg-primary-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Gift className="w-8 h-8 text-primary-gold" />
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">
          ¡Tenemos un regalo para vos!
        </h3>
        
        <p className="text-gray-300 mb-6 text-lg">
          Usá el código <span className="font-bold text-primary-gold px-2 py-1 bg-primary-gold/10 rounded-md">BEAUTYWEB</span> y obtené un <span className="font-bold text-white">5% OFF</span> en tu primera sesión.
        </p>

        <p className="text-sm text-gray-400 mb-8">
          * Válido ingresando el código en Agenda Pro al confirmar tu turno.
        </p>

        <div className="flex flex-col gap-3">
          <a
            href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBook}
            className="btn-gold w-full flex items-center justify-center gap-2 text-lg"
          >
            Copiar código y agendar
          </a>
          <button
            onClick={handleClose}
            className="px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
          >
            Seguir explorando
          </button>
        </div>
      </div>
    </div>
  );
}
