import Link from 'next/link';

export default function Curators() {
  // 事業の3フェーズ（統括・企画・接続）を担うコアメンバーの定義
  const teamData = [
    { 
      role: 'Founder & CEO', 
      name: '久保', 
      businessFunction: '事業統括 / BtoBアライアンス',
      img: 'https://placehold.co/400x600/eeeeee/999999?text=Founder' 
    },
    { 
      role: 'Director', 
      name: 'お名前（ディレクター）', 
      businessFunction: '事業企画 / プロジェクト創出',
      img: 'https://placehold.co/400x600/eeeeee/999999?text=Director' 
    },
    { 
      role: 'Agent', 
      name: 'お名前（エージェント）', 
      businessFunction: '企業マッチング / HR支援',
      img: 'https://placehold.co/400x600/eeeeee/999999?text=Agent' 
    }
  ];

  return (
    <section id="curators" className="py-24 md:py-32 px-[5%] bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-16 md:mb-24 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">CURATORS</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">The Team</p>
        </div>

        {/* メンバーグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {teamData.map((member, i) => (
            <div key={i} className={`text-center group fade-in opacity-0 translate-y-10 transition-all duration-700 delay-[${i * 100}ms]`}>
              
              {/* 写真エリア */}
              <div className="w-full h-[350px] md:h-[450px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.15)] transition-all duration-[0.5s] ease-[cubic-bezier(0.4,0,0.2,1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={member.img} 
                  alt={member.role} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.6s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                />
              </div>

              {/* 役職（英語） */}
              <div className="font-['Didot','Garamond',serif] text-[0.8rem] tracking-[0.15em] text-[#141d58] mb-2 uppercase">
                {member.role}
              </div>
              
              {/* 名前 */}
              <div className="font-['Yu_Mincho','游明朝',serif] text-[1.2rem] tracking-[0.08em] text-[#111111] mb-2">
                {member.name}
              </div>
              
              {/* ▼追加：担当領域（ビジネス機能）を小さく美しく配置 */}
              <div className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] tracking-[0.05em] text-[#888]">
                {member.businessFunction}
              </div>
            </div>
          ))}
        </div>

        {/* View All Curators ボタン */}
        <div className="text-center mt-20 md:mt-28 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300">
           <Link 
             href="/curators" 
             className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
           >
              View All Curators
           </Link>
        </div>

      </div>
    </section>
  );
}
