/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-1": "rgb(28, 27, 27)",
        "custom-dark-2": "rgb(26, 23, 23)",
      },
    },
  },
  plugins: [],
};
