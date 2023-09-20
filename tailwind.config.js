/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      mls: "1360px",
      xxl: "1440px",
    },

    extend: {
      colors: {
        blue: "#3470FF",
        active_blue: "#0B44CD",
        gray: "#EBEBEB",
        gray_text: "#989898",
        black_gray: "#393939",
      },
    },
  },
  plugins: [],
};
