import { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const [pixelReveal, setPixelReveal] = useState<number[]>([]);
  const loadingText = 'LOADING SYSTEM...';
  const pixelCount = 24; // 6x4 grid

  useEffect(() => {
    // Pixel reveal animation - kotak pixel muncul satu per satu
    const pixelInterval = setInterval(() => {
      setPixelReveal(prev => {
        if (prev.length < pixelCount) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 40);

    // Animate loading text
    let charIndex = 0;
    const textInterval = setInterval(() => {
      if (charIndex <= loadingText.length) {
        setText(loadingText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(textInterval);
      }
    }, 50);

    // Animate progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => {
      clearInterval(pixelInterval);
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const displayProgress = Math.min(Math.floor(progress), 100);
  
  // Generate pixel blocks in a grid pattern
  const generatePixelBlocks = () => {
    const blocks = [];
    const cols = 6;
    for (let i = 0; i < pixelCount; i++) {
      blocks.push(i);
    }
    return blocks;
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pixel-darker overflow-hidden">
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 pixel-grid opacity-30" />
      
      {/* Scanlines */}
      <div className="absolute inset-0 scanlines pointer-events-none opacity-40" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating pixel elements */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-pixel-purple/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-pixel ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4">
        {/* Pixel Logo with glow */}
        <div className="relative">
          <div className="w-24 h-24 md:w-32 md:h-32 border-4 border-pixel-purple relative animate-pulse-glow shadow-neon">
            {/* Inner pixel pattern */}
            <div className="absolute inset-4 bg-pixel-purple/20" />
            <div className="absolute inset-8 bg-pixel-purple/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-pixel text-4xl md:text-5xl text-pixel-cyan animate-pixel-flicker">
                AR
              </span>
            </div>
            {/* Corner pixels */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-pixel-cyan animate-pixel-bounce" />
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-pixel-cyan animate-pixel-bounce" style={{ animationDelay: '0.1s' }} />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pixel-cyan animate-pixel-bounce" style={{ animationDelay: '0.2s' }} />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-pixel-cyan animate-pixel-bounce" style={{ animationDelay: '0.3s' }} />
          </div>
        </div>

        {/* Pixel Reveal Grid */}
        <div className="flex flex-wrap gap-1 justify-center w-48 mb-4">
          {generatePixelBlocks().map((idx) => (
            <div
              key={idx}
              className={`w-3 h-3 transition-all duration-200 ${
                pixelReveal.includes(idx)
                  ? 'bg-pixel-cyan shadow-neon'
                  : 'bg-pixel-gray/40'
              }`}
              style={{
                animation: pixelReveal.includes(idx) ? 'scale-in 0.3s ease-out' : 'none',
              }}
            />
          ))}
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <p className="font-pixel text-xl md:text-2xl text-pixel-cyan tracking-wider">
            {text}
            <span className="animate-blink">_</span>
          </p>
        </div>

        {/* Progress Bar with enhanced effects */}
        <div className="w-64 md:w-80">
          <div className="flex justify-between mb-3">
            <span className="font-pixel text-sm text-muted-foreground">PROGRESS</span>
            <span className="font-pixel text-sm text-pixel-purple font-bold">{displayProgress}%</span>
          </div>
          <div className="h-4 bg-pixel-gray border-2 border-pixel-purple/50 relative overflow-hidden shadow-inner">
            {/* Main progress bar */}
            <div 
              className="h-full bg-gradient-to-r from-pixel-purple via-pixel-cyan to-pixel-purple transition-all duration-150 ease-out relative"
              style={{ width: `${displayProgress}%` }}
            >
              {/* Shimmer effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{
                  animation: 'shimmer 2s infinite',
                }}
              />
            </div>
            {/* Pixel blocks on progress bar */}
            <div 
              className="absolute top-0 bottom-0 w-2 bg-white/40 blur-sm"
              style={{ left: `${displayProgress}%`, transform: 'translateX(-100%)' }}
            />
          </div>
        </div>

        {/* Status Messages with animations */}
        <div className="h-6">
          {displayProgress < 30 && (
            <span className="font-pixel text-xs text-muted-foreground animate-pulse">
              &gt; INITIALIZING SYSTEM...
            </span>
          )}
          {displayProgress >= 30 && displayProgress < 60 && (
            <span className="font-pixel text-xs text-pixel-cyan animate-pulse">
              &gt; LOADING ASSETS...
            </span>
          )}
          {displayProgress >= 60 && displayProgress < 90 && (
            <span className="font-pixel text-xs text-pixel-pink animate-pulse">
              &gt; RENDERING COMPONENTS...
            </span>
          )}
          {displayProgress >= 90 && (
            <span className="font-pixel text-xs text-pixel-green animate-pulse">
              ✓ READY TO LAUNCH!
            </span>
          )}
        </div>

        {/* Decorative Pixel Blocks */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className={`w-3 h-3 transition-all duration-300 ${
                i * 25 <= displayProgress 
                  ? 'bg-pixel-purple shadow-neon' 
                  : 'bg-pixel-gray/50'
              }`}
              style={{ 
                animationDelay: `${i * 0.1}s`,
                transform: i * 25 <= displayProgress ? 'scale(1)' : 'scale(0.8)',
              }}
            />
          ))}
        </div>

        {/* Loading dots animation */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="pixel-dots">
            <div className="pixel-dot" />
            <div className="pixel-dot" />
            <div className="pixel-dot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
