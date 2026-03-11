"use client";
import Link from 'next/link';

export default function ForChallengers() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* =========================================
            1. ページタイトル
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[2.5rem] md:text-[3.5rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            FOR CHALLENGERS
          </h1>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[#888] tracking-[0.2em] text-[0.85rem]">
            次世代の熱量を、社会実装へ
          </p>
        </div>

        {/* =========================================
            2. 導入コピー
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] md:text-[1.15rem] tracking-[0.1em] text-[#111111] leading-relaxed mb-8">
            GAKU-HUBは、ただのアドバイザーではありません。<br className="hidden md:block" />
            あなたの「想い」を起点に、共同創業者（Co-Founder）の立ち位置で<br className="hidden md:block" />
            0→1の企画から社会への出力までを二人三脚で伴走します。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto"></div>
        </div>

        {/* =========================================
            3. プログラム参加への 3 Steps
        ========================================= */}
        <div className="mb-24">
          <h2 className="text-center font-['Didot','Garamond',serif] text-[1.4rem] tracking-[0.15em] text-[#111111] mb-12 uppercase animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            Action Flow
          </h2>

          <div className="flex flex-col gap-12 relative before:absolute before:inset-0 before:ml-[28px] md:before:ml-[50%] before:-translate-x-px md:before:translate-x-0 before:w-[1px] before:bg-gradient-to-b before:from-[#111111] before:to-transparent">
            
            {/* Step 1: Starter Member */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="md:w-[45%] md:text-right pr-8 pl-16 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
                <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] text-[#141d58] tracking-[0.1em] mb-2">01. Join Community</h3>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] font-bold text-[#111111] mb-3">Starter Member 登録（無料）</p>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">まずは公式Discordコミュニティにご参加ください。熱量を持つ同世代や社会人とオンラインで繋がり、イベントの先行案内や仲間探しなど、オープンな交流が始まります。</p>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[56px] h-[56px] bg-[#FAFAFA] border border-[#111111] rounded-full flex items-center justify-center font-['Didot','Garamond',serif] text-[1.2rem] text-[#111111] z-10 transition-colors duration-500 group-hover:bg-[#141d58] group-hover:text-white group-hover:border-[#141d58]">
                1
              </div>
              <div className="md:w-[45%] order-1 md:order-3 hidden md:block"></div>
            </div>

            {/* Step 2: 1on1 Session */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="md:w-[45%] order-1 md:order-1 hidden md:block"></div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[56px] h-[56px] bg-[#FAFAFA] border border-[#111111] rounded-full flex items-center justify-center font-['Didot','Garamond',serif] text-[1.2rem] text-[#111111] z-10 transition-colors duration-500 group-hover:bg-[#141d58] group-hover:text-white group-hover:border-[#141d58]">
                2
              </div>
              <div className="md:w-[45%] md:text-left pl-16 md:pl-8 mb-4 md:mb-0 order-2 md:order-3">
                <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] text-[#141d58] tracking-[0.1em] mb-2">02. 1on1 Session</h3>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] font-bold text-[#111111] mb-3">ゼロイチ壁打ち（初回無料）</p>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">「なんとなくやりたいこと」の言語化からスタート。専属メンターとの1on1を通じて、熱量の根底にある本質的な課題を抽出し、プロジェクトの設計図を作成します。（※2回目以降 ¥1,000〜）</p>
              </div>
            </div>

            {/* Step 3: Project Package */}
            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between group animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="md:w-[45%] md:text-right pr-8 pl-16 md:pl-0 mb-4 md:mb-0 order-2 md:order-1">
                <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] text-[#141d58] tracking-[0.1em] mb-2">03. Co-Creation</h3>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] font-bold text-[#111111] mb-3">共創プロジェクト・パッケージ</p>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">企画立案、集客、そして実際のイベントやポップアップ開催までをフルサポート。チケット売上で料金を相殺する「チケットバック制（最大¥15,000）」により、実質ゼロリスクで社会実装へ挑戦できます。</p>
              </div>
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[56px] h-[56px] bg-[#FAFAFA] border border-[#111111] rounded-full flex items-center justify-center font-['Didot','Garamond',serif] text-[1.2rem] text-[#111111] z-10 transition-colors duration-500 group-hover:bg-[#141d58] group-hover:text-white group-hover:border-[#141d58]">
                3
              </div>
              <div className="md:w-[45%] order-1 md:order-3 hidden md:block"></div>
            </div>

          </div>
        </div>

        {/* =========================================
            4. CTA アクションボタン群
        ========================================= */}
        <div className="bg-white border border-[#eee] p-10 md:p-16 text-center animate-[fadeIn_1s_ease_forwards_0.7s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] text-[#111111] mb-4">Ready to Start?</h3>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#666] mb-12">
            まずはGAKU-HUBのコミュニティ（無料）へご参加いただくか、<br className="hidden md:block" />
            ダイレクトに1on1セッションをお申し込みください。
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            {/* Discord参加ボタン（目立つように塗りつぶし） */}
            <a 
              href="https://discord.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#111111] border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-white font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] transition-all duration-500"
            >
              Join Discord Free
            </a>
            
            {/* 1on1申し込みボタン（サイト共通のアウトライン） */}
            <Link 
              href="/contact" 
              className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
            >
              Apply for 1on1
            </Link>
          </div>
        </div>

        {/* =========================================
            5. 戻るボタン
        ========================================= */}
        <div className="text-center mt-16 animate-[fadeIn_1s_ease_forwards_0.8s] opacity-0" style={{ animationFillMode: 'forwards' }}>
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
