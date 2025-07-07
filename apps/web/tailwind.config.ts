import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        '../../packages/ui/**/*.{ts,tsx}',
    ],
    darkMode: 'class', 
    theme: {
        extend: {},
    },
    plugins: [],
};

export default config;