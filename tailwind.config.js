const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxs: { min: "320px", max: "374px" },
      xs: { min: "374px", max: "427px" },
      ...defaultTheme.screens,
      "2xl": { min: "2560px" },
    },
    fontFamily: {
      "dm-sans": ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      height: {
        600: "30rem",
        700: "40rem",
        800: "48rem",
        900: "55rem",
        1000: "70rem",
      },
      width: {
        400: "25rem",
        500: "30rem",
        550: "32rem",
        600: "36rem",
        700: "40rem",
        800: "48rem",
        900: "55rem",
        1000: "65rem",
      },
      // backgroundImage: {
      //   "purple-bg": "url('../images/purpleBackground.svg')",
      // },
      colors: {
        lightBlue: "rgba(17, 70, 143, 0.04)",
        darkBlue: "#11468F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
