"use client";
import { useState } from 'react';

export default function CollectionHub() {
  const [activeFilter, setActiveFilter] = useState('all');

  // ギャラリーに展示する全データ（カテゴリー分けを持たせています）
  const collectionItems = [
    { id: 1, category: 'projects', title: '日本酒バー『葉隠』立ち上げ・ブランディング', img: 'https://placehold.co/800x800/eeeeee/999999?text=Project+01' },
    { id: 2, category: 'projects', title: 'カフェバー Blooming Kitchen 共創メニュー開発', img: 'https://placehold.co/800x800/eeeeee/999999?text=Project+02' },
    { id: 3, category: 'events', title: '次世代リーダーが集う MEETUP Vol.1', img: 'https://placehold.co/800x800/eeeeee/999999?text=Event+01' },
    { id: 4, category: 'events', title: '企業×学生 新規事業ピッチコンテスト', img: 'https://placehold.co/800x800/eeeeee/999999?text=Event+02' },
    { id: 5, category: 'stories', title: '【HR事例】熱量フィルターが採用を変える', img: 'https://placehold.co/800x800/eeeeee/999999?text=Story+01' },
    { id: 6, category: 'stories', title: '「好き」をカタチにするまでの100日間の軌跡', img: 'https://placehold.co/800x800/eeeeee/999999?text=Story+02' },
    // ギャラリーを充実させるための追加ダミー
    { id: 7, category: 'projects', title: 'アパレルブランド ポップアップストア出店', img: 'https://placehold.co/800x800/eeeeee/999999?text=Project+03' },
    { id: 8, category: 'events', title: 'GAKU-HUB カンファレンス 2026', img: 'https://placehold.co/800x800/eeeeee/999999?text=Event+03' },
    { id: 9, category: 'stories', title: '【対談】共創施設PMOがもたらす化学反応', img: 'https://placehold.co/800x800/eeeeee/999999?text=Story+03' },
  ];

  // フィルターの定義
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'projects', label: 'Projects' },
    { id: 'events', label: 'Events' },
    { id: 'stories', label: 'Stories' }
  ];

  // 選択されたタブに基づいて表示するデータを絞り込む
  const filteredItems = activeFilter === 'all' 
    ? collectionItems 
    : collectionItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-[5%] selection:bg-[#141d58] selection:text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* タイトルエリア */}
        <div className="text-center mb-16 animate-[fadeIn_1s_ease_forwards]">
          <h1 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light">
            COLLECTION
          </h1>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Works & Stories
          </p>
        </div>

        {/* フィルター（絞り込みタブ） */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 animate-[fadeIn_1s_ease_forwards_0.2s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`pb-2 border-b transition-all duration-300 font-['Didot','Garamond',serif] tracking-[0.15em] text-[0.95rem] md:text-[1.1rem] uppercase ${
                activeFilter === filter.id 
                  ? 'border-[#141d58] text-[#141d58]' 
                  : 'border-transparent text-[#aaa] hover:text-[#111111]'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* ギャラリー（グリッド表示） */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-[fadeIn_1s_ease_forwards_0.4s] opacity-0" style={{ animationFillMode: 'forwards' }}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              // 絞り込み時にフワッと切り替わるアニメーションキーを設定
              className="group relative overflow-hidden cursor-pointer bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-[0.4s] animate-[fadeInTab_0.6s_ease_forwards]"
            >
              <div className="w-full aspect-square overflow-hidden bg-[#FAFAFA]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 group-hover:grayscale-0 transition-transform duration-[0.8s] ease-[cubic-bezier(0.4,0,0.2,1)]"
                />
              </div>
              
              {/* 額縁演出：ホバーで下からせり上がる濃紺の帯 */}
              <div className="absolute bottom-0 left-0 w-full bg-[rgba(23,28,97,0.95)] text-white p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-end">
                <span className="font-['Didot','Garamond',serif] text-[0.65rem] tracking-[0.2em] text-[#aaa] mb-2 uppercase block">
                  {item.category}
                </span>
                <div className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] tracking-[0.08em] leading-snug">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInTab {
          from { opacity: 0; transform: translateY(10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
