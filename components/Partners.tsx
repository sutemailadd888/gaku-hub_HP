import Link from 'next/link';

export default function Partners() {
  return (
    <section className="py-32 bg-white border-t border-[#eee] fade-in opacity-0 translate-y-10 transition-all duration-[1s] ease-out">
      <div className="max-w-5xl mx-auto px-[5%]">
        
        {/* =========================================
            Section Title (他のセクションと統一)
        ========================================= */}
        <div className="text-center mb-16">
          <h2 className="font-['Didot','Garamond',serif] text-[3rem] md:text-[4rem] tracking-[0.15em] mb-4 text-[#111111] font-light uppercase">
            PARTNERS
          </h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.2em] text-[0.85rem] uppercase">
            Our Co-Creation Network
          </p>
        </div>

        {/* 導入テキスト */}
        <div className="text-center mb-24">
          <p className="font-['Yu_Mincho','游明朝',serif] text-[1.05rem] md:text-[1.15rem] tracking-[0.1em] text-[#555] leading-relaxed">
            GAKU-HUBの熱量を共に育む、協創パートナー企業・団体様
          </p>
          <div className="w-[1px] h-8 bg-[#141d58] mx-auto mt-8"></div>
        </div>

        {/* =========================================
            1. Official Partners (上位・協業アライアンス)
        ========================================= */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] text-[#141d58] mb-2 uppercase">Official Partners</h3>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] tracking-[0.05em]">インフラを共有し、共に若手の挑戦を牽引する協業アライアンス</p>
          </div>
          
          {/* Partner Logos */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={`partner-${item}`} className="aspect-[2/1] bg-[#fafafa] border border-[#eee] flex items-center justify-center group cursor-pointer overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://placehold.co/400x200/fafafa/999999?text=Partner+Logo`} 
                  alt="Official Partner" 
                  className="w-[70%] h-auto grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-[1px] h-12 bg-[#e0e0e0] mx-auto mb-20"></div>

        {/* =========================================
            2. Sponsors (協賛企業)
        ========================================= */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="font-['Didot','Garamond',serif] text-[1.2rem] tracking-[0.15em] text-[#111111] mb-2 uppercase">Sponsors</h3>
            <p className="font-['Yu_Mincho','游明朝',serif] text-[0.8rem] text-[#666] tracking-[0.05em]">次世代のチャレンジャーを支援し、共創を加速させる協賛企業様</p>
          </div>
          
          {/* Sponsor Logos */}
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <div key={`sponsor-${item}`} className="aspect-[2/1] bg-white flex items-center justify-center group cursor-pointer border border-transparent hover:border-[#eee] transition-colors duration-500">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={`https://placehold.co/300x150/ffffff/aaaaaa?text=Sponsor`} 
                  alt="Sponsor" 
                  className="w-[80%] h-auto grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* =========================================
            CTA Button (他のセクションとデザインを統一)
        ========================================= */}
        <div className="text-center pb-12">
          <Link 
            href="/service" 
            className="inline-block border border-[#111111] px-[3rem] py-[1rem] text-[0.85rem] tracking-[0.1em] text-[#111111] font-['Didot','Garamond',serif] hover:bg-[#141d58] hover:border-[#141d58] hover:text-white transition-all duration-500 uppercase"
          >
            View Details
          </Link>
        </div>

      </div>
    </section>
  );
}
