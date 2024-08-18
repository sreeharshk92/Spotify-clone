/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}",],
  theme: {
    extend: { 
      colors:{
        customColor:'#111111',
        yellowColor:'#FFB400'
        
      },
      backgroundImage: { 
                        'home-pic': "url('Components/Home/homepic.jpg')",
                       },
            },
           
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
        },
      });
    },
  ],
 
}

