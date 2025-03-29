/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        neon: {
          pink: '#FF3EDF',
          purple: '#B027FF',
          cyan: '#00E7FF',
          green: '#39FF14',
          yellow: '#FCEE0C',
          dark: '#121212',
          'dark-gray': '#272727',
          'light-gray': '#AAAAAA',
        }
      },
      boxShadow: {
        'neon-pink': '0 0 8px #FF3EDF',
        'neon-purple': '0 0 8px #B027FF',
        'neon-cyan': '0 0 8px #00E7FF',
        'neon-green': '0 0 8px #39FF14',
        'neon-yellow': '0 0 8px #FCEE0C',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 1.5s infinite alternate',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        'neon-flicker': {
          '0%, 18%, 22%, 25%, 53%, 57%, 100%': { opacity: 1 },
          '20%, 24%, 55%': { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
} 