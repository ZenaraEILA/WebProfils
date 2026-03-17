import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    // Trigger animation on mount
    setHasAnimated(true);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pixel-darker"
      style={{ '--mouse-x': '0px', '--mouse-y': '0px' } as React.CSSProperties}
    >
      {/* Background Grid */}
      <div className="absolute inset-0 pixel-grid" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Pixels */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pixel-purple/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Glowing Orbs - now with glow effect */}
        <div 
          className="absolute w-96 h-96 bg-pixel-purple/15 rounded-full blur-3xl shadow-neon"
          style={{ 
            left: '10%', 
            top: '20%',
            transform: 'translate(var(--mouse-x), var(--mouse-y))',
            animation: 'float-pixel 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-pixel-cyan/15 rounded-full blur-3xl shadow-neon-cyan"
          style={{ 
            right: '10%', 
            bottom: '20%',
            transform: 'translate(calc(var(--mouse-x) * -1), calc(var(--mouse-y) * -1))',
            animation: 'float-pixel 10s ease-in-out infinite reverse',
          }}
        />
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-40" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 mb-8 border border-pixel-purple/50 bg-pixel-purple/10 neon-hover ${
          hasAnimated ? 'animate-slide-up' : ''
        }`}>
          <Sparkles className="w-4 h-4 text-pixel-cyan animate-pixel-bounce" />
          <span className="font-pixel text-sm text-pixel-cyan tracking-widest">
            ✨ WELCOME TO MY PORTFOLIO ✨
          </span>
        </div>

        {/* Main Title with Glitch Effect */}
        <h1 className={`font-pixel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-6 ${
          hasAnimated ? 'animate-slide-up' : ''
        }`} style={{ animationDelay: '0.05s' }}>
          <span className="glitch text-transparent bg-clip-text bg-gradient-to-r from-white via-pixel-cyan to-white" data-text="ARFAN RESTU R.">
            ARFAN RESTU R.
          </span>
        </h1>

        {/* Subtitle with role animations */}
        <div className={`flex flex-wrap items-center justify-center gap-3 mb-8 ${
          hasAnimated ? 'animate-slide-up' : ''
        }`} style={{ animationDelay: '0.1s' }}>
          {['UI/UX Designer', 'Graphic Designer', 'Video Editor'].map((role, index) => (
            <span key={role} className="flex items-center gap-3 group">
              <span className="font-pixel text-lg md:text-xl text-pixel-cyan group-hover:text-pixel-purple transition-colors duration-300 cursor-default">
                {role}
              </span>
              {index < 2 && (
                <span className="w-2 h-2 bg-pixel-purple group-hover:bg-pixel-cyan transform group-hover:scale-150 transition-transform duration-300" />
              )}
            </span>
          ))}
        </div>

        {/* Description with enhanced styling */}
        <p className={`max-w-2xl mx-auto text-muted-foreground text-base md:text-lg mb-12 leading-relaxed ${
          hasAnimated ? 'animate-slide-up' : ''
        }`} style={{ animationDelay: '0.15s' }}>
          Membuat desain modern yang <span className="text-pixel-cyan font-semibold">impactful</span> dan{' '}
          <span className="text-pixel-purple font-semibold">user-friendly</span>. 
          Fokus pada detail, kreativitas, dan pengalaman pengguna yang optimal.
        </p>

        {/* CTA Buttons with enhanced effects */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
          hasAnimated ? 'animate-slide-up' : ''
        }`} style={{ animationDelay: '0.2s' }}>
          <button 
            onClick={scrollToProjects}
            className="btn-hover-glow btn-ripple px-8 py-3 border-2 border-pixel-cyan bg-pixel-cyan/10 text-pixel-cyan font-pixel tracking-wider flex items-center gap-2 transition-all duration-300 hover:bg-pixel-cyan hover:text-pixel-darker"
          >
            <span>LIHAT PROYEK</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
          <button 
            onClick={scrollToContact}
            className="neon-hover px-8 py-3 border-2 border-pixel-purple text-pixel-purple font-pixel tracking-wider transition-all duration-300"
          >
            HUBUNGI SAYA
          </button>
        </div>

        {/* Stats with pixel reveal */}
        <div className={`flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 ${
          hasAnimated ? 'animate-slide-up' : ''
        }`} style={{ animationDelay: '0.25s' }}>
          {[
            { value: '50+', label: 'Projects' },
            { value: '3+', label: 'Years Exp' },
            { value: '30+', label: 'Clients' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group pixel-reveal-item" style={{ '--stagger': index } as any}>
              <div className="font-pixel text-3xl md:text-4xl text-pixel-cyan group-hover:text-pixel-purple group-hover:shadow-neon transition-all duration-300 group-hover:scale-110">
                {stat.value}
              </div>
              <div className="font-pixel text-xs text-muted-foreground tracking-wider mt-2 group-hover:text-pixel-cyan transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line with gradient */}
      <div className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pixel-purple via-pixel-cyan to-transparent opacity-50" />
      
      {/* Scroll Indicator with enhanced animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pixel-bounce group cursor-pointer">
        <div className="w-6 h-10 border-2 border-pixel-cyan/50 rounded-full flex items-start justify-center p-2 group-hover:border-pixel-cyan transition-colors">
          <div className="w-1 h-2 bg-gradient-to-b from-pixel-cyan to-pixel-purple rounded-full animate-pulse group-hover:shadow-neon-cyan" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
