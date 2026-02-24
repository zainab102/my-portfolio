import Link from 'next/link';
import { getPortfolioDocuments } from '@/lib/portfolioDocuments';

export const metadata = {
  title: 'Documents | Zainab Portfolio',
  description: 'All portfolio documents, certificates, internships, recommendations, and CV files.',
};

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}

export default async function DocumentsPage() {
  const allDocuments = await getPortfolioDocuments();
  const grouped = allDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) acc[doc.category] = [];
    acc[doc.category].push(doc);
    return acc;
  }, {});

  const categoryNames = Object.keys(grouped).sort((a, b) => a.localeCompare(b));

  return (
    <section className="bg-projects text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
          Portfolio Documents
        </h1>
        <p className="text-center text-gray-700 mb-12">
          CV, internships, recommendations, education records, and certificates.
        </p>

        <div className="mb-10 bg-white/90 border-2 border-gray-200 rounded-2xl p-5">
          <p className="text-sm text-gray-700">
            Total documents: <span className="font-bold">{allDocuments.length}</span>
          </p>
        </div>

        <div className="space-y-10">
          {categoryNames.map((categoryName) => (
            <div key={categoryName} className="bg-white/90 border-2 border-gray-200 rounded-3xl p-6">
              <h2 className="text-2xl font-black text-gray-800 mb-5">{categoryName}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {grouped[categoryName].map((doc) => (
                  <div key={doc.relativePath} className="border border-gray-200 rounded-2xl p-4 bg-gray-50/70">
                    <p className="font-bold text-gray-800 break-all">{doc.name}</p>
                    <p className="text-xs text-gray-600 mt-1 break-all">{doc.relativePath}</p>
                    <p className="text-xs text-gray-600 mt-1">{formatSize(doc.sizeBytes)}</p>
                    <div className="mt-3 flex gap-3">
                      <a
                        href={`/api/documents/file?path=${encodeURIComponent(doc.relativePath)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-sm font-bold rounded-lg bg-gradient-to-r from-amber-600 to-rose-600 text-white"
                      >
                        Open
                      </a>
                      <a
                        href={`/api/documents/file?path=${encodeURIComponent(doc.relativePath)}`}
                        download={doc.name}
                        className="px-4 py-2 text-sm font-bold rounded-lg border-2 border-gray-300 text-gray-800 bg-white"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold rounded-xl transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

