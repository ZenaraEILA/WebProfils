import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Hook untuk trigger animasi ketika element masuk viewport
 * Menggunakan Intersection Observer API untuk performa optimal
 * @param threshold - Berapa persen element harus terlihat (default: 0.1)
 * @param rootMargin - Margin untuk trigger area (default: "0px")
 * @param triggerOnce - Hanya trigger sekali (default: true)
 */
export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: UseIntersectionObserverProps = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

/**
 * Hook untuk membuat parallax effect yang smooth
 * Menghitung position berdasarkan scroll dan mouse movement
 */
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate how much the element is scrolled
        const scrolled = (windowHeight - elementTop) / (elementHeight + windowHeight);
        setOffset(scrolled * speed * 50);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { elementRef, offset };
};

/**
 * Hook untuk custom cursor tracking dengan pixel trail effect
 */
export const useCursorTrail = (enabled = true) => {
  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Create trail particle
      const particle = document.createElement('div');
      particle.className = 'cursor-trail';
      particle.style.left = clientX + 'px';
      particle.style.top = clientY + 'px';
      
      document.body.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        particle.remove();
      }, 500);
    };

    // Throttle mouse move for performance
    let lastTime = 0;
    const throttledMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime >= 16) { // ~60fps
        handleMouseMove(e);
        lastTime = now;
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);
    return () => window.removeEventListener('mousemove', throttledMouseMove);
  }, [enabled]);
};

/**
 * Hook untuk stagger animations pada children elements
 * Memberikan delay yang bertingkat untuk setiap child
 */
export const useStaggerAnimation = (containerRef: React.RefObject<HTMLElement>, delay = 0.1) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const children = containerRef.current.querySelectorAll('[data-stagger]');
    children.forEach((child, index) => {
      const element = child as HTMLElement;
      element.style.animationDelay = `${index * delay}s`;
    });
  }, [delay]);
};

/**
 * Hook untuk scroll-triggered text reveal animation
 * Menganimasikan text karakter per karakter
 */
export const useRevealText = (enabled = true) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [revealedChars, setRevealedChars] = useState(0);

  useEffect(() => {
    if (!enabled || !elementRef.current) return;

    const text = elementRef.current.textContent || '';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let charIndex = 0;
          const interval = setInterval(() => {
            if (charIndex <= text.length) {
              setRevealedChars(charIndex);
              charIndex++;
            } else {
              clearInterval(interval);
            }
          }, 30);

          return () => clearInterval(interval);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [enabled]);

  return { elementRef, revealedChars };
};
