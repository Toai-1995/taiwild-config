/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/w3school.html", "./src/index.html", "./src/index.js"],
  theme: {
    extend: {
      spacing: {
        25: "6.25rem",
      },
      colors: {
        gray21: "rgb(21,32,43)",
        upgrade: "#9763f6",
        upgradehover: "#7d53cc",
        certyfield: "#FFC0C7",
        certyfieldhover: "#ffb3bb",
        creatwebsite: "#FFF4A3",
        cretehover: "#fff080",
        signup: "#04AA6D",
        signuphover: "#059862",
        login: "#D9EEE1",
        loginhover: "#059862",
      },
      fontFamily: { body: ["Source Sans Pro", "sans - serif"] },
    },
  },
  plugins: [],
};
