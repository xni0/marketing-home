/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Mantenemos tu fuente Syne
      fontFamily: {
        sans: ['Syne', 'sans-serif'],
      },

      // Combinamos tus colores previos con los nuevos de Figma
      colors: {
        // Tus colores originales
        nexo: {
          primary: '#000000',
          accent: '#FF4500',
          bg: {
            light: '#FFFFFF',
            sub: '#F3F4F6',
            dark: '#0A0A0A',
            darkSub: '#171717',
          }
        },
        // Nuevas variables semánticas de Figma
        bg: {
          'primary-light': '#FFFFFF',
          'primary-dark': '#0A0A0A',
          'secondary-light': '#F3F4F6',
          'secondary-dark': '#171717',
        },
        brand: {
          accent: '#FF4500',
        },
        text: {
          'primary-light': '#FFFFFF',
          'primary-dark': '#FFFFFF',
          'secondary-light': '#696969',
          'secondary-dark': '#FFFFFF',
        },
        border: {
          'main-light': '#000000',
          'main-dark': '#FFFFFF',
        }
      },

      // Jerarquía tipográfica de Figma
      fontSize: {
        'h1': ['128px', { lineHeight: '128px', fontWeight: '900' }],
        'h2': ['48px', { lineHeight: '53px', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '29px', fontWeight: '700' }],
        'body-lead': ['18px', { lineHeight: '29px', fontWeight: '300' }],
        'body-default': ['14px', { lineHeight: '21px', fontWeight: '400' }],
        'label-bold': ['10px', { lineHeight: '10px', fontWeight: '900' }],
        'label-number': ['14px', { lineHeight: '14px', fontWeight: '900' }],
      },

      // Mantenemos tu animación crucial
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite', 
      },
    },
  },
  plugins: [],
}