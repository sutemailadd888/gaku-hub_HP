"use client";
import Link from 'next/link';

export default function Service() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            1. ページタイトル (Hero)
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            SERVICE
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our 3 Domains
          </p>
        </div>

        {/* =========================================
            2. 導入文 (Ecosystem Concept)
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] md:text-[1.3rem] tracking-[0.1em] text-[#111111] leading-relaxed mb-6">
            GAKU-HUBは「伴走支援」「場づくり」「実行支援」を連動させ、<br className="hidden md:block" />
            共創を連続的に生み出すエコシステムです。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto mt-8"></div>
        </div>

        {/* =========================================
            3. 3つの事業ドメイン
        ========================================= */}
        <div className="flex flex-col gap-24 md:gap-32 mb-32">
          
          {/* Domain 01: INCUBATION */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">01</span>
              <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Incubation</h2>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">個の伴走支援・プロジェクト創出</h3>
              
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                「想い」を起点とするクローズドな1on1コンサルティング。課題の本質を抽出し、企画書作成から実装までを二人三脚で走ります。
              </p>
              
              <div className="border-t border-[#eee] pt-4">
                <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">プロジェクトを社会実装したい学生・若手社会人（Standard Member）</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/eeeeee/999999?text=Incubation" alt="Incubation" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </div>
          </div>

          {/* Domain 02: COMMUNITY & EVENT */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">02</span>
              <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Community & Event</h2>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">共創プラットフォームの運営</h3>
              
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                多様な知見が交差するオープンなイベント（トークセッション、ワークショップ等）の企画・運営。Incubationで生まれたプロジェクトの「最初の出力（実証実験）の場」となります。
              </p>
              
              <div className="border-t border-[#eee] pt-4">
                <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">GAKU-HUBに興味を持つエントリー層（Starter Member）、協賛企業、一般参加者</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/eeeeee/999999?text=Community+Event" alt="Community & Event" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </div>
          </div>

          {/* Domain 03: BtoB PMO & CONSULTING */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">03</span>
              <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">BtoB PMO & Consulting</h2>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">外部協業・実行支援</h3>
              
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                「場はあるが実績が生まれない」オープンイノベーション施設等の課題を解決する法人向けコンサルティング。外部PMO（実行部隊）として入り込み、共創事例を確実に納品します。
              </p>
              
              <div className="border-t border-[#eee] pt-4">
                <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">共創施設、大型コミュニティ（共創EXPO等）、採用イベント主催企業</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/eeeeee/999999?text=BtoB+Consulting" alt="BtoB Consulting" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            </div>
          </div>

        </div>

        {/* =========================================
            4. ホームへ戻るボタン (統一ルール)
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
