/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black':'#000000',
        'header':{
'gray':'#757575'
        }
      },
      fontFamily:{
        'sans':'DM Sans,sans-serif',
        'alegreya':'Alegreya,sans-serif', 
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
