import { useEffect, useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone, Instagram, Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pixel-pink' },
  { icon: Github, label: 'GitHub', href: '#', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'hover:text-pixel-cyan' },
  { icon: Twitter, label: 'Twitter', href: '#', color: 'hover:text-pixel-blue' },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pixel-grid opacity-20" />
      <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-pixel-purple/10 animate-float" />
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-pixel-cyan/10 animate-float" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-pixel-cyan/30 bg-pixel-cyan/5">
            <span className="w-2 h-2 bg-pixel-cyan animate-pulse" />
            <span className="font-pixel text-sm text-pixel-cyan tracking-wider">CONTACT</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            HUBUNGI <span className="text-pixel-purple">SAYA</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Punya proyek atau ide kreatif? Mari diskusikan dan wujudkan bersama!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-pixel-cyan to-pixel-purple mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="font-pixel text-xl text-white mb-4">INFORMASI KONTAK</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Jangan ragu untuk menghubungi saya. Saya akan merespons secepat mungkin!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'arfanrestu99@gmail.com' },
                { icon: Phone, label: 'Phone', value: '+62 857 1614 5929' },
                { icon: MapPin, label: 'Location', value: 'Malang, Jawa Timur, Indonesia' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 border border-pixel-gray flex items-center justify-center group-hover:border-pixel-cyan transition-colors">
                    <item.icon className="w-5 h-5 text-pixel-cyan" />
                  </div>
                  <div>
                    <p className="font-pixel text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-white text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="font-pixel text-xs text-muted-foreground mb-4">FOLLOW ME</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 border border-pixel-gray flex items-center justify-center text-muted-foreground ${social.color} hover:border-current transition-all`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-4 border border-pixel-green/30 bg-pixel-green/5">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-pixel-green rounded-full animate-pulse" />
                <div>
                  <p className="font-pixel text-sm text-pixel-green">AVAILABLE FOR WORK</p>
                  <p className="text-xs text-muted-foreground">Open for freelance projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div 
              className="relative p-6 md:p-8 border-2 border-pixel-gray bg-pixel-dark/50"
              style={{ 
                clipPath: 'polygon(0 8px, 8px 8px, 8px 0, calc(100% - 8px) 0, calc(100% - 8px) 8px, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 8px calc(100% - 8px), 0 calc(100% - 8px))'
              }}
            >
              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pixel-purple/30" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pixel-cyan/30" />

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 border-2 border-pixel-green flex items-center justify-center">
                    <Send className="w-8 h-8 text-pixel-green" />
                  </div>
                  <h3 className="font-pixel text-xl text-white mb-2">PESAN TERKIRIM!</h3>
                  <p className="text-muted-foreground">Terima kasih. Saya akan merespons segera.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div>
                      <label className="block font-pixel text-xs text-muted-foreground mb-2">
                        NAMA
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pixel-input"
                        placeholder="Nama Anda"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block font-pixel text-xs text-muted-foreground mb-2">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pixel-input"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block font-pixel text-xs text-muted-foreground mb-2">
                      PESAN
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="pixel-input resize-none"
                      placeholder="Ceritakan tentang proyek Anda..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="pixel-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>MENGIRIM...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>KIRIM PESAN</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
};

export default Contact;
