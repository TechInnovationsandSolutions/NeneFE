/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./section/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        header: {
          gray: "#757575",
        },
        lightPink: "hsl(var(--lightPink))",
        lightGray: "hsl(var(--lightGray))",
        medGray: "var(--medGray)",
      },
      fontFamily: {
        sans: "DM Sans,sans-serif",
        alegreya: "Alegreya,sans-serif",
        rouge: ["var(--font-rouge)"],
      },
      fontSize: {
        x2Large: "var(--fs-xxl)",
        xLarge: "var(--fs-xl)",
        large: "var(--fs-lg)",
        medium: "var(--fs-md)",
        normal: "var(--fs)",
        small: "var(--fs-sm)",
        xSmall: "var(--fs-xs)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
