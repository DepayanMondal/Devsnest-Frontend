module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "big-clouds": "url('./assets/clouds-unsplash.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
