import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: 'class', // Enable dark mode with class strategy
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3953D4', // Ocean blue (cyan-600)
                'primary-dark': '#0E7490', // Darker ocean blue (cyan-700)
                'primary-light': '#BFE8FB', // Lighter ocean blue (cyan-500)
                secondary: '#7C3AED',
                'secondary-dark': '#6D28D9',
                'secondary-light': '#8B5CF6',
                accent: '#F59E0B',
                'accent-dark': '#D97706',
                'accent-light': '#FBBF24',
                'text-main': '#1E293B',
                'text-secondary': '#475569',
                'text-light': '#64748B',
                'text-muted': '#94A3B8',
            },
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Be Vietnam Pro', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-dark': 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)',
                'gradient-primary': 'linear-gradient(135deg, #0EA5E9 0%, #7C3AED 100%)',
                'gradient-accent': 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
            },
        },
    },
    plugins: [typography],
};

export default config;
