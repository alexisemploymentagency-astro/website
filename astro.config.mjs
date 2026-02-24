import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // THIS IS THE MAGIC SWITCH!
  adapter: netlify(),
  integrations: [tailwind()],
});