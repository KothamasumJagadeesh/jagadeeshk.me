module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "theme-green": "#3CCF91",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        mustardo: ["Mustardo", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1200px",
          xl: "1440px",
          "2xl": "1024px",
        },
      },
    },
  },
  plugins: [],
};
