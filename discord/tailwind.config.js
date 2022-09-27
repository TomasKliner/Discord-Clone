/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,svg}",
    "./src/*.{js,jsx,ts,tsx,svg}",
    "./public/**/*.{js,jsx,ts,tsx,svg}",
    "./public/*.{js,jsx,ts,tsx,svg}",
  ],
  theme: {
    extend: {      
 colors: {
      transparent: 'transparent',
      discord:{
        white:'#4ffffff',
        blue: '#7289da',
        600:'#424549',
        700:'#36393e',
        800:'#282b30',
        900:'#1e2124',
      },
      //comment this part out and do it propperly
      neutral:{
       600:'#424549',
        700:'#36393e',
        800:'#282b30',
        900:'#1e2124',
      }
    },
    },
  },
  plugins: [],
}
