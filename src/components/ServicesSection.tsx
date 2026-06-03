import { useState } from 'react';
import { Sparkles, Scissors, Smile, Droplets, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

import cejas2 from '../assets/cejas2.jpg';
import cejas1 from '../assets/cejas1.jpg';
import beautystudio1 from '../assets/beautystudio1.jpg';
import beautystudio2 from '../assets/beautystudio2.jpg';

const services = [
  {
    id: 1,
    title: 'Diseño de Cejas',
    description: 'Perfilado y diseño personalizado según la morfología de tu rostro.',
    fullDescription: 'Un diseño de cejas perfecto cambia por completo la expresión de tu mirada. Analizamos la morfología de tu rostro, medimos las proporciones exactas y diseñamos la forma que mejor resalte tus facciones naturales. Incluye perfilado con hilo o pinza, sombreado temporal y recomendaciones para el cuidado en casa.',
    duration: '45 min',
    icon: <Scissors className="w-8 h-8 text-primary-gold" />,
    image: cejas2,
  },
  {
    id: 2,
    title: 'Laminado',
    description: 'Técnica para alisar y direccionar el vello de las cejas, logrando un efecto de mayor volumen.',
    fullDescription: 'El laminado de cejas es el tratamiento ideal para lograr un look de "cejas orgánicas" y con mayor volumen. Consiste en alisar y direccionar el vello rebelde hacia arriba utilizando productos nutritivos, lo que da la ilusión de unas cejas mucho más gruesas y peinadas todo el día.',
    duration: '60 min',
    icon: <Sparkles className="w-8 h-8 text-primary-gold" />,
    image: cejas1,
  },
  {
    id: 3,
    title: 'Microblading / PMU',
    description: 'Maquillaje semipermanente para unas cejas perfectas y definidas de forma natural.',
    fullDescription: 'El maquillaje permanente o micropigmentación es la solución definitiva para cejas poco pobladas o asimétricas. Trabajamos técnica pelo a pelo (Microblading) o sombreado suave (Powder Brows) para crear cejas hiperrealistas que no requieren maquillaje diario. Utilizamos pigmentos premium que no cambian a tonos indeseados.',
    duration: '120 - 180 min',
    icon: <Droplets className="w-8 h-8 text-primary-gold" />,
    image: beautystudio1,
  },
  {
    id: 4,
    title: 'Limpieza Facial',
    description: 'Tratamientos de cuidado de la piel para lucir un rostro luminoso y saludable.',
    fullDescription: 'Renueva tu piel con nuestra limpieza facial profunda. Eliminamos células muertas, extraemos impurezas y aplicamos mascarillas hidratantes y nutritivas personalizadas para tu tipo de piel. Un momento de relajación total que te dejará con un rostro fresco, luminoso y rejuvenecido.',
    duration: '60 - 90 min',
    icon: <Smile className="w-8 h-8 text-primary-gold" />,
    image: beautystudio2,
  },
];

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  const closeModal = () => setSelectedService(null);

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Nuestros <span className="text-primary-gold">Servicios</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Tratamientos premium diseñados para resaltar tu mirada y cuidar tu piel.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100} className="h-full">
              <div
                className="group relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] border border-white/10 hover:border-primary-gold/40 cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40 transition-colors duration-500 group-hover:from-black/80 group-hover:via-black/60 group-hover:to-black/30"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end min-h-[320px]">
                  <div className="bg-black/30 backdrop-blur-md w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-primary-gold/40 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white tracking-wide">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  {/* Fake button hint */}
                  <div className="mt-4 text-primary-gold text-sm font-medium opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Ver más detalles →
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" onClick={closeModal}>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            />
            
            {/* Modal content */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="relative w-full max-w-2xl bg-dark-bg overflow-hidden border border-primary-gold/30 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.15)] flex flex-col md:flex-row z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full text-white/70 hover:text-white hover:bg-black/80 transition-all border border-white/10"
              >
                <X size={20} />
              </button>

              {/* Image side */}
              <div className="w-full md:w-2/5 h-48 md:h-auto relative">
                <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent md:hidden" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-bg hidden md:block" />
              </div>

              {/* Text side */}
              <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-primary-gold">
                  {selectedService.icon}
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-6 flex-grow">
                  {selectedService.fullDescription}
                </p>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-6 border-b border-white/10 pb-4">
                  <Clock size={16} />
                  <span>Duración estimada: <strong>{selectedService.duration}</strong></span>
                </div>

                <a
                  href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-gold flex justify-center py-3 text-center"
                >
                  Reservar este tratamiento
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
