import type { Metadata } from "next";
import { Lato, Noto_Sans_Thai } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { ThemeToggle } from "../components/ThemeToggle";
import { LanguageProvider } from "../components/LanguageProvider";
import { LanguageToggle } from "../components/LanguageToggle";
import VisitorsCounter from "../components/VisitorsCounter";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chanchai Lertsri",
  description: "Welcome to my personal website",
  icons: {
    icon: [
      { url: '/robot.png', sizes: 'any' },
      { url: '/robot.png', sizes: '32x32', type: 'image/png' },
      { url: '/robot.png', sizes: '192x192', type: 'image/png' },
      { url: '/robot.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${notoSansThai.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {/* Logo Header */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--card)]/90 backdrop-blur-sm border-b border-[var(--border)]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center group">
                    <div className="relative">
                      {/* Logo Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 via-[var(--secondary)]/20 to-[var(--accent)]/20 dark:from-[var(--primary)]/30 dark:via-[var(--secondary)]/30 dark:to-[var(--accent)]/30 rounded-full backdrop-blur-sm"></div>
                      {/* Robot Logo */}
                      <Image
                        src="/robot.png"
                        alt="AI Assistant Robot Logo"
                        width={40}
                        height={40}
                        className="relative z-10 rounded-full object-cover transition-all duration-300 group-hover:scale-105"
                        priority
                      />
                    </div>
                    <span className="ml-3 text-xl font-bold text-[var(--foreground)]">
                      Chanchai Lertsri
                    </span>
                  </div>
                  
                  {/* Theme and Language Toggle */}
                  <div className="flex items-center gap-3">
                    <VisitorsCounter />
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content with top padding for fixed header */}
            <div className="pt-16">
              {children}
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
