import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import { ThemeProvider } from "../components/ThemeProvider";
import { ThemeToggle } from "../components/ThemeToggle";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chanchai Lertsri",
  description: "Welcome to my personal website",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {/* Logo Header */}
          <div className="fixed top-0 left-0 right-0 z-50 bg-[var(--card)]/90 backdrop-blur-sm border-b border-[var(--border)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <Image
                    src="/logo.png"
                    alt="Chanchai Lertsri Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="ml-3 text-xl font-bold text-[var(--foreground)]">
                    Chanchai Lertsri
                  </span>
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
          
          {/* Main Content with top padding for fixed header */}
          <div className="pt-16">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
