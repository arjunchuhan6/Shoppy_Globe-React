/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        ms: "400px",
        mm: "680px",
        xxl: "1536px"
      }
    },
  },
  plugins: [],
}