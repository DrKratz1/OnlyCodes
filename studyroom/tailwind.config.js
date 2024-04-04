/** @type {import('tailwindcss').Config} */
export default {
  content: ["./templates/index.html", "./src/**/*.{jsx,js}"],
  darkmode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
}
