/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

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
        priBlack: "hsl(var(--pri-black))",
        grayBg: "hsl(var(--gray-bg))",
        grayDivider: "hsl(var(--gray-divider))",
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
      animation: {
        "slide-up": "slide-up .7s",
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(0%)",
            opacity: 0,
          },
          "100%": { transform: "translateY(-100%)", opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
