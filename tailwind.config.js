/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Segoe UI', 'sans-serif']
      },
      colors: {
        primary: {
          DEFAULT: '#2564cf',
          dark: '#005A9E',
        },
        background: "#faf9f8",
      },
      textColor: {
        DEFAULT: '#292827',
      },
      width: {
        'sidebar': '12.5rem', // 200px
        'sidebar-lg': '18.125rem', // 290px
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-5px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-2px)', opacity: '0' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.1s ease-out',
        'slide-up': 'slideUp 0.1s ease-in',
      },
    },
  },
  plugins: [],
}