/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "440px",
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
    },
  },
  plugins: [],
};
