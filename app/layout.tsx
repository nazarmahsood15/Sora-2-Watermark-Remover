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
  // Primary Meta Tags - Optimized for CTR and SEO
  title: {
    default: "Sora 2 Watermark Remover 🚀 Remove Watermark From Sora 2 Videos Free Online",
    template: "%s | Sora 2 Watermark Remover"
  },
  description: "★ #1 Sora 2 Watermark Remover ★ Remove watermarks from Sora 2 AI videos in seconds! 100% Free • No Signup • HD Quality • 2847+ videos processed. Try now!",

  // Keywords for SEO
  keywords: [
    "sora 2 watermark remover",
    "sora 2 video watermark remover",
    "remove watermark sora 2",
    "sora 2 watermark remove",
    "sora 2 ai watermark remover",
    "delete watermark sora 2",
    "sora watermark removal",
    "sora 2 video watermark remove",
    "sora 2 watermark removal tool",
    "free sora 2 watermark remover",
    "online sora 2 watermark remover",
    "sora 2 ai video watermark",
    "remove sora 2 logo",
    "sora 2 video editor",
    "sora 2 watermark erase",
    "sora 2 watermark delete",
    "how to remove sora 2 watermark",
    "best sora 2 watermark remover",
    "sora 2 watermark remover online",
    "sora 2 watermark remover free",
    "sora ai watermark remover",
    "remove watermark from sora 2 video",
    "sora 2 logo remover"
  ],

  // Open Graph / Facebook
  openGraph: {
    type: "website",
    url: "https://sora2watermarkremover.com/",
    siteName: "Sora 2 Watermark Remover",
    title: "Sora 2 Watermark Remover - Remove Watermark from Sora 2 Videos Free",
    description: "Remove Sora 2 watermarks instantly! Free online tool to delete watermark from Sora 2 AI videos. No signup required. HD quality output. 2847+ videos processed!",
    images: [
      {
        url: "https://sora2watermarkremover.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sora 2 Watermark Remover Tool",
      },
    ],
    locale: "en_US",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "@sora2watermark",
    creator: "@sora2watermark",
    title: "Sora 2 Watermark Remover - Remove Watermark from Sora 2 Videos Free",
    description: "Remove Sora 2 watermarks instantly! Free online tool. No signup required. HD quality output. 2847+ videos processed!",
    images: ["https://sora2watermarkremover.com/twitter-image.jpg"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Additional SEO Meta Tags
  authors: [{ name: "Sora 2 Watermark Remover" }],
  creator: "Sora 2 Watermark Remover",
  publisher: "Sora 2 Watermark Remover",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Metadata for SEO
  category: "technology",
  classification: "Video Editing Software",

  // Verification and Webmaster Tools
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },

  // App Links
  appLinks: {
    web: {
      url: "https://sora2watermarkremover.com",
      should_fallback: true,
    },
  },

  // Alternates
  alternates: {
    canonical: "https://sora2watermarkremover.com",
    languages: {
      "en-US": "https://sora2watermarkremover.com",
      "x-default": "https://sora2watermarkremover.com",
    },
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },

  // Manifest
  manifest: "/manifest.json",

  // Other Metadata
  other: {
    "google-site-verification": "your-google-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "p:domain_verify": "your-pinterest-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
google.com, pub-6965971637321938, DIRECT, f08c47fec0942fa0
<meta name="google-adsense-account" content="ca-pub-6965971637321938"></meta>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="href=https://fonts.gstatic.com" crossOrigin="" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://api.sora2watermarkremover.com" />

        {/* Additional meta tags for better SEO */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Sora 2 Watermark Remover" />

        {/* Geo and location meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />

        {/* Content classification */}
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="revisit-after" content="1 days" />

        {/* Mobile specific */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        {/* PWA meta tags */}
        <meta name="application-name" content="Sora 2 Watermark Remover" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sora 2 Watermark Remover",
              "url": "https://sora2watermarkremover.com",
              "logo": "https://sora2watermarkremover.com/logo.png",
              "description": "Professional Sora 2 watermark removal tool - Remove watermarks from Sora 2 AI videos instantly",
              "sameAs": [
                "https://twitter.com/sora2watermark",
                "https://facebook.com/sora2watermarkremover"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@sora2watermarkremover.com",
                "contactType": "customer service"
              }
            })
          }}
        />


        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Sora 2 Watermark Remover",
              "url": "https://sora2watermarkremover.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sora2watermarkremover.com?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
