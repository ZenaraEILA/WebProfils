import { useIntersectionObserver } from '@/hooks/useAnimations';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'zoom-in' | 'none';
  id?: string;
}

/**
 * Wrapper component untuk sections dengan scroll animation
 * Automatically triggers animation ketika section masuk viewport
 */
export const SectionWrapper = ({
  children,
  className = '',
  animationType = 'slide-up',
  id,
}: SectionWrapperProps) => {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    triggerOnce: true,
  });

  const animationClass = {
    'fade-in': 'scroll-fade-in',
    'slide-up': 'scroll-slide-up',
    'zoom-in': 'animate-zoom-in',
    'none': '',
  }[animationType];

  return (
    <section
      ref={elementRef}
      id={id}
      className={`
        ${className}
        ${isVisible ? animationClass : 'opacity-0'}
        transition-all duration-700
      `}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
