'use client';

import { useLanguage } from './LanguageProvider';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex h-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm transition-all duration-200 hover:bg-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 px-3 gap-2"
      aria-label={`Switch to ${language === 'en' ? 'Thai' : 'English'} language`}
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {language === 'en' ? 'TH' : 'EN'}
      </span>
    </button>
  );
}

