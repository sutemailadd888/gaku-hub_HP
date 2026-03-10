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
            3. 3つの事業ドメイン（完全マスター版）
        ========================================= */}
        <div className="flex flex-col gap-32 mb-32">
          
          {/* Domain 01: INCUBATION */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">01</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Incubation</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">個人の伴走支援・プロジェクト創出</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  「想い」を起点に、個人のプロジェクトを社会実装へと導くクローズドなコンサルティング領域。GAKU-HUBは「Co-Founder（共同創業者）」的立ち位置で、0→1から1→10までフェーズを問わず二人三脚で伴走します。
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
            {/* メニュー表（プラン） */}
            <div className="bg-white p-8 md:p-10 border border-[#eee] w-full max-w-4xl mx-auto shadow-sm">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-8 uppercase border-b border-[#eee] pb-2">Support Menu</h4>
              
              <div className="flex flex-col gap-6">
                <div className="border-b border-[#f5f5f5] pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">ゼロイチ壁打ち 1on1セッション</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">¥1,000〜 <span className="text-[0.75rem] text-[#888]">/ 60min</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed mb-2">「なんとなくやりたいこと」を言語化し、具体的なプロジェクトの設計図を作るためのメンタリング。月額パス（¥3,000/月）による継続相談も可能です。</p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] text-[#888] leading-relaxed">※ 初回相談無料。共創パッケージ利用者、およびオフィシャルパートナー所属メンバーは【無料】でご利用いただけます。</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">GAKU-HUB 共創プロジェクトパッケージ</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">¥15,000 <span className="text-[0.75rem] text-[#888]">/ 1project</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed mb-2">企画立案から集客サポート、イベント・ポップアップ開催までのフルサポートとインフラ提供。</p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] text-[#888] leading-relaxed">※ チケット売上（参加費）でパッケージ料金を相殺する独自の「チケットバック制」により、実質ゼロリスクで挑戦が可能です。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Domain 02: COMMUNITY & EVENT */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start mb-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">02</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Community & Event</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">共創プラットフォームの運営</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  Incubationで生まれたプロジェクトの実証実験の場であり、多様な知見が交差するオープンな交流領域。また、自社採用やPRを強化したい一般企業が、学生コミュニティに直接アプローチするための直販接点として機能します。
                </p>
                <div className="border-t border-[#eee] pt-4">
                  <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">一般参加者（Starter Member）、自社採用・PRを行いたい一般企業</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Community+Event" alt="Community & Event" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>
            {/* メニュー表（プラン） */}
            <div className="bg-white p-8 md:p-10 border border-[#eee] w-full max-w-4xl mx-auto shadow-sm">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-8 uppercase border-b border-[#eee] pb-2">Event & Sponsor Menu</h4>
              
              <div className="flex flex-col gap-6">
                <div className="border-b border-[#f5f5f5] pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">MEETUP / EVENT 一般参加</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">¥1,000〜 <span className="text-[0.75rem] text-[#888]">/ 1event</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">多様な価値観と出会い、自身の熱量を探るトークセッションやワークショップ等への参加権。（※企画・会場により価格は変動します）</p>
                </div>

                <div className="border-b border-[#f5f5f5] pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">GAKU-HUB 公式スポンサー登録 ＆ PRマッチング</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">登壇費 ¥5,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed mb-2">サイト上にロゴを永続掲載する公式ネットワーク登録（定価 ¥5,000）。登録企業の中から、各イベントの趣旨に最もマッチする企業様を抜擢（キュレーション）し、5分ピッチ等のPR枠をご案内します。</p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] text-[#888] leading-relaxed">※ 現在、初期パートナー限定で「登録料」を無料免除しております。未登録の単発企業様が登壇される場合は、ベース登壇費¥10,000〜となります。</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">カスタム・イベント共催（法人向け）</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">企画費 ¥10,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed mb-2">企業の課題（採用・新規事業等）に合わせ、コミュニティを巻き込んだ独自イベントをゼロから企画。無理な人数合わせはせず、熱量と条件（特定年度卒等）に合致したターゲットのみを集客する質重視のモデルです。</p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] text-[#888] leading-relaxed">※ 学生への知見還元を主目的とする社会人ゲスト登壇の場合は、費用は頂戴しておりません。</p>
                </div>
              </div>
            </div>
          </div>

          {/* Domain 03: CORPORATE PARTNERSHIP */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-12">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">03</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Corporate Partnership</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">法人向け共創・採用ソリューション</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  GAKU-HUBのインフラ（企画・集客・学生プール）を活用し、他団体や法人のビジネス課題を解決するBtoBアライアンス領域。「協業（Partner）」「採用（HR）」「共創（PMO）」の3つのアプローチで強力なパートナーシップを構築します。
                </p>
                <div className="border-t border-[#eee] pt-4">
                  <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">HR事業者、就活イベント企画団体、共創施設、企業の新規事業担当</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Corporate+Partnership" alt="Corporate Partnership" className="w-full h-auto grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>
            
            {/* メニュー表（法人向けソリューション） */}
            <div className="bg-white p-8 md:p-10 border border-[#eee] w-full max-w-4xl mx-auto shadow-sm">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-8 uppercase border-b border-[#eee] pb-2">Alliance & Solution Menu</h4>
              
              <div className="flex flex-col gap-6">
                <div className="border-b border-[#f5f5f5] pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">オフィシャルパートナー提携（協業アライアンス）</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">初期登録料 ¥3,000</div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed mb-2">学生団体やHR企業様との共同戦線。「共創プロジェクト枠（¥15,000分）」のメンバー無料利用や、貴社クライアントに対する「PR枠の優待卸売り（¥3,000〜/1枠）」など、GAKU-HUBのインフラを自社の特典・アップセル商材として相互活用できます。</p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] text-[#888] leading-relaxed">※ 現在、初期パートナー限定で登録料を【無料免除】しております。</p>
                </div>

                <div className="border-b border-[#f5f5f5] pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">次世代HR支援（PR枠・送客アライアンス）</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">卸売ベース ¥10,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">自社で採用支援を行うHR事業者様や就活団体様向け。GAKU-HUBのイベントPR枠をクライアント企業への販売商材として卸売りするほか、優秀層のシークレット送客など、ダイレクトリクルーティングの仕組みを構築します。</p>
                </div>

                <div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] font-bold">共創PMO（施設・新規事業向け 実行支援）</div>
                    <div className="font-['Didot','Garamond',serif] text-[1rem] text-[#141d58] mt-1 md:mt-0">月額ベース ¥30,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span></div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed">「場はあるが実績が生まれない」共創施設などに、外部の実行部隊として入り込みます。無理な企画の量産はせず「質の高い共創事例の創出」のみにコミットするため、最低限のベース伴走費と成功報酬を組み合わせたフェアなモデルです。</p>
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
