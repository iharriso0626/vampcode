import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Site palette — keep these in sync with the CSS variables in globals.css
        ink: "#0C0004",
        blood: {
          DEFAULT: "#670A0D",
          light: "#B8474B",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
