# 🎨 Pixel Animation System - Dokumentasi Lengkap

Dokumentasi komprehensif untuk sistem animasi pixel modern yang telah diintegrasikan ke dalam portfolio Anda. Semua animasi dioptimalkan untuk performa dengan menggunakan CSS transforms dan opacity.

---

## 📋 Daftar Isi
1. [Fitur Animasi Utama](#fitur-animasi-utama)
2. [Loading Screen](#loading-screen)
3. [Navbar](#navbar)
4. [Hero Section](#hero-section)
5. [Scroll Animations](#scroll-animations)
6. [Hover Effects](#hover-effects)
7. [Custom Hooks](#custom-hooks)
8. [Penggunaan di Components](#penggunaan-di-components)
9. [Performance Tips](#performance-tips)

---

## 🎯 Fitur Animasi Utama

### 1. **Glitch Effects**
- **Nama Class**: `glitch`
- **Deskripsi**: Efek distorsi teks yang mirip glitch dengan layer offset
- **Durasi**: 2.5s infinite
- **Penggunaan**: 
  ```jsx
  <span className="glitch" data-text="TEKS ANDA">
    TEKS ANDA
  </span>
  ```
- **Performa**: Very Good ✅

### 2. **Pixel Flicker**
- **Nama Class**: `pixel-flicker`
- **Deskripsi**: Efek kedipan ringan yang memberi kesan retro
- **Durasi**: 0.15s infinite
- **Penggunaan**: `className="pixel-flicker"`
- **Performa**: Excellent ✅

### 3. **Neon Glow**
- **Shadow Class**: `shadow-neon`, `shadow-neon-cyan`
- **Deskripsi**: Glow neon yang memancar dari elemen
- **Penggunaan**: `className="shadow-neon"`
- **Performa**: Good ✅

### 4. **Pixel Reveal**
- **Nama Class**: `pixel-reveal-item`
- **Deskripsi**: Item muncul satu per satu dengan scale animation
- **Efek**: Stagger otomatis berdasarkan nth-child
- **Penggunaan**:
  ```jsx
  <div className="pixel-reveal-item">Item 1</div>
  <div className="pixel-reveal-item">Item 2</div>
  ```
- **Performa**: Good ✅

---

## 🔄 Loading Screen

### Animasi yang Tersedia:
1. **Pixel Grid Background** - Latar belakang grid pixel
2. **Floating Pixels** - 10 pixel yang mengambang dengan smooth animation
3. **Progress Bar** - Bar dengan gradient dan shimmer effect
4. **Pixel Reveal Grid** - 24 pixel blocks muncul satu per satu (6x4 grid)
5. **Logo Animation** - Corner pixels dengan bounce effect
6. **Status Messages** - Pesan yang berubah sesuai progress
7. **Decorative Pixels** - 5 pixel blocks yang berubah warna berdasarkan progress
8. **Loading Dots** - 3 dots dengan pixel-dot animation

### Cara Menggunakan:

```jsx
import LoadingScreen from './components/custom/LoadingScreen';

// Di App.tsx
{isLoading && (
  <LoadingScreen onComplete={handleLoadingComplete} />
)}
```

### Customization:
- Ubah `pixelCount` untuk mengubah jumlah pixel dalam grid
- Ubah waktu `setInterval` untuk mengubah kecepatan animasi

---

## 🧭 Navbar

### Animasi Fitur:
1. **Blur Backdrop** - Background dengan blur saat scroll (class: `navbar-blur`)
2. **Active Link Underline** - Smooth underline animation pada link aktif
3. **Neon Hover** - Border glow saat hover (class: `neon-hover`)
4. **Floating Label** - Label muncul di atas active menu item
5. **Mobile Menu Animation** - Menu items slide up dengan stagger
6. **Icon Rotation** - Menu icon berputar saat mobile menu buka
7. **Pixel Bounce** - Decorative pixels bounce saat menu buka

### Cara Menggunakan:

```jsx
import Navbar from './components/custom/Navbar';

// Di App.tsx
<Navbar />
```

### Customized Underline:
Underline animation menggunakan gradient dan bisa dikustomisasi di Navbar.tsx:
```jsx
className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-pixel-purple to-pixel-cyan ...`}
```

---

## 🦸 Hero Section

### Animasi yang Aktif:
1. **Glitch Text** - Judul "ARFAN RESTU R." dengan efek glitch
2. **Gradient Text** - Teks dengan gradient background clip
3. **Slide Up Entrance** - Semua elemen slide up saat load dengan stagger
4. **Floating Particles** - 20 pixel mengambang di background
5. **Animated Orbs** - 2 orb dengan glow yang bergerak mengikuti mouse (parallax)
6. **Neon Hover on Stats** - Stats numbers glow saat hover dengan scale
7. **Button Ripple** - Button dengan ripple effect saat klik
8. **Icon Bounce** - Sparkles icon bounce di badge
9. **Scroll Indicator** - Scroll indicator di bawah dengan bounce animation

### Cara Menggunakan:

```jsx
import Hero from './sections/Hero';

// Di App.tsx
<Hero />
```

### Customization Mouse Parallax:
```jsx
// Ubah nilai 20 untuk mengubah intensity parallax
const x = (clientX / innerWidth - 0.5) * 20;
```

---

## 📜 Scroll Animations

### Hook: `useIntersectionObserver`

**Fitur:**
- Trigger animasi saat elemen masuk viewport
- Opsi untuk trigger hanya sekali atau berulang
- Threshold dan rootMargin customizable

**Penggunaan:**
```jsx
import { useIntersectionObserver } from '@/hooks/useAnimations';

function MySection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div 
      ref={elementRef}
      className={isVisible ? 'animate-slide-up' : 'opacity-0'}
    >
      Content
    </div>
  );
}
```

### Component: `SectionWrapper`

**Fitur:**
- Wrapper otomatis dengan scroll animation
- 4 tipe animasi: 'fade-in', 'slide-up', 'zoom-in', 'none'
- Trigger otomatis dengan Intersection Observer

**Penggunaan:**
```jsx
import { SectionWrapper } from '@/components/custom/SectionWrapper';

<SectionWrapper 
  id="about" 
  animationType="slide-up"
  className="py-20"
>
  <h2>About Section</h2>
  {/* Content */}
</SectionWrapper>
```

### Animasi Scroll yang Tersedia:

| Class | Efek | Durasi |
|-------|------|--------|
| `scroll-fade-in` | Fade in dengan blur effect | 0.6s |
| `scroll-slide-up` | Slide up dengan fade | 0.6s |
| `pixel-reveal-item` | Skala naik dengan stagger | 0.5s |

---

## 🖱️ Hover Effects

### Button Hover (`btn-hover-glow`)
```jsx
<button className="btn-hover-glow">
  Button with Glow
</button>
```
**Efek:**
- Scale up 1.05x
- Neon shadow dengan spread
- Shimmer effect di atas button

### Neon Border Hover (`neon-hover`)
```jsx
<div className="neon-hover">
  Neon Border Element
</div>
```
**Efek:**
- Border glow cyan saat hover
- Inset shadow untuk depth
- Smooth transition 0.3s

### Card Zoom Hover (`card-hover-zoom`)
```jsx
<div className="card-hover-zoom">
  Card Content
</div>
```
**Efek:**
- Scale 1.05x saat hover
- Shadow shadow neon
- Gradient overlay fade in

### Icon Animations
```jsx
// Bounce
<div className="icon-bounce-hover">
  <Icon />
</div>

// Rotate
<div className="icon-rotate-hover">
  <Icon />
</div>
```

---

## 🎣 Custom Hooks

### 1. `useIntersectionObserver(options)`

```jsx
const { elementRef, isVisible } = useIntersectionObserver({
  threshold: 0.1,           // 0-1: berapa persen element harus terlihat
  rootMargin: '0px',        // Margin untuk trigger area
  triggerOnce: true,        // Hanya trigger sekali
});
```

**Return:**
- `elementRef`: Ref untuk HTML element
- `isVisible`: Boolean state animasi

### 2. `useParallax(speed)`

```jsx
const { elementRef, offset } = useParallax(0.5);

return (
  <div 
    ref={elementRef}
    style={{ transform: `translateY(${offset}px)` }}
  >
    Parallax Content
  </div>
);
```

### 3. `useCursorTrail(enabled)`

```jsx
useCursorTrail(true); // Aktifkan cursor trail

// Styling via: .cursor-trail class di animations.css
```

### 4. `useStaggerAnimation(containerRef, delay)`

```jsx
const containerRef = useRef();
useStaggerAnimation(containerRef, 0.1);

return (
  <div ref={containerRef}>
    <div data-stagger>Item 1</div>
    <div data-stagger>Item 2</div>
  </div>
);
```

---

## 💻 Penggunaan di Components

### Contoh 1: Section dengan Scroll Animation

```jsx
import { SectionWrapper } from '@/components/custom/SectionWrapper';

export default function About() {
  return (
    <SectionWrapper id="about" animationType="slide-up" className="py-20">
      <h2 className="text-4xl mb-8">About Me</h2>
      <p>Your content here...</p>
    </SectionWrapper>
  );
}
```

### Contoh 2: Card dengan Hover Effects

```jsx
export function ProjectCard() {
  return (
    <div className="card-hover-zoom neon-hover p-6">
      <h3 className="text-2xl mb-4">Project Title</h3>
      <button className="btn-hover-glow mt-4">
        View Project
      </button>
    </div>
  );
}
```

### Contoh 3: Custom Scroll Trigger

```jsx
import { useIntersectionObserver } from '@/hooks/useAnimations';

export function FeatureSection() {
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
      }`}
    >
      Content that animates when visible
    </div>
  );
}
```

---

## ⚡ Performance Tips

### ✅ Best Practices

1. **Gunakan `will-change` dengan hati-hati**
   ```css
   .animated-element {
     will-change: transform, opacity;
   }
   ```

2. **Prefer Transforms over Position**
   ```jsx
   // ❌ Avoid - akan trigger reflow/repaint
   style={{ left: `${x}px`, top: `${y}px` }}
   
   // ✅ Good - hanya composite
   style={{ transform: `translate(${x}px, ${y}px)` }}
   ```

3. **GPU Acceleration**
   ```css
   .animated {
     transform: translate3d(0, 0, 0);
     backface-visibility: hidden;
   }
   ```

4. **Reduce Motion Support**
   - Semua animasi otomatis disabled jika user prefer reduced motion
   - Cek: `@media (prefers-reduced-motion: reduce)`

5. **Mobile Optimization**
   - Animasi lebih sederhana di layar < 768px
   - Particle count berkurang
   - Hover effects di-disable di touch devices

### 📊 Animasi Performance Summary

| Animasi | GPU Accelerated | Mobile Optimized | Impact |
|---------|---|---|---|
| Glitch Text | ✅ | ✅ | Low |
| Pixel Flicker | ✅ | ✅ | Low |
| Scroll Fade/Slide | ✅ | ✅ | Low |
| Button Ripple | ✅ | ✅ | Medium |
| Card Zoom | ✅ | ✅ | Medium |
| Floating Particles | ✅ | ⚠️ | Medium |
| Mouse Parallax | ✅ | N/A | Medium |
| Neon Glow | ✓ | ✅ | Medium |

---

## 🎨 CSS Classes Reference

### Animation Classes
| Class | Durasi | Type |
|-------|--------|------|
| `animate-glitch` | 0.4s | infinite |
| `animate-glow` | 2s | infinite |
| `animate-float` | 3-5s | infinite |
| `animate-pulse-glow` | 2s | infinite |
| `animate-slide-up` | 0.5s | one-time |
| `animate-slide-in-left` | 0.5s | one-time |
| `animate-zoom-in` | 0.4s | one-time |
| `animate-pixel-bounce` | 0.5s | one-time |

### Background Classes
| Class | Efek |
|-------|------|
| `pixel-grid` | Grid pattern background |
| `scanlines` | Scanlines effect |

### Effect Classes
| Class | Efek |
|-------|------|
| `neon-hover` | Neon border glow |
| `btn-hover-glow` | Button dengan glow |
| `btn-ripple` | Ripple effect |
| `card-hover-zoom` | Card zoom + overlay |
| `icon-bounce-hover` | Icon bounce |
| `icon-rotate-hover` | Icon rotate 360° |

---

## 🐛 Troubleshooting

### Animasi Tidak Berjalan
1. Cek apakah `animations.css` sudah di-import di `App.tsx`
2. Pastikan Tailwind config sudah di-update dengan keyframes baru
3. Clear browser cache

### Performa Bertambah Buruk
1. Reduce jumlah floating particles
2. Disable cursor trail jika tidak perlu
3. Check: DevTools > Performance > Recording

### Motion Sickness (User Prefer Reduced Motion)
- Animasi otomatis di-reduce jika user prefer reduced motion
- Tested dan compliant dengan WCAG guidelines

---

## 📚 Referensi File

| File | Tujuan |
|------|--------|
| `src/animations.css` | CSS untuk semua animasi |
| `src/App.css` | Button & global styles |
| `tailwind.config.js` | Keyframes & animation configs |
| `src/hooks/useAnimations.ts` | Custom hooks untuk animasi |
| `src/components/custom/SectionWrapper.tsx` | Wrapper dengan scroll animation |
| `src/components/custom/LoadingScreen.tsx` | Loading screen dengan animasi |
| `src/components/custom/Navbar.tsx` | Navbar dengan blur & underline |
| `src/sections/Hero.tsx` | Hero dengan glitch & parallax |

---

## 🎓 Tips Lanjutan

### 1. Membuat Custom Animation

```css
@keyframes custom-wave {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.animate-wave {
  animation: custom-wave 2s ease-in-out infinite;
}
```

### 2. Stagger Multiple Elements

```jsx
{items.map((item, i) => (
  <div 
    key={i}
    className={`stagger-${(i % 5) + 1}`}
  >
    {item}
  </div>
))}
```

### 3. Conditional Animation

```jsx
const { elementRef, isVisible } = useIntersectionObserver();

return (
  <div 
    ref={elementRef}
    className={`${isVisible ? 'animate-slide-up' : ''}`}
  >
    Animates when visible
  </div>
);
```

---

## 📞 Support & Customization

Untuk lebih lanjut customize animasi:
1. Edit keyframes di `tailwind.config.js`
2. Ubah timing di `animations.css`
3. Adjust colors menggunakan CSS variables

**Enjoy your pixel animations! 🎉**
