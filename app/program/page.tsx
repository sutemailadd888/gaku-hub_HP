"use client";
import Link from 'next/link';

export default function ProgramHub() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] flex flex-col items-center justify-center selection:bg-[#141d58] selection:text-white">
      
      {/* タイトルエリア */}
      <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
        <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
          PROGRAM
        </h1>
        <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
          Choose Your Path
        </p>
      </div>

      {/* 2つの巨大な扉（ハブ） */}
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 h-auto md:h-[55vh] animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
        
        {/* 左の扉：Challengers（挑戦者向け） */}
        <Link 
          href="/program/challenger" 
          className="flex-1 group relative overflow-hidden border border-[#e0e0e0] bg-white p-10 md:p-16 flex flex-col justify-center items-center text-center transition-all duration-700 hover:border-[#141d58] hover:shadow-[0_20px_40px_rgba(20,29,88,0.08)]"
        >
          {/* ホバー時に背景がほんの少しだけ上にスライドする上品な演出 */}
          <div className="absolute inset-0 bg-[#fbfbfc] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.8rem] tracking-[0.2em] block mb-6 uppercase">
              For Challengers
            </span>
            <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] md:text-[2rem] tracking-[0.1em] mb-6 text-[#111111] font-normal">
              想いをカタチにする
            </h2>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] mb-12">
              プロジェクトの実装に挑戦したい<br />
              個人・学生・団体の方はこちら
            </p>
            {/* 枠全体をホバーした時に、このボタンもネイビーに染まる */}
            <span className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] group-hover:bg-[#141d58] group-hover:border-[#141d58] group-hover:text-white transition-all duration-500">
              Enter
            </span>
          </div>
        </Link>

        {/* 右の扉：Partners（法人向け） */}
        <Link 
          href="/program/company" 
          className="flex-1 group relative overflow-hidden border border-[#e0e0e0] bg-white p-10 md:p-16 flex flex-col justify-center items-center text-center transition-all duration-700 hover:border-[#141d58] hover:shadow-[0_20px_40px_rgba(20,29,88,0.08)]"
        >
          <div className="absolute inset-0 bg-[#fbfbfc] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] z-0"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <span className="font-['Didot','Garamond',serif] text-[#141d58] text-[0.8rem] tracking-[0.2em] block mb-6 uppercase">
              For Companies
            </span>
            <h2 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] md:text-[2rem] tracking-[0.1em] mb-6 text-[#111111] font-normal">
              次世代の熱量と交わる
            </h2>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] mb-12">
              共創PMOやHR支援など<br />
              法人・共創施設・学生団体の方はこちら
            </p>
            <span className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] group-hover:bg-[#141d58] group-hover:border-[#141d58] group-hover:text-white transition-all duration-500">
              Enter
            </span>
          </div>
        </Link>

      </div>

     <div className="text-center mt-20 animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
        <Link 
          href="/" 
          className="inline-block border-b border-[#111111] pb-1 text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:text-[#141d58] hover:border-[#141d58] transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
      
      {/* CSSアニメーションの定義 */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
