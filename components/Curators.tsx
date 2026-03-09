export default function Curators() {
  return (
    <section id="curators" className="py-24 md:py-32 px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24 fade-in opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="font-['Didot','Garamond',serif] text-[2.5rem] tracking-[0.15em] mb-4 font-light">CURATORS</h2>
          <p className="font-['Didot','Garamond',serif] text-[#888] tracking-[0.1em] text-[1rem]">The Team</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            { role: 'Representative', name: '久保', img: 'https://placehold.co/400x500/eeeeee/999999?text=Representative' },
            { role: 'Agent', name: 'エージェント', img: 'https://placehold.co/400x500/eeeeee/999999?text=Agent' },
            { role: 'Creator', name: 'クリエイター', img: 'https://placehold.co/400x500/eeeeee/999999?text=Creator' }
          ].map((member, i) => (
            <div key={i} className={`text-center group fade-in opacity-0 translate-y-10 transition-all duration-700 delay-[${i * 100}ms]`}>
              <div className="w-full h-[320px] md:h-[400px] overflow-hidden mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_12px_35px_rgba(0,0,0,0.2)] transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={member.img} alt={member.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
              <div className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.15em] text-[#141d58] mb-2 uppercase">{member.role}</div>
              <div className="font-['Yu_Mincho','游明朝',serif] text-[1.2rem] tracking-[0.08em]">{member.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
