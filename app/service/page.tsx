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
          
          {/* =========================================
              Domain 01: INCUBATION
          ========================================= */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* Header Area */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">01</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Incubation</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">個人の伴走支援・プロジェクト創出</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  「想い」を起点に、個人のプロジェクトを社会実装へと導くクローズドなコンサルティング領域。GAKU-HUBは「Co-Founder（共同創業者）」的立ち位置で、0→1から1→10までフェーズを問わず二人三脚で伴走します。
                </p>
                <div className="border-t border-[#e0e0e0] pt-4">
                  <span className="text-[0.75rem] tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">プロジェクトを社会実装したい個人・学生・団体</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Incubation" alt="Incubation" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>

            {/* Menu List (Minimal Design) */}
            <div className="max-w-4xl mx-auto">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-6 uppercase border-b border-[#111111] pb-2 inline-block">Support Menu</h4>
              
              <div className="flex flex-col border-t border-[#e0e0e0]">
                
                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">GAKU-HUB 共創プロジェクトパッケージ</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      実質 ¥0〜 <span className="text-[0.75rem] text-[#888] font-['Yu_Mincho','游明朝',serif]">（※基本料金 ¥15,000）</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    企画立案から集客サポート、イベント開催までのフルサポートとインフラ提供。参加費売上でパッケージ料金を相殺する独自の「チケットバック制」により、初期費用・自腹リスクゼロからの挑戦が可能です。
                  </p>
                </div>

                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">ゼロイチ壁打ち 1on1セッション</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      ¥1,000〜 <span className="text-[0.75rem] text-[#888]">/ 60min</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    「なんとなくやりたいこと」を言語化し、具体的なプロジェクトの設計図を作るためのメンタリング。より密な伴走を希望される方には、Standard Member（月額 ¥3,000）での継続相談もご用意しています。
                  </p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#888] leading-relaxed">
                    ※ 初回相談は無料。また、共創パッケージ利用者およびオフィシャルパートナー所属メンバーは【無料】でご利用いただけます。
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* =========================================
              Domain 02: COMMUNITY & EVENT
          ========================================= */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* Header Area */}
            <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start mb-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">02</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Community & Event</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">共創プラットフォームの運営</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  Incubationで生まれたプロジェクトの実証実験の場であり、多様な知見が交差するオープンな交流領域。熱量を持った次世代と、彼らを支援する企業とが自然に交わる「結節点」として機能します。
                </p>
                <div className="border-t border-[#e0e0e0] pt-4">
                  <span className="text-[0.75rem] tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">一般参加者（学生・社会人）、コミュニティへ協賛したい企業様</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Community+Event" alt="Community & Event" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>

            {/* Menu List (Minimal Design) */}
            <div className="max-w-4xl mx-auto">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-6 uppercase border-b border-[#111111] pb-2 inline-block">Event & Sponsor Menu</h4>
              
              <div className="flex flex-col border-t border-[#e0e0e0]">
                
                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">コミュニティ参加（Starter Member登録）</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      ¥0 <span className="text-[0.75rem] text-[#888] font-['Didot','Garamond',serif]">/ Free</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    GAKU-HUBの公式Discordコミュニティへの参加。熱量を持つ同世代や社会人とオンラインで繋がり、イベントの先行案内やプロジェクトの仲間探しなど、日常的な交流が可能です。
                  </p>
                </div>

                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">MEETUP / EVENT 一般参加</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      ¥1,000〜 <span className="text-[0.75rem] text-[#888]">/ 1event</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    多様な価値観と出会い、自身の熱量を探るトークセッションやワークショップ等への参加権。（※企画・会場により価格は変動します）
                  </p>
                </div>

                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">公式スポンサー登録（純協賛）</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      初期登録料 ¥5,000
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    「次世代の挑戦を応援したい」という企業様向けのゲートウェイ。当サイト上に永続的に企業ロゴを掲載し、必要に応じて「PR枠・採用マッチング（Domain 03）」などの実働メニューへ優待価格でアクセスいただけます。
                  </p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#888] leading-relaxed">
                    ※ 現在、初期協賛企業様限定で「初期登録料」を無料免除しております（月額等のランニングコストは不要です）。
                  </p>
                </div>

                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">カスタム・イベント共催（法人向け）</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      企画費 ¥10,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    企業の課題（採用・新規事業等）に合わせ、コミュニティを巻き込んだ独自イベントをゼロから企画。無理な人数合わせはせず、熱量と条件（特定年度卒等）に合致したターゲットのみを集客する質重視のモデルです。
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* =========================================
              Domain 03: CORPORATE PARTNERSHIP
          ========================================= */}
          <div className="animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* Header Area */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start mb-16">
              <div className="w-full md:w-1/2 order-2 md:order-1">
                <span className="font-['Didot','Garamond',serif] text-[3rem] text-[#e0e0e0] block mb-2 leading-none">03</span>
                <h2 className="font-['Didot','Garamond',serif] text-[1.8rem] md:text-[2.2rem] tracking-[0.1em] text-[#111111] mb-2 uppercase">Corporate Partnership</h2>
                <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1rem] tracking-[0.1em] text-[#141d58] mb-6 font-normal">法人向け共創・採用ソリューション</h3>
                
                <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.2] tracking-[0.08em] mb-6">
                  GAKU-HUBのエコシステム（企画・集客・学生プール）をフル活用し、他団体や法人のビジネス課題をダイレクトに解決するBtoBアライアンス領域。無駄な固定費を省いた「ベース＋成果報酬型」のフェアな座組みでプロジェクトを実行します。
                </p>
                <div className="border-t border-[#e0e0e0] pt-4">
                  <span className="text-[0.75rem] tracking-[0.1em] text-[#111111] uppercase block mb-1">Target</span>
                  <span className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] tracking-[0.05em]">HR事業者、共創施設、企業の新規事業・採用担当様</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 order-1 md:order-2 group overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://placehold.co/800x500/eeeeee/999999?text=Corporate+Partnership" alt="Corporate Partnership" className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
            </div>
            
            {/* Menu List (Minimal Design) */}
            <div className="max-w-4xl mx-auto">
              <h4 className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#111111] mb-6 uppercase border-b border-[#111111] pb-2 inline-block">Alliance & Solution Menu</h4>
              
              <div className="flex flex-col border-t border-[#e0e0e0]">
                
                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">オフィシャルパートナー提携（協業アライアンス）</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      初期登録料 ¥3,000
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    学生団体やHR企業様との共同戦線。「共創プロジェクト枠」のメンバー無料利用や、GAKU-HUBのインフラを自社のコンテンツやアップセル商材として相互活用できる、最上位のアライアンスです。
                  </p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#888] leading-relaxed">
                    ※ 現在、初期パートナー限定で登録料を【無料免除】しております。
                  </p>
                </div>

                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">イベントPR枠・採用マッチング</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      ベース費用 ¥5,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    御社のターゲットに合致する「熱量の高い少数精鋭」をGAKU-HUBがキュレーションし、イベントのピッチ枠などでダイレクトに引き合わせます。無駄な広告費を削り、実際にマッチングが成立した際のみ報酬をいただく完全フェアなモデルです。
                  </p>
                </div>

                {/* Menu Item */}
                <div className="border-b border-[#e0e0e0] py-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-3">
                    <h5 className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] text-[#111111] tracking-[0.05em]">共創PMO（施設・新規事業向け 実行支援）</h5>
                    <div className="font-['Didot','Garamond',serif] text-[1.1rem] text-[#141d58] mt-2 md:mt-0 tracking-[0.05em]">
                      定価 月額 ¥100,000〜 <span className="text-[0.75rem] text-[#888]">＋ 成果報酬</span>
                    </div>
                  </div>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-3">
                    「場はあるが実績が生まれない」共創施設などに、外部の実行部隊（PMO）として入り込みます。コンサルティング会社のような高額な固定費は頂かず、質の高い共創事例の創出（成果）にコミットします。
                  </p>
                  <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#888] leading-relaxed">
                    ※ 現在、低リスクでスタートできる「PoC（お試し）特別価格：月額 ¥30,000〜」をご案内中です。
                  </p>
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
