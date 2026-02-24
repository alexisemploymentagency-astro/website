/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          snow: '#F1F2EC',   // Thawd snow (Global Base)
          frost: '#EDF3F3',  // Frostie (Cool accent if needed)
          sand: '#EDE3D9',   // Sand Dust (Selection Highlight)
          cream: '#EDE3D9',  // Mapped Sand Dust to your existing UI cards
          blue: '#1e293b',   
          text: '#0f172a',   
          red: '#991b1b',
        }
      },
      // ... existing shadows
    },
  },
  plugins: [],
}