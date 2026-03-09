import Link from 'next/link';

export default function Concept() {
  return (
    <section id="concept" className="py-24 md:py-40 px-[5%] flex flex-col items-center min-h-[80vh] justify-center">
      {/* テキストエリア（縦書き） */}
      <div className="md:[writing-mode:vertical-rl] flex flex-col md:flex-row gap-10 md:gap-24 items-center md:items-start text-center md:text-left">
        
        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[1.6rem] md:text-[2.5rem] leading-[2.2] tracking-[0.1em] font-normal md:[text-orientation:upright]">
            溢れる『学』が、<br />誰かの『力』になる。
          </h2>
        </div>

        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          <p className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[#555] text-[0.85rem] md:text-[0.95rem] leading-[2.8] tracking-[0.12em] font-light md:[text-orientation:upright]">
            「何かを成し遂げたい」という純粋な想いや、<br />これまでに培ってきた知識。<br />それらは個人の内側に留めておくだけでは、<br />社会を変えることはできません。
          </p>
        </div>

        <div className="fade-in opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <p className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[#555] text-[0.85rem] md:text-[0.95rem] leading-[2.8] tracking-[0.12em] font-light md:[text-orientation:upright]">
            GAKU-HUBは、その熱量を社会実装へと導く<br />「結節点」です。<br />コミュニティで出会いを生み、伴走支援で形にし、<br />確かなプロジェクトとして社会へ出力します。
          </p>
        </div>
      </div>

      {/* View Philosophy ボタン */}
      <div className="mt-20 md:mt-32 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-500">
        <Link 
          href="/philosophy" 
          className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#111111] hover:text-white transition-all duration-300"
        >
          View Philosophy
        </Link>
      </div>
    </section>
  );
}
