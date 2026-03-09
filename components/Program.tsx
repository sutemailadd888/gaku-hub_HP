import Link from 'next/link';

export default function Program() {
  return (
    <section id="program" className="py-24 md:py-32 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light text-[#111111]">PROGRAM</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">Join the Co-creation</p>
          <p className="mt-8 text-[0.95rem] leading-[1.9] text-[#555]">
            GAKU-HUBのインフラを利用して、あなたの想いを形にする「ゼロリスク・プロデュースモデル」。<br className="hidden md:block" />
            学生は初期費用無料で、プロジェクトの実装に挑戦できます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          {/* ルートA */}
          <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-8 md:p-12 hover:border-[#141d58] hover:shadow-[0_8px_30px_rgba(20,29,88,0.05)] transition-all duration-500 group relative">
            <div className="relative z-10">
              <span className="font-['Didot','Garamond',serif] text-[#888] group-hover:text-[#141d58] transition-colors duration-500 text-[0.75rem] tracking-[0.2em] block mb-4 uppercase">Route A : Direct</span>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.5rem] tracking-[0.1em] mb-4 font-normal leading-snug text-[#111111]">GAKU-HUB<br />チャレンジャー枠</h3>
              <p className="text-[0.9rem] text-[#555] mb-6 leading-[1.9]">
                自力で熱量を形にしたい独立志向の学生向け。イベント売上でプロデュース費を相殺するチケットバック制を採用します。
              </p>
              <div className="text-[0.75rem] text-[#888] border-t border-[#e0e0e0] pt-4 tracking-[0.05em]">
                対象: すべての学生・若手社会人
              </div>
            </div>
          </div>

          {/* ルートB */}
          <div className="bg-[#FAFAFA] border border-[#e0e0e0] p-8 md:p-12 hover:border-[#141d58] hover:shadow-[0_8px_30px_rgba(20,29,88,0.05)] transition-all duration-500 group relative">
            <div className="relative z-10">
              <span className="font-['Didot','Garamond',serif] text-[#888] group-hover:text-[#141d58] transition-colors duration-500 text-[0.75rem] tracking-[0.2em] block mb-4 uppercase">Route B : Partner</span>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.5rem] tracking-[0.1em] mb-4 font-normal leading-snug text-[#111111]">オフィシャルパートナー<br />推薦枠（ノーリスク）</h3>
              <p className="text-[0.9rem] text-[#555] mb-6 leading-[1.9]">
                GAKU-HUBと提携するコミュニティ・学生団体のメンバー限定。提携先が費用を負担・補助するため、ノーリスクで伴走支援が受けられます。
              </p>
              <div className="text-[0.75rem] text-[#888] border-t border-[#e0e0e0] pt-4 tracking-[0.05em]">
                対象: 提携先コミュニティの所属メンバー
              </div>
            </div>
          </div>
        </div>

        {/* ▼ 追加：View Program Details ボタン */}
        <div className="text-center mt-20 md:mt-28 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300">
           <Link 
             href="/program" 
             className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
           >
              View Program Details
           </Link>
        </div>

      </div>
    </section>
  );
}
