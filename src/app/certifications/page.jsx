// src/components/Certifications.jsx
'use client';

import * as Accordion from '@radix-ui/react-accordion';

export default function Certifications() {
  const certCategories = [
    {
      category: 'Google Certificates',
      items: [
        'Google IT Support Professional Certificate',
        'Google IT Automation with Python Professional Certificate',
        'Google Cybersecurity Professional Certificate',
        'Google AI Essentials Specialization',
        'Google Prompting Essentials Specialization',
        'Google Advanced Data Analytics Professional Certificate',
        'Google Data Analytics Professional Certificate',
        'Google Business Intelligence Professional Certificate',
        'Google Project Management: Professional Certificate',
        'Google Digital Marketing & E-commerce Professional Certificate',
        'UX Design Professional Certificate',
      ],
    },
    {
      category: 'Insiders Certificates',
      items: ['Social Media Marketing', 'Graphic Designing', 'Content Writing'],
    },
    {
      category: 'Other Certificates',
      items: ['Introduction to Computer Science CS101 – Saylor.org'],
    },
  ];

  return (
    <section id="certifications" className="bg-white/5 text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Certifications</h2>
        <div className="section-divider mx-auto mb-10" />

        <Accordion.Root type="multiple" className="space-y-4">
          {certCategories.map((cat, idx) => (
            <Accordion.Item
              key={idx}
              value={`cert-${idx}`}
              className="bg-white/10 rounded-2xl p-4 shadow-md hover:scale-[1.02] transition-transform"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                  {cat.category}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pt-4">
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  {cat.items.map((cert, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-3 shadow-md hover:scale-[1.02] transition-transform"
                    >
                      <p className="text-white/80 text-sm">{cert}</p>
                    </div>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
