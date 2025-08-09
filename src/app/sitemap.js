import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://yourdomain.com'; // change to your real domain

  // Path to the app folder
  const appDir = path.join(process.cwd(), 'src', 'app');

  // Get all folders (routes) in src/app
  const routes = fs.readdirSync(appDir)
    .filter((name) => {
      // Skip special files & API routes
      return !name.startsWith('_') &&
             !name.startsWith('.') &&
             name !== 'layout.js' &&
             name !== 'globals.css' &&
             !name.includes('not-found') &&
             !name.includes('error');
    })
    .map((route) => {
      if (route === 'page.js') return ''; // home route
      return route;
    });

  // Generate sitemap objects
  return routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
