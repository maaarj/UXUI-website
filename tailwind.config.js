module.exports = {
  content: ["./src/**/*.{html,js}"],
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
      
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")]
}
