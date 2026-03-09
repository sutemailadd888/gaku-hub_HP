export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-24 pb-12 px-[5%] text-center border-t border-[rgba(255,255,255,0.05)]">
      <div className="font-['Didot','Yu_Mincho',serif] text-[1.8rem] tracking-[0.2em] font-light mb-8">GAKU-HUB</div>
      <div className="flex justify-center gap-8 mb-12">
        <a href="#" className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-gray-400 hover:text-[#141d58] hover:brightness-200 transition-all duration-300">Instagram</a>
        <a href="#" className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-gray-400 hover:text-[#141d58] hover:brightness-200 transition-all duration-300">Twitter</a>
        <a href="#contact" className="font-['Didot','Garamond',serif] text-[0.9rem] tracking-[0.1em] text-gray-400 hover:text-[#141d58] hover:brightness-200 transition-all duration-300">Contact</a>
      </div>
      <div className="font-['Didot','Garamond',serif] text-[0.8rem] tracking-[0.1em] text-gray-600 opacity-60">
        © {new Date().getFullYear()} GAKU-HUB. All rights reserved.
      </div>
    </footer>
  );
}
