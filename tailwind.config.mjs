/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                "brand": {
                    "primary": "#ff3b3b",
                    "dark": "#0c0c0c",
                    "card": "#171717",
                    "muted": "#a3a3a3",
                    "border": "#262626"
                },
                // Retaining old names just in case, but using brand for new design
                "primary": "#0a60c2", // Solid Blue
                "accent": "#10b981",  // Emeral Green
                "background-light": "#f8fafc", // Pastel White/Gray
                "warning-amber": "#f59e0b",
                "danger-red": "#ef4444",
                "soft-blue": "#e0e7ff",
                "neutral-gray": "#64748b"
            },
            fontFamily: {
                "display": ["Manrope", "Nunito Sans", "sans-serif"],
                "accent": ["Varela Round", "sans-serif"]
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            }
        },
    },
    plugins: [],
};
