/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        custom: "#C9E6F0",
        primary: "#6366F1",
        secondary: "#EC4899",
        cta: "#10B981",
        lightBg: "#F9FAFB",
        darkBg: "#1E293B",
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
