import { promises as fs } from 'fs';
import path from 'path';

const PORTFOLIO_ROOT = path.join(process.cwd(), 'Portfolio');

async function walkDirectory(currentDir, baseDir, files = []) {
  const entries = await fs.readdir(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      await walkDirectory(fullPath, baseDir, files);
      continue;
    }

    const relativePath = path.relative(baseDir, fullPath);
    const topLevelCategory = relativePath.split(path.sep)[0] || 'Other';
    const stats = await fs.stat(fullPath);

    files.push({
      name: entry.name,
      relativePath: relativePath.split(path.sep).join('/'),
      category: topLevelCategory,
      sizeBytes: stats.size,
    });
  }

  return files;
}

export async function getPortfolioDocuments() {
  const files = await walkDirectory(PORTFOLIO_ROOT, PORTFOLIO_ROOT);
  return files.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

export function resolvePortfolioPath(requestedPath) {
  if (!requestedPath || requestedPath.includes('\0')) return null;
  if (requestedPath.startsWith('/') || requestedPath.includes('..')) return null;

  const resolved = path.resolve(PORTFOLIO_ROOT, requestedPath);
  if (!resolved.startsWith(PORTFOLIO_ROOT)) return null;

  return resolved;
}

