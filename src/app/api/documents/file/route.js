import { promises as fs } from 'fs';
import path from 'path';
import { resolvePortfolioPath } from '@/lib/portfolioDocuments';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const relativePath = searchParams.get('path');
  const safePath = resolvePortfolioPath(relativePath || '');

  if (!safePath) {
    return new Response('Invalid file path', { status: 400 });
  }

  try {
    const fileBuffer = await fs.readFile(safePath);
    const fileName = path.basename(safePath);
    const extension = path.extname(fileName).toLowerCase();
    const contentType = extension === '.pdf' ? 'application/pdf' : 'application/octet-stream';

    return new Response(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `inline; filename="${fileName}"`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new Response('File not found', { status: 404 });
  }
}

