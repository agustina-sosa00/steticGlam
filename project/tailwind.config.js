/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        texto: "#000",
        rosa: "#f47ab7",
        primario: "#fff",
      },

      fontFamily: {
        titulo: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
