// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-16 px-[5%]">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <div className="mb-8 fade-in opacity-0 translate-y-5 transition-all duration-700">
          <Link href="/" className="font-['Didot','Garamond',serif] text-[1.5rem] tracking-[0.2em] text-white hover:text-[#cacede] transition-colors duration-300">
            GAKU-HUB
          </Link>
        </div>

        {/* トラストリンク（法的情報・メニュー） */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10 fade-in opacity-0 translate-y-5 transition-all duration-700 delay-100">
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

        {/* ▼ 追加：Instagramリンク（洗練されたテキストリンク） */}
        <div className="mb-12 fade-in opacity-0 translate-y-5 transition-all duration-700 delay-[150ms]">
          <a 
            href="https://instagram.com/あなたのID" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['Didot','Garamond',serif] text-[0.85rem] tracking-[0.2em] text-[#888] hover:text-white transition-colors duration-300 uppercase flex items-center gap-2"
          >
            {/* シンプルなSVGアイコンを使用 */}
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
            Instagram
          </a>
        </div>

        <div className="fade-in opacity-0 translate-y-5 transition-all duration-700 delay-200">
          <p className="font-['Didot','Garamond',serif] text-[0.7rem] tracking-[0.2em] text-[#555] uppercase">
            &copy; {new Date().getFullYear()} GAKU-HUB. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
