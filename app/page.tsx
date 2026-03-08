"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  // 4枚の画像
  const heroImages = [
    '/images/hero-image-1.jpg',
    '/images/hero-image-2.jpg',
    '/images/hero-image-3.jpg',
    '/images/hero-image-4.jpg',
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    // ページ全体の基本フォントを「游ゴシック」に指定
    <div className="font-['Yu_Gothic','游ゴシック','Hiragino_Sans',sans-serif] bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-[#141d58] selection:text-white">
      
      {/* ========================================
          Header / Navigation
      ======================================== */}
      <header
        className={`fixed top-0 left-0 w-full px-[5%] flex justify-between items-center z-50 transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'py-[1.2rem] md:py-[1.5rem] bg-[#FAFAFA]/85 backdrop-blur-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
            : 'py-[1.2rem] md:py-[1.5rem] bg-transparent'
        }`}
      >
        {/* ロゴ：Didot / 游明朝, サイズ1.5rem, 間隔0.2em, 極細(300) */}
        <div className="font-['Didot','Yu_Mincho',serif] text-[1.5rem] tracking-[0.2em] font-light z-50">
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
            {/* ナビリンク：サイズ0.9rem, 間隔0.1em */}
            {['Concept', 'Value', 'Service', 'Program'].map((item) => (
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
          Hero Section
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

        {/* 透過白スモークオーバーレイ */}
        <div className="absolute inset-0 bg-[#FAFAFA]/60 z-10"></div>
        
        {/* 上部のグラデーションスモーク */}
        <div className="absolute top-0 left-0 w-full h-[140px] md:h-[150px] bg-gradient-to-b from-[#FAFAFA]/90 to-transparent z-20 pointer-events-none"></div>

        {/* 中央のキャッチコピー */}
        <div 
          className={`relative z-30 text-center px-[5%] transition-all duration-[1500ms] ease-out delay-[1000ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          {/* メインコピー：游明朝, スマホ2rem/PC可変, 間隔0.1em, 行高1.6 */}
          <h1 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[2rem] md:text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.1em] leading-[1.6] mb-[2rem] font-normal [text-shadow:0_2px_20px_rgba(255,255,255,0.8)]">
            想いが、カタチに。<br />
            出会いが、ミライに。
          </h1>
          {/* サブコピー：Didot, スマホ0.9rem/PC可変, 間隔0.15em */}
          <p className="font-['Didot','Garamond',serif] text-[#444] text-[0.9rem] md:text-[clamp(1rem,2.5vw,1.4rem)] tracking-[0.15em] [text-shadow:0_1px_10px_rgba(255,255,255,0.8)]">
            Link up your story, Link up your future.
          </p>
        </div>
      </section>

      {/* これ以降のセクション（Concept, Value, Service, Program, Footer）は
          前回お渡ししたコードと全く同じ内容が続きますので、そのまま残して・もしくは貼り付けてください！ 
          （※長くなりすぎるのを防ぐため割愛していますが、もし下半分のコードも再度必要であればすぐに出力します）
      */}
      
      {/* ... (Conceptセクション等が続く) ... */}

    </div>
  );
}
