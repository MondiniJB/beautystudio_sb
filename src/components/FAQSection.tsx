import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal } from './Reveal';

const faqs = [
  {
    question: "¿Cuánto dura el tratamiento de Micropigmentación (PMU)?",
    answer: "La sesión suele durar entre 2 y 3 horas, dependiendo de la técnica empleada y el tipo de piel. Esto incluye el tiempo de diseño personalizado previo al procedimiento."
  },
  {
    question: "¿Duele el procedimiento de cejas?",
    answer: "Utilizamos anestesia tópica de alta calidad antes y durante el procedimiento para asegurar tu máximo confort. La mayoría de nuestras clientas sienten solo una leve molestia o vibración."
  },
  {
    question: "¿Cuánto tiempo dura el resultado de las cejas?",
    answer: "Los resultados del Microblading o PMU pueden durar entre 1 y 2 años, dependiendo de tu tipo de piel, estilo de vida y los cuidados posteriores. Recomendamos un retoque anual para mantener el color y la forma perfectos."
  },
  {
    question: "¿Cuáles son los cuidados posteriores inmediatos?",
    answer: "Durante la primera semana es fundamental mantener la zona limpia y seca. Debes evitar el sol directo, saunas, sudoración excesiva y no rascar ni arrancar las costras que se formen de manera natural."
  },
  {
    question: "¿Qué es el Laminado de Cejas?",
    answer: "Es un tratamiento no invasivo que alisa, peina y direcciona el vello natural de tus cejas hacia arriba. Crea un efecto de mayor volumen, definición y un look orgánico que dura aproximadamente de 4 a 6 semanas."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Preguntas <span className="text-primary-gold">Frecuentes</span></h2>
            <p className="text-gray-400 text-lg">
              Resolvemos tus dudas principales para que vengas con total tranquilidad.
            </p>
          </div>
        </Reveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delay={index * 100}>
                <div 
                  className={`glass-panel border overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary-gold/50 bg-dark-surface/80' : 'border-white/10 hover:border-white/30'}`}
                >
                  <button 
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3 className={`text-lg font-semibold pr-8 ${isOpen ? 'text-primary-gold' : 'text-white'}`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-colors duration-300 ${isOpen ? 'bg-primary-gold/20 border-primary-gold text-primary-gold' : 'border-white/20 text-gray-400'}`}>
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-gray-300 text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
