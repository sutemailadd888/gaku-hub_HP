import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // ▼ サイトの基本タイトルと説明文（Google検索結果に表示されます）
  title: "GAKU-HUB | 想いが、カタチに。出会いが、ミライに。",
  description: "GAKU-HUBは、個人の熱量を社会実装へと導く「結節点」です。伴走支援（Incubation）、共創コミュニティ、法人向けHR支援・PMOを展開するエコシステムプラットフォーム。",
  
  // ▼ OGP設定（LINEやX、Facebook等でURLをシェアした際に表示されるカード情報）
  openGraph: {
    title: "GAKU-HUB | 想いが、カタチに。出会いが、ミライに。",
    description: "個人の熱量を社会実装へと導く「結節点」。伴走支援から法人向け共創・採用ソリューションまでを展開。",
    siteName: "GAKU-HUB",
    locale: "ja_JP",
    type: "website",
    // url: "https://gaku-hub.com", // ※本番ドメインが確定したらコメントアウトを外して設定してください
    // images: [
    //   {
    //     url: "https://gaku-hub.com/ogp-image.jpg", // ※後日、1200x630pxの美しいOGP画像を作成して設定します
    //     width: 1200,
    //     height: 630,
    //     alt: "GAKU-HUB OGP Image",
    //   },
    // ],
  },
  
  // ▼ X（旧Twitter）でのカード表示設定
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ▼ 言語設定を日本語（ja）に変更
    <html lang="ja">
      <body className="antialiased selection:bg-[#141d58] selection:text-white">
        {children}
      </body>
    </html>
  );
}
