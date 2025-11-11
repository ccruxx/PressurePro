import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://dfwpristine.com';
const buildTime = new Date().toISOString();

const cities = [
  'midlothian-tx', 'waxahachie-tx', 'cedar-hill-tx', 'mansfield-tx',
  'red-oak-tx', 'ovilla-tx', 'venus-tx', 'arlington-tx',
  'grand-prairie-tx', 'irving-tx', 'dallas-tx', 'fort-worth-tx',
  'burleson-tx', 'desoto-tx', 'ennis-tx'
];

const services = [
  'pressure-washing', 'house-washing', 'roof-cleaning',
  'driveway-concrete-cleaning', 'commercial-pressure-washing', 'window-cleaning'
];

const routes = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'services', priority: '0.9', changefreq: 'weekly' },
  { path: 'service-areas', priority: '0.9', changefreq: 'weekly' },
  
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
