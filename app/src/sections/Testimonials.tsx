import { useEffect, useRef, useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'CEO',
    company: 'TechStartup Indonesia',
    content: 'Arfan sangat profesional dalam mengerjakan desain UI untuk aplikasi kami. Hasilnya melebihi ekspektasi dan user feedback sangat positif. Recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Dewi Kusuma',
    role: 'Marketing Manager',
    company: 'Creative Agency JKT',
    content: 'Kerja sama yang sangat menyenangkan. Arfan memahami brief dengan baik dan menghasilkan desain yang kreatif sesuai dengan brand kami.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ahmad Rizki',
    role: 'Product Manager',
    company: 'Digital Solutions',
    content: 'Sangat puas dengan hasil video editing untuk product launch kami. Editing rapi, timing pas, dan komunikasi selama proses sangat lancar.',
    rating: 5,
  },
];

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-pixel-purple/20 animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-pixel-cyan/20 animate-float" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-pixel-cyan/30 bg-pixel-cyan/5">
            <span className="w-2 h-2 bg-pixel-cyan animate-pulse" />
            <span className="font-pixel text-sm text-pixel-cyan tracking-wider">TESTIMONIALS</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            APA KATA <span className="text-pixel-purple">MEREKA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Feedback dari klien yang telah bekerja sama dengan saya.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-cyan to-pixel-purple mx-auto mt-4" />
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Card */}
          <div className="relative">
            <div 
              className="relative p-8 md:p-12 border-2 border-pixel-gray bg-pixel-dark/80"
              style={{ 
                clipPath: 'polygon(0 12px, 12px 12px, 12px 0, calc(100% - 12px) 0, calc(100% - 12px) 12px, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 12px calc(100% - 12px), 0 calc(100% - 12px))'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 left-8 w-12 h-12 bg-pixel-purple flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <div className="pt-4">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-pixel-yellow fill-pixel-yellow' : 'text-pixel-gray'}`}
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 min-h-[100px]">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-14 h-14 border-2 border-pixel-cyan flex items-center justify-center bg-pixel-cyan/10">
                    <span className="font-pixel text-xl text-pixel-cyan">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-pixel text-lg text-white">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pixel-purple/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pixel-cyan/30" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-pixel-cyan' 
                      : 'bg-pixel-gray hover:bg-pixel-purple'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border-2 border-pixel-gray hover:border-pixel-cyan flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-pixel-cyan" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border-2 border-pixel-gray hover:border-pixel-cyan flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-pixel-cyan" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 mt-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '30+', label: 'Happy Clients' },
            { value: '50+', label: 'Projects Done' },
            { value: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 border border-pixel-gray/50"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="font-pixel text-2xl md:text-3xl text-pixel-cyan mb-1">
                {stat.value}
              </div>
              <div className="font-pixel text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Testimonials;
