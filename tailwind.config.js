/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E40AF',
        customGreen: '#10B981',
        customBlack :'#000000',
        customMixed : '#FFF3E3',
        primary : '#B88E2F',
        primarySecond : '#F9F1E7',
        fontColor : '#333333',
        white : '#FFFFFF',
        customBlackThin : '#666666',
        customGrey : '#E0E0E0',
        customGreyFont : '#898989',
        primaryBlue : '#515DEF',
        customRed : '#FF8682'
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'poppins' : ['Poppins']
    }
    },
  },
  plugins: [],
}

