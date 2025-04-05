import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="h-12">
          <img src="images/Logo_2_turbine.png" alt="Weave's Echo" className="h-full w-auto" />
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-400 transition cursor-pointer">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-white hover:text-amber-400 transition cursor-pointer">
            Cosa è Weave
          </button>
          <button onClick={() => scrollToSection('rules')} className="text-white hover:text-amber-400 transition cursor-pointer">
            Regole
          </button>
          <button onClick={() => scrollToSection('setting')} className="text-white hover:text-amber-400 transition cursor-pointer">
            Ambientazione
          </button>
          <button onClick={() => scrollToSection('pdf')} className="text-white hover:text-amber-400 transition cursor-pointer">
            PDF
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-white hover:text-amber-400 transition cursor-pointer">
            FAQ
          </button>
          <button onClick={() => scrollToSection('team')} className="text-white hover:text-amber-400 transition cursor-pointer">
            Chi Siamo
          </button>
        </nav>
      </div>
      {/* Mobile navigation */}
      {isMenuOpen && <div className="md:hidden bg-slate-800 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              Cosa è Weave
            </button>
            <button onClick={() => scrollToSection('rules')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              Regole
            </button>
            <button onClick={() => scrollToSection('setting')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              Ambientazione
            </button>
            <button onClick={() => scrollToSection('pdf')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              PDF
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              FAQ
            </button>
            <button onClick={() => scrollToSection('team')} className="text-white hover:text-amber-400 transition text-left cursor-pointer">
              Chi Siamo
            </button>
          </div>
        </div>}
    </header>;
};