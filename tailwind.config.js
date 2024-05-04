/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-0': '#000',
        'dark-1': '#101552',
        'contrast': '#E8883F',
        'ligth-1': '#97D3CB',
        'ligth-2': '#FECE8C',
        'ligth-0': '#FFF',
      },
    },
  },
  plugins: [],
}

