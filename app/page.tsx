"use client";
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import Service from '@/components/Service';
import Collection from '@/components/Collection';
import Program from '@/components/Program';
import Footer from '@/components/Footer';

export default function Home() {
  // スクロールアニメーションの監視（全コンポーネントの .fade-in を対象）
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
    <div className="font-['Yu_Gothic','游ゴシック','Hiragino_Sans',sans-serif] bg-[#FAFAFA] text-[#111111] overflow-x-hidden selection:bg-[#141d58] selection:text-white">
      <Header />
      <Hero />
      <Concept />
      <Service />
      <Collection />
      <Program />
      <Footer />
    </div>
  );
}
