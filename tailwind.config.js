/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        RobotoSlab: ["Roboto Slab", "serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#122B39",

          secondary: "#44AAA0",

          accent: "#a16207",

          neutral: "#0B101D",

          "base-100": "#0F172A",

          info: "#0071cc",

          success: "#15803d",

          warning: "#fcd34d",

          error: "#b91c1c",
        },
      },
    ],
  },
};
