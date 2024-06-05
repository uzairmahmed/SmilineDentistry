import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        cursive: ['var(--font-cursive)'],
      },

    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "light": {
        colors: {
          background: "#F5F4ED",
          foreground: "#1F273A",
          default: {
            100: '#CEE7F8',
            200: '#A1CDF1',
            300: '#6BA1D5',
            400: '#4172AC',
            500: '#143D75', // your base color
            600: '#0E2F64',
            700: '#0A2354',
            800: '#061843',
            900: '#031038',
            DEFAULT: '#143D75',
            foreground: "#fff"
          },
          primary: {
            100: '#DCF9EC',
            200: '#BBF4DF',
            300: '#91E0CA',
            400: '#6CC2B2',
            500: '#3F9A91', // your base color
            600: '#2E8483',
            700: '#1F686E',
            800: '#144D59',
            900: '#0C3949',
            DEFAULT: '#3F9A91',
            foreground: "#fff"
          },
          secondary: {
            100: '#FBF8EF',
            200: '#F7F1E0',
            300: '#E7DDC7',
            400: '#D0C4AC',
            500: '#B2A289', // your base color
            600: '#998264',
            700: '#806445',
            800: '#67482B',
            900: '#55341A',
            DEFAULT: '#B2A289',
            foreground: "#fff",
          },
          focus: "#F182F6",
          
        },
        layout: {
          disabledOpacity: "0.3",
          radius: {
            small: "4px",
            medium: "6px",
            large: "8px",
          },
          borderWidth: {
            small: "10px",
            medium: "20px",
            large: "30px",
            default: '100px',
          },
        },
      }
    }
  }
  )],
}
