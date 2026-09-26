/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ['"Clash Display"', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      colors: {
        'brand-black': '#111111',
        'brand-dark': '#1e1e1e',
        'brand-off-white': '#f2f2f2',
        'brand-white': '#ffffff',
        'brand-gray': '#838282',
        'brand-gray-light': '#b6b5b5',
        'brand-gray-mid': '#bfbfbf',
        'brand-gray-fade': '#d9d9d9',
        'brand-border': 'rgba(30, 30, 30, 0.10)',
      },
      letterSpacing: {
        'tight-xl': '-0.05em',
      },
      lineHeight: {
        'super-tight': '0.9',
      },
      transitionTimingFunction: {
        'reveal': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
    },
  },
  plugins: [],
}
