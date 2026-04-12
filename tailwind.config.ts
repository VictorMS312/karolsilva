import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "var(--color-cream)",
        "cream-2": "var(--color-cream-2)",
        rose: "var(--color-rose)",
        "rose-lt": "var(--color-rose-lt)",
        gold: "var(--color-gold)",
        dark: "var(--color-dark)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        display: "var(--font-display)",
      },
    },
  },
  plugins: [],
}

export default config
