import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  category: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'Desain dashboard modern untuk platform e-commerce dengan fokus pada user experience dan data visualization.',
    role: 'UI/UX Designer',
    category: 'UI Design',
    color: 'pixel-purple',
  },
  {
    id: 2,
    title: 'Brand Identity Startup',
    description: 'Pembuatan identitas visual lengkap termasuk logo, color palette, dan brand guidelines.',
    role: 'Graphic Designer',
    category: 'Branding',
    color: 'pixel-cyan',
  },
  {
    id: 3,
    title: 'Corporate Website',
    description: 'Desain website responsif untuk perusahaan teknologi dengan animasi modern.',
    role: 'Web Designer',
    category: 'Web Design',
    color: 'pixel-pink',
  },
  {
    id: 4,
    title: 'Product Promo Video',
    description: 'Video promosi produk dengan editing cinematic dan motion graphics.',
    role: 'Video Editor',
    category: 'Video Editing',
    color: 'pixel-green',
  },
  {
    id: 5,
    title: 'Mobile App UI',
    description: 'Desain interface aplikasi mobile untuk fitness tracking dengan gamification elements.',
    role: 'UI/UX Designer',
    category: 'UI Design',
    color: 'pixel-yellow',
  },
  {
    id: 6,
    title: 'Event Poster Series',
    description: 'Seri poster untuk event musik dengan style retro-modern dan typography bold.',
    role: 'Graphic Designer',
    category: 'Graphic Design',
    color: 'pixel-purple',
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

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
    const colorMap: Record<string, string> = {
      'pixel-purple': 'from-pixel-purple to-pixel-pink',
      'pixel-cyan': 'from-pixel-cyan to-pixel-green',
      'pixel-pink': 'from-pixel-pink to-pixel-purple',
      'pixel-green': 'from-pixel-green to-pixel-cyan',
      'pixel-yellow': 'from-pixel-yellow to-pixel-purple',
    };
    return colorMap[color] || 'from-pixel-purple to-pixel-cyan';
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-pixel-purple/30 bg-pixel-purple/5">
            <span className="w-2 h-2 bg-pixel-purple animate-pulse" />
            <span className="font-pixel text-sm text-pixel-purple tracking-wider">PORTFOLIO</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            GALERI <span className="text-pixel-cyan">PROYEK</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Beberapa proyek yang telah saya kerjakan. Setiap proyek adalah hasil kolaborasi 
            dan dedikasi untuk menciptakan desain terbaik.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mt-4" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div 
                className="relative h-full bg-pixel-dark border-2 border-pixel-gray group-hover:border-pixel-purple transition-all duration-300 overflow-hidden"
                style={{ 
                  clipPath: 'polygon(0 8px, 8px 8px, 8px 0, calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px))'
                }}
              >
                {/* Preview Image Placeholder */}
                <div className="relative aspect-video overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${getColorClass(project.color)} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  
                  {/* Pixel Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="h-full w-full" style={{
                      backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                      `,
                      backgroundSize: '10px 10px'
                    }} />
                  </div>

                  {/* Project Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border-4 border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="font-pixel text-4xl text-white/40">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-pixel-darker/90 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <button className="w-12 h-12 border-2 border-pixel-cyan flex items-center justify-center hover:bg-pixel-cyan hover:text-pixel-darker transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 border-2 border-pixel-purple flex items-center justify-center hover:bg-pixel-purple hover:text-white transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-pixel-darker/80 border border-pixel-gray font-pixel text-xs text-pixel-cyan">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-pixel text-lg text-white mb-2 group-hover:text-pixel-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-pixel-purple font-pixel">
                      {project.role}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 ${i === 0 ? 'bg-pixel-cyan' : 'bg-pixel-gray'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-pixel-purple opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-pixel-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="pixel-btn-outline">
            LIHAT SEMUA PROYEK
          </button>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Projects;
