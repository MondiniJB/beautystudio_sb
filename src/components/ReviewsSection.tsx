import { Star } from 'lucide-react';
import { Reveal } from './Reveal';

const reviews = [
  {
    id: 1,
    name: "Valentina M.",
    text: "Excelente atención y profesionalismo. Solange es una genia, me dejó las cejas increíbles y súper naturales. ¡Totalmente recomendada!",
    rating: 5,
  },
  {
    id: 2,
    name: "Camila R.",
    text: "El mejor estudio de zona sur. La dedicación que le ponen a cada detalle es única. Me hice micropigmentación y el resultado superó mis expectativas.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofía L.",
    text: "Un ambiente súper relajante y un trabajo impecable. Te explican todo el proceso paso a paso y te transmiten mucha confianza. ¡Volveré sin dudas!",
    rating: 5,
  }
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Lo que dicen nuestras <span className="text-primary-gold">clientas</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Más de 1000 mujeres ya confiaron en nosotros para resaltar su belleza natural.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Reveal key={review.id} delay={index * 100}>
              <div className="glass-panel p-8 h-full flex flex-col border border-white/5 hover:border-primary-gold/30 transition-colors duration-300">
                <div className="flex gap-1 mb-6 text-primary-gold">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 flex-grow italic leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-primary-gold/20 flex items-center justify-center text-primary-gold font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{review.name}</h4>
                    <p className="text-xs text-gray-500">Google Review</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-16 text-center">
            <a
              href="https://maps.app.goo.gl/VWrd2KmhGiPybt4D8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-primary-gold/30 transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" className="group-hover:scale-110 transition-transform">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Ver más opiniones en Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
