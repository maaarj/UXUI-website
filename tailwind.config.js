module.exports = {
  content: ["./src/**/*.{html,js}",
            "./index.html"],
  theme: {
    /**/
    
    extend: {
      fontSize: {
        //mobile
        'mdisplay1': '2.5rem', // 40px
        'mh1': '2rem', // 32px
        'mh3': '1.375rem', // 22px
        'mdparagraph':'1.18rem', //19px
        'micon' : '1.5rem', //24px
        
        //tablet + desktop
        'dh1': '2.5rem', // 40px
        'ddisplay2': '2rem', // 32px
        'dh2': '2rem', // 32px
      },
      colors: {
        'white-smoke': '#F1F4F9',
        'denim': '#3A5B88',
        'elephant': '#1B3045',
        'regent-gray': '#8196AB'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
      }
      
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require('tailwind-scroll-behavior'),]
}
