"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // 提供された画像パス（public/images/ に配置してください）
  const heroImages = [
    '/images/hero-image-1.jpg',
    '/images/hero-image-2.jpg',
    '/images/hero-image-3.jpg',
    '/images/hero-image-4.jpg',
  ];

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ヒーロー背景のスライドショー (5秒ごとに切り替え)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // スクロールアニメーション（Intersection Observer）
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-sans bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-[#141d58] selection:text-white">
      {/* ========================================
          Header / Navigation
          【修正点】
          1. py-[1.2rem] md:py-6 とし、スマホ/PCそれぞれの高さをスクロール時も不変に。
          2. すりガラス効果 (backdrop-blur-md) をPC/スマホ共通で適用。
      ======================================== */}
      <header
        className={`fixed top-0 left-0 w-full px-[5%] transition-all duration-300 ${
          scrolled || isMenuOpen
            ? 'bg-[#FAFAFA]/85 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        } py-[1.2rem] md:py-6 z-50`} 
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

        {/* PC & Mobile ナビゲーション */}
        <nav
          className={`fixed md:relative top-0 right-0 w-full md:w-auto h-screen md:h-auto bg-[#FAFAFA] md:bg-transparent flex flex-col md:flex-row justify-center md:justify-end items-center transition-all duration-500 z-40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-8 md:gap-10 text-center">
            <li><a href="#concept" onClick={() => setIsMenuOpen(false)} className="text-sm tracking-[0.1em] hover:text-[#141d58] transition-colors relative group">Concept<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#141d58] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#value" onClick={() => setIsMenuOpen(false)} className="text-sm tracking-[0.1em] hover:text-[#141d58] transition-colors relative group">Value<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#141d58] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#service" onClick={() => setIsMenuOpen(false)} className="text-sm tracking-[0.1em] hover:text-[#141d58] transition-colors relative group">Service<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#141d58] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#program" onClick={() => setIsMenuOpen(false)} className="text-sm tracking-[0.1em] hover:text-[#141d58] transition-colors relative group">Program<span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#141d58] transition-all duration-300 group-hover:w-full"></span></a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)} className="border border-[#141d58] px-6 py-2 text-sm tracking-[0.1em] hover:bg-[#141d58] hover:text-white transition-all duration-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* ========================================
          Hero Section
          【修正点】
          1. 背景画像をグレースケール(grayscale)＋明るさ80%(brightness-80)に。
          2. アニメーションを duration-[2000ms] ease-in-out で静かなクロスフェードに。
          3. キャッチコピーの出現遅延を delay-1000 に調整。
      ======================================== */}
      <section className="relative min-h-[100dvh] flex justify-center items-center overflow-hidden px-[5%]">
        {/* 背景画像スライダー */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="w-full h-full relative">
                 <Image
                  src={src}
                  alt={`GAKU-HUB Vision ${index + 1}`}
                  fill
                  priority={index === 0} // 最初の画像だけ優先ロード
                  style={{ objectFit: 'cover' }}
                  className="grayscale brightness-80" // グレースケールと明るさ80%
                 />
              </div>
            </div>
          ))}
        </div>

        {/* 透過白スモークオーバーレイ */}
        <div className="absolute inset-0 bg-[#FAFAFA]/60 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-[150px] bg-gradient-to-b from-[#FAFAFA]/90 to-transparent z-20 pointer-events-none"></div>

        {/* キャッチコピー */}
        <div className="relative z-30 text-center fade-in opacity-0 translate-y-10 transition-all duration-1000 delay-1000">
          <h1 className="font-serif text-3xl md:text-5xl leading-relaxed mb-6 tracking-[0.1em]">
            想いが、カタチに。<br />
            出会いが、ミライに。
          </h1>
          <p className="font-serif text-[#444] text-lg md:text-xl tracking-[0.15em]">
            Link up your story, Link up your future.
          </p>
        </div>
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
