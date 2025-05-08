/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3A4B',     // Deep navy for professionalism
        secondary: '#4F5D75',   // Soft navy for secondary elements
        dark: '#1A202C',        // Dark gray for text
        light: '#F7FAFC',       // Clean off-white for backgrounds
        accent: '#667EEA',      // Gentle blue for highlights
        success: '#48BB78',     // Professional green
        mine: '#17181d', // Darker gray for backgrounds
        gray: {
          100: '#EDF2F7',
          200: '#E2E8F0',
          300: '#CBD5E0',
          400: '#A0AEC0',
          500: '#718096',
          600: '#4A5568',
          700: '#2D3748',
          800: '#1A202C',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}