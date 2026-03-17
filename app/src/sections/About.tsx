import { useEffect, useRef, useState } from 'react';
import { Palette, Monitor, Video, Lightbulb, Target, Zap } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const strengths = [
    {
      icon: Lightbulb,
      title: 'Kreatif',
      desc: 'Selalu mencari solusi desain yang unik dan inovatif',
    },
    {
      icon: Target,
      title: 'Detail Oriented',
      desc: 'Memperhatikan setiap detail untuk hasil yang sempurna',
    },
    {
      icon: Zap,
      title: 'Modern Design',
      desc: 'Mengikuti tren desain terkini dengan sentuhan personal',
    },
  ];

  const skills = [
    { icon: Palette, label: 'Desain Grafis' },
    { icon: Monitor, label: 'UI/UX Design' },
    { icon: Video, label: 'Video Editing' },
  ];

  return (
    <section 
      id="about" 
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
            <span className="font-pixel text-sm text-pixel-cyan tracking-wider">ABOUT ME</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            TENTANG <span className="text-pixel-purple">SAYA</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-cyan to-pixel-purple mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image/Illustration */}
          <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="absolute inset-0 border-4 border-pixel-purple/50">
                {/* Pixel Pattern Background */}
                <div className="absolute inset-4 bg-pixel-gray/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-pixel text-8xl md:text-9xl text-pixel-cyan/30 mb-4">AR</div>
                      <div className="flex justify-center gap-4">
                        {skills.map((skill) => (
                          <div key={skill.label} className="flex flex-col items-center gap-2">
                            <skill.icon className="w-8 h-8 text-pixel-purple" />
                            <span className="font-pixel text-xs text-muted-foreground">{skill.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-t-4 border-l-4 border-pixel-cyan" />
                <div className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-pixel-cyan" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-pixel-cyan" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-4 border-r-4 border-pixel-cyan" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 right-1/4 w-6 h-6 bg-pixel-purple animate-float" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-4 left-1/4 w-4 h-4 bg-pixel-cyan animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute top-1/4 -left-4 w-3 h-3 bg-pixel-pink animate-float" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>

          {/* Right: Content */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4">
              <h3 className="font-pixel text-2xl md:text-3xl text-white">
                Halo! Saya <span className="text-pixel-cyan">Arfan Restu</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Saya adalah seorang pelajar yang passionate di bidang <span className="text-pixel-purple">desain grafis</span>,{' '}
                <span className="text-pixel-cyan">UI/UX design</span>, dan <span className="text-pixel-pink">video editing</span>. 
                Dengan pengalaman lebih dari 3 tahun, saya telah membantu berbagai klien mewujudkan visi kreatif mereka 
                menjadi desain yang impactful dan user-friendly.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Saya percaya bahwa desain yang baik bukan hanya tentang estetika, tetapi juga tentang 
                bagaimana sebuah desain dapat memberikan pengalaman terbaik bagi penggunanya. 
                Setiap proyek adalah kesempatan untuk belajar dan berkembang.
              </p>
            </div>

            {/* Strengths */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {strengths.map((item, index) => (
                <div 
                  key={item.title}
                  className="group relative p-4 border border-pixel-gray hover:border-pixel-purple transition-all duration-300"
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
                  }}
                >
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center border-2 border-pixel-purple/50 group-hover:border-pixel-cyan transition-colors">
                      <item.icon className="w-6 h-6 text-pixel-cyan group-hover:text-pixel-purple transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-pixel text-sm text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default About;
