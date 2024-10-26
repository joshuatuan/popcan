/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Segoe UI",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Open Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
    },
    extend: {
      colors: {
        primary: {
          100: "#d9c9ff",
          200: "#b49de6",
          300: "#8f71cc",
          400: "#8a54ff",
          500: "#6741d9",
        },
        primaryLight: "#7950f2",
        text: "#dee2e6",
        textDark: "#adb5bd",
        background: {
          100: "#3a3f44",
          300: "#343a40",
          500: "#2b3035",
          700: "#25282d",
          900: "#212529",
        },
        red: "#fa5252",
        redDark: "#e03131",
      },
    },
  },
  plugins: [],
};
