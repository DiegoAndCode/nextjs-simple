import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern:
        /from-(red|yellow|green|purple|blue)-(100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /to-(red|yellow|green|purple|blue)-(100|200|300|400|500|600|700|800|900)/,
    },
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
