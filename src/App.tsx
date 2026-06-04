import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactFooter } from './components/ContactFooter';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { FAQSection } from './components/FAQSection';
import { FloatingBookingButton } from './components/FloatingBookingButton';
import { useEffect } from 'react';
import Lenis from 'lenis';

import cejas1 from './assets/cejas1.jpg';
import cejas2 from './assets/cejas2.jpg';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-primary-gold selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Continuous background wrapper for middle sections */}
        <div className="relative overflow-hidden bg-dark-bg">
          {/* Background gradients container (Radial gradients prevent clipping "cuts") */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none" 
            style={{
              background: `
                radial-gradient(circle at 100% 35%, rgba(212,175,55,0.12) 0%, transparent 25%),
                radial-gradient(circle at 0% 90%, rgba(212,175,55,0.10) 0%, transparent 25%)
              `
            }} 
          />

          {/* Foreground content */}
          <div className="relative z-10">
            <ServicesSection />
            <AboutSection />
            <BeforeAfterSlider beforeImage={cejas1} afterImage={cejas2} />
            <FAQSection />
            <ReviewsSection />
          </div>
        </div>
      </main>
      <ContactFooter />
      <FloatingBookingButton />
    </div>
  );
}

export default App;
