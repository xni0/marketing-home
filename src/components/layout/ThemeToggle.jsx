import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Tokens de Figma para coherencia visual
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