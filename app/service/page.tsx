"use client";
import Link from 'next/link';

export default function Service() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            1. ページタイトル
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            SERVICE
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our 3 Domains
          </p>
        </div>

        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] md:text-[1.3rem] tracking-[0.1em] text-[#111111] leading-relaxed mb-6">
            GAKU-HUBは「伴走支援」「場づくり」「実行支援」を連動させ、<br className="hidden md:block" />
            共創を連続的に生み出すエコシステムです。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto mt-8"></div>
        </div>

        {/* =========================================
            3. 3つの事業ドメイン（詳細リッチ版）
        ========================================= */}
        <div className="flex flex-col gap-32 mb-32">
          
          {/* Domain 01: INCUBATION */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">01</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Incubation</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">個の伴走支援・プロジェクト創出</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  「想い」を起点とするクローズドな1on1コンサルティング。初期衝動の言語化から、企画書作成、そしてイベントやプロダクトとしての「社会実装」まで、泥臭く二人三脚で伴走します。
                </p>
                <div className="border-t border-[#eee] pt-4">
                  <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">プロジェクトを社会実装したい個人・学生・団体</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Incubation" alt="Incubation" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>
            {/* ▼ 追加：具体的なプロセス */}
            <div className="bg-white p-8 md:p-10 border border-[#eee] w-full max-w-4xl mx-auto md:ml-auto md:mr-0 -mt-8 relative z-10 shadow-sm">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-6 uppercase border-b border-[#eee] pb-2">Support Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-[#141d58] font-bold text-[0.8rem] mb-1 block">STEP 1</span>
                  <div className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#111111] mb-2">課題抽出・言語化</div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] leading-relaxed">熱量の源泉を1on1で深掘りし、取り組むべき本質的な課題を定義します。</p>
                </div>
                <div>
                  <span className="text-[#141d58] font-bold text-[0.8rem] mb-1 block">STEP 2</span>
                  <div className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#111111] mb-2">企画立案・リソース結合</div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] leading-relaxed">実現可能な企画へ落とし込み、必要な知見や仲間をGAKU-HUB経由でマッチングします。</p>
                </div>
                <div>
                  <span className="text-[#141d58] font-bold text-[0.8rem] mb-1 block">STEP 3</span>
                  <div className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#111111] mb-2">社会実装・出力</div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] leading-relaxed">イベント開催やプロダクト開発など、目に見える形でのリリースを完遂させます。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Domain 02: COMMUNITY & EVENT */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start mb-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">02</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Community & Event</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">共創プラットフォームの運営</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  多様な知見が交差するオープンなイベント（トークセッション、ワークショップ等）の企画・運営。熱量の高い人材が集まる「溜まり場」を創出します。
                </p>
                <div className="border-t border-[#eee] pt-4">
                  <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">GAKU-HUBに興味を持つエントリー層、一般参加者</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Community+Event" alt="Community & Event" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>
            {/* ▼ 追加：提供する場の価値 */}
            <div className="bg-white p-8 md:p-10 border border-[#eee] w-full max-w-4xl mx-auto md:mr-auto md:ml-0 -mt-8 relative z-10 shadow-sm">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-4 uppercase border-b border-[#eee] pb-2">Value of the Place</h4>
              <ul className="list-none space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#141d58] mt-1">▪︎</span>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed">
                    <strong className="text-[#111111] font-normal">初期衝動のテスト環境：</strong> Incubationで生まれたプロジェクトの「最初の出力（実証実験）の場」として機能します。
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#141d58] mt-1">▪︎</span>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed">
                    <strong className="text-[#111111] font-normal">異分野の交差点：</strong> 異なる専攻の学生や若手社会人がフラットに混ざり合い、予期せぬ化学反応を生み出します。
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Domain 03: BtoB PMO & CONSULTING */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-10">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">03</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">BtoB PMO & Consulting</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">外部協業・実行支援</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  「場はあるが実績が生まれない」オープンイノベーション施設等の課題を解決する法人向けコンサルティング。外部PMO（実行部隊）として入り込み、共創事例を確実に納品します。
                </p>
                <div className="border-t border-[#eee] pt-4">
                  <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">共創施設、大型コミュニティ、採用イベント主催企業</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=BtoB+Consulting" alt="BtoB Consulting" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>
            {/* ▼ 追加：法人向けソリューション */}
            <div className="bg-white p-8 md:p-10 border border-[#eee] w-full max-w-4xl mx-auto md:ml-auto md:mr-0 -mt-8 relative z-10 shadow-sm">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-4 uppercase border-b border-[#eee] pb-2">Business Solutions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#f5f5f5] p-5 hover:border-[#141d58] transition-colors duration-300">
                  <div className="font-['Yu_Mincho','游明朝',serif] text-[1rem] text-[#111111] mb-2">共創施設 PMO</div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] leading-relaxed">施設のコミュニティマネージャーと連携し、休眠層の掘り起こしから具体的なプロジェクト創出までを実行支援します。</p>
                </div>
                <div className="border border-[#f5f5f5] p-5 hover:border-[#141d58] transition-colors duration-300">
                  <div className="font-['Yu_Mincho','游明朝',serif] text-[1rem] text-[#111111] mb-2">ダイレクトリクルーティング支援</div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] leading-relaxed">GAKU-HUBのコミュニティに属する「自らリスクを取って行動する」優秀なチャレンジャー層を直接ご紹介します。</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            4. ホームへ戻るボタン
        ========================================= */}
        <div className="text-center pb-12 animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
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
