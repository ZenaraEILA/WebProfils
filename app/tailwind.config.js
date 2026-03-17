/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        pixel: ['VT323', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        pixel: {
          purple: "hsl(280 100% 60%)",
          cyan: "hsl(180 100% 50%)",
          pink: "hsl(320 100% 60%)",
          green: "hsl(140 100% 50%)",
          yellow: "hsl(50 100% 50%)",
          dark: "hsl(220 20% 8%)",
          darker: "hsl(220 25% 5%)",
          gray: "hsl(220 15% 20%)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'neon': '0 0 5px hsl(280 100% 60%), 0 0 20px hsl(280 100% 60% / 0.5)',
        'neon-cyan': '0 0 5px hsl(180 100% 50%), 0 0 20px hsl(180 100% 50% / 0.5)',
        'pixel': '-4px 0 0 0 hsl(280 100% 60%), 4px 0 0 0 hsl(280 100% 60%), 0 -4px 0 0 hsl(280 100% 60%), 0 4px 0 0 hsl(280 100% 60%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(280 100% 60% / 0.5)" },
          "50%": { boxShadow: "0 0 20px hsl(280 100% 60% / 0.8)" },
        },
        "shimmer": {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "pixel-bounce": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-4px)" },
        },
        // Glitch effects
        "glitch": {
          "0%": { clipPath: "polygon(0% 0%, 100% 0%, 100% 45%, 0% 45%)" },
          "5%": { clipPath: "polygon(0% 60%, 100% 60%, 100% 100%, 0% 100%)" },
          "10%": { clipPath: "polygon(0% 30%, 100% 30%, 100% 70%, 0% 70%)" },
          "12%": { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        },
        "glitch-text": {
          "0%": { 
            textShadow: "-2px 0 hsl(280 100% 60%), 2px 0 hsl(180 100% 50%)",
            transform: "translateX(0)"
          },
          "20%": { 
            textShadow: "2px 0 hsl(280 100% 60%), -2px 0 hsl(180 100% 50%)",
            transform: "translateX(2px)"
          },
          "40%": { 
            textShadow: "-2px 0 hsl(280 100% 60%), 2px 0 hsl(180 100% 50%)",
            transform: "translateX(-2px)"
          },
          "60%": { 
            textShadow: "0 0 transparent, 0 0 transparent",
            transform: "translateX(0)"
          },
          "80%": { 
            textShadow: "-2px 0 hsl(280 100% 60%), 2px 0 hsl(180 100% 50%)",
            transform: "translateX(2px)"
          },
          "100%": { 
            textShadow: "2px 0 hsl(280 100% 60%), -2px 0 hsl(180 100% 50%)",
            transform: "translateX(0)"
          },
        },
        "typing": {
          "from": { width: "0" },
          "to": { width: "100%" },
        },
        "pixel-reveal": {
          "0%": { 
            backgroundPosition: "0% 0%",
            opacity: "0"
          },
          "100%": { 
            backgroundPosition: "100% 100%",
            opacity: "1"
          },
        },
        "neon-flicker": {
          "0%, 18%, 22%, 25%, 54%, 56%, 100%": {
            textShadow: "0 0 5px hsl(280 100% 60%), 0 0 10px hsl(280 100% 60%), 0 0 20px hsl(280 100% 60%)"
          },
          "20%, 24%, 55%": {
            textShadow: "0 0 2px hsl(280 100% 60%)"
          },
        },
        "border-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px hsl(280 100% 60%), inset 0 0 5px hsl(280 100% 60% / 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 20px hsl(280 100% 60%), inset 0 0 10px hsl(280 100% 60% / 0.5)"
          },
        },
        "ripple": {
          "0%": {
            boxShadow: "0 0 0 0 hsl(280 100% 60% / 0.7)"
          },
          "100%": {
            boxShadow: "0 0 0 10px hsl(280 100% 60% / 0)"
          },
        },
        "pixel-flicker": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "fade-blur-in": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0px)" },
        },
        "fade-blur-out": {
          "0%": { opacity: "1", filter: "blur(0px)" },
          "100%": { opacity: "0", filter: "blur(10px)" },
        },
        "zoom-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.8)", opacity: "0" },
        },
        "pixel-bounce-in": {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "rotate-light": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "shimmer": "shimmer 1.5s infinite",
        "blink": "blink 1s step-end infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "pixel-bounce": "pixel-bounce 0.5s ease-in-out",
        "glitch": "glitch 0.4s infinite",
        "glitch-text": "glitch-text 2.5s infinite",
        "typing": "typing 3.5s steps(40, end)",
        "pixel-reveal": "pixel-reveal 0.6s ease-out forwards",
        "neon-flicker": "neon-flicker 3s infinite",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "ripple": "ripple 0.6s ease-out",
        "pixel-flicker": "pixel-flicker 0.15s infinite",
        "fade-blur-in": "fade-blur-in 0.5s ease-out",
        "fade-blur-out": "fade-blur-out 0.5s ease-in",
        "zoom-in": "zoom-in 0.4s ease-out",
        "zoom-out": "zoom-out 0.3s ease-in",
        "pixel-bounce-in": "pixel-bounce-in 0.6s ease-out",
        "rotate-light": "rotate-light 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
