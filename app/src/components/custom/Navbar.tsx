import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'HOME', href: '#home' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'SERVICES', href: '#services' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'navbar-blur border-b-2 border-pixel-purple/30 shadow-lg' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 border-2 border-pixel-purple group-hover:border-pixel-cyan transition-all duration-300 group-hover:shadow-neon">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-pixel text-xl text-pixel-cyan group-hover:text-pixel-purple transition-colors duration-300">
                    AR
                  </span>
                </div>
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-pixel-purple group-hover:bg-pixel-cyan transition-all duration-300" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-pixel-cyan group-hover:bg-pixel-purple transition-all duration-300" />
              </div>
              <span className="hidden sm:block font-pixel text-lg text-white group-hover:text-pixel-cyan transition-colors duration-300">
                ARFAN
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className={`relative px-4 py-2 font-pixel text-sm tracking-wider transition-all duration-300 group ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-pixel-cyan'
                        : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    {link.name}
                    {/* Underline animation */}
                    <span 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-pixel-purple to-pixel-cyan transition-all duration-500 ${
                        activeSection === link.href.replace('#', '') 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-1/2'
                      }`}
                    />
                    {/* Pixel corners glow on hover */}
                    <span className="absolute top-1 left-1 w-1 h-1 bg-pixel-purple opacity-0 group-hover:opacity-100 group-hover:shadow-neon transition-all duration-300" />
                    <span className="absolute bottom-1 right-1 w-1 h-1 bg-pixel-cyan opacity-0 group-hover:opacity-100 group-hover:shadow-neon-cyan transition-all duration-300" />
                  </a>
                  
                  {/* Floating label on hover */}
                  {activeSection === link.href.replace('#', '') && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1">
                      <span className="font-pixel text-xs text-pixel-cyan whitespace-nowrap animate-slide-up">
                        {link.name}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center border-2 border-pixel-purple hover:border-pixel-cyan transition-all duration-300 hover:shadow-neon"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-pixel-cyan animate-rotate-light" />
              ) : (
                <Menu className="w-5 h-5 text-pixel-purple" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-pixel-darker/95 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
              className={`relative px-8 py-3 font-pixel text-xl tracking-wider transition-all duration-300 neon-hover ${
                activeSection === link.href.replace('#', '')
                  ? 'text-pixel-cyan'
                  : 'text-white hover:text-pixel-cyan'
              }`}
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animation: isMobileMenuOpen ? 'slide-up 0.3s ease-out forwards' : 'none'
              }}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Decorative pixels with animation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i}
              className={`w-3 h-3 transition-all duration-300 ${
                i === 1 ? 'bg-pixel-cyan shadow-neon-cyan' : 'bg-pixel-purple shadow-neon'
              }`}
              style={{
                animation: isMobileMenuOpen ? `pixel-bounce ${0.6 + i * 0.1}s ease-in-out infinite` : 'none',
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
