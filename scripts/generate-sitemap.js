import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://dfwpristinepowerwashing.com';
const buildTime = new Date().toISOString();

// Derived from the page files so a new city page can never be missed.
// (This list was previously hand-maintained and had drifted: 31 city pages
// existed but only 15 were in the sitemap.)
const cityPagesDir = path.join(__dirname, '../client/src/pages/service-areas');
const cities = fs
  .readdirSync(cityPagesDir)
  .filter((f) => f.endsWith('.tsx') && f !== 'index.tsx')
  .map((f) => f.replace(/\.tsx$/, ''))
  .sort();

const services = [
  'pressure-washing', 'house-washing', 'roof-cleaning',
  'driveway-concrete-cleaning', 'delicate-stone-cleaning',
  'commercial-pressure-washing', 'window-cleaning'
];

// Per-stone pages under the delicate stone hub.
const stoneTypes = [
  'limestone', 'austin-stone', 'flagstone',
  'pennsylvania-stone', 'lueders-stone'
];

const routes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'service-areas', priority: '0.9', changefreq: 'weekly' },
  { path: 'gallery', priority: '0.7', changefreq: 'monthly' },
  
  ...stoneTypes.map(slug => ({
    path: `services/delicate-stone-cleaning/${slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  })),

  ...services.map(slug => ({
    path: `services/${slug}`,
    priority: '0.8',
    changefreq: 'monthly'
  })),
  
  ...cities.map(slug => ({
    path: `service-areas/${slug}`,
    priority: '0.7',
    changefreq: 'monthly'
  }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${SITE_URL}/${route.path}</loc>
    <lastmod>${buildTime}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, '../dist/public/sitemap.xml');
const outputDir = path.dirname(outputPath);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, sitemap);
console.log(`✓ Sitemap generated at ${outputPath}`);
console.log(`✓ Total URLs: ${routes.length}`);
