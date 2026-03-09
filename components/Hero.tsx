"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const heroImages = [
    '/images/hero-image-1.jpg',
    '/images/hero-image-2.jpg',
    '/images/hero-image-3.jpg',
    '/images/hero-image-4.jpg',
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => setCurrentSlide((prev) => (prev + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[100dvh] flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}>
            <Image src={src} alt={`GAKU-HUB Vision ${index + 1}`} fill priority={index === 0} style={{ objectFit: 'cover' }} className="grayscale brightness-[0.8]" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[#FAFAFA]/60 z-10"></div>
      <div className="absolute top-0 left-0 w-full h-[140px] md:h-[150px] bg-gradient-to-b from-[#FAFAFA]/90 to-transparent z-20 pointer-events-none"></div>

      <div className={`relative z-30 text-center px-[5%] transition-all duration-[1500ms] ease-out delay-[1000ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
        <h1 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[2rem] md:text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.1em] leading-[1.6] mb-[2rem] font-normal [text-shadow:0_2px_20px_rgba(255,255,255,0.8)]">
          想いが、カタチに。<br />出会いが、ミライに。
        </h1>
        <p className="font-['Didot','Garamond',serif] text-[#444] text-[0.9rem] md:text-[clamp(1rem,2.5vw,1.4rem)] tracking-[0.15em] [text-shadow:0_1px_10px_rgba(255,255,255,0.8)]">
          Link up your story, Link up your future.
        </p>
      </div>
    </section>
  );
}
