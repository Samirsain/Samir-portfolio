'use client';

import { useEffect } from 'react';

export function ThemeScript() {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = theme;
  }, []);

  return null;
}
