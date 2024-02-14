/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important: "#root", //Cau hinh thay doi style cua MUI 
  theme: {
    extend: {},
  },
  plugins: [],
}

