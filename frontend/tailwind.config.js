/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        blue: { neon: '#00D4FF' },
        purple: { neon: '#7C3AED' },
        bg: {
          primary: '#060912',
          secondary: '#0d1117',
          tertiary: '#111827',
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        'orbit-spin': 'orbit-spin 20s linear infinite',
        'orbit-spin-rev': 'orbit-spin 30s linear infinite reverse',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-dot': {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.7)' },
        },
        'orbit-spin': {
          to: { transform: 'translate(-50%,-50%) rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
