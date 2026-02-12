import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  // 1. Inicializamos el estado consultando localStorage
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark'); // Guardamos la elección
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light'); // Guardamos la elección
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const borderClass = "border-border-main-light dark:border-border-main-dark";

  return (
    <button 
      onClick={toggleTheme} 
      className={`
        p-2 rounded-full 
        bg-bg-secondary-light dark:bg-bg-secondary-dark 
        text-black dark:text-white 
        border ${borderClass}
        transition-all duration-300 
        hover:bg-bg-primary-light dark:hover:bg-neutral-800
        flex items-center justify-center
      `}
      aria-label="Cambiar tema"
    >
      <span className="text-sm">
        {theme === 'light' ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;