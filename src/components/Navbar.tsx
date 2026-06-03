import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo_gold.png';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Mí', href: '#about' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-dark-bg/95 backdrop-blur-lg border-white/5 py-3 shadow-lg' : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home">
              <img src={logo} alt="Beauty Studio SB" className="h-12 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary-gold transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-2 px-6"
            >
              Reservá tu turno
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center relative z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-dark-bg/80 backdrop-blur-lg z-40 transition-all duration-500 md:hidden flex flex-col items-center justify-center ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-10 w-full px-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-primary-gold transition-colors block text-3xl font-medium tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 w-full flex justify-center">
            <a
              href="https://beautystudiosb.site.agendapro.com/ar/sucursal/169540"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold text-center block w-full max-w-xs text-lg py-4"
            >
              Reservá tu turno
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
