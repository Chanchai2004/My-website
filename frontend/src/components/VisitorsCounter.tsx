'use client';

import { useEffect, useState } from "react";

interface AnalyticsData {
  total_guests: number;
  downloaded_cv_count: number;
  download_percentage: number;
}

export default function VisitorsCounter() {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState<'en' | 'th'>('en');
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);

  useEffect(() => {
    setMounted(true);
    
    // Get language from localStorage
    const savedLanguage = localStorage.getItem('language') as 'en' | 'th';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const checkAnalytics = () => {
      const stored = localStorage.getItem('website_analytics');
      if (stored) {
        try {
          setAnalytics(JSON.parse(stored));
        } catch (error) {
          console.error('Error parsing analytics:', error);
        }
      }
    };

    // Check immediately
    checkAnalytics();

    // Check every 2 seconds for updates
    const interval = setInterval(checkAnalytics, 2000);

    return () => clearInterval(interval);
  }, []);

  // Listen for language changes
  useEffect(() => {
    const handleLanguageChange = () => {
      const savedLanguage = localStorage.getItem('language') as 'en' | 'th';
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    };

    // Listen for storage changes
    window.addEventListener('storage', handleLanguageChange);
    
    // Also check periodically
    const interval = setInterval(handleLanguageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleLanguageChange);
      clearInterval(interval);
    };
  }, []);

  if (!mounted || !analytics) return null;

  return (
    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[var(--muted)]/50 rounded-lg">
      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
      <span className="text-sm text-[var(--muted-foreground)]">
        {analytics.total_guests.toLocaleString()} {language === 'en' ? 'visitors' : 'ผู้เยี่ยมชม'}
      </span>
    </div>
  );
}
