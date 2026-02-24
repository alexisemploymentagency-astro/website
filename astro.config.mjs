import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import netlify from '@astrojs/netlify';

// The server checks if it's currently running on Netlify's live servers
const isNetlifyLive = process.env.NETLIFY === 'true';

export default defineConfig({
  output: 'server', // THIS IS THE MAGIC SWITCH!
  
  // THE SMART ADAPTER: 
  // If true -> use Netlify. If false (StackBlitz) -> use Node!
  adapter: isNetlifyLive ? netlify() : node({ mode: 'standalone' }),
  
  integrations: [tailwind()],
});