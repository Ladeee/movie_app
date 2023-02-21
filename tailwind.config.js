/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        white: {
          50: "var(--white50)",
          100: "var(--white100)",
        },
        blue: {
          50: "var(--blue50)",
          100: "var(--blue100)",
          200: "var(--blue200)",
          300: "var(--blue300)",
          400: "var(--blue400)",
          pillBg: "var(--pillBGBlue)",
          pillColor: "var(--pillBlueColor)",
        },
        purple: {
          50: "var(--purple50)",
          100: "var(--purple100)",
          200: "var(--purple200)",
          300: "var(--purple300)",
        },
        green: {
          100: "var(--green100)",
          300: "var(--green300)",
          500: "var(--green500)",
          700: "var(--green700)",
          900: "var(--green900)",
          teal: "var(--tealGreen)",
        },
        brown: {
          100: "var(--brown100)",
        },
        yellow: {
          100: "var(--yellow100)",
          400: "var(--yellow400)",
          900: "var(--yellow900)",
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
        ash: {
          50: "var(--ash50)",
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
