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
      transitionProperty: {
        'padding': 'padding',
      },
      colors: {
        "white-100": "#f5f5f5",
        "white-300": "#e6e6e6",
        "white-400": "#d9d9d9",
        "white-500": "#cccccc",
        "white-600": "#b3b3b3",
        "white-700": "#999999",
        "black-100": "#100107",
        "black-500": "#1a1a1a",
        "black-550": "#262626",
        "black-600": "#333333",
        "black-700": "#4d4d4d",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
