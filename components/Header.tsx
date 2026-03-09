"use client";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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

      <div className="md:hidden w-[30px] h-[20px] relative z-50 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={`block w-full h-[1px] bg-[#111111] absolute transition-all duration-400 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
        <span className={`block w-full h-[1px] bg-[#111111] absolute top-1/2 -translate-y-1/2 transition-all duration-400 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-full h-[1px] bg-[#111111] absolute transition-all duration-400 ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
      </div>

      <nav className={`fixed md:relative top-0 right-0 w-full md:w-auto h-screen md:h-auto bg-[#FAFAFA] md:bg-transparent flex flex-col md:flex-row justify-center md:justify-end items-center transition-all duration-500 z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <ul className="flex flex-col md:flex-row gap-10 md:gap-[2.5rem] text-center items-center">
          {['Concept', 'Service', 'Collection', 'Program'].map((item) => (
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
  );
}
