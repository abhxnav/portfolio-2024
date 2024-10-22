import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        dark: {
          800: '#0D0F10',
          700: '#0C0C0C',
          600: '#151515',
          500: '#363A3D',
          400: '#76828D',
          300: '#ABB8C4',
          200: '#E5E7EB ',
        },
      },
      keyframes: {
        'right-to-left': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'left-to-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'right-to-left': 'right-to-left 1s linear infinite',
        'left-to-right': 'left-to-right 1s linear infinite',
      },
    },
    fontFamily: {
      roboto: ['var(--font-roboto)', 'sans-serif'],
      baloo: ['var(--font-baloo)', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
