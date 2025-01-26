/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#f19509",
        primaryDark:"#e86f00",
        lightOrange:"#f1dabf",
        darkGray:"#1a1f25",
        lightGray:"#72c35",

      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"2rem"
        }
      }
    },
  },
  plugins: [],
}