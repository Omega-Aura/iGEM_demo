/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // TRE-Pod Brand Colors
                'deep-blue': '#1A4D7A',
                'deep-blue-light': '#2563A8',
                'deep-blue-dark': '#0F3451',
                'vibrant-green': '#2ECC71',
                'vibrant-green-light': '#58D68D',
                'vibrant-green-dark': '#27AE60',
                'warm-orange': '#E67E22',
                'warm-orange-light': '#F39C12',
                'charcoal': '#2C3E50',
                'charcoal-light': '#34495E',
                'light-gray': '#ECF0F1',
                'medium-gray': '#BDC3C7',
                // Scientific visualization colors
                'atp-gold': '#F1C40F',
                'stasis-violet': '#8E44AD',
                'ribosome-cyan': '#00BCD4',
            },
            fontFamily: {
                'heading': ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
                'body': ['Open Sans', 'Roboto', 'system-ui', 'sans-serif'],
                'mono': ['Fira Code', 'Consolas', 'monospace'],
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
                'hero-gradient': 'linear-gradient(135deg, #1A4D7A 0%, #0F3451 50%, #8E44AD 100%)',
                'card-gradient': 'linear-gradient(180deg, rgba(26,77,122,0.05) 0%, rgba(46,204,113,0.05) 100%)',
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(26, 77, 122, 0.1), 0 2px 4px -1px rgba(26, 77, 122, 0.06)',
                'card-hover': '0 20px 25px -5px rgba(26, 77, 122, 0.1), 0 10px 10px -5px rgba(26, 77, 122, 0.04)',
            },
        },
    },
    plugins: [],
}
