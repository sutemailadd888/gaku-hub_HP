"use client";
import Link from 'next/link';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            1. ページタイトル
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            SERVICES
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our Ecosystem
          </p>
        </div>

        {/* =========================================
            2. 導入コピー
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] md:text-[1.15rem] tracking-[0.1em] text-[#111111] leading-relaxed mb-8">
            個人の熱量を、社会実装へ。<br className="hidden md:block" />
            次世代と企業が交わる、GAKU-HUBの3つのソリューション。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto"></div>
        </div>

        {/* =========================================
            3. サービス一覧（3つの柱）
        ========================================= */}
        <div className="flex flex-col gap-16 md:gap-24 mb-32">
          
          {/* Service 01: Incubation (チャレンジャー向け) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/2 aspect-[4/3] bg-[#e0e0e0] overflow-hidden relative">
              {/* ※本番で画像を差し替えます。ホバーで少しズームする演出 */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/e0e0e0/999999?text=Incubation" alt="Incubation" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.9rem] tracking-[0.2em] block mb-2">01. INCUBATION</span>
              <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-6 text-[#111111]">共創プロジェクト・パッケージ</h2>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] mb-4">
                【対象：個人・学生・団体】<br />
                「想い」を起点に、0→1の企画から集客、イベント開催などの社会実装までを二人三脚で伴走します。チケットバック制を採用し、実質「ゼロリスク」で挑戦できるフラッグシップ・プログラムです。
              </p>
              <div className="mt-8">
                <Link href="/program/challenger" className="inline-block border-b border-[#111111] pb-1 text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:text-[#141d58] hover:border-[#141d58] transition-colors duration-300">
                  View Program Details
                </Link>
              </div>
            </div>
          </div>

          {/* Service 02: Corporate Solutions (法人向け) */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-center group animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/2 aspect-[4/3] bg-[#e0e0e0] overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/e0e0e0/999999?text=Corporate+Solutions" alt="Corporate Solutions" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.9rem] tracking-[0.2em] block mb-2">02. CORPORATE SOLUTIONS</span>
              <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-6 text-[#111111]">実働支援（PRマッチング / PMO）</h2>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] mb-4">
                【対象：法人・共創施設・HR事業者】<br />
                無駄な固定費を削る「ベース実費＋成果報酬」のフェアなハイブリッド型ソリューション。熱量の高い少数精鋭へのダイレクトリクルーティングや、共創施設でのプロジェクト実行支援（PMO）など、質の高い成果にコミットします。
              </p>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#888] mb-8">
                ※現在、PMOの立ち上げ期限定「PoC（お試し）特別枠」をご案内中です。
              </p>
              <div>
                <Link href="/program/company" className="inline-block border-b border-[#111111] pb-1 text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:text-[#141d58] hover:border-[#141d58] transition-colors duration-300">
                  View Corporate Solutions
                </Link>
              </div>
            </div>
          </div>

          {/* Service 03: Sponsorship (パートナー・協賛) */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center group animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="w-full md:w-1/2 aspect-[4/3] bg-[#e0e0e0] overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://placehold.co/800x600/e0e0e0/999999?text=Ecosystem+Partners" alt="Ecosystem Partners" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="w-full md:w-1/2">
              <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.9rem] tracking-[0.2em] block mb-2">03. ALLIANCE & SPONSORS</span>
              <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-6 text-[#111111]">パートナー提携・公式スポンサー登録</h2>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] mb-4">
                【対象：次世代の挑戦を支援・共創したい企業様】<br />
                GAKU-HUBのエコシステムへの参画窓口です。インフラを共有する「オフィシャルパートナー提携」や、限定優待メニューへのアクセス権（ゲートウェイ）となる「公式スポンサー登録（月額不要）」をご用意しております。
              </p>
              <div className="mt-8">
                <Link href="/partners" className="inline-block border-b border-[#111111] pb-1 text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:text-[#141d58] hover:border-[#141d58] transition-colors duration-300">
                  Join the Ecosystem
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* =========================================
            4. 戻るボタン
        ========================================= */}
        <div className="text-center animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <Link 
            href="/" 
            className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
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
