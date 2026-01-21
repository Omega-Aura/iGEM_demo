/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // TRE-Pod Brand Colors - New Palette
                'primary': '#059467',
                'primary-light': '#06b07a',
                'primary-dark': '#047a55',
                'primary-text': '#e8fcf3',
                'secondary': '#525252',
                'secondary-light': '#6b6b6b',
                'secondary-dark': '#3d3d3d',
                'secondary-text': '#fafafa',
                'accent': '#edfdf9',
                'accent-dark': '#d4f7ef',
                'accent-text': '#14b8a5',
            },
            fontFamily: {
                'sans': ['Work Sans', 'sans-serif'],
                'serif': ['Lora', 'serif'],
                'mono': ['Inconsolata', 'monospace'],
                'heading': ['Work Sans', 'sans-serif'],
                'body': ['Work Sans', 'sans-serif'],
            },
            fontSize: {
                'h1': ['2.25rem', { lineHeight: '2.5rem', fontWeight: '700' }],
                'h2': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '600' }],
                'h3': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '600' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s ease infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradient: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
            backgroundImage: {
                'hero-gradient': 'linear-gradient(135deg, #059467 0%, #047a55 50%, #14b8a5 100%)',
                'card-gradient': 'linear-gradient(180deg, rgba(5,148,103,0.05) 0%, rgba(20,184,165,0.05) 100%)',
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(5, 148, 103, 0.1), 0 2px 4px -1px rgba(5, 148, 103, 0.06)',
                'card-hover': '0 20px 25px -5px rgba(5, 148, 103, 0.1), 0 10px 10px -5px rgba(5, 148, 103, 0.04)',
            },
        },
    },
    plugins: [],
}
