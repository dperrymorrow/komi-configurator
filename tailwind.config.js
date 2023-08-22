const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", ...defaultTheme.fontFamily.sans],
        sans: ["Karla", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
