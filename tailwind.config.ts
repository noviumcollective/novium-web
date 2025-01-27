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
            fontFamily: {
                sans: ["Exo", "sans-serif"],
                mono: ["Courier", "monospace"],
            },
            backgroundImage: {
                hero: "url('/backgrounds/hero.png')",
                services: "url('/backgrounds/services.png')",
                grid: "url('/backgrounds/grid.svg')",
                "novium-conic-gradient":
                    "conic-gradient(from 180deg at 50% 44.39%, #556F32 0deg, #F9F8F8 360deg)",
            },
            colors: {
                // novium brand colors
                "novium-green": "#A3D55F",
                "novium-light-green": "#ECFAD9",
                "novium-dark-green": "#3A5743",
                "novium-secondary": "#6A8EAE",
                "novium-primary": "#092C4C",

        // state colors
        "info-state": "#2F80ED",
        "success-state": "#27AE60",
        "warning-state": "#E2B93B",
        "error-state": "#EB5757",

                // neutral colors
                "novium-gray": "#4F4F4F",
                "novium-light-gray": "#C4C4C4",
                "novium-white": "#FCFCFC",
                "novium-text": "#2B2D2F",

                // novium bg color
                "novium-bg": "#F9F8F8",

                // product building section colors
                "p-blue": "#60A5FA",
                "p-orange": "#FB923C",
                "p-purple": "#C084FC",
                "p-yellow": "#FACC15",
                "p-indigo": "#818CF8",
                "p-teal": "#2DD4BF",
                "p-red": "#F87171",
                "p-sky": "#38BDF8",
                "p-green": "#4ADE80",

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
