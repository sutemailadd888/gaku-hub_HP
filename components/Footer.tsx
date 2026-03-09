import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-16 px-[5%]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* ロゴ / ブランド名 */}
        <div className="mb-8 fade-in opacity-0 translate-y-5 transition-all duration-700">
          <Link href="/" className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.2em] text-white hover:text-[#cacede] transition-colors duration-300">
            GAKU-HUB
          </Link>
        </div>

        {/* トラストリンク（法的情報・メニュー） */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 fade-in opacity-0 translate-y-5 transition-all duration-700 delay-100">
          {[
            { name: 'Philosophy', path: '/philosophy' },
            { name: '運営概要', path: '/company' },
            { name: 'プライバシーポリシー', path: '/privacy' },
            { name: '利用規約', path: '/terms' },
            { name: 'お問い合わせ', path: '/contact' },
          ].map((item, index) => (
            <Link 
              key={index} 
              href={item.path} 
              className="font-['Yu_Mincho','游明朝',serif] text-[0.75rem] tracking-[0.1em] text-[#888] hover:text-white transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* コピーライト（ブランドの刻印） */}
        <div className="fade-in opacity-0 translate-y-5 transition-all duration-700 delay-200">
          <p className="font-['Didot','Garamond',serif] text-[0.7rem] tracking-[0.2em] text-[#555] uppercase">
            &copy; {new Date().getFullYear()} GAKU-HUB. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
