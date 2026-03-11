"use client";
import Link from 'next/link';

export default function ChallengerPackage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            1. パッケージタイトル＆ヒーロー
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <span className="font-['Didot','Garamond',serif] text-[#141d58] tracking-[0.2em] text-[0.85rem] uppercase block mb-4">
            01. Incubation Flagship Program
          </span>
          <h1 className="font-['Yu_Mincho','游明朝',serif] text-[2rem] md:text-[2.8rem] tracking-[0.1em] mb-6 text-[#111111] font-normal leading-tight">
            GAKU-HUB <br className="md:hidden" />共創プロジェクトパッケージ
          </h1>
          <div className="font-['Didot','Garamond',serif] text-[1.2rem] md:text-[1.5rem] text-[#111111] tracking-[0.1em] mb-4">
            ¥15,000 <span className="mx-2 text-[#ccc]">→</span> <span className="text-[#141d58] font-bold">実質 ¥0〜</span>
          </div>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#888] tracking-[0.05em]">
            ※ 独自のチケットバック制により、初期費用・自腹リスクゼロからの挑戦が可能。
          </p>
        </div>

        {/* =========================================
            2. パッケージのコンセプト（What is this?）
        ========================================= */}
        <div className="bg-white border border-[#eee] p-8 md:p-16 mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h2 className="text-center font-['Yu_Mincho','游明朝',serif] text-[1.4rem] tracking-[0.1em] text-[#111111] mb-8">
            想いをカタチにする、最短距離。
          </h2>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.4] tracking-[0.08em] md:text-center max-w-3xl mx-auto">
            「こんなイベントをやってみたい」「自分のブランドを立ち上げたい」。<br className="hidden md:block" />
            その熱量を、頭の中だけで終わらせないためのオールインワン・パッケージです。<br />
            GAKU-HUBが「共同創業者」として、企画の壁打ちから、集客、会場手配、当日の運営サポートまでを二人三脚で伴走し、あなたのプロジェクトを確実に社会へ出力（リリース）します。
          </p>
        </div>

        {/* =========================================
            3. パッケージに含まれる3つのサポート内容
        ========================================= */}
        <div className="mb-24">
          <h3 className="text-center font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] text-[#111111] mb-12 uppercase animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            Package Contents
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Content 1 */}
            <div className="bg-white border border-[#eee] p-8 text-center group hover:border-[#141d58] transition-colors duration-500 animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="font-['Didot','Garamond',serif] text-[2.5rem] text-[#e0e0e0] mb-4 group-hover:text-[#141d58] transition-colors duration-500">01</div>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] mb-4">企画・メンタリング</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed text-left">
                「なんとなくやりたい」を具体的な企画書に落とし込むための専属1on1セッション。ターゲット設定から当日のコンテンツ設計まで、プロ目線で壁打ちを行います。
              </p>
            </div>
            {/* Content 2 */}
            <div className="bg-white border border-[#eee] p-8 text-center group hover:border-[#141d58] transition-colors duration-500 animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="font-['Didot','Garamond',serif] text-[2.5rem] text-[#e0e0e0] mb-4 group-hover:text-[#141d58] transition-colors duration-500">02</div>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] mb-4">集客・PRサポート</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed text-left">
                GAKU-HUBのコミュニティやSNSインフラを活用した集客支援。告知用クリエイティブ（バナー等）のディレクションもサポートし、必要なターゲットへ届けます。
              </p>
            </div>
            {/* Content 3 */}
            <div className="bg-white border border-[#eee] p-8 text-center group hover:border-[#141d58] transition-colors duration-500 animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="font-['Didot','Garamond',serif] text-[2.5rem] text-[#e0e0e0] mb-4 group-hover:text-[#141d58] transition-colors duration-500">03</div>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] mb-4">会場・インフラ提供</h4>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed text-left">
                提携するカフェ・バー（Blooming Kitchen等）やイベントスペースの調整をGAKU-HUBが代行。当日の受付や進行など、裏方のオペレーションもバックアップします。
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            4. チケットバック制の仕組み（強烈なフック）
        ========================================= */}
        <div className="bg-[#111111] text-white p-10 md:p-16 mb-24 animate-[fadeIn_1s_ease_forwards_0.7s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h3 className="text-center font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] mb-8 uppercase">
            Ticket-Back System
          </h3>
          <p className="text-center font-['Yu_Mincho','游明朝',serif] text-[1.1rem] mb-8 leading-relaxed tracking-[0.1em]">
            集客するほど費用が下がる。<br className="md:hidden" />実質「ゼロリスク」の挑戦スキーム。
          </p>
          <div className="max-w-2xl mx-auto border border-[#333] p-6 bg-[#1a1a1a]">
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#ccc] leading-[2.2] tracking-[0.05em]">
              本パッケージの基本料金は【¥15,000】ですが、参加者からのイベントチケット売上（参加費）でパッケージ料金を相殺できるシステムを採用しています。<br />
              <br />
              （例：参加費1,000円のイベントに15名集客できた場合、<span className="text-white font-bold border-b border-[#fff]">自己負担額は完全に¥0</span>となります）<br />
              <br />
              ※未達分のみ自費負担となります。熱量と覚悟を持って集客にコミットできるチャレンジャーのための、フェアな支援モデルです。
            </p>
          </div>
        </div>

        {/* =========================================
            5. CTA (エントリー / 無料相談)
        ========================================= */}
        <div className="text-center animate-[fadeIn_1s_ease_forwards_0.8s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] text-[#111111] mb-4">Ready to Launch?</h3>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#666] mb-12">
            パッケージへのお申し込み、または<br className="hidden md:block" />
            「自分の企画でも使えるか」という事前の無料相談（1on1）を承っております。
          </p>

          <Link 
            href="/contact" 
            className="inline-block bg-[#111111] border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-white font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] transition-all duration-500"
          >
            Apply / Free Consultation
          </Link>
        </div>

        {/* =========================================
            6. 戻るボタン
        ========================================= */}
        <div className="text-center mt-24 animate-[fadeIn_1s_ease_forwards_0.9s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <Link 
            href="/program" 
            className="inline-block border-b border-[#111111] pb-1 text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:text-[#141d58] hover:border-[#141d58] transition-colors duration-300"
          >
            Back to Program Hub
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
