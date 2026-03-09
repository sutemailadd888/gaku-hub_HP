import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 bg-[#FAFAFA] px-[5%] border-t border-[#eee]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* ▼ 修正点1：タイトルの大きさを他のセクション(text-[2.5rem])と完全に統一 */}
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light text-[#111111]">
            CONTACT
          </h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">
            Get in Touch
          </p>
        </div>
        
        {/* ▼ 修正点2：説明文の大きさと行間をConcept等のルールに統一 */}
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] leading-[2.8] tracking-[0.12em] text-[#555] mt-10 mb-16 font-light">
            プログラムへの参加、法人向けのHR支援や共創PMOなど、<br className="hidden md:block" />
            あらゆるご相談を承っております。
          </p>
        </div>

        {/* ▼ 修正点3：ボタンをサイト共通の「モノクロ枠 → ホバーでネイビー」ルールに統一 */}
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <Link 
            href="/contact" 
            className="inline-block border border-[#111111] px-[4rem] py-[1.2rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500 uppercase"
          >
            Contact Us
          </Link>
        </div>

      </div>
    </section>
  );
}
