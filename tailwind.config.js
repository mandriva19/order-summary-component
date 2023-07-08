/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Red Hat Display', sans-serif;'"],
      },

      colors: {
        impBlue: {
          100: "hsl(224, 23%, 55%)",
          200: "hsl(225, 100%, 98%)",
          300: "hsl(225, 100%, 94%)",
          400: "hsl(245, 75%, 52%)",
          500: "hsl(223, 47%, 23%)",
        },
      },

      backgroundImage: {
        "mobile-pattern": "url('/images/pattern-background-mobile.svg')",
        "desktop-pattern": "url('/images/pattern-background-desktop.svg')",
      },
    },
  },
  plugins: [],
};
