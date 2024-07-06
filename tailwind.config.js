/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        lightGrayishViolet: "hsl(270, 3%, 87%)",
        darkGrayishViolet: "hsl(279, 6%, 55%)",
        veryDarkViolet: "hsl(278, 68%, 11%)",
        inputActive: "hsl(249, 99%, 64%)",
        inputFocus: "hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};
