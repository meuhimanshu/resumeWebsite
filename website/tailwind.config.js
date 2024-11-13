/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "./blogs/blogs.html"],
  theme: {
    extend: {
      colors:{
        'bgColour': '#1a151e',
        'primaryColour': '#a57ec6',
        'secondryColour': '#767279'
      },
      fontFamily: {
        'sfpro': ['SF Pro Display','sans-serif'],
        'sfprotext':['SF Pro Text','sans-serif'],
        'poppins': ['Poppins','sans-serif']
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(10px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
      }, 
    },
  },
  plugins: [require('tailwindcss-motion')],
}

