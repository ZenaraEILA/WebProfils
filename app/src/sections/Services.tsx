import { useEffect, useRef, useState } from 'react';
import { 
  Layout, 
  Palette, 
  Video, 
  Globe,
  ArrowRight
} from 'lucide-react';

interface Service {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Desain interface yang intuitif dan user-friendly untuk aplikasi dan website.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
    color: 'pixel-purple',
  },
  {
    id: 2,
    icon: Palette,
    title: 'Graphic Design',
    description: 'Desain visual kreatif untuk branding, marketing, dan komunikasi visual.',
    features: ['Logo Design', 'Poster & Banner', 'Social Media', 'Brand Identity'],
    color: 'pixel-cyan',
  },
  {
    id: 3,
    icon: Video,
    title: 'Video Editing',
    description: 'Editing video profesional dengan motion graphics dan efek visual.',
    features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Transitions'],
    color: 'pixel-pink',
  },
  {
    id: 4,
    icon: Globe,
    title: 'Web Design',
    description: 'Desain website modern, responsif, dan optimized untuk conversion.',
    features: ['Responsive Design', 'Landing Pages', 'E-commerce', 'SEO Friendly'],
    color: 'pixel-green',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getColorClass = (color: string) => {
    const colorMap: Record<string, { border: string; bg: string; text: string; glow: string }> = {
      'pixel-purple': { 
        border: 'border-pixel-purple', 
        bg: 'bg-pixel-purple',
        text: 'text-pixel-purple',
        glow: 'shadow-neon'
      },
      'pixel-cyan': { 
        border: 'border-pixel-cyan', 
        bg: 'bg-pixel-cyan',
        text: 'text-pixel-cyan',
        glow: 'shadow-neon-cyan'
      },
      'pixel-pink': { 
        border: 'border-pixel-pink', 
        bg: 'bg-pixel-pink',
        text: 'text-pixel-pink',
        glow: 'shadow-[0_0_20px_hsl(320_100%_60%_/0.5)]'
      },
      'pixel-green': { 
        border: 'border-pixel-green', 
        bg: 'bg-pixel-green',
        text: 'text-pixel-green',
        glow: 'shadow-[0_0_20px_hsl(140_100%_50%_/0.5)]'
      },
    };
    return colorMap[color] || colorMap['pixel-purple'];
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-pixel-cyan/30 bg-pixel-cyan/5">
            <span className="w-2 h-2 bg-pixel-cyan animate-pulse" />
            <span className="font-pixel text-sm text-pixel-cyan tracking-wider">SERVICES</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            LAYANAN <span className="text-pixel-purple">SAYA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Berbagai layanan desain yang saya tawarkan untuk membantu mewujudkan 
            visi dan kebutuhan kreatif Anda.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-cyan to-pixel-purple mx-auto mt-4" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = getColorClass(service.color);
            const isHovered = hoveredService === service.id;

            return (
              <div
                key={service.id}
                className={`group relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div 
                  className={`relative h-full p-6 md:p-8 bg-pixel-dark border-2 transition-all duration-300 ${
                    isHovered ? `${colors.border} ${colors.glow}` : 'border-pixel-gray'
                  }`}
                  style={{ 
                    clipPath: 'polygon(0 8px, 8px 8px, 8px 0, calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px))'
                  }}
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                  <div className="relative z-10">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`relative w-16 h-16 flex-shrink-0 border-2 ${colors.border} flex items-center justify-center group-hover:${colors.bg} transition-colors duration-300`}>
                        <service.icon className={`w-8 h-8 ${colors.text} group-hover:text-pixel-darker transition-colors`} />
                        
                        {/* Corner pixels */}
                        <div className={`absolute -top-1 -left-1 w-2 h-2 ${colors.bg}`} />
                        <div className={`absolute -bottom-1 -right-1 w-2 h-2 ${colors.bg}`} />
                      </div>
                      
                      <div>
                        <h3 className={`font-pixel text-xl md:text-2xl text-white group-hover:${colors.text} transition-colors mb-2`}>
                          {service.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 ${colors.bg}`} />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <button className={`flex items-center gap-2 text-sm font-pixel ${colors.text} group/btn`}>
                      <span>PELAJARI LEBIH</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className={`mt-16 p-8 border-2 border-pixel-purple/50 bg-pixel-purple/5 transition-all duration-700 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-pixel text-xl md:text-2xl text-white mb-2">
                BUTUH LAYANAN KUSTOM?
              </h3>
              <p className="text-muted-foreground">
                Saya siap membantu mewujudkan proyek kreatif Anda. Hubungi saya untuk diskusi lebih lanjut.
              </p>
            </div>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="pixel-btn whitespace-nowrap"
            >
              MULAI PROYEK
            </a>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Services;
