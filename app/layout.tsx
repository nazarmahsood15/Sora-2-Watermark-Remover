import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // ✅ Your metadata (already correct)
  title: {
    default: "Sora 2 Watermark Remover 🚀 Remove Watermark From Sora 2 Videos Free Online",
    template: "%s | Sora 2 Watermark Remover",
  },
  description:
    "★ #1 Sora 2 Watermark Remover ★ Remove watermarks from Sora 2 AI videos in seconds! 100% Free • No Signup • HD Quality • 2847+ videos processed. Try now!",
  // ... (rest of your metadata stays the same)
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Adsense verification meta */}
        <meta
          name="google-adsense-account"
          content="ca-pub-6965971637321938"
        />

        {/* ✅ Schema & meta as you already included */}

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ✅ Correct way to load Adsense script in Next.js */}
       <Script
  async
  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>

        {children}
      </body>
    </html>
  );
}
