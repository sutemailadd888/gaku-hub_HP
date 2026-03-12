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
            SERVICE
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our Business Domains
          </p>
        </div>

        {/* =========================================
            2. 導入コピー
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] md:text-[1.15rem] tracking-[0.1em] text-[#111111] leading-relaxed mb-8">
            GAKU-HUBは、次世代の熱量を社会実装するためのエコシステムです。<br className="hidden md:block" />
            「伴走支援」「場づくり」「法人提携」の3つのドメインを通じて、<br className="hidden md:block" />
            個人から企業まで、最適な共創のカタチを提供します。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto"></div>
        </div>

        {/* =========================================
            3. 事業ドメイン一覧
        ========================================= */}
        <div className="flex flex-col gap-24 mb-24">

          {/* -----------------------------------------
              Domain 01: Incubation (伴走支援)
          ----------------------------------------- */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <span className="font-['Didot','Garamond',serif] text-[#141d58] tracking-[0.2em] text-[0.85rem] uppercase block mb-2">Domain 01</span>
                <h2 className="font-['Didot','Garamond',serif] text-[2rem] tracking-[0.1em] text-[#111111] mb-4">Incubation</h2>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] text-[#111111] font-bold tracking-[0.05em] mb-4">次世代のプロジェクト創出・伴走支援</p>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed">
                  学生や若手社会人の「やりたい」を、企画の壁打ちから社会実装まで二人三脚で伴走します。リスクを抑えて挑戦できるインフラを提供します。
                </p>
              </div>
              
              <div className="md:w-2/3 w-full bg-white border border-[#e0e0e0] p-8 md:p-10">
                <ul className="flex flex-col gap-8">
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">1on1 メンタリング（ゼロイチ壁打ち）</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">専属メンターによる定期的な壁打ちセッション。熱量の言語化、ターゲット設定、プロジェクトのロードマップ策定など、初期の立ち上げをサポートします。</p>
                  </li>
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">共創プロジェクト・パッケージ</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">イベントやブランド立ち上げに必要な「企画・集客・会場手配」をオールインワンで提供。チケットバック制を採用し、実質ゼロリスクでの挑戦を可能にします。</p>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-[#e0e0e0]">
                  <Link href="/program/challenger" className="font-['Didot','Garamond',serif] text-[0.85rem] text-[#141d58] tracking-[0.1em] hover:opacity-70 transition-opacity flex items-center gap-2">
                    View Incubation Program <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------
              Domain 02: Community (場づくり)
          ----------------------------------------- */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3 order-1 md:order-2">
                <span className="font-['Didot','Garamond',serif] text-[#141d58] tracking-[0.2em] text-[0.85rem] uppercase block mb-2">Domain 02</span>
                <h2 className="font-['Didot','Garamond',serif] text-[2rem] tracking-[0.1em] text-[#111111] mb-4">Community</h2>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] text-[#111111] font-bold tracking-[0.05em] mb-4">共創を生むエコシステム・場づくり</p>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed">
                  熱量を持つ同世代や、それを支援する社会人が交わる「結節点」としてのコミュニティを、オンライン・オフラインの両軸で運営しています。
                </p>
              </div>
              
              <div className="md:w-2/3 w-full bg-white border border-[#e0e0e0] p-8 md:p-10 order-2 md:order-1">
                <ul className="flex flex-col gap-8">
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">メンバーシップ・コミュニティ運営</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">
                      無料から参加できる「Starter Member（公式Discord）」や、より実践的な活動を行う「Standard Member」など、階層に応じたオープンな交流プラットフォームを提供しています。
                    </p>
                  </li>
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">オフライン拠点の連携・イベント開催</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">提携するカフェバー（Blooming Kitchen等）や共創スペースを活用し、リアルな熱量が交わるポップアップやミートアップイベントを定期的に開催・支援しています。</p>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-[#e0e0e0]">
                  <a href="https://discord.com/" target="_blank" rel="noopener noreferrer" className="font-['Didot','Garamond',serif] text-[0.85rem] text-[#141d58] tracking-[0.1em] hover:opacity-70 transition-opacity flex items-center gap-2">
                    Join Starter Member (Discord) <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* -----------------------------------------
              Domain 03: Alliance (法人提携・支援)
          ----------------------------------------- */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <span className="font-['Didot','Garamond',serif] text-[#141d58] tracking-[0.2em] text-[0.85rem] uppercase block mb-2">Domain 03</span>
                <h2 className="font-['Didot','Garamond',serif] text-[2rem] tracking-[0.1em] text-[#111111] mb-4">Alliance</h2>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[1rem] text-[#111111] font-bold tracking-[0.05em] mb-4">法人向けアライアンス・ソリューション</p>
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed">
                  GAKU-HUBのエコシステムを活用し、企業様の「採用」「新規事業」「共創施設運営」に関する課題を、無駄な固定費を省いたフェアな座組みで解決します。
                </p>
              </div>
              
              <div className="md:w-2/3 w-full bg-white border border-[#e0e0e0] p-8 md:p-10">
                <ul className="flex flex-col gap-8">
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">パートナー＆スポンサー提携</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">
                      インフラを共有する「オフィシャルパートナー」や、月額不要で優待メニューにアクセスできる「公式スポンサー」として、共に次世代を支援する協業体制を構築します。
                    </p>
                    <Link href="/partners" className="inline-block mt-3 font-['Didot','Garamond',serif] text-[0.8rem] text-[#141d58] tracking-[0.1em] hover:opacity-70 transition-opacity border-b border-[#141d58] pb-0.5">
                      View Partnership Details
                    </Link>
                  </li>
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">イベントPR枠・採用マッチング</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">
                      特定のターゲット層が集まるイベントへの登壇枠や、優秀層のダイレクトリクルーティングを提供します。ベース実費＋成果報酬の低リスクなモデルを採用しています。
                    </p>
                  </li>
                  <li className="border-b border-[#f5f5f5] pb-6 last:border-0 last:pb-0">
                    <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] mb-2 tracking-[0.05em]">共創施設・新規事業 実行支援（PMO）</h4>
                    <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">
                      共創施設の運営や新規事業の立ち上げに、外部の実行部隊（PMO）として参画。プロフェッショナルなリソースを提供し、共創事例の創出にコミットします。
                    </p>
                    <Link href="/program/company" className="inline-block mt-3 font-['Didot','Garamond',serif] text-[0.8rem] text-[#141d58] tracking-[0.1em] hover:opacity-70 transition-opacity border-b border-[#141d58] pb-0.5">
                      View Corporate Solutions
                    </Link>
                  </li>
                </ul>
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
