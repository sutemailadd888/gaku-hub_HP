export default function Program() {
  return (
    <section id="program" className="py-24 md:py-32 bg-[#111111] text-white px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">PROGRAM</h2>
          <p className="font-['Didot','Garamond',serif] text-[#aaa] tracking-[0.1em] text-[1rem]">Join the Co-creation</p>
          <p className="mt-8 text-[0.95rem] leading-[1.9] text-gray-300">
            GAKU-HUBのインフラを利用して、あなたの想いを形にする「ゼロリスク・プロデュースモデル」。<br className="hidden md:block" />学生は初期費用無料で挑戦できます。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-white/20 p-8 md:p-12 hover:border-[#141d58] transition-colors group relative overflow-hidden fade-in opacity-0 translate-y-10 transition-all duration-700">
            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            <div className="relative z-10">
              <span className="font-['Didot','Garamond',serif] text-[#aaa] text-[0.8rem] tracking-[0.2em] block mb-4">ROUTE A : DIRECT</span>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-4 font-normal leading-snug">GAKU-HUB<br />チャレンジャー枠</h3>
              <p className="text-[0.95rem] text-gray-400 mb-6 leading-[1.9]">自力で熱量を形にしたい独立志向の学生向け。イベント売上でプロデュース費を相殺するチケットバック制を採用します。</p>
              <div className="text-[0.8rem] text-gray-500 border-t border-white/10 pt-4">対象: すべての学生・若手社会人</div>
            </div>
          </div>
          <div className="border border-[#141d58] p-8 md:p-12 hover:bg-[#141d58]/20 transition-colors group relative overflow-hidden fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div className="relative z-10">
              <span className="font-['Didot','Garamond',serif] text-[#8ba3d4] text-[0.8rem] tracking-[0.2em] block mb-4">ROUTE B : PARTNER</span>
              <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.6rem] tracking-[0.1em] mb-4 font-normal leading-snug">オフィシャルパートナー<br />推薦枠（ノーリスク）</h3>
              <p className="text-[0.95rem] text-gray-300 mb-6 leading-[1.9]">提携先コミュニティメンバー限定。提携先が費用を負担・補助するため、ノーリスクで伴走支援が受けられます。</p>
              <div className="text-[0.8rem] text-gray-400 border-t border-white/10 pt-4">対象: 提携先コミュニティの所属メンバー</div>
            </div>
          </div>
        </div>
        <div id="contact" className="mt-8 border border-white/10 p-8 text-center hover:bg-white/5 transition-colors fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300 cursor-pointer">
           <span className="font-['Didot','Garamond',serif] text-[#aaa] text-[0.8rem] tracking-[0.2em] block mb-2">FOR COMPANIES, FACILITIES & ORGANIZATIONS</span>
           <h3 className="font-['Yu_Mincho','游明朝',serif] text-[1.4rem] tracking-[0.1em] mb-2 font-normal">法人・共創施設・学生団体の方へ</h3>
           <p className="text-[0.95rem] text-gray-400 leading-[1.8] mt-4">御社の施設での「共創実績の創出（PMO）」から、行動力ある次世代人材への「ダイレクトな採用PR（イベントスポンサー枠）」まで、幅広く協業を承ります。</p>
        </div>
      </div>
    </section>
  );
}
