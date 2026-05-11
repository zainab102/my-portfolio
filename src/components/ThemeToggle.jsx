'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

const STORAGE_KEY = 'theme';
const THEME_CHANGE = 'portfolio-theme-change';

function subscribe(onStoreChange) {
  if (typeof window === 'undefined') return () => {};
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const onMq = () => onStoreChange();
  mq.addEventListener('change', onMq);
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(THEME_CHANGE, onStoreChange);
  return () => {
    mq.removeEventListener('change', onMq);
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(THEME_CHANGE, onStoreChange);
  };
}

function getSnapshot() {
  if (typeof window === 'undefined') return 'light';
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark' || saved === 'light') return saved;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getServerSnapshot() {
  return 'light';
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    window.dispatchEvent(new Event(THEME_CHANGE));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Toggle Light/Dark Mode"
    >
      {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
}
