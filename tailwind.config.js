/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#AD1FEA",
      pink: "#E91E63",
      blue: "#4661E6",
      red: "#EF5350",
      midnight: "#4661E6",
      white: "#FFFFFF",
      gray: "#F2F4FF",
      lightGray: "#F7F8FD",
      midnightBlue: "#3A4374",
      darkGray: "#647196",
      brown: "#F49F85",
      lightBlue: "#62BCFA",
      zinc: "#F5F5F5",
      grey: "#F3F4F6",
    },
    fontSize: {
      xs: ["13px", { lineHeight: "19px" }],
      sm: ["15px", { lineHeight: "22px" }],
      md: ["16px", { lineHeight: "23px" }],
      base: ["14px", { lineHeight: "20px", letterSpacing: "-0.02em" }],
      lg: ["18px", { lineHeight: "26px", letterSpacing: "-0.025em" }],
      xl: ["20px", { lineHeight: "29px", letterSpacing: "-0.025em" }],
      "2xl": ["24px", { lineHeight: "35px", letterSpacing: "`-0.033em" }],
    },
    fontFamily: {
      jost: ["Jost", "serif"],
    },
    fontWeight: {
      regular: "400", // Regular weight
      semibold: "600", // Semibold weight
      bold: "700", // Bold weight
    },
    extend: {},
  },
  plugins: [],
};
