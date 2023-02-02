/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        white: {
          100: "var(--white100)",
        },
        blue: {
          50: "var(--blue50)",
          200: "var(--blue200)",
          300: "var(--blue300)",
          400: "var(--blue400)",
        },
        purple: {
          50: "var(--purple50)",
          100: "var(--purple100)",
          200: "var(--purple200)",
        },
        green: {
          500: "var(--green500)",
          teal: "var(--tealGreen)",
        },
        brown: {
          100: "var(--brown100)",
        },
        red: {
          100: "var(--red100)",
          500: "var(--red500)",
        },
        grey: {
          500: "var(--grey500)",
          800: "var(--grey800)",
          900: "var(--grey900)",
        },
        orange: {
          50: "var(--orange50)",
          100: "var(--orange100)",
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
