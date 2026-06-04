import { MapPin } from 'lucide-react';
import logo from '../assets/logo_gold.png';

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">
          
          <div className="lg:col-span-2 flex flex-col items-start">
            <img src={logo} alt="Beauty Studio SB" className="h-16 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm max-w-xs">
              Resalta tu belleza natural con la mejor tecnología y profesionalismo.
            </p>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold text-lg mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 text-gray-400 mb-6 text-sm">
              <MapPin className="text-primary-gold shrink-0 mt-1" size={20} />
              <p>
                Mariano Castex 179 Piso 2 Oficina D <br />
                Canning, Ezeiza <br />
                Argentina
              </p>
            </div>
            <div className="w-full max-w-[280px] h-40 rounded-xl overflow-hidden border border-white/10 relative group bg-white/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.6020524458315!2d-58.50612!3d-34.8463386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd72e12330a13%3A0x6b47c61fcf1150bd!2sSB%20Beauty%20Studio!5e0!3m2!1ses-419!2sar!4v1714502553093!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>

          <div className="lg:col-span-3 lg:px-4">
            <h4 className="text-white font-semibold text-lg mb-6">Horarios</h4>
            <ul className="text-gray-400 text-sm flex flex-col gap-2 max-w-[220px]">
              <li className="flex justify-between"><span>Lunes</span> <span>09:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Martes</span> <span>08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Miércoles</span> <span>08:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Jueves</span> <span>08:00 - 20:00</span></li>
              <li className="flex justify-between"><span>Viernes</span> <span>08:00 - 18:00</span></li>
              <li className="flex justify-between"><span>Sábado</span> <span>08:00 - 18:00</span></li>
              <li className="flex justify-between text-gray-500"><span>Domingo</span> <span>Cerrado</span></li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-lg mb-6">Contacto & Redes</h4>
            
            <div className="flex flex-col gap-4 text-sm mb-6">
              <div className="flex items-start gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone shrink-0 text-primary-gold"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <div className="flex flex-col gap-1">
                  <a href="tel:+541136143690" className="hover:text-primary-gold transition-colors">541136143690</a>
                  <a href="tel:+541156691158" className="hover:text-primary-gold transition-colors">541156691158</a>
                </div>
              </div>

              <a 
                href="https://api.whatsapp.com/send/?phone=541136143690&text=Hola.%20Quer%C3%ADa%20consultar%20por%20un%20turno...&type=phone_number&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle shrink-0"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></svg>
                <span>¡Contáctanos por Whatsapp!</span>
              </a>

              <a 
                href="https://www.instagram.com/beautystudio_sb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-gold transition-colors w-fit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram shrink-0"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span>@beautystudio_sb</span>
              </a>
            </div>

            <div className="mt-2">
              <a 
                href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 rounded-lg border border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-black transition-colors font-medium text-sm"
              >
                Reservar Turno
              </a>
            </div>
          </div>
          
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Beauty Studio SB. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-sm">
            Diseñado por <a href="https://qvantastudio.com.ar/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-gold transition-colors font-medium">Qvanta Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
