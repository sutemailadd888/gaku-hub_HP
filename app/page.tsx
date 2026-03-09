"use client";
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Concept from '../components/Concept';
import Service from '../components/Service';
import Collection from '../components/Collection';
import Curators from '../components/Curators';
import Program from '../components/Program';
import Contact from '../components/Contact'; // 追加
import Footer from '../components/Footer';

export default function Home() {
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
      <Curators />
      <Program />
      <Contact /> {/* 追加 */}
      <Footer />
    </div>
  );
}
