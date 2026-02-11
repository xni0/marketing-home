/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // 1. FUENTE: Solo una definición, usando Syne
      fontFamily: {
        sans: ['Syne', 'sans-serif'], 
      },
      // 2. COLORES
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
      // 3. TAMAÑOS DE FUENTE
      fontSize: {
        'h1': ['40px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['30px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['27px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['20px', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}