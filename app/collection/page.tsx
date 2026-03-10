"use client";
import Link from 'next/link';

// ※ 実際の運用ではヘッドレスCMS（MicroCMSなど）から取得するデータを想定したダミー配列
const collectionData = [
  {
    id: "01",
    title: "Blooming Beauty Project",
    category: "01. INCUBATION",
    type: "Community Launch",
    description: "「美容」を切り口に、学生と若手社会人がフラットに交流し、自分らしい表現を探求するコミュニティの立ち上げ。",
    image: "https://placehold.co/800x600/eeeeee/999999?text=Beauty+Project",
    date: "2026.02",
    partner: "Blooming Camp",
    sponsor: "None"
  },
  {
    id: "02",
    title: "Career Break Workshop at Bar",
    category: "02. EVENT",
    type: "Talk Session & Workshop",
    description: "不登校やキャリアブレイク経験者を対象とした、Bar空間での対話型ワークショップ。多様な生き方の選択肢を提示。",
    image: "https://placehold.co/800x600/eeeeee/999999?text=Career+Workshop",
    date: "2026.03",
    partner: "None",
    sponsor: "〇〇NPO法人"
  },
  {
    id: "03",
    title: "Regional Co-Creation EXPO",
    category: "03. PMO",
    type: "Event Execution",
    description: "地方創生をテーマに、学生の熱量と地元企業の課題をマッチングさせる大型共創イベントの企画・運営代行。",
    image: "https://placehold.co/800x600/eeeeee/999999?text=Co-Creation+EXPO",
    date: "2025.11",
    partner: "共創EXPO実行委員会",
    sponsor: "株式会社〇〇 他3社"
  },
  {
    id: "04",
    title: "Sake Brand 'Hagakure' Launch",
    category: "01. INCUBATION",
    type: "Product Development",
    description: "学生による日本酒ブランド「葉隠」の立ち上げ支援。コンセプト設計からWeb制作、飲食店でのポップアップまで伴走。",
    image: "https://placehold.co/800x600/eeeeee/999999?text=Hagakure+Sake",
    date: "2026.01",
    partner: "Blooming Kitchen",
    sponsor: "None"
  }
];

export default function Collection() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-6xl mx-auto">
        
        {/* =========================================
            1. ページタイトル
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            COLLECTION
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our Co-Creation Portfolio
          </p>
        </div>

        {/* =========================================
            2. 導入文
        ========================================= */}
        <div className="text-center mb-24 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] md:text-[1.15rem] tracking-[0.1em] text-[#555] leading-relaxed mb-8 max-w-3xl mx-auto">
            個人の熱量が社会実装（カタチ）となり、<br className="hidden md:block" />
            多様な企業やコミュニティとの結節点から生まれた「共創の実績」です。<br />
            GAKU-HUBが関わったプロジェクトの軌跡をご覧ください。
          </p>
          <div className="w-[1px] h-12 bg-[#141d58] mx-auto"></div>
        </div>

        {/* =========================================
            3. プロジェクト一覧 (Grid Layout)
        ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-32">
          {collectionData.map((item, index) => (
            <Link 
              href={`/collection/${item.id}`} // ※詳細ページへのリンク（今回は一覧のみ実装）
              key={item.id}
              className="group block animate-[fadeIn_1s_ease_forwards] opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              {/* Thumbnail Image */}
              <div className="overflow-hidden mb-6 relative aspect-[4/3] bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]" 
                />
                
                {/* Hover Text Overlay (Optional: 美しさを優先して控えめに) */}
                <div className="absolute inset-0 bg-[#111111]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="font-['Didot','Garamond',serif] text-white tracking-[0.2em] text-[0.8rem] uppercase border border-white px-6 py-2 backdrop-blur-sm">View Project</span>
                </div>
              </div>

              {/* Project Meta Info */}
              <div className="flex justify-between items-baseline mb-3 border-b border-[#eee] pb-3">
                <span className="font-['Didot','Garamond',serif] text-[0.75rem] text-[#141d58] tracking-[0.15em] font-bold">{item.category}</span>
                <span className="font-['Didot','Garamond',serif] text-[0.7rem] text-[#888] tracking-[0.1em]">{item.date}</span>
              </div>

              {/* Title & Description */}
              <h2 className="font-['Didot','Garamond',serif] text-[1.4rem] tracking-[0.08em] text-[#111111] mb-2 group-hover:text-[#141d58] transition-colors duration-300">
                {item.title}
              </h2>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#888] tracking-[0.05em] mb-4">
                {item.type}
              </p>
              <p className="font-['Yu_Mincho','游明朝',serif] text-[0.9rem] text-[#555] leading-relaxed mb-6 line-clamp-2">
                {item.description}
              </p>

              {/* Stakeholder Info (BtoB営業向けの最重要パーツ) */}
              <div className="bg-[#fcfcfc] border border-[#eee] p-4 flex flex-col gap-2">
                {item.partner !== "None" && (
                  <div className="flex items-start gap-2">
                    <span className="font-['Didot','Garamond',serif] text-[0.65rem] text-[#111111] uppercase tracking-[0.1em] w-16 shrink-0 mt-[2px]">Partner</span>
                    <span className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666]">{item.partner}</span>
                  </div>
                )}
                {item.sponsor !== "None" && (
                  <div className="flex items-start gap-2">
                    <span className="font-['Didot','Garamond',serif] text-[0.65rem] text-[#111111] uppercase tracking-[0.1em] w-16 shrink-0 mt-[2px]">Sponsor</span>
                    <span className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666]">{item.sponsor}</span>
                  </div>
                )}
                {item.partner === "None" && item.sponsor === "None" && (
                  <div className="flex items-start gap-2">
                    <span className="font-['Didot','Garamond',serif] text-[0.65rem] text-[#111111] uppercase tracking-[0.1em] w-16 shrink-0 mt-[2px]">Powered</span>
                    <span className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666]">GAKU-HUB Original</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* =========================================
            4. ホームへ戻るボタン
        ========================================= */}
        <div className="text-center pb-12 animate-[fadeIn_1s_ease_forwards_1s] opacity-0" style={{ animationFillMode: 'forwards' }}>
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
