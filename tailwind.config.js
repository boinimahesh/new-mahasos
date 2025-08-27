/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2A78FF',
        'secondary': '#FBBC05',
        'light-gray': '#F5F7FA',
        'white': '#FFFFFF',
        'black': '#000000',
        'dark': '#0F172A',
        'dark-gray': '#1E293B',
        'dark-secondary': '#192433',
      },
      spacing: {
        '7.5': '1.875rem',
        '11.5': '2.875rem',
        '12.5': '3.125rem',
        '13': '3.25rem',
        '15': '3.75rem',
        '17': '4.25rem',
        '17.5': '4.375rem',
        '18': '4.5rem',
        '21': '5.25rem',
        '22': '5.5rem',
        '23': '5.75rem',
        '25': '6.25rem',
        '26': '6.5rem',
        '27': '6.75rem',
        '29': '7.25rem',
        '30': '7.5rem',
        '31': '7.75rem',
        '33': '8.25rem',
        '34': '8.5rem',
        '35': '8.75rem',
        '45': '11.25rem',
        '46': '11.5rem',
        '46.5': '11.625rem',
      },
      fontFamily: {
        'heading': '"Arvo", serif',
        'body': '"Nunito Sans", sans-serif',
      },
      fontSize: {
        '28': '1.75rem',
        '40': '2.5rem',
        '52': '3rem',
        '56': '3.5rem',
        '68': '4.25rem',
      },
      lineHeight: {
        'full': '100%',
      },
      boxShadow: {
        'image': '0px 10px 30px 0px #0000001A',
        'card': '0px 2px 10px 0px #0000001A',
      },
      borderRadius: {
        '10': '0.625rem;',
        '30': '1.875rem',
      }
    },
  },
  plugins: [],
}

