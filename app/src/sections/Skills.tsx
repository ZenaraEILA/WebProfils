import { useEffect, useRef, useState } from 'react';
import { 
  Figma, 
  Code2, 
  Video,
  PenTool,
  Layers,
  Monitor
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  color: string;
}

const skills: Skill[] = [
  { name: 'Figma', level: 90, icon: Figma, color: 'pixel-purple' },
  { name: 'UI/UX Design', level: 85, icon: Layers, color: 'pixel-cyan' },
  { name: 'HTML/CSS/JS', level: 80, icon: Code2, color: 'pixel-pink' },
  { name: 'Video Editing', level: 75, icon: Video, color: 'pixel-green' },
  { name: 'Graphic Design', level: 88, icon: PenTool, color: 'pixel-yellow' },
  { name: 'Web Design', level: 82, icon: Monitor, color: 'pixel-purple' },
];

const tools = [
  'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 
  'Adobe Premiere Pro', 'After Effects', 'VS Code',
  'Canva', 'Blender'
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(skills.map(() => 0));

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

  // Animate progress bars when visible
  useEffect(() => {
    if (isVisible) {
      const timeouts: ReturnType<typeof setTimeout>[] = [];
      
      skills.forEach((skill, index) => {
        const timeout = setTimeout(() => {
          setAnimatedLevels(prev => {
            const newLevels = [...prev];
            newLevels[index] = skill.level;
            return newLevels;
          });
        }, index * 150 + 300);
        timeouts.push(timeout);
      });

      return () => timeouts.forEach(clearTimeout);
    }
  }, [isVisible]);

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
      id="skills" 
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
            <span className="font-pixel text-sm text-pixel-purple tracking-wider">SKILLS</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            KEAHLIAN & <span className="text-pixel-cyan">TOOLS</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Kombinasi keterampilan dan tools yang saya gunakan untuk 
            menghasilkan karya terbaik.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-purple to-pixel-cyan mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skills Progress Bars */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h3 className="font-pixel text-xl text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-pixel-cyan" />
              SKILL LEVEL
            </h3>

            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-pixel-gray flex items-center justify-center group-hover:border-pixel-cyan transition-colors">
                      <skill.icon className="w-4 h-4 text-pixel-cyan" />
                    </div>
                    <span className="font-pixel text-sm text-white">{skill.name}</span>
                  </div>
                  <span className="font-pixel text-sm text-pixel-cyan">
                    {animatedLevels[index]}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="h-3 bg-pixel-gray border border-pixel-gray/50 relative overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${getColorClass(skill.color)} transition-all duration-1000 ease-out relative`}
                    style={{ width: `${animatedLevels[index]}%` }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                  </div>
                  
                  {/* Pixel markers */}
                  <div className="absolute top-0 bottom-0 left-1/4 w-px bg-pixel-dark/50" />
                  <div className="absolute top-0 bottom-0 left-2/4 w-px bg-pixel-dark/50" />
                  <div className="absolute top-0 bottom-0 left-3/4 w-px bg-pixel-dark/50" />
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div className={`transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="font-pixel text-xl text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-pixel-purple" />
              TOOLS
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="group relative p-4 border border-pixel-gray hover:border-pixel-cyan bg-pixel-dark/50 transition-all duration-300"
                  style={{ 
                    transitionDelay: `${index * 50}ms`,
                    clipPath: 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))'
                  }}
                >
                  <div className="text-center">
                    <div className="w-8 h-8 mx-auto mb-2 border border-pixel-gray group-hover:border-pixel-cyan flex items-center justify-center transition-colors">
                      <span className="font-pixel text-xs text-pixel-cyan">
                        {tool.charAt(0)}
                      </span>
                    </div>
                    <span className="font-pixel text-xs text-muted-foreground group-hover:text-white transition-colors">
                      {tool}
                    </span>
                  </div>
                  
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-pixel-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 border border-pixel-purple/30 bg-pixel-purple/5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border-2 border-pixel-purple flex items-center justify-center flex-shrink-0">
                  <span className="font-pixel text-xl text-pixel-cyan">+</span>
                </div>
                <div>
                  <h4 className="font-pixel text-lg text-white mb-2">SELALU BELAJAR</h4>
                  <p className="text-sm text-muted-foreground">
                    Saya terus mengembangkan skill dan mempelajari tools baru 
                    untuk tetap up-to-date dengan perkembangan industri desain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Skills;
