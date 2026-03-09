import Link from 'next/link';

export default function Program() {
  return (
    <section id="program" className="py-24 md:py-32 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto">
        
        {/* セクションタイトルとプログラムの明確な説明 */}
        <div className="text-center mb-20 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light text-[#111111]">PROGRAM</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">Join the Co-creation</p>
          <p className="mt-8 text-[0.95rem] leading-[2] text-[#555] max-w-3xl mx-auto font-['Yu_Mincho','游明朝',serif]">
            GAKU-HUBのインフラと伴走支援を活用し、実際にプロジェクトや共創を動かすための実践枠組み。<br />
            「自らの熱量を形にしたい個人・団体」と、「次世代の熱量と交わりたい法人・施設」の<br className="hidden md:block" />
            それぞれの目的に合わせた参画モデルをご用意しています。
          </p>
        </div>

        {/* =========================================
            1. For Challengers (挑戦する個人・団体向け)
        ========================================= */}
        <div className="mb-24">
          <div className="text-center mb-10 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <span className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.2em] text-[#141d58] border-b border-[#141d58] pb-2 uppercase">
              For Challengers
            </span>
            <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.4rem] tracking-[0.1em] mt-6 font-normal text-[#111111]">
              想いをカタチにする（プロジェクト実践）
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
            {/* ルートA */}
            <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-8 md:p-10 hover:border-[#141d58] hover:shadow-[0_8px_30px_rgba(20,29,88,0.05)] transition-all duration-500">
              <span className="font-['Didot','Garamond',serif] text-[#888] text-[0.75rem] tracking-[0.2em] block mb-3 uppercase">Route A : Direct</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.3rem] tracking-[0.1em] mb-4 text-[#111111]">GAKU-HUB チャレンジャー枠</h4>
              <p className="text-[0.85rem] text-[#555] mb-5 leading-[1.8]">
                自力で熱量を形にしたい独立志向の個人・団体向け。イベント売上でプロデュース費を相殺する独自の仕組みにより、初期費用ゼロからプロジェクト実装に挑戦できます。
              </p>
              <div className="text-[0.75rem] text-[#888] border-t border-[#e0e0e0] pt-3 tracking-[0.05em]">
                対象: 新たに挑戦したいすべての個人・学生・団体
              </div>
            </div>

            {/* ルートB */}
            <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-8 md:p-10 hover:border-[#141d58] hover:shadow-[0_8px_30px_rgba(20,29,88,0.05)] transition-all duration-500">
              <span className="font-['Didot','Garamond',serif] text-[#888] text-[0.75rem] tracking-[0.2em] block mb-3 uppercase">Route B : Partner</span>
              <h4 className="font-['Yu_Mincho','游明朝',serif] text-[1.3rem] tracking-[0.1em] mb-4 text-[#111111]">オフィシャルパートナー推薦枠</h4>
              <p className="text-[0.85rem] text-[#555] mb-5 leading-[1.8]">
                GAKU-HUBと提携するコミュニティや団体の所属メンバー限定。提携先が費用を負担・補助するため、完全ノーリスクでプロの伴走支援環境を利用できます。
              </p>
              <div className="text-[0.75rem] text-[#888] border-t border-[#e0e0e0] pt-3 tracking-[0.05em]">
                対象: 提携先コミュニティの所属メンバー
              </div>
            </div>
          </div>

          <div className="text-center fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300">
             <Link 
               href="/program/challenger" 
               className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
             >
                View Challenger Program
             </Link>
          </div>
        </div>

        <div className="w-[1px] h-16 bg-[#e0e0e0] mx-auto mb-24"></div>

        {/* =========================================
            2. For Partners (法人・共創施設向け)
        ========================================= */}
        <div>
          <div className="text-center mb-10 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <span className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.2em] text-[#141d58] border-b border-[#141d58] pb-2 uppercase">
              For Companies & Organizations
            </span>
            <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.4rem] tracking-[0.1em] mt-6 font-normal text-[#111111]">
              次世代の熱量と交わる（法人協業・HR）
            </h3>
          </div>

          <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-8 md:p-12 text-center max-w-4xl mx-auto fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200 hover:border-[#141d58] hover:shadow-[0_8px_30px_rgba(20,29,88,0.05)] transition-all duration-500">
            <p className="text-[0.95rem] text-[#555] leading-[2] mb-8 font-['Yu_Mincho','游明朝',serif]">
              「場はあるが実績が生まれない」共創施設での外部PMO（実行支援）や、<br className="hidden md:block"/>
              自らリスクを取って行動する優秀な次世代人材（チャレンジャー層）へのダイレクトなHR支援・採用PRなど。<br />
              御社の課題に合わせ、熱量高いコミュニティを活用した最適な協業プランをご提案します。
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[0.8rem] text-[#777] mb-8">
              <span className="bg-white border border-[#ddd] px-4 py-2"># 共創施設PMO</span>
              <span className="bg-white border border-[#ddd] px-4 py-2"># イベントスポンサーシップ</span>
              <span className="bg-white border border-[#ddd] px-4 py-2"># ダイレクトリクルーティング</span>
              <span className="bg-white border border-[#ddd] px-4 py-2"># 公式パートナー提携</span>
            </div>

            <Link 
              href="/program/partner" 
              className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
            >
              View Partnership Details
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
