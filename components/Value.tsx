export default function Value() {
  return (
    <section id="value" className="py-24 md:py-32 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">VALUE</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">Our Stance</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: '01', en: 'Extract the Essence', jp: '本質的課題の抽出', desc: '表面的な事象や初期衝動を鵜呑みにせず、熱量の根底にある「真因（Why）」を論理的に深掘りし、社会に実装すべき真の課題を特定します。' },
            { num: '02', en: 'Integrate Optimal Resources', jp: '最適リソースの結合', desc: '自前主義にこだわらず、課題解決という目的から逆算し、コミュニティ内外に存在する最適な知見、技術、人材を戦略的にマッチングさせます。' },
            { num: '03', en: 'Commit to Implementation', jp: '社会実装へのコミットメント', desc: '議論やアイデアの提供で満足せず、イベント、プロダクト、事業といった目に見える具体的な「カタチ」として社会に出力するまで完遂します。' },
          ].map((value, i) => (
            <div key={i} className="fade-in opacity-0 translate-y-10 transition-all duration-700 border-t border-[#eee] pt-8">
              <div className="font-['Didot','Garamond',serif] text-[#141d58] text-[1.5rem] tracking-[0.1em] mb-2">{value.num}</div>
              <h3 className="font-['Yu_Mincho','游明朝','Hiragino_Mincho_ProN',serif] text-[1.2rem] tracking-[0.1em] mb-2 font-normal">{value.jp}</h3>
              <p className="text-[0.8rem] text-[#888] font-['Didot','Garamond',serif] tracking-[0.15em] mb-6 uppercase">{value.en}</p>
              <p className="text-[0.95rem] leading-[1.9] text-[#555]">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
