import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: {
    default: 'Mountain to Future | 山区孩子的未来之路',
    template: '%s | Mountain to Future',
  },
  description: '帮助偏远山区孩子了解职业机会、获取教育资源、规划人生道路的教育平台',
  keywords: [
    '教育',
    '职业规划',
    '奖学金',
    '山区教育',
    '职业指导',
    '助学金',
    '志愿者',
    'education',
    'career guidance',
    'scholarships',
  ],
  authors: [{ name: 'Mountain to Future Team' }],
  creator: 'Mountain to Future',
  publisher: 'Mountain to Future',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mountain-to-future.edu'),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/zh-CN',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://mountain-to-future.edu',
    title: 'Mountain to Future | 山区孩子的未来之路',
    description: '帮助偏远山区孩子了解职业机会、获取教育资源、规划人生道路的教育平台',
    siteName: 'Mountain to Future',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain to Future | 山区孩子的未来之路',
    description: '帮助偏远山区孩子了解职业机会、获取教育资源、规划人生道路的教育平台',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when ready
    // google: 'google-site-verification-code',
    // baidu: 'baidu-site-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/icon.png',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable}`}>
      <head>
        
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        
        {/* PWA meta tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mountain to Future" />
        
        {/* Prevent automatic phone number detection */}
        <meta name="format-detection" content="telephone=no" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body 
        className={`
          ${inter.className} 
          min-h-screen 
          bg-gray-50 
          text-gray-900 
          antialiased
          selection:bg-primary-100 
          selection:text-primary-900
        `}
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                   bg-primary-600 text-white px-4 py-2 rounded-lg z-50 transition-all"
        >
          跳转到主要内容
        </a>
        
        {/* Main application */}
        <div id="__next">
          {children}
        </div>
        
        {/* Loading indicator for better UX */}
        <div id="loading-indicator" className="hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
              <span className="text-gray-700">加载中...</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}