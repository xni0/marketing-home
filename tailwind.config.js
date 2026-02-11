/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
      },
      // ... tus colores y fuentes ...
      colors: {
        nexo: {
          primary: '#000000',
          accent: '#FF4500',
          bg: {
            light: '#FFFFFF',
            sub: '#F3F4F6',
            dark: '#0A0A0A',
            darkSub: '#171717',
          }
        }
      },
      // === ESTO ES LO CRUCIAL PARA LA ANIMACIÓN ===
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite', // He bajado a 20s para que se note más el movimiento
      },
    },
  },
  plugins: [],
}