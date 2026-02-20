/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          brand: {
            cream: '#FCFAF5', 
            blue: '#1E3A8A',  
            red: '#E11D48',   
            text: '#111827', // Deepened slightly for richer contrast
          }
        },
        fontFamily: {
          sans: ['"DM Sans"', 'system-ui', 'sans-serif'], 
          serif: ['"Playfair Display"', 'Georgia', 'serif'], // New premium heading font
        },
        boxShadow: {
          'premium': '0 10px 40px -10px rgba(30,58,138,0.08)', // Soft navy shadow
          'premium-hover': '0 20px 40px -10px rgba(30,58,138,0.12)',
        }
      },
    },
    plugins: [],
  }