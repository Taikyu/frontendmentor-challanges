/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // sm: "375px",
      sm: "520px",
    },
    fontWeight: {
      semiBold: "600",
    },
    extend: {
      backgroundImage: {
        sideBackground: "url('./src/assets/images/bg-sidebar-desktop.svg')",
        mobileBackground: "url('./src/assets/images/bg-sidebar-mobile.svg')",
      },
      colors: {
        purplishBlue: "hsl(243, 100%, 62%)",
        marineBlue: "hsl(213, 96%, 18%)",
        pastelBlue: "hsl(228, 100%, 84%)",
        lightBlue: "hsl(206, 94%, 87%)",
        strawberryRed: "hsl(354, 84%, 57%)",
        coolGray: "hsl(231, 11%, 63%)",
        lightGray: "hsl(229, 24%, 87%)",
        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
      },
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
    },
  },
  plugins: [],
};
