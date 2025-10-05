'use client';

import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm transition-all duration-200 hover:bg-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-transform duration-200" />
      ) : (
        <Sun className="h-5 w-5 transition-transform duration-200" />
      )}
    </button>
  );
}
