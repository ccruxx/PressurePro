import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SITE_URL, SITEMAP_ROUTES } from './routes.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildTime = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_ROUTES.map(route => `  <url>
    <loc>${SITE_URL}/${route.path}</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../dist/public/sitemap.xml');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, sitemap);
console.log(`✓ Sitemap generated at ${outputPath}`);
console.log(`✓ Total URLs: ${SITEMAP_ROUTES.length}`);
