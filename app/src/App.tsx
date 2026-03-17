import { useState, useEffect } from 'react';
import LoadingScreen from './components/custom/LoadingScreen';
import Navbar from './components/custom/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Testimonials from './sections/Testimonials';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';
import './animations.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setShowContent(true);
    // Small delay before removing loading screen for smooth transition
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-pixel-darker">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {/* Main Content */}
      <div 
        className={`transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}
      >
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Skills />
          <Testimonials />
          <Experience />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
