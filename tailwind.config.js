/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Activación manual del modo oscuro
  theme: {
    extend: {
      colors: {
        // Mapeo exacto de tu imagen "PALETA DE COLORES"
        nexo: {
          primary: '#000000',    // Texto principal y bordes
          accent: '#FF4500',     // Naranja (Barra búsqueda / Acentos)
          bg: {
            light: '#FFFFFF',    // Fondo modo claro
            sub: '#F3F4F6',      // Secundario modo claro
            dark: '#0A0A0A',     // Fondo modo oscuro
            darkSub: '#171717',  // Secundario modo oscuro
          }
        }
      },
      fontFamily: {
        // Usaremos una fuente sans-serif moderna para que encaje con el logo NEXO
        sans: ['Inter', 'system-ui', 'sans-serif'], 
      },
      fontSize: {
        // Mapeo exacto de tu imagen "TIPOGRAFÍA"
        'h1': ['40px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['30px', { lineHeight: '1.2', fontWeight: '600' }],
        'h3': ['27px', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['20px', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}