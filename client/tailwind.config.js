/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "375px",
      },
      container: { center: true },
      colors: {
        "shop-blue-dark": "#0C1C68",
        "shop-blue-light": "#40399F",
        "shop-green-dark": "#1FB94D",
        "shop-green-light": "#7CD273",
        "shop-gray-dark": "#6C7278",
        "shop-gray-border": "#DED7D7",
        "shop-gray-light": "#BCB7B7",
        "shop-bg-gray-light": "#F2EFEF",
        "shop-bg-gray": "#F2F1F1",
        "shop-bg-rose": "#F9D6D8",
        "shop-bg-footer": "#1D2835",
        "shop-bg-magenta": "#F6D3F4",
        "shop-bg-green": "#BEDEC0",
        "shop-orange": "#FC7F01",
      },
    },
  },
  plugins: [],
};
