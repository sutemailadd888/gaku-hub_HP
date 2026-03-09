"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ▼ ページ内スクロール(id)ではなく、下層ページへのパス(path)に変更
  const navItems = [
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Service', path: '/service' },
    { name: 'Collection', path: '/collection' },
    { name: 'Curators', path: '/curators' },
    { name: 'Program', path: '/program' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full px-[5%] flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled || isMenuOpen
          ? 'py-[1.2rem] md:py-[1.5rem] bg-[#FAFAFA]/85 backdrop-blur-[12px] shadow-[0_4px_20px_rgba(0,0,0,0.05)]'
          : 'py-[1.2rem] md:py-[1.5rem] bg-transparent'
      }`}
    >
      {/* ロゴ：クリックでトップページ(/)へ戻る */}
      <div className="font-['Didot','Yu_Mincho',serif] text-[1.5rem] tracking-[0.2em] font-light z-50">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          GAKU-HUB
        </Link>
      </div>

      <div className="md:hidden w-[30px] h-[20px] relative z-50 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className={`block w-full h-[1px] bg-[#111111] absolute transition-all duration-400 ${isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`}></span>
        <span className={`block w-full h-[1px] bg-[#111111] absolute top-1/2 -translate-y-1/2 transition-all duration-400 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-full h-[1px] bg-[#111111] absolute transition-all duration-400 ${isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'}`}></span>
      </div>

      <nav className={`fixed md:relative top-0 right-0 w-full md:w-auto h-screen md:h-auto bg-[#FAFAFA] md:bg-transparent flex flex-col md:flex-row justify-center md:justify-end items-center transition-all duration-500 z-40 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}>
        <ul className="flex flex-col md:flex-row gap-10 md:gap-[2.5rem] text-center items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              {/* ▼ <a>タグをNext.jsの<Link>に変更し、hrefをpathに */}
              <Link 
                href={item.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-[#111111] relative group transition-all duration-[0.6s]"
              >
                {item.name}
                <span className="absolute -bottom-[5px] left-0 w-0 h-[1px] bg-[#141d58] transition-all duration-400 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            {/* ▼ Contactも下層ページ(/contact)へ直接飛ぶように変更 */}
            <Link 
              href="/contact" 
              onClick={() => setIsMenuOpen(false)} 
              className="border border-[#111111] px-[1.5rem] py-[0.6rem] text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500 uppercase inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
