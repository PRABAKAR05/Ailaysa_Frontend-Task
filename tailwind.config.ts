// I am Batman
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Figma Palette
        primary: {
          50: '#E0F4FF',
          100: '#C9E2F4',
          200: '#A3DFFF',
          500: '#2F69A3',
          600: '#1142BE',
          700: '#0D5FD6',
          800: '#184978',
        },
        neutral: {
          50: '#F9F9F9',
          100: '#F0F0F1',
          200: '#E9E9E9',
          300: '#D9D9D9',
          400: '#BCB3C7',
          500: '#717171',
          600: '#4D4D4D',
          700: '#404040',
          800: '#1E1E1E',
          900: '#120F0F',
          950: '#000000',
        },
        surface: {
          light: '#FFFFFF',
          cream: '#FFFBE7',
          yellow: '#FFF8D7',
          orange: '#FFEAD9',
          peach: '#FFF6EF',
        },
        destructive: '#C62123',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        reddit: ['Reddit Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'xs': ['10px', '16px'],
        'sm': ['12px', '16px'],
        'base': ['14px', '21px'],
        'md': ['15px', '24px'],
        'lg': ['16px', '24px'],
        'xl': ['18px', '27px'],
        '2xl': ['20px', '32px'],
        '3xl': ['22px', '33px'],
        '4xl': ['24px', '36px'],
        '5xl': ['28px', '42px'],
        '6xl': ['30px', '45px'],
        '7xl': ['32px', '48px'],
      },
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
        // Figma Custom Spacing overrides
        '2': '2px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '20': '20px',
        '22': '22px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        '34': '34px',
        '85': '85px',
      },
      minHeight: {
        screen: "100dvh",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};

export default config;
