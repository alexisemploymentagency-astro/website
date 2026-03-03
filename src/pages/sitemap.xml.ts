// src/pages/sitemap.xml.ts
import { supabase } from '../lib/supabase';

export async function GET() {
  // 1. Define your live domain
  const baseUrl = 'https://www.alexisemployment.com';

  // 2. Fetch all helper reference codes directly from Supabase
  const { data: helpers, error } = await supabase
    .from('helpers')
    .select('reference_code');

  if (error) {
    console.error("Sitemap generation error:", error);
  }

  // 3. Define your static core pages
  const staticPages = [
    '',              // The Homepage
    '/directory',    // The Directory
    '/login'         // The Login Page
  ];

  // 4. Start building the XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // 5. Inject Static Pages
  staticPages.forEach((page) => {
    xml += `  <url>\n`;
    xml += `    <loc>${baseUrl}${page}</loc>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // 6. Inject every single Helper Profile dynamically!
  if (helpers) {
    helpers.forEach((helper) => {
      xml += `  <url>\n`;
      xml += `    <loc>${baseUrl}/profile/${helper.reference_code}</loc>\n`;
      xml += `    <changefreq>weekly</changefreq>\n`;
      xml += `    <priority>0.6</priority>\n`;
      xml += `  </url>\n`;
    });
  }

  xml += `</urlset>`;

  // 7. Return the XML file to Google
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}