import type { Config } from "tailwindcss";

export default {
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
      },
      fontFamily: {
        dream: ["var(--font-dream)"],
        "open-sans": ["var(--font-open-sans)"],
        "tan-mon-cheri": ["var(--font-tan-mon-cheri)"],
        drugs: ["var(--font-drugs)"],
        poppins: ["var(--font-poppins)"],
        lazord: ["var(--font-lazord)"],
        cinzel: ["var(--font-cinzel)"],
        opensauce: ["var(--font-opensauce)"],
        helvetica: ["var(--font-helvetica)"],
        perandory: ["var(--font-perandory)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
