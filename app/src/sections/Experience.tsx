import { useEffect, useRef, useState } from 'react';
import { Download, Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Freelance UI/UX Designer',
    organization: 'Self-employed',
    period: '2022 - Present',
    description: 'Mengerjakan berbagai proyek desain UI/UX untuk klien lokal dan internasional.',
  },
  {
    id: 2,
    type: 'work',
    title: 'Graphic Designer',
    organization: 'Creative Studio',
    period: '2021 - 2022',
    description: 'Membuat desain grafis untuk kebutuhan marketing dan branding perusahaan.',
  },
  {
    id: 3,
    type: 'education',
    title: 'SMA - Multimedia',
    organization: 'SMK Negeri',
    period: '2019 - 2022',
    description: 'Fokus pada desain grafis, video editing, dan multimedia.',
  },
  {
    id: 4,
    type: 'achievement',
    title: 'Juara 2 Lomba Desain Poster',
    organization: 'Kompetisi Nasional',
    period: '2023',
    description: 'Meraih juara 2 dalam kompetisi desain poster tingkat nasional.',
  },
];

const Experience = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'achievement':
        return Award;
      default:
        return Briefcase;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case 'work':
        return 'border-pixel-purple text-pixel-purple';
      case 'education':
        return 'border-pixel-cyan text-pixel-cyan';
      case 'achievement':
        return 'border-pixel-pink text-pixel-pink';
      default:
        return 'border-pixel-purple text-pixel-purple';
    }
  };

  return (
    <section 
      id="experience" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-pixel-purple/30 bg-pixel-purple/5">
            <span className="w-2 h-2 bg-pixel-purple animate-pulse" />
            <span className="font-pixel text-sm text-pixel-purple tracking-wider">EXPERIENCE</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            PENGALAMAN & <span className="text-pixel-cyan">RESUME</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Perjalanan karir dan pencapaian saya di bidang desain.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mt-4" />
        </div>

        {/* Download CV Button */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="pixel-btn flex items-center gap-3">
            <Download className="w-5 h-5" />
            <span>DOWNLOAD CV</span>
          </button>
        </div>

        {/* Timeline */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-pixel-purple via-pixel-cyan to-pixel-pink md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((item, index) => {
              const Icon = getIcon(item.type);
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={item.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-pixel-dark border-2 ${getColorClass(item.type)} md:-translate-x-1/2 z-10`} />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div 
                      className="relative p-5 border border-pixel-gray bg-pixel-dark/80 hover:border-pixel-purple/50 transition-colors group"
                      style={{ 
                        clipPath: 'polygon(0 6px, 6px 6px, 6px 0, calc(100% - 6px) 0, calc(100% - 6px) 6px, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 6px calc(100% - 6px), 0 calc(100% - 6px))'
                      }}
                    >
                      {/* Icon */}
                      <div className={`absolute -top-3 ${isLeft ? '-right-3' : '-left-3'} w-8 h-8 border-2 ${getColorClass(item.type)} bg-pixel-dark flex items-center justify-center`}>
                        <Icon className="w-4 h-4" />
                      </div>

                      {/* Content */}
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        <span className="font-pixel text-xs text-muted-foreground">{item.period}</span>
                      </div>

                      <h3 className="font-pixel text-lg text-white mb-1 group-hover:text-pixel-cyan transition-colors">
                        {item.title}
                      </h3>

                      <p className={`text-sm mb-2 ${getColorClass(item.type).split(' ')[1]}`}>
                        {item.organization}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>

                      {/* Corner accent */}
                      <div className={`absolute bottom-2 ${isLeft ? 'right-2' : 'left-2'} w-4 h-4 border-b-2 ${isLeft ? 'border-r-2' : 'border-l-2'} ${getColorClass(item.type).split(' ')[0]} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  </div>

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 grid sm:grid-cols-3 gap-4 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: 'UI/UX Design', level: 'Advanced' },
            { label: 'Graphic Design', level: 'Advanced' },
            { label: 'Video Editing', level: 'Intermediate' },
          ].map((skill, index) => (
            <div 
              key={skill.label}
              className="p-4 border border-pixel-gray/50 text-center"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-pixel text-sm text-white mb-1">{skill.label}</div>
              <div className="font-pixel text-xs text-pixel-cyan">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Experience;
