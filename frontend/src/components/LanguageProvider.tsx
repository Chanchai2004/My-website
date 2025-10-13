'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('language') as Language;
    const browserLanguage = navigator.language.startsWith('th') ? 'th' : 'en';
    const initialLanguage = savedLanguage || browserLanguage;
    
    setLanguageState(initialLanguage);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      // Update document attribute for CSS or other purposes
      document.documentElement.setAttribute('lang', language);
      
      // Save to localStorage
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'th' : 'en');
  };

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

