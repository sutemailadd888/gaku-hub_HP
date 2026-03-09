export default function Service() {
  return (
    <section id="service" className="py-24 md:py-32 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 md:mb-24 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">SERVICE</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">3 Business Domains</p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
          <div className="flex-1 text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.2rem] tracking-[0.1em] mb-4">01</div>
            <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] mb-2">INCUBATION</h3>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#888] tracking-[0.1em] mb-6">個の伴走支援・プロジェクト創出</p>
            <p className="text-[0.95rem] leading-[1.9] text-[#555] text-left md:text-center">
              個人の内なる熱量を起点とする1on1コンサルティング。課題の本質を抽出し、企画から実装まで二人三脚で走ります。<br />
              <span className="block mt-4 text-[0.85rem] text-[#888]">対象：プロジェクトを社会実装したい<br className="hidden md:block"/>Standard Member</span>
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-[rgba(17,17,17,0.1)] mt-12 mb-4"></div>
          <div className="flex-1 text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.2rem] tracking-[0.1em] mb-4">02</div>
            <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] mb-2">COMMUNITY</h3>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#888] tracking-[0.1em] mb-6">共創プラットフォーム運営</p>
            <p className="text-[0.95rem] leading-[1.9] text-[#555] text-left md:text-center">
              多様な知見が交差するオープンな場の企画・運営。Incubationで生まれたプロジェクトの「最初の出力の場」として機能します。<br />
              <span className="block mt-4 text-[0.85rem] text-[#888]">対象：GAKU-HUBに興味を持つ<br className="hidden md:block"/>Starter Member</span>
            </p>
          </div>
          <div className="hidden md:block w-[1px] bg-[rgba(17,17,17,0.1)] mt-12 mb-4"></div>
          <div className="flex-1 text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300">
            <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.2rem] tracking-[0.1em] mb-4">03</div>
            <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] mb-2">PARTNERSHIP</h3>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#888] tracking-[0.1em] mb-6">法人向け共創・採用支援</p>
            <p className="text-[0.95rem] leading-[1.9] text-[#555] text-left md:text-center">
              共創施設へのPMO（実行支援）から、熱量ある優秀な学生へのダイレクトリクルーティング（協賛・採用支援）まで。法人の課題に合わせて伴走します。<br />
              <span className="block mt-4 text-[0.85rem] text-[#888]">対象：オープンイノベーション推進企業・人事部門</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
