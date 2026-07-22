/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        finfalo: {
          'dark': '#081423',
          'green': '#16C784',
          'white': '#FFFFFF',
          'gray': '#F4F7FA',
          'gray-100': '#E8EEF5',
          'gray-200': '#D1D9E0',
          'gray-300': '#B9C0C8',
          'gray-400': '#A1A8B0',
          'text': '#2D3E52',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(22, 199, 132, 0.3)',
      },
    },
  },
  plugins: [],
}