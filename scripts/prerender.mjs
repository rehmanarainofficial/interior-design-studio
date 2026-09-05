import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FITTING_CATEGORIES, SOLUTIONS_DATA } from '../src/data/productsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Dist directory does not exist. Run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

// List of all 44 routes to prerender
const routes = [
  {
    path: '/',
    title: 'Interior Design Studio | Luxury Flooring & Turnkey Fitting Contractor Karachi',
    description: "Interior Design Studio is Pakistan's premier turnkey flooring & interior fitting contractor in Karachi. Specializing in SPC wood flooring, vinyl sheets, fluted wall panels, motorized roller blinds & gypsum false ceilings across Karachi.",
    keywords: 'interior design studio karachi, flooring contractor near me, spc flooring fitting karachi, vinyl flooring karachi, fluted wall panel contractor, roller blinds supplier karachi, interior designer near me'
  },
  {
    path: '/about',
    title: 'About Us & Turnkey Fitting Legacy | Interior Design Studio Karachi',
    description: "Learn about Pakistan's premier interior execution contractor. 7+ years on-site experience, 500+ completed projects, and 100% water & termite proofing guarantee in Karachi.",
    keywords: 'about interior design studio, why choose interior design studio, flooring contractor legacy karachi'
  },
  {
    path: '/services',
    title: 'Turnkey Supply & Installation Services Karachi | Interior Design Studio',
    description: 'Explore our complete interior fitting & installation services in Karachi. Master craftsmen executing SPC flooring, vinyl sheets, wall panels, roller blinds, furniture, and false ceilings.',
    keywords: 'turnkey fitting services karachi, spc flooring installation near me, vinyl sheet fitting, roller blinds installation karachi'
  },
  {
    path: '/projects',
    title: 'Executed Contractor Projects & Portfolio | Interior Design Studio Karachi',
    description: 'Explore our completed luxury residential, corporate, healthcare, and commercial turnkey fitting projects across Karachi.',
    keywords: 'interior design projects karachi, flooring projects portfolio, completed commercial fits karachi'
  },
  {
    path: '/contact',
    title: 'Contact Us & Book Free Site Survey Karachi | Interior Design Studio',
    description: 'Book a free on-site measurement & material catalog survey in Karachi. Call or WhatsApp +92 310 2321899. Main showroom at Shamim Sky Tower, Yaseenabad, Karachi.',
    keywords: 'contact interior design studio karachi, flooring survey karachi, visit showroom yaseenabad'
  }
];

// Add Category Hubs
FITTING_CATEGORIES.forEach(cat => {
  routes.push({
    path: `/category/${cat.id}`,
    title: `${cat.name} Supply & Installation Contractor Karachi | Interior Design Studio`,
    description: `Turnkey ${cat.name} contractor in Karachi. ${cat.description} Free site measurement & sample catalog across Karachi.`,
    keywords: `${cat.name} karachi, ${cat.name} installation karachi, buy ${cat.name} karachi, turnkey ${cat.name} contractor`
  });

  // Add all products in this category
  cat.items.forEach(item => {
    const detail = SOLUTIONS_DATA[item.id] || {};
    routes.push({
      path: `/products/${item.id}`,
      title: `${detail.title || item.name} in Karachi | Interior Design Studio`,
      description: `${detail.subtitle || detail.description || 'Turnkey material supply + expert installation in Karachi.'} 100% water & termite proofing guarantee.`,
      keywords: `${item.name} karachi, ${cat.name} contractor karachi, buy ${item.name} karachi, best flooring contractor near me`
    });
  });
});

console.log(`🚀 Starting static SEO pre-rendering for ${routes.length} routes...`);

routes.forEach(route => {
  let html = templateHtml;

  // Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${route.title}</title>`);
  
  // Replace meta title
  html = html.replace(/<meta\s+name="title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="title" content="${route.title}" />`);

  // Replace meta description
  html = html.replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="description" content="${route.description}" />`);

  // Replace meta keywords
  html = html.replace(/<meta\s+name="keywords"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="keywords" content="${route.keywords}" />`);

  // Replace canonical URL
  const canonicalUrl = `https://interiordesignstudiopk.com${route.path === '/' ? '' : route.path}`;
  html = html.replace(/<link\s+rel="canonical"\s+href="[\s\S]*?"\s*\/?>/i, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Replace OpenGraph Title & Description & URL
  html = html.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta\s+property="og:url"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:url" content="${canonicalUrl}" />`);

  // Replace Twitter Title & Description
  html = html.replace(/<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${route.description}" />`);

  if (route.path === '/') {
    fs.writeFileSync(path.join(distDir, 'index.html'), html, 'utf8');
  } else {
    const routeDir = path.join(distDir, route.path.replace(/^\//, ''));
    fs.mkdirSync(routeDir, { recursive: true });
    fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf8');
  }
});

console.log(`✅ Pre-rendered ${routes.length} SEO optimized HTML pages successfully into dist/`);
