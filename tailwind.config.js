/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': 'var(--primary-green)',
        'dark-green': 'var(--dark-green)',
        'light-green': 'var(--light-green)',
        'background': 'var(--background)',
        'text-color': 'var(--text-color)',
        'accent-blue': 'var(--accent-blue)',
        'accent-red': 'var(--accent-red)',
        'accent-yellow': 'var(--accent-yellow)',
        'project-card-bg': 'var(--project-card-bg)',
      },
    },
  },
  plugins: [],
}