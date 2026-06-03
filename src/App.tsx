import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-sans selection:bg-primary-gold selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
