import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-700": "#001119",
        "dark-800": "#0D161B",
        "tomato-500": "#750310",
        "dark-900": "#0D1D25",
        "light-100": "#fff",
        "light-400": "#C4C4CC",
        "light-500": "#7C7C8A",
      },
    },
  },
  plugins: [],
};
export default config;
