import { Sparkles, Scissors, Smile, Droplets } from 'lucide-react';
import { Reveal } from './Reveal';

const services = [
  {
    id: 1,
    title: 'Diseño de Cejas',
    description: 'Perfilado y diseño personalizado según la morfología de tu rostro.',
    icon: <Scissors className="w-8 h-8 text-primary-gold" />,
  },
  {
    id: 2,
    title: 'Laminado',
    description: 'Técnica para alisar y direccionar el vello de las cejas, logrando un efecto de mayor volumen.',
    icon: <Sparkles className="w-8 h-8 text-primary-gold" />,
  },
  {
    id: 3,
    title: 'Microblading / PMU',
    description: 'Maquillaje semipermanente para unas cejas perfectas y definidas de forma natural.',
    icon: <Droplets className="w-8 h-8 text-primary-gold" />,
  },
  {
    id: 4,
    title: 'Limpieza Facial',
    description: 'Tratamientos de cuidado de la piel para lucir un rostro luminoso y saludable.',
    icon: <Smile className="w-8 h-8 text-primary-gold" />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-dark-bg relative">
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
            <Reveal key={service.id} delay={index * 100}>
              <div 
                className="glass-panel p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(212,175,55,0.1)] hover:border-primary-gold/30 group h-full"
              >
                <div className="bg-dark-bg/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-primary-gold/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
