/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#e8f4fd',
                    100: '#d1e9fb',
                    200: '#a3d3f7',
                    300: '#4da2e8',
                    400: '#0077ed',
                    500: '#0071e3',
                    600: '#0066cc',
                    700: '#0055aa',
                    800: '#004488',
                    900: '#003366',
                },
                gray: {
                    50: '#f5f5f7',
                    100: '#e8e8ed',
                    200: '#d2d2d7',
                    300: '#b0b0b5',
                    400: '#86868b',
                    500: '#6e6e73',
                    600: '#515154',
                    700: '#424245',
                    800: '#1d1d1f',
                    900: '#000000',
                },
                accent: {
                    50: '#fff9f0',
                    100: '#fff3e0',
                    200: '#ffe7c2',
                    300: '#ffd699',
                    400: '#ffc266',
                    500: '#ff9500',
                    600: '#e68600',
                    700: '#cc7700',
                    800: '#b36800',
                    900: '#995900',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(14, 165, 233, 0.5), 0 0 10px rgba(14, 165, 233, 0.3)' },
                    '100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.8), 0 0 30px rgba(14, 165, 233, 0.4)' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
