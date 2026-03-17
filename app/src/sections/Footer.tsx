import { Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-pixel-darker to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 border-2 border-pixel-purple">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-pixel text-xl text-pixel-cyan">AR</span>
              </div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-pixel-purple" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-pixel-cyan" />
            </div>
            <div>
              <span className="font-pixel text-lg text-white">ARFAN RESTU</span>
              <p className="font-pixel text-xs text-muted-foreground">UI/UX Designer</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                className="font-pixel text-sm text-muted-foreground hover:text-pixel-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 border border-pixel-gray hover:border-pixel-cyan flex items-center justify-center transition-colors group"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5 text-muted-foreground group-hover:text-pixel-cyan transition-colors" />
          </button>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-pixel-pink fill-pixel-pink" /> by{' '}
            <span className="text-pixel-cyan">Arfan Restu</span> &copy; {new Date().getFullYear()}
          </p>

          {/* Pixel Decorations */}
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 ${i % 2 === 0 ? 'bg-pixel-purple' : 'bg-pixel-cyan'}`}
              />
            ))}
          </div>

          {/* Credits */}
          <p className="text-xs text-muted-foreground font-pixel">
            BUILT WITH REACT + TAILWIND
          </p>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-pixel-purple/20" />
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pixel-cyan/20" />
    </footer>
  );
};

export default Footer;
