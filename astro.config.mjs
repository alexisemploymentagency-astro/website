import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap'; // <-- 1. Imported the sitemap plugin

// The server checks if it's currently running on Netlify's live servers
const isNetlifyLive = process.env.NETLIFY === 'true';

export default defineConfig({
  // 2. CRITICAL FOR SITEMAP: Google needs to know your exact live domain!
  site: 'https://www.alexisemployment.com', // <-- Change this to your exact live domain if it is different
  
  output: 'server', // THIS IS THE MAGIC SWITCH!
  
  // THE SMART ADAPTER: 
  // If true -> use Netlify. If false (StackBlitz) -> use Node!
  adapter: isNetlifyLive ? netlify() : node({ mode: 'standalone' }),
  
  integrations: [
    tailwind(),
    sitemap() // <-- 3. Activated the sitemap integration
  ],
});