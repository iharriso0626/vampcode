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
      keyframes: {
        // Content is rendered twice back to back (see Hero.tsx), so scrolling
        // exactly half the track loops seamlessly.
        reel: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
      },
      animation: {
        reel: "reel 32s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
