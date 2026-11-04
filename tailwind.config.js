/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
    // you can either add all styles
    './node_modules/@rewind-ui/core/dist/theme/styles/*.js',
  ],
  darkMode: 'class',
  theme: {
    // gradients: (theme) => ({
    //   // Array definition (defaults to linear gradients).
    //   creamwhite: ['to bottom', '#fcfbf8', '#f8fbff'],
    //   fireopal: ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
    //   emerald: ['to right', theme('colors.green.400'), theme('colors.teal.500')],
    // }),
    extend: {
      colors: {
        gray: colors.gray,
        zinc: colors.zinc,
        slate: colors.slate,
        neutral: colors.neutral,
        blue: {
          50: '#E5F6FF',
          100: '#CCECFF',
          200: '#94D8FF',
          300: '#61C5FF',
          400: '#2EB2FF',
          500: '#009EF7',
          600: '#007EC7',
          700: '#005E94',
          800: '#003D61',
          900: '#002033',
          950: '#001019',
        },
        red: {
          50: '#FEECF0',
          100: '#FCD9E2',
          200: '#F9B3C5',
          300: '#F78DA7',
          400: '#F4678A',
          500: '#F1416C',
          600: '#E41146',
          700: '#AB0D34',
          800: '#720823',
          900: '#390411',
          950: '#1D0209',
        },
        green: {
          50: '#EFFAF4',
          100: '#DBF5E7',
          200: '#B8EBCF',
          300: '#98E2B9',
          400: '#74D7A1',
          500: '#50CD89',
          600: '#33B36C',
          700: '#268752',
          800: '#195735',
          900: '#0C2C1A',
          950: '#07180E',
        },
        yellow: {
          50: '#FFF9E5',
          100: '#FFF4CC',
          200: '#FFE999',
          300: '#FFDE66',
          400: '#FFD333',
          500: '#FFC700',
          600: '#CCA000',
          700: '#997800',
          800: '#665000',
          900: '#332800',
          950: '#191400',
        },
        purple: {
          50: '#F2EDFD',
          100: '#E1D6FB',
          200: '#C7B1F7',
          300: '#A987F2',
          400: '#8F62EE',
          500: '#7239EA',
          600: '#5317D4',
          700: '#3D119D',
          800: '#290B6A',
          900: '#140533',
          950: '#0B031C',
        },
        pink: {
          50: '#FBEAF2',
          100: '#F6D5E6',
          200: '#EFAECF',
          300: '#E684B5',
          400: '#DF5E9E',
          500: '#D63384',
          600: '#B2246B',
          700: '#841A4F',
          800: '#591236',
          900: '#2A091A',
          950: '#15040D',
        },
      },
      backgroundImage: {
        creamwhite: 'linear-gradient(to bottom, #fcfbf8 #f8fbff, transparent 100%)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        noto: ['Noto Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        general: ['General Sans', 'sans-serif'],
        redhat: ['Red Hat Display', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        supreme: ['Supreme', 'sans-serif'],
        jetbrainsmono: ['JetBrains Mono', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1474px',
        // => @media (min-width: 1536px) { ... }

        '2.5xl': '1750',
        // => @media (min-width: 1280px) { ... }
        '3xl': '2000px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  variants: {},
  plugins: [
    require('tailwindcss-gradients'),
    require('daisyui'),
    require('tw-elements/dist/plugin.cjs'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar')({ nocompatible: true }),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}
