/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
        '128': '32rem',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'text-muted': 'var(--text-muted)',
        border: 'var(--border)',
      },
      backgroundColor: {
        background: 'var(--background)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
      },
      textColor: {
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'text-muted': 'var(--text-muted)',
      },
      borderColor: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Inter', 'var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'slide-down': 'slideDown 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}; 