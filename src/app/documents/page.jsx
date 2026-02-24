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

function cleanLabel(value) {
  return value
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/\s+\//g, '/')
    .replace(/\/\s+/g, '/')
    .trim();
}

const SECTION_ORDER = [
  'CV',
  'Education',
  'Internships',
  'Recommendation',
  'Certificates',
  'Extra Curricular',
  'Hope Letter',
];

export default async function DocumentsPage() {
  const allDocuments = await getPortfolioDocuments();
  const grouped = allDocuments.reduce((acc, doc) => {
    const [topLevel, ...rest] = doc.relativePath.split('/');
    const section = cleanLabel(topLevel || 'Other');
    const subPath = cleanLabel(rest.slice(0, -1).join(' / '));
    const subheading = subPath || 'General';

    if (!acc[section]) acc[section] = {};
    if (!acc[section][subheading]) acc[section][subheading] = [];
    acc[section][subheading].push(doc);

    return acc;
  }, {});

  const sectionNames = Object.keys(grouped).sort((a, b) => {
    const aIndex = SECTION_ORDER.indexOf(a);
    const bIndex = SECTION_ORDER.indexOf(b);
    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    }
    return a.localeCompare(b);
  });

  return (
    <section className="bg-projects text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-black text-center mb-4 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
          Documentation Vault
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Organized by section and subsection for faster review.
        </p>

        <div className="mb-10 bg-white/90 border-2 border-gray-200 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-sm text-gray-700 font-semibold">
            Total documents: <span className="font-bold">{allDocuments.length}</span>
          </p>
          <p className="text-sm text-gray-600">
            Sections: <span className="font-bold">{sectionNames.length}</span>
          </p>
        </div>

        <div className="space-y-10">
          {sectionNames.map((sectionName) => {
            const subsectionNames = Object.keys(grouped[sectionName]).sort((a, b) =>
              a.localeCompare(b)
            );

            return (
              <div key={sectionName} className="bg-white/90 border-2 border-gray-200 rounded-3xl p-6">
                <h2 className="text-2xl md:text-3xl font-black text-gray-800 mb-6">
                  {sectionName}
                </h2>

                <div className="space-y-7">
                  {subsectionNames.map((subheading) => (
                    <div key={`${sectionName}-${subheading}`}>
                      <h3 className="text-lg md:text-xl font-bold text-amber-700 mb-3">
                        {subheading}
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {grouped[sectionName][subheading].map((doc) => (
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
              </div>
            );
          })}
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
