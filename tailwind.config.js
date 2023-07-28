/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      color: {
        'cyan-400': '#16bfb7',
        'cyan-700': '#0e7a75'
      },
      backgroundColor: {
        'light-green-gradient': 'linear-gradient(#19d6cd 0%, #16BFB7 100%)',
        'yellow-btn-400': 'rgb(253, 220, 62)',
        'yellow-btn-700': '#fdce3e'
      },
    },
  },
  plugins: [],
}

