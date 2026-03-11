"use client";
import Link from 'next/link';

export default function PartnerProgram() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* =========================================
            1. パッケージタイトル＆ヒーロー
        ========================================= */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <span className="font-['Didot','Garamond',serif] text-[#141d58] tracking-[0.2em] text-[0.85rem] uppercase block mb-4">
            02 & 03. Corporate Solutions
          </span>
          <h1 className="font-['Yu_Mincho','游明朝',serif] text-[2rem] md:text-[2.8rem] tracking-[0.1em] mb-6 text-[#111111] font-normal leading-tight">
            次世代の熱量に、<br className="md:hidden" />最短距離でアクセスする。
          </h1>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] tracking-[0.08em] mt-8 leading-[2]">
            法人・共創施設・HR事業者・学生団体様向け<br />
            アライアンス＆ソリューション
          </p>
        </div>

        {/* =========================================
            2. コンセプト（Why GAKU-HUB?）
        ========================================= */}
        <div className="bg-white border border-[#eee] p-8 md:p-16 mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h2 className="text-center font-['Yu_Mincho','游明朝',serif] text-[1.4rem] tracking-[0.1em] text-[#111111] mb-8">
            「人数合わせ」の集客は、もう終わりにしませんか。
          </h2>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.95rem] text-[#555] leading-[2.4] tracking-[0.08em] md:text-center max-w-3xl mx-auto">
            企業が抱える「採用」や「新規事業・施設運営」の課題。それらを解決するために必要なのは、不特定多数の母集団ではなく、自らリスクを取って行動できる「熱量の高い次世代人材」です。<br className="hidden md:block" />
            GAKU-HUBは、伴走支援を通じて発掘・育成した優秀なチャレンジャー層をプールする独自のエコシステムを持っています。御社の課題に合わせ、最も精度の高いマッチングと共創の仕組みをご提案します。
          </p>
        </div>

        {/* =========================================
            3. 3つの法人向けソリューション (横並びグリッド)
        ========================================= */}
        <div className="mb-24">
          <h3 className="text-center font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] text-[#111111] mb-12 uppercase animate-[fadeIn_1s_ease_forwards_0.3s] opacity-0" style={{ animationFillMode: 'forwards' }}>
            Solution Menu
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Menu 1: Official Partner */}
            <div className="bg-white border border-[#eee] p-8 text-center group hover:border-[#141d58] transition-colors duration-500 animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="font-['Didot','Garamond',serif] text-[1.5rem] text-[#141d58] mb-4 tracking-[0.1em]">Alliance</div>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] mb-2">オフィシャルパートナー提携</h4>
              <div className="text-[0.8rem] text-[#888] mb-6 font-['Didot','Garamond',serif]">初期登録料 ¥3,000</div>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed text-left">
                学生団体やHR企業様とのインフラ共有。「共創パッケージ枠」のメンバー無料利用や、貴社クライアントに対するPR枠の優待卸売り（自社のアップセル商材化）など、強力な協業体制を構築します。
                <span className="block mt-4 text-[#141d58] font-bold">※現在、初期パートナー限定で無料免除中</span>
              </p>
            </div>

            {/* Menu 2: HR Support */}
            <div className="bg-white border border-[#eee] p-8 text-center group hover:border-[#141d58] transition-colors duration-500 animate-[fadeIn_1s_ease_forwards_0.5s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="font-['Didot','Garamond',serif] text-[1.5rem] text-[#141d58] mb-4 tracking-[0.1em]">HR Support</div>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] mb-2">次世代HR支援・PR枠卸売</h4>
              <div className="text-[0.8rem] text-[#888] mb-6 font-['Didot','Garamond',serif]">卸売ベース ¥10,000〜 ＋ 成果報酬</div>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed text-left">
                自社で採用支援を行うHR事業者様や一般企業様向け。GAKU-HUBイベントのPR枠提供や、コミュニティ内で発掘した優秀層のシークレット送客など、精度の高いダイレクトリクルーティングを実現します。
              </p>
            </div>

            {/* Menu 3: Co-creation PMO */}
            <div className="bg-white border border-[#eee] p-8 text-center group hover:border-[#141d58] transition-colors duration-500 animate-[fadeIn_1s_ease_forwards_0.6s] opacity-0" style={{ animationFillMode: 'forwards' }}>
              <div className="font-['Didot','Garamond',serif] text-[1.5rem] text-[#141d58] mb-4 tracking-[0.1em]">PMO</div>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] text-[#111111] mb-2">共創施設・新規事業 実行支援</h4>
              <div className="text-[0.8rem] text-[#888] mb-6 font-['Didot','Garamond',serif]">月額ベース ¥30,000〜 ＋ 成果報酬</div>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.85rem] text-[#666] leading-relaxed text-left">
                「場はあるが実績が生まれない」共創施設などに、外部の実行部隊（PMO）として入り込みます。質の高い共創事例の創出のみにコミットする、リスクを抑えたフェアな伴走型コンサルティングです。
              </p>
            </div>

          </div>
        </div>

        {/* =========================================
            4. BtoB向け強烈なフック（成果・質へのコミット）
        ========================================= */}
        <div className="bg-[#111111] text-white p-10 md:p-16 mb-24 animate-[fadeIn_1s_ease_forwards_0.7s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h3 className="text-center font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] mb-8 uppercase">
            Quality & Fair Pricing
          </h3>
          <p className="text-center font-['Yu_Mincho','游明朝',serif] text-[1.1rem] mb-8 leading-relaxed tracking-[0.1em]">
            無駄な固定費を削る、<br className="md:hidden" />「ベース費用＋成果報酬」のハイブリッド型。
          </p>
          <div className="max-w-2xl mx-auto border border-[#333] p-6 bg-[#1a1a1a]">
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#ccc] leading-[2.2] tracking-[0.05em]">
              GAKU-HUBの法人向けソリューションは、高額な月額固定費をいただく旧来のコンサルティングモデルではありません。<br />
              <br />
              私たちは<span className="text-white font-bold border-b border-[#fff]">「質の高い出会いと、共創実績の創出」</span>にのみコミットします。そのため、最低限のベース伴走費と、実際にプロジェクトやマッチングが成立した際の「成果報酬」を組み合わせた、御社にとってリスクの少ないフェアな料金体系を採用しています。
            </p>
          </div>
        </div>

        {/* =========================================
            5. CTA (お問い合わせ / 打ち合わせ依頼)
        ========================================= */}
        <div className="text-center animate-[fadeIn_1s_ease_forwards_0.8s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <h3 className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.1em] text-[#111111] mb-4">Let&apos;s Co-Create</h3>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#666] mb-12">
            御社の課題に合わせた最適なアライアンスをご提案いたします。<br className="hidden md:block" />
            まずはオンラインでのカジュアルな情報交換から、お気軽にご相談ください。
          </p>

          <Link 
            href="/contact" 
            className="inline-block bg-[#111111] border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-white font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] transition-all duration-500"
          >
            Contact for Partners
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
