/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1E90FF',
        footerColor: '#232323',
      },
      screens: {
        'sm': '50px',
        'md': '600px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/techbg2.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
        'custom-gradient': 'linear-gradient(360deg, rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80))',
      }
      
    },
    
  },
  plugins: [],
}

