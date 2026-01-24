/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Festival Theme Colors - Playful Tech-Festival Vibes
                'primary': '#00D4AA',           // Vibrant cyan/teal
                'primary-light': '#33DDBB',
                'primary-dark': '#00B899',
                'primary-text': '#0a0a0a',

                'secondary': '#1a1a1a',         // Dark charcoal for headers
                'secondary-light': '#2d2d2d',
                'secondary-dark': '#0f0f0f',
                'secondary-text': '#ffffff',

                'accent': '#FFF5F0',            // Soft peach/cream background
                'accent-dark': '#FFE8DC',
                'accent-text': '#9B5DE5',       // Purple accent

                // Additional Festival Colors
                'pastel-pink': '#FFE5E5',
                'pastel-purple': '#E8D5FF',
                'pastel-mint': '#D5F5F0',
                'pastel-peach': '#FFECD9',
                'festival-yellow': '#FFE66D',
                'festival-coral': '#FF6B6B',
                'festival-violet': '#9B5DE5',
                'festival-lime': '#BFFF00',
            },
            fontFamily: {
                'sans': ['DM Sans', 'sans-serif'],
                'serif': ['Lora', 'serif'],
                'mono': ['Inconsolata', 'monospace'],
                'heading': ['Space Grotesk', 'sans-serif'],
                'body': ['DM Sans', 'sans-serif'],
                'display': ['Space Grotesk', 'sans-serif'],
            },
            fontSize: {
                'h1': ['3rem', { lineHeight: '3.25rem', fontWeight: '700', letterSpacing: '-0.02em' }],
                'h2': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700', letterSpacing: '-0.01em' }],
                'h3': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
                'display': ['4rem', { lineHeight: '4.25rem', fontWeight: '800', letterSpacing: '-0.03em' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderWidth: {
                '3': '3px',
                '4': '4px',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient': 'gradient 8s ease infinite',
                'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
                'wiggle': 'wiggle 1s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
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
                bounceSubtle: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(0, 212, 170, 0.5), 0 0 10px rgba(0, 212, 170, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(0, 212, 170, 0.8), 0 0 30px rgba(0, 212, 170, 0.5)' },
                },
            },
            backgroundImage: {
                'hero-gradient': '#FFF5F0',
                'card-gradient': 'rgba(155,93,229,0.05)',
                'festival-gradient': '#00D4AA',
                'pastel-gradient': '#FFF5F0',
            },
            boxShadow: {
                'card': '0 4px 6px -1px rgba(155, 93, 229, 0.1), 0 2px 4px -1px rgba(155, 93, 229, 0.06)',
                'card-hover': '0 20px 25px -5px rgba(155, 93, 229, 0.15), 0 10px 10px -5px rgba(155, 93, 229, 0.08)',
                'festival': '0 10px 40px -10px rgba(0, 212, 170, 0.3)',
                'glow-primary': '0 0 20px rgba(0, 212, 170, 0.4)',
                'glow-accent': '0 0 20px rgba(155, 93, 229, 0.4)',
            },
        },
    },
    plugins: [],
}
