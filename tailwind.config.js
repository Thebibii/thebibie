/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        glock: ["var(--font-glock)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#034C42",
        secondary: "#8FDCC2",
        foreground: "#4C6763",
        foregroundDark: "#98A0AC",
        card: "#F4EEE6",
        cardHover: "#F5EEE4",
        cardTitle: "#025A4E",
      },
    },
  },
  plugins: [],
};
