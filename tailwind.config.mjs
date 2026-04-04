/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary colors
        primary: {
          dark: '#0f3a7d',
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        secondary: {
          DEFAULT: '#7c3aed',
          light: '#a78bfa',
        },
        // Accent colors
        accent: {
          red: '#a4161a',
          amber: '#f59e0b',
          green: '#10b981',
        },
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        mono: ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
};
