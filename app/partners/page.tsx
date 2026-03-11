"use client";
import Link from 'next/link';

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* =========================================
            1. ページタイトル
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            PARTNERS
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our Co-Creation Ecosystem
          </p>
        </div>

        {/* =========================================
            2. 導入コピー（The Roster）
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] md:text-[1.15rem] tracking-[0.1em] text-[#111111] leading-relaxed mb-8">
            GAKU-HUBのビジョンに共感し、次世代の熱量を共に育む。<br className="hidden md:block" />
            私たちのエコシステムに参画している協創パートナー・協賛企業様です。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto"></div>
        </div>

        {/* =========================================
            3. パートナー＆スポンサー ロゴ一覧
        ========================================= */}
        <div className="mb-32 animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          
          {/* Official Partners */}
          <div className="mb-16 md:mb-20">
            <div className="text-center mb-10">
              <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] text-[#141d58] mb-2 uppercase">Official Partners</h3>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">インフラを共有し、共に若手の挑戦を牽引する協業アライアンス</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[1, 2, 3, 4].map((item) => (
                <div key={`partner-${item}`} className="aspect-[2/1] bg-[#fafafa] border border-[#eee] flex items-center justify-center group cursor-pointer overflow-hidden transition-all duration-500 hover:border-[#141d58]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://placehold.co/400x200/fafafa/999999?text=Partner+Logo`} 
                    alt="Official Partner" 
                    className="w-[70%] h-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-[#ccc] to-transparent mx-auto my-12 md:my-16"></div>

          {/* Sponsors */}
          <div>
            <div className="text-center mb-10">
              <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] text-[#111111] mb-2 uppercase">Sponsors</h3>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">次世代のチャレンジャーを支援し、共創を加速させる協賛企業様</p>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <div key={`sponsor-${item}`} className="aspect-[2/1] bg-white border border-transparent flex items-center justify-center group cursor-pointer transition-all duration-500 hover:border-[#eee]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={`https://placehold.co/300x150/ffffff/aaaaaa?text=Sponsor`} 
                    alt="Sponsor" 
                    className="w-[80%] h-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================
            4. スポンサー募集（Join the Ecosystem）
        ========================================= */}
        <div className="max-w-4xl mx-auto bg-white border border-[#eee] p-8 md:p-16 mb-16 animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <div className="text-center mb-12">
            <h2 className="font-['Didot','Garamond',serif] text-[2rem] tracking-[0.1em] text-[#111111] mb-4">
              Join the Ecosystem
            </h2>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] text-[#555] tracking-[0.08em] leading-relaxed">
              御社も、この熱量にアクセスしませんか？<br />
              GAKU-HUBでは、共に次世代を支援し、共創を生み出すパートナー企業様を募集しています。
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* プラン1：オフィシャルパートナー */}
            <div className="border-b border-[#f5f5f5] pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#141d58] font-bold tracking-[0.05em]">01. オフィシャルパートナー提携</h3>
                <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#111111] mt-2 md:mt-0 tracking-[0.05em]">
                  初期登録料 ¥3,000 <span className="font-['Yu_Mincho','游明朝',serif] text-[#141d58] text-[0.8rem] ml-2">※現在 無料免除中</span>
                </div>
              </div>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed">
                学生団体やコミュニティ、HR企業様との共同戦線です。当サイトにOfficial Partnerとしてロゴを掲載し、GAKU-HUBのイベントインフラを自社のコンテンツやアップセル商材として相互に活用できる協業アライアンスです。
              </p>
            </div>

            {/* プラン2：公式スポンサー登録（ゲートウェイとしての役割を強調） */}
            <div className="pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] font-bold tracking-[0.05em]">02. 公式スポンサー登録</h3>
                <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#111111] mt-2 md:mt-0 tracking-[0.05em]">
                  初期登録料 ¥5,000 <span className="font-['Yu_Mincho','游明朝',serif] text-[#888] text-[0.8rem] ml-2">※現在 無料免除中（月額不要）</span>
                </div>
              </div>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-4">
                次世代の挑戦を支援するスポンサー枠です。当サイトへの企業ロゴ永続掲載に加え、最大のメリットは<span className="font-bold text-[#111111]">「スポンサー限定の実働メニューへのアクセス権」</span>です。月額等のランニングコストは一切かかりません。
              </p>
              <div className="bg-[#fafafa] p-5 border border-[#eee]">
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">
                  一度スポンサーとしてご登録いただくと、その後はGAKU-HUB主催イベントでのPRピッチ枠（登壇）や、優秀な学生層へのダイレクトリクルーティングなど、必要な時に必要なだけ、成果報酬等の優待価格でマッチングメニューをご利用いただけます。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            5. CTA（お問い合わせ）
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] tracking-[0.08em] mb-8">
            パートナー提携・スポンサー登録に関する資料請求や、<br className="hidden md:block" />
            オンラインでのカジュアルな面談を承っております。
          </p>
          <Link 
            href="/contact" 
            className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
          >
            Contact for Sponsorship
          </Link>
        </div>

        {/* =========================================
            6. 法人向けソリューションへの導線（クロスセル）
        ========================================= */}
        <div className="max-w-3xl mx-auto text-center border-t border-[#eee] pt-12 pb-20 animate-[fadeIn_1s_ease_forwards_0.7s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#777] leading-relaxed mb-4">
            ※単なるスポンサー登録ではなく、初めから自社の採用支援（ダイレクトリクルーティング）や、<br className="hidden md:block" />
            共創施設でのプロジェクト実行支援（PMO）などのガッツリとした実働ソリューションをご希望の企業様は、<br className="hidden md:block" />
            法人向けプログラム（Corporate Solutions）をご覧ください。
          </p>
          <Link 
            href="/program/company" 
            className="inline-block border-b border-[#888] pb-1 text-[0.8rem] tracking-[0.1em] text-[#555] font-['Didot','Garamond',serif] hover:text-[#141d58] hover:border-[#141d58] transition-colors duration-300"
          >
            View Corporate Solutions
          </Link>
        </div>

        {/* =========================================
            7. ホームへ戻るボタン
        ========================================= */}
        <div className="text-center pb-12 animate-[fadeIn_1s_ease_forwards_0.8s] opacity-0" style={{ animationFillMode: 'forwards' }}>
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
