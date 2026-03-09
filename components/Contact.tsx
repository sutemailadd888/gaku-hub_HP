import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 bg-[#FAFAFA] px-[5%] border-t border-[#eee]">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-6 font-light text-[#111111]">CONTACT</h2>
        </div>
        
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] md:text-[1.2rem] leading-[2.2] tracking-[0.1em] text-[#555] mb-12">
            プログラムへの参加、法人向けのHR支援や共創PMOなど、<br className="hidden md:block" />
            あらゆるご相談を承っております。
          </p>
        </div>

        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <Link 
            href="/contact" 
            className="inline-block bg-[#111111] text-white px-[4rem] py-[1.2rem] text-[0.95rem] tracking-[0.15em] font-['Didot','Garamond',serif] hover:bg-[#141d58] transition-all duration-500 uppercase shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(20,29,88,0.2)]"
          >
            Get in Touch
          </Link>
        </div>

      </div>
    </section>
  );
}
