import { Reveal } from './Reveal';

import beautystudio1 from '../assets/beautystudio1.jpg';
import beautystudio2 from '../assets/beautystudio2.jpg';
import beautystudio3 from '../assets/beautystudio3.jpg';
import cejas1 from '../assets/cejas1.jpg';
import cejas2 from '../assets/cejas2.jpg';

const galleryImages = [
  {
    id: 1,
    url: cejas1,
    alt: "Diseño de cejas y micropigmentación",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    url: beautystudio1,
    alt: "Nuestro estudio",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 3,
    url: beautystudio2,
    alt: "Instalaciones cómodas",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 4,
    url: beautystudio3,
    alt: "Ambiente relajante",
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 5,
    url: cejas2,
    alt: "Resultados increíbles",
    className: "md:col-span-1 md:row-span-1"
  }
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Nuestro <span className="text-primary-gold">Trabajo</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Conocé el estudio y algunos de los resultados de nuestros tratamientos.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} delay={index * 100} className={image.className}>
              <div className="w-full h-full relative group overflow-hidden rounded-xl bg-white/5 border border-white/5">
                <img 
                  src={image.url} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
