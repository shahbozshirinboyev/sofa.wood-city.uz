/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#34853D",
        lighterbg: "#fffef4",
        oranger: "#F0AF18",
        greener: "#34853D",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "0.5rem",
          lg: "0.7rem",
          xl: "1.5rem",
          "2xl": "1.5rem",
        },
      },
    },
    
  },
  plugins: [],
};