export default function Service() {
  return (
    <section id="service" className="py-24 md:py-32 px-[5%]">
      <div className="max-w-6xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-24 md:mb-32 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">SERVICE</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.15em] text-[0.85rem] uppercase">3 Business Domains</p>
        </div>

        {/* 3本柱のコンテンツ */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
          
          {/* 01 INCUBATION */}
          <div className="flex-1 flex flex-col items-center text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100 group">
            <div className="relative mb-8 w-full">
              {/* 背景の数字：大きく(6rem)、ハッキリとした色(#e0e0e0)に変更 */}
              <span className="font-['Didot','Garamond',serif] text-[6rem] text-[#e0e0e0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 group-hover:text-[#cacede] transition-colors duration-700">01</span>
              <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] relative z-10 pt-4 text-[#111111]">INCUBATION</h3>
            </div>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.15em] mb-8 relative z-10">個の伴走支援・プロジェクト創出</p>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] md:text-[0.9rem] leading-[2.6] tracking-[0.08em] text-[#444] text-left md:text-center px-4 relative z-10">
              個人の内なる熱量を起点とする1on1コンサルティング。課題の本質を抽出し、企画から実装まで二人三脚で走ります。
            </p>
            {/* ターゲット：区切り線と文字を濃くし、視認性を向上 */}
            <div className="mt-8 pt-6 border-t border-[#ccc] w-[80%] relative z-10">
              <span className="block text-[0.65rem] font-['Didot','Garamond',serif] tracking-[0.2em] text-[#777] mb-2">TARGET</span>
              <span className="block text-[0.8rem] font-['Yu_Mincho','游明朝',serif] tracking-[0.08em] text-[#555] leading-[1.8]">
                プロジェクトを社会実装したい<br className="hidden md:block"/>Standard Member
              </span>
            </div>
          </div>

          {/* 区切り線：via-[#ccc] で線をハッキリと描画 */}
          <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-[#ccc] to-transparent"></div>

          {/* 02 COMMUNITY */}
          <div className="flex-1 flex flex-col items-center text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200 group">
            <div className="relative mb-8 w-full">
              <span className="font-['Didot','Garamond',serif] text-[6rem] text-[#e0e0e0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 group-hover:text-[#cacede] transition-colors duration-700">02</span>
              <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] relative z-10 pt-4 text-[#111111]">COMMUNITY</h3>
            </div>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.15em] mb-8 relative z-10">共創プラットフォーム運営</p>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] md:text-[0.9rem] leading-[2.6] tracking-[0.08em] text-[#444] text-left md:text-center px-4 relative z-10">
              多様な知見が交差するオープンな場の企画・運営。Incubationで生まれたプロジェクトの「最初の出力の場」として機能します。
            </p>
            <div className="mt-8 pt-6 border-t border-[#ccc] w-[80%] relative z-10">
              <span className="block text-[0.65rem] font-['Didot','Garamond',serif] tracking-[0.2em] text-[#777] mb-2">TARGET</span>
              <span className="block text-[0.8rem] font-['Yu_Mincho','游明朝',serif] tracking-[0.08em] text-[#555] leading-[1.8]">
                GAKU-HUBに興味を持つ<br className="hidden md:block"/>Starter Member
              </span>
            </div>
          </div>

          <div className="hidden md:block w-[1px] bg-gradient-to-b from-transparent via-[#ccc] to-transparent"></div>

          {/* 03 PARTNERSHIP */}
          <div className="flex-1 flex flex-col items-center text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300 group">
            <div className="relative mb-8 w-full">
              <span className="font-['Didot','Garamond',serif] text-[6rem] text-[#e0e0e0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 group-hover:text-[#cacede] transition-colors duration-700">03</span>
              <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] relative z-10 pt-4 text-[#111111]">PARTNERSHIP</h3>
            </div>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.15em] mb-8 relative z-10">法人向け共創・採用支援</p>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] md:text-[0.9rem] leading-[2.6] tracking-[0.08em] text-[#444] text-left md:text-center px-4 relative z-10">
              共創施設へのPMO（実行支援）から、優秀な若手人材へのダイレクトリクルーティング（採用支援）まで、法人の課題に合わせて伴走します。
            </p>
            <div className="mt-8 pt-6 border-t border-[#ccc] w-[80%] relative z-10">
              <span className="block text-[0.65rem] font-['Didot','Garamond',serif] tracking-[0.2em] text-[#777] mb-2">TARGET</span>
              <span className="block text-[0.8rem] font-['Yu_Mincho','游明朝',serif] tracking-[0.08em] text-[#555] leading-[1.8]">
                オープンイノベーション推進企業<br className="hidden md:block"/>人事・採用部門
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
