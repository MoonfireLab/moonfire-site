const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
    },
    colors:{
      moonfireGray: {
        DEFAULT: '#0a0018',
        light: '#22192f',
      },
      moonfireHeader: {
        DEAFULT: '#3e304c',
      },
    },
  },
  plugins: [],
};
