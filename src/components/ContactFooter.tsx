import { MapPin } from 'lucide-react';
import logo from '../assets/logo_gold.png';

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-black pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col items-start">
            <img src={logo} alt="Beauty Studio SB" className="h-16 w-auto object-contain mb-4" />
            <p className="text-gray-400 text-sm max-w-xs">
              Resalta tu belleza natural con la mejor tecnología y profesionalismo.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Ubicación</h4>
            <div className="flex items-start gap-3 text-gray-400 mb-6">
              <MapPin className="text-primary-gold shrink-0 mt-1" size={20} />
              <p>
                Canning, Buenos Aires <br />
                Argentina
              </p>
            </div>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10 relative group bg-white/5">
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
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contacto & Redes</h4>
            <a 
              href="https://www.instagram.com/beautystudio_sb?igshid=YmMyMTA2M2Y%3D" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-400 hover:text-primary-gold transition-colors w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <span>@beautystudio_sb</span>
            </a>
            <div className="mt-6">
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
