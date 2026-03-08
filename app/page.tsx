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

  // スクロール検知とマウント検知
  useEffect(() => {
    setMounted(true);
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
        <div className="font-['Didot','Yu_Mincho',serif] text-[1.5rem] tracking-[0.2em] font-light z-50">
          GAKU-HUB
        </div>

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

        <div className="absolute inset-0 bg-[#FAFAFA]/60 z-10"></div>
        <div className="absolute top-0 left-0 w-full h-[140px] md:h-[150px] bg-gradient-to-b from-[#FAFAFA]/90 to-transparent z-20 pointer-events-none"></div>

        <div 
          className={`relative z-30 text-center px-[5%] transition-all duration-[1500ms] ease-out delay-[1000ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'
          }`}
        >
          <h1 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[2rem] md:text-[clamp(2.5rem,6vw,4.5rem)] tracking-[0.1em] leading-[1.6] mb-[2rem] font-normal [text-shadow:0_2px_20px_rgba(255,255,255,0.8)]">
            想いが、カタチに。<br />
            出会いが、ミライに。
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#444] text-[0.9rem] md:text-[clamp(1rem,2.5vw,1.4rem)] tracking-[0.15em] [text-shadow:0_1px_10px_rgba(255,255,255,0.8)]">
            Link up your story, Link up your future.
          </p>
        </div>
      </section>

      {/* ========================================
          Concept Section
      ======================================== */}
      <section id="concept" className="py-32 md:py-48 px-[5%] flex flex-col items-center min-h-screen justify-center">
        <div className="md:[writing-mode:vertical-rl] flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start text-center md:text-left mb-20">
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[1.6rem] md:text-[2.5rem] leading-[2.2] tracking-[0.1em] font-normal md:[text-orientation:upright]">
              溢れる『学』が、<br />誰かの『力』になる。
            </h2>
          </div>
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <p className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[#444] text-[1rem] md:text-[1.1rem] leading-[2.5] tracking-[0.08em] font-light md:[text-orientation:upright]">
              「何かを成し遂げたい」という純粋な想いや、<br />これまでに培ってきた知識。<br />それらは個人の内側に留めておくだけでは、<br />社会を変えることはできません。
            </p>
          </div>
          <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-400">
            <p className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[#444] text-[1rem] md:text-[1.1rem] leading-[2.5] tracking-[0.08em] font-light md:[text-orientation:upright]">
              GAKU-HUBは、その熱量を社会実装へと導く<br />「結節点」です。<br />コミュニティで出会いを生み、伴走支援で形にし、<br />確かなプロジェクトとして社会へ出力します。
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          Value Section
      ======================================== */}
      <section id="value" className="py-32 bg-white px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 fade-in opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">VALUE</h2>
            <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">Our Stance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '01', en: 'Extract the Essence', jp: '本質的課題の抽出', desc: '表面的な事象や初期衝動を鵜呑みにせず、熱量の根底にある「真因（Why）」を論理的に深掘りし、社会に実装すべき真の課題を特定します。' },
              { num: '02', en: 'Integrate Optimal Resources', jp: '最適リソースの結合', desc: '自前主義にこだわらず、課題解決という目的から逆算し、コミュニティ内外に存在する最適な知見、技術、人材を戦略的にマッチングさせます。' },
              { num: '03', en: 'Commit to Implementation', jp: '社会実装へのコミットメント', desc: '議論やアイデアの提供で満足せず、イベント、プロダクト、事業といった目に見える具体的な「カタチ」として社会に出力するまで完遂します。' },
            ].map((value, i) => (
              <div key={i} className="fade-in opacity-0 translate-y-10 transition-all duration-700 border-t border-[#eee] pt-8">
                <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.5rem] tracking-[0.1em] mb-2">{value.num}</div>
                <h3 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[1.2rem] tracking-[0.1em] mb-2 font-normal">{value.jp}</h3>
                <p className="text-[0.8rem] text-[#888] font-['Didot','Garamond',serif] tracking-[0.15em] mb-6 uppercase">{value.en}</p>
                <p className="text-[0.95rem] leading-[1.9] text-[#555]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          Service Section
      ======================================== */}
      <section id="service" className="py-32 px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24 fade-in opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">SERVICE</h2>
            <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">3 Business Domains</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
            {/* INCUBATION */}
            <div className="flex-1 text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.2rem] tracking-[0.1em] mb-4">01</div>
              <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] mb-2">INCUBATION</h3>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#888] tracking-[0.1em] mb-6">個の伴走支援・プロジェクト創出</p>
              <p className="text-[0.95rem] leading-[1.9] text-[#555] text-left md:text-center">
                個人の内なる熱量を起点とする1on1コンサルティング。課題の本質を抽出し、企画から実装まで二人三脚で走ります。<br />
                <span className="block mt-4 text-[0.85rem] text-[#888]">対象：プロジェクトを社会実装したい<br className="hidden md:block"/>Standard Member</span>
              </p>
            </div>

            <div className="hidden md:block w-[1px] bg-[rgba(17,17,17,0.1)] mt-12 mb-4"></div>

            {/* COMMUNITY & EVENT */}
            <div className="flex-1 text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.2rem] tracking-[0.1em] mb-4">02</div>
              <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] mb-2">COMMUNITY</h3>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#888] tracking-[0.1em] mb-6">共創プラットフォーム運営</p>
              <p className="text-[0.95rem] leading-[1.9] text-[#555] text-left md:text-center">
                多様な知見が交差するオープンな場の企画・運営。Incubationで生まれたプロジェクトの「最初の出力の場」として機能します。<br />
                <span className="block mt-4 text-[0.85rem] text-[#888]">対象：GAKU-HUBに興味を持つ<br className="hidden md:block"/>Starter Member</span>
              </p>
            </div>

            <div className="hidden md:block w-[1px] bg-[rgba(17,17,17,0.1)] mt-12 mb-4"></div>

            {/* BtoB PMO & CONSULTING */}
            <div className="flex-1 text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.2rem] tracking-[0.1em] mb-4">03</div>
              <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] mb-2">CONSULTING</h3>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#888] tracking-[0.1em] mb-6">法人向け・外部PMO実行支援</p>
              <p className="text-[0.95rem] leading-[1.9] text-[#555] text-left md:text-center">
                「場はあるが実績が生まれない」施設等の課題を解決。外部PMOとして入り込み、共創事例の創出と確実なマッチングを実現します。<br />
                <span className="block mt-4 text-[0.85rem] text-[#888]">対象：共創施設・オープンイノベーション推進企業</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          Program Section (Dual Funnel)
      ======================================== */}
      <section id="program" className="py-32 bg-[#111111] text-white px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-700">
            <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">PROGRAM</h2>
            <p className="font-['Didot','Garamond',serif] text-[#aaa] tracking-[0.1em] text-[1rem]">Join the Co-creation</p>
            <p className="mt-8 text-[0.95rem] leading-[1.9] text-gray-300">
              GAKU-HUBのインフラを利用して、あなたの想いを形にする「ゼロリスク・プロデュースモデル」。<br className="hidden md:block" />
              学生は初期費用無料で、プロジェクトの実装に挑戦できます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ルートA：直轄モデル */}
            <div className="border border-white/20 p-8 md:p-12 hover:border-[#141d58] transition-colors group relative overflow-hidden fade-in opacity-0 translate-y-10 transition-all duration-700">
              <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="relative z-10">
                <span className="font-['Didot','Garamond',serif] text-[#aaa] text-[0.8rem] tracking-[0.2em] block mb-4">ROUTE A : DIRECT</span>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-4 font-normal leading-snug">GAKU-HUB<br />チャレンジャー枠</h3>
                <p className="text-[0.95rem] text-gray-400 mb-6 leading-[1.9]">
                  自力で熱量を形にしたい独立志向の学生向け。イベント売上でプロデュース費を相殺するチケットバック制を採用します。
                </p>
                <div className="text-[0.8rem] text-gray-500 border-t border-white/10 pt-4">対象: すべての学生・若手社会人</div>
              </div>
            </div>

            {/* ルートB：提携先モデル */}
            <div className="border border-[#141d58] p-8 md:p-12 hover:bg-[#141d58]/20 transition-colors group relative overflow-hidden fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="relative z-10">
                <span className="font-['Didot','Garamond',serif] text-[#8ba3d4] text-[0.8rem] tracking-[0.2em] block mb-4">ROUTE B : PARTNER</span>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-4 font-normal leading-snug">提携コミュニティ<br />推薦枠（ノーリスク）</h3>
                <p className="text-[0.95rem] text-gray-300 mb-6 leading-[1.9]">
                  共創EXPOなどの提携コミュニティメンバー限定。提携先が費用を負担するため、完全ノーリスクでGAKU-HUBの伴走支援が受けられます。
                </p>
                <div className="text-[0.8rem] text-gray-400 border-t border-white/10 pt-4">対象: 提携先コミュニティ（共創EXPO等）の所属メンバー</div>
              </div>
            </div>
          </div>

          <div id="contact" className="mt-8 border border-white/10 p-8 text-center hover:bg-white/5 transition-colors fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300 cursor-pointer">
             <span className="font-['Didot','Garamond',serif] text-[#aaa] text-[0.8rem] tracking-[0.2em] block mb-2">FOR COMPANIES & FACILITIES</span>
             <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.4rem] tracking-[0.1em] mb-2 font-normal">法人・共創施設の方へ</h3>
             <p className="text-[0.95rem] text-gray-400">御社の施設に、確実な共創実績を生み出す「外部PMO」を導入しませんか？</p>
          </div>
        </div>
      </section>

      {/* ========================================
          Footer
      ======================================== */}
      <footer className="bg-[#111111] text-white pt-24 pb-12 px-[5%] text-center border-t border-[rgba(255,255,255,0.05)]">
        <div className="font-['Didot','Yu_Mincho',serif] text-[1.8rem] tracking-[0.2em] font-light mb-8">
          GAKU-HUB
        </div>
        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-gray-400 hover:text-[#141d58] hover:brightness-200 transition-all duration-300">Instagram</a>
          <a href="#" className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-gray-400 hover:text-[#141d58] hover:brightness-200 transition-all duration-300">Twitter</a>
          <a href="#contact" className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-gray-400 hover:text-[#141d58] hover:brightness-200 transition-all duration-300">Contact</a>
        </div>
        <div className="font-['Didot','Garamond',serif] text-[0.8rem] tracking-[0.1em] text-gray-600 opacity-60">
          © {new Date().getFullYear()} GAKU-HUB. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
