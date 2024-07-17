/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
<<<<<<< HEAD
    extend: { colors: {
      texto: '#000',
      // secunrdario: '#f9f3ad',
      secunrdario: '#f47ab7',
      primario: '#fff'
    },
    fontFamily: {
      titulo: ['"Great Vibes"', 'cursive'],
      texto: ['"Gelasio"', 'serif'],
      textoAbout: ['"Parisienne"', 'cursive'],
    }},
   
=======
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
>>>>>>> 79ad91fa18acd86e7a8f935f5988c91ead82f864
  },
  plugins: [],
};
