/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#064ea4",
          deep: "#062a56",
          gold: "#f2b705",
          ink: "#102033",
          mist: "#eef5fb"
        }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(12, 34, 64, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
