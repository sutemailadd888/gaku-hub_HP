"use client";
import Link from 'next/link';

export default function Philosophy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            1. ページタイトル
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            PHILOSOPHY
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Corporate Identity
          </p>
        </div>

        {/* =========================================
            2. タグライン (Tagline)
        ========================================= */}
        <div className="text-center mb-32 animate-[fadeIn_1s_ease_forwards_0.1s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Didot','Garamond',serif] text-[1.2rem] md:text-[1.8rem] tracking-[0.2em] text-[#141d58] font-light">
            Link up your story, Link up your future.
          </p>
        </div>

        {/* =========================================
            3. VISION (目指す未来)
        ========================================= */}
        <div className="mb-32 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-5/12">
              <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.8rem] tracking-[0.2em] block mb-4 uppercase">Vision</span>
              <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] leading-snug">
                想いが、カタチに。<br />出会いが、ミライに。
              </h2>
            </div>
            <div className="md:w-7/12 text-left px-4 md:px-0">
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.4] tracking-[0.08em] mb-6">
                どんなに熱い情熱も、頭の中にあるだけでは世界を変えられません。私たちが目指すのは、個人の中にある「これが好きだ」「これを解決したい」という純粋な熱量を、単なるアイデアや個人の趣味で終わらせず、社会に価値を生む事業やプロジェクトとして実装（カタチに）することです。
              </p>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.4] tracking-[0.08em]">
                そのために不可欠なのが、多様な知見との「出会い」です。一人では乗り越えられない壁も、異なる背景を持つ人々が交差することで突破口が生まれます。私たちはその結節点となり、個人の想いを共創へと昇華させ、まだ見ぬ社会の選択肢（ミライ）を創り出します。
              </p>
            </div>
          </div>
        </div>

        <div className="w-[1px] h-16 bg-[#e0e0e0] mx-auto mb-24 animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}></div>

        {/* =========================================
            4. MISSION (果たす役割)
        ========================================= */}
        <div className="mb-32 animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-5/12">
              <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.8rem] tracking-[0.2em] block mb-4 uppercase">Mission</span>
              <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] leading-snug">
                溢れる「学」が、<br />誰かの「力」になる。
              </h2>
            </div>
            <div className="md:w-7/12 text-left px-4 md:px-0">
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.4] tracking-[0.08em] mb-6">
                「何かを成し遂げたい」という純粋な想いや、これまでに培ってきた知識（学）。それらは個人の内側に留めておくだけでは、社会を変えることはできません。GAKU-HUBは、その熱量を社会実装へと導く「結節点（ハブ）」です。
              </p>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.4] tracking-[0.08em]">
                私たちは、多様な価値観が交差するオープンな「コミュニティ」を起点としながら、一人ひとりの想いの解像度を上げるクローズドな「伴走支援」を行います。点と点をつなぎ、想いと知見をマッチングさせることで、個人の熱量を、社会の課題を解決する確かな「力」へと変換します。
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            5. VALUES (行動指針)
        ========================================= */}
        <div className="mb-32 animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="text-center mb-16">
            <h3 className="font-['Didot','Garamond',serif] text-[2rem] tracking-[0.15em] mb-4 text-[#111111] font-light">VALUES</h3>
            <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.75rem] uppercase">
              Action Principles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Value 01 */}
            <div className="border-t border-[#e0e0e0] pt-8 group">
              <span className="font-['Didot','Garamond',serif] text-[2.5rem] text-[#e0e0e0] group-hover:text-[#141d58] transition-colors duration-500 block mb-4">01</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.15rem] tracking-[0.1em] text-[#111111] mb-4">本質的課題の抽出</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-[2.2] tracking-[0.05em]">
                表面的な事象や初期衝動を鵜呑みにせず、熱量や悩みの根底にある「真因（Why）」を論理的に深掘りし、真の課題を特定する。
              </p>
            </div>
            {/* Value 02 */}
            <div className="border-t border-[#e0e0e0] pt-8 group">
              <span className="font-['Didot','Garamond',serif] text-[2.5rem] text-[#e0e0e0] group-hover:text-[#141d58] transition-colors duration-500 block mb-4">02</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.15rem] tracking-[0.1em] text-[#111111] mb-4">最適リソースの結合</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-[2.2] tracking-[0.05em]">
                自前主義にこだわらず、課題解決という目的から逆算し、コミュニティ内外に存在する最適な知見、技術、人材を戦略的にマッチングさせる。
              </p>
            </div>
            {/* Value 03 */}
            <div className="border-t border-[#e0e0e0] pt-8 group">
              <span className="font-['Didot','Garamond',serif] text-[2.5rem] text-[#e0e0e0] group-hover:text-[#141d58] transition-colors duration-500 block mb-4">03</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.15rem] tracking-[0.1em] text-[#111111] mb-4">社会実装へのコミット</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-[2.2] tracking-[0.05em]">
                議論で満足せず、イベント、プロダクト、事業といった目に見える具体的な「カタチ」として社会に出力（リリース）するまで完遂する責任を持つ。
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            6. FOUNDER'S MESSAGE
        ========================================= */}
        <div className="mb-24 pt-16 border-t border-[#eee] animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start max-w-3xl mx-auto">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 grayscale">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Naoki_Kubo.jpg" alt="久保" className="w-full h-full object-cover" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.1em] text-[#111111] mb-2">Message from Founder</h3>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-[2.4] tracking-[0.08em] mb-6">
                （※ここに久保さんの創業に対する想いや、なぜGAKU-HUBを立ち上げたのかという、少しパーソナルなストーリーを2〜3行で入れると、企業の担当者にも学生にも強烈に刺さります。）
              </p>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] tracking-[0.1em] text-[#111111]">
                GAKU-HUB Founder & Producer<br />
                <strong>久保</strong>
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            7. ホームへ戻るボタン (統一ルール)
        ========================================= */}
        <div className="text-center pb-12 animate-[fadeIn_1s_ease_forwards_0.7s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <Link 
            href="/" 
            className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500 uppercase"
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
