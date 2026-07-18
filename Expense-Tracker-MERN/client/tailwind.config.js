export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        glow: '0 30px 80px rgba(67, 56, 202, 0.14)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(99,102,241,0.18), transparent 22%), radial-gradient(circle at bottom right, rgba(139,92,246,0.14), transparent 18%)',
      },
      colors: {
        surface: '#f8fbff',
      },
    },
  },
  plugins: [],
};
