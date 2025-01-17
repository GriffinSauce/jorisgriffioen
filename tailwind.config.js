const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
      },
    },
    extend: {
      fontFamily: {
        primary: ['Oswald', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // TODO: rename these aliases
        gray: colors.slate,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        primary: {
          500: '#007d8a',
        },
        secondary: {
          500: '#ff8da1',
          600: '#d87b8b;',
        },
        spotify: {
          300: '#1c9c49',
          500: '#1db954',
        },
        facebook: {
          300: '#334977',
          500: '#3b5998',
        },
        instagram: {
          500: '#cb3190;',
        },
      },
      spacing: {
        14: '3.5rem',
      },
      padding: {
        full: '100%',
      },
    },
  },
  variants: {
    backgroundColor: [
      'responsive',
      'first',
      'last',
      'even',
      'odd',
      'hover',
      'focus',
      'group-hover',
    ],
    borderRadius: ['responsive', 'first', 'last'],
    borderColor: ['hover'],
  },
  plugins: [],
};
