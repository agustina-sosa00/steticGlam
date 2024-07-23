/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
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
   
  },
  plugins: [],
};
