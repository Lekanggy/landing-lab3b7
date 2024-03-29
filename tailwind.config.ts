import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-img": "url('/hero.png')",
      },
      padding:{
        "4.5": "20px, 56px",
        "5.5": "33px 40px"
      },
      boxShadow:{
        "ml": " 1px 2px 2px -1px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
