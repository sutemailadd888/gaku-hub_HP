"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Collection() {
  const [activeTab, setActiveTab] = useState('projects'); // 初期タブを projects に変更

  // ピボット後の事業内容に合わせたダミーデータ
  const collectionData = {
    projects: [
      { title: '日本酒バー『葉隠』立ち上げ・ブランディング', img: 'https://placehold.co/600x500/eeeeee/999999?text=Project+01' },
      { title: 'カフェバー Blooming Kitchen 共創メニュー開発', img: 'https://placehold.co/600x500/eeeeee/999999?text=Project+02' },
    ],
    events: [
      { title: '次世代リーダーが集う MEETUP Vol.1', img: 'https://placehold.co/600x500/eeeeee/999999?text=Event+01' },
      { title: '企業×学生 新規事業ピッチコンテスト', img: 'https://placehold.co/600x500/eeeeee/999999?text=Event+02' },
    ],
    stories: [
      { title: '【HR事例】熱量フィルターが採用を変える', img: 'https://placehold.co/600x500/eeeeee/999999?text=Story+01' },
      { title: '「好き」をカタチにするまでの100日間の軌跡', img: 'https://placehold.co/600x500/eeeeee/999999?text=Story+02' },
    ]
  };

  return (
    <section id="collection" className="py-24 md:py-32 px-[5%] bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* セクションタイトル */}
        <div className="text-center mb-16 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">COLLECTION</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">Works & Stories</p>
        </div>

        {/* タブナビゲーション */}
        <div className="flex justify-center gap-6 md:gap-12 mb-16 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-100">
          {[
            { id: 'projects', label: 'プロジェクト' },
            { id: 'events', label: 'イベント' },
            { id: 'stories', label: '共創ストーリー' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 border-b transition-all duration-300 font-['Yu_Mincho','游明朝',serif] tracking-[0.1em] text-[0.95rem] md:text-[1.1rem] ${
                activeTab === tab.id 
                  ? 'border-[#141d58] text-[#141d58]' 
                  : 'border-transparent text-[#888] hover:text-[#141d58]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* タブコンテンツ (グリッド) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-200">
          {collectionData[activeTab as keyof typeof collectionData].map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden cursor-pointer bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.15)] transition-all duration-[0.4s] animate-[fadeInTab_0.6s_ease_forwards]"
            >
              <div className="w-full h-[250px] md:h-[350px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[0.6s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                />
              </div>
              {/* 額縁演出：ホバーで下からせり上がる濃紺の帯 */}
              <div className="absolute bottom-0 left-0 w-full bg-[rgba(23,28,97,0.95)] text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <div className="font-['Yu_Mincho','游明朝',serif] text-[1.1rem] tracking-[0.08em]">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* ▼ 修正：他と統一したモード感のあるボタン ▼ */}
        <div className="text-center mt-20 md:mt-28 fade-in opacity-0 translate-y-10 transition-all duration-700 delay-300">
           <Link 
             href="/collection" 
             className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.9rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500"
           >
              View All Collection
           </Link>
        </div>

        <style jsx>{`
          @keyframes fadeInTab {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    </section>
  );
}
