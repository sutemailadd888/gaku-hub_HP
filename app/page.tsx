"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 4枚の画像に変更
  const heroImages = [
    '/images/hero-image-1.jpg',
    '/images/hero-image-2.jpg',
    '/images/hero-image-3.jpg',
    '/images/hero-image-4.jpg',
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5秒ごとに切り替え
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="font-sans bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-[#141d58] selection:text-white">
      {/* ========================================
          Header / Navigation (完全再現版)
      ======================================== */}
      <header
        className={`fixed top-0 left-0 w-full px-[5%] flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'py-[1.2rem] md:py-[1.5rem] bg-[#FAFAFA]/85 backdrop-blur-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            : 'py-[1.2rem] md:py-[1.5rem] bg-transparent'
        }`}
      >
        <div className="font-serif text-2xl tracking-[0.2em] font-light z-50">
          GAKU-HUB
        </div>

        {/* ハンバーガーメニュー */}
        <div
          className="md:hidden w-[30px] h-[20px] relative z-50 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-full h-[1px] bg-[#111111] absolute transition-all duration-400 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
          <span className={`block w-full h-[1px] bg-[#111111] absolute top-1/2 -translate-y-1/2 transition-all duration-400 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-full h-[1px] bg-[#111111] absolute transition-all duration-400 ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
        </div>

        <nav
          className={`fixed md:relative top-0 right-0 w-full md:w-auto h-screen md:h-auto bg-[#FAFAFA] md:bg-transparent flex flex-col md:flex-row justify-center md:justify-end items-center transition-all duration-500 z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-12 md:gap-[2.5rem] text-center items-center">
            {/* オリジナルの 0.9rem, letter-spacing: 0.1em に統一 */}
            {['Concept', 'Service', 'Exhibition', 'Members'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} onClick={() => setIsMenuOpen(false)} className="text-[0.9rem] tracking-[0.1em] text-[#111111] relative group transition-all duration-[0.6s]">
                  {item}
                  <span className="absolute -bottom-[5px] left-0 w-0 h-[1px] bg-[#141d58] transition-all duration-400 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="border border-[#141d58] px-[1.5rem] py-[0.6rem] text-[0.9rem] tracking-[0.1em] text-[#111111] hover:bg-[#141d58] hover:text-white hover:-translate-y-[2px] hover:shadow-[0_4px_10px_rgba(23,28,97,0.2)] transition-all duration-300 inline-block">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* ========================================
          Hero Section (完全再現版)
      ======================================== */}
      <section className="relative min-h-[100dvh] flex justify-center items-center overflow-hidden">
        {/* 背景画像スライダー */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={src}
                alt={`GAKU-HUB Vision ${index + 1}`}
                fill
                priority={index === 0}
                style={{ objectFit: 'cover' }}
                className="grayscale brightness-[0.8]"
              />
            </div>
          ))}
        </div>

        {/* 透過白スモークオーバーレイ (rgba(250, 250, 250, 0.6)) */}
        <div className="absolute inset-0 bg-[#FAFAFA]/60 z-10"></div>
        
        {/* 上部のグラデーションスモーク (PC: 150px, SP: 140px) */}
        <div className="absolute top-0 left-0 w-full h-[140px] md:h-[150px] bg-gradient-to-b from-[#FAFAFA]/90 to-transparent z-20 pointer-events-none"></div>

        {/* 中央のキャッチコピー (1秒遅れで1.5秒かけて出現するアニメーションをTailwindで再現) */}
        <div className="relative z-30 text-center px-12 animate-[heroTextFade_1.5s_ease_1s_forwards] opacity-0 translate-y-[30px]">
          {/* clamp を使用して画面幅に合わせて文字サイズを可変に + text-shadow で発光 */}
          <h1 className="font-serif text-[clamp(2rem,6vw,4.5rem)] leading-[1.6] mb-8 [text-shadow:0_2px_20px_rgba(255,255,255,0.8)]">
            想いが、カタチに。<br />
            出会いが、ミライに。
          </h1>
          <p className="font-serif text-[#444] text-[clamp(0.9rem,2.5vw,1.4rem)] tracking-[0.15em] [text-shadow:0_1px_10px_rgba(255,255,255,0.8)]">
            Link up your story, Link up your future.
          </p>
        </div>
        
        {/* tailwind.config.ts に書かずに、インラインで keyframes を定義して適用するための記述 */}
        <style jsx>{`
          @keyframes heroTextFade {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* ========================================
          Concept Section (縦書き)
      ======================================== */}
      <section id="concept" className="py-32 md:py-48 px-[5%] flex flex-col items-center min-h-screen justify-center">
        <div className="md:[writing-mode:vertical-rl] flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start text-center md:text-left mb-20">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-serif text-2xl md:text-3xl leading-[2.5] tracking-[0.1em] md:[text-orientation:upright]">
              溢れる『学』が、<br />誰かの『力』になる。
            </h2>
          </div>
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <p className="font-serif text-[#444] text-base md:text-lg leading-[2.5] tracking-[0.08em] md:[text-orientation:upright]">
              「何かを成し遂げたい」という純粋な想いや、<br />これまでに培ってきた知識。<br />それらは個人の内側に留めておくだけでは、<br />社会を変えることはできません。
            </p>
          </div>
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <p className="font-serif text-[#444] text-base md:text-lg leading-[2.5] tracking-[0.08em] md:[text-orientation:upright]">
              GAKU-HUBは、その熱量を社会実装へと導く<br />「結節点」です。<br />コミュニティで出会いを生み、伴走支援で形にし、<br />確かなプロジェクトとして社会へ出力します。
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          Value Section (新設：3つの行動指針)
      ======================================== */
      /* 以下のセクションは以前のプレースホルダーのまま */}
      <section id="value" className="py-32 bg-white px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-in opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-serif text-3xl tracking-[0.15em] mb-4">VALUE</h2>
            <p className="font-serif text-[#888] tracking-[0.1em] text-sm">Our Stance</p>
          </div>
          <p className="text-center text-gray-500">Value details will be added here...</p>
        </div>
      </section>

      {/* ... (以下のセクションも同様にプレースホルダー) ... */}
