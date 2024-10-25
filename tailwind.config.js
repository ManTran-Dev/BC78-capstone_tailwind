/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundColor: {
        brandname: "#FBFBFB",
        solid: "#EDF5FF",
      },
      backgroundImage: {
        Solid_UI: "url('./img/clean.jpg')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
