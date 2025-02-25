import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Ensures dark mode can be toggled manually
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral, // Custom neutral color
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans], // Extending instead of replacing
        stock: defaultTheme.fontFamily.sans,
      },
    },
  },
  plugins: [],
};

export default config;
