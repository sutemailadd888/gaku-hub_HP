"use client";
import Link from 'next/link';

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* =========================================
            1. ページタイトル (Hero)
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            PHILOSOPHY
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our Core Belief
          </p>
        </div>

        {/* =========================================
            2. ビジョン本文 (The Core Message)
        ========================================= */}
        <div className="mb-32 flex flex-col gap-16 md:gap-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          
          {/* メッセージ 1 */}
          <div className="text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
            <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.4rem] md:text-[1.8rem] tracking-[0.1em] text-[#111111] leading-relaxed md:w-1/2 md:pt-2">
              「好きなこと」を、<br />確かなカタチにする。
            </h2>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.6] tracking-[0.08em] md:w-1/2 text-left px-4 md:px-0">
              人は誰しも、内側に秘めた熱量を持っています。しかし、それは頭の中に留めておくだけでは、世界と交わることはありません。<br /><br />
              純粋な想いを、目に見える確かなプロジェクトとして出力し、社会へ実装していくこと。それがGAKU-HUBの根底にある揺るぎない哲学です。
            </p>
          </div>

          {/* メッセージ 2 */}
          <div className="text-center md:text-left flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center md:items-start">
            <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.4rem] md:text-[1.8rem] tracking-[0.1em] text-[#111111] leading-relaxed md:w-1/2 md:pt-2">
              熱量を支える、<br />美しい「仕組み」の構築。
            </h2>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.6] tracking-[0.08em] md:w-1/2 text-left px-4 md:px-0">
              個人の熱量を一時的な花火で終わらせず、社会の力へと変換するためには、人と企業が交差する持続可能な「構造（システム）」が必要です。<br /><br />
              私たちは、属人的な感情論に頼るのではなく、伴走支援や資金循環といったシステム的な構造の美しさを追求し、次世代のエコシステムを創造します。
            </p>
          </div>

        </div>

        {/* =========================================
            3. 行動指針 (OUR VALUES) - トップページから移設・洗練化
        ========================================= */}
        <div className="mb-32 animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="text-center mb-16">
            <h3 className="font-['Didot','Garamond',serif] text-[2rem] tracking-[0.15em] mb-4 text-[#111111] font-light">VALUES</h3>
            <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.75rem] uppercase">
              3 Action Principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Value 01 */}
            <div className="border-t border-[#e0e0e0] pt-8 group">
              <span className="font-['Didot','Garamond',serif] text-[2rem] text-[#e0e0e0] group-hover:text-[#141d58] transition-colors duration-500 block mb-4">01</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] tracking-[0.1em] text-[#111111] mb-4">熱源であれ</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-[2.2] tracking-[0.05em]">
                自らが誰よりも深く思考し、熱狂すること。その熱の伝播が、他者を動かす最大の駆動力となる。
              </p>
            </div>
            {/* Value 02 */}
            <div className="border-t border-[#e0e0e0] pt-8 group">
              <span className="font-['Didot','Garamond',serif] text-[2rem] text-[#e0e0e0] group-hover:text-[#141d58] transition-colors duration-500 block mb-4">02</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] tracking-[0.1em] text-[#111111] mb-4">構造をデザインせよ</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-[2.2] tracking-[0.05em]">
                想いだけでは現実は変わらない。課題を俯瞰し、再現性のある論理的なシステムへと落とし込むこと。
              </p>
            </div>
            {/* Value 03 */}
            <div className="border-t border-[#e0e0e0] pt-8 group">
              <span className="font-['Didot','Garamond',serif] text-[2rem] text-[#e0e0e0] group-hover:text-[#141d58] transition-colors duration-500 block mb-4">03</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] tracking-[0.1em] text-[#111111] mb-4">実装で証明せよ</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-[2.2] tracking-[0.05em]">
                語るだけでなく、手を動かす。未完成でも世に出し、泥臭く社会との接点（出力）を作り続けること。
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            4. ホームへ戻るボタン
        ========================================= */}
        <div className="text-center pb-12 animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <Link 
            href="/" 
            className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#111111] hover:text-white transition-all duration-500 uppercase"
          >
            Back to Home
          </Link>
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
