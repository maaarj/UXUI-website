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
        'mdparagrap': '1.188rem', // 19px
        
        //tablet + desktop
        'dh1': '2.5rem', // 40px
        'ddisplay2': '2rem', // 32px

      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
