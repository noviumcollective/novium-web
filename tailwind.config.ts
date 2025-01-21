import type { Config } from "tailwindcss";
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/hero.png')",
        "angular-gradient-lg":
          "conic-gradient(from 180deg at 50% 61%, #556F32 0%, #F9F8F8 100%)",
        "angular-gradient-sm":
          "conic-gradient(from 180deg at 50% 55%, #556F32 0%, #F9F8F8 100%)",
      },
      colors: {
        // novium brand colors
        "novium-green": "#A3D55F",
        "novium-light-green": "#ECFAD9",
        "novium-dark-green": "#3A5743",
        "novium-secondary": "#6A8EAE",

        // state colors
        "info-state": "#2F80ED",
        "success-state": "#27AE60",
        "warning-state": "#E2B93B",
        "error-state": "#EB5757",

        // neutral colors
        "novium-gray": "#4F4F4F",
        "novium-light-gray": "#C4C4C4",
        "novium-white": "#FCFCFC",

        // novium bg color
        "novium-bg": "#F9F8F8",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        "n-8": "8px",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
