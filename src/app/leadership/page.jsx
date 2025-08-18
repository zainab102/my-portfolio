// src/components/Leadership.jsx
'use client';

import * as Accordion from '@radix-ui/react-accordion';

export default function Leadership() {
  const leadershipCategories = [
    {
      category: 'School Leadership Roles',
      items: [
        {
          title: 'President – Social Media, TMUC Lahore',
          duration: '2024 – 2025',
          description:
            'Led content creation and campaign management for 15+ events, increasing engagement by 40%+. Coordinated cross-departmentally for aligned communication.',
        },
        {
          title: 'President – Civic Society',
          duration: '2023 – 2024',
          description: 'Directed community service projects and welfare initiatives with measurable impact.',
        },
        {
          title: 'President – WWF Society',
          duration: '2022 – 2023',
          description: 'Led environmental conservation campaigns and awareness drives.',
        },
        {
          title: 'Vice President – Debating Society Pakistan (DSP)',
          duration: '2021 – 2022',
          description: 'Organized debate events and mentored junior members.',
        },
      ],
    },
    {
      category: 'Community & Volunteer Achievements',
      items: [
        {
          title: 'Co-Ambassador – Rizq, TMUC',
          duration: '2024 – 2025',
          description: 'Lead initiatives to combat hunger through awareness, fundraising & volunteer campaigns.',
        },
        {
          title: 'OED Pakistan Member',
          duration: '2022 – 2023',
          description: 'Contributed to literacy and educational development initiatives.',
        },
        {
          title: 'Global Social Leaders (GSL)',
          duration: '2023',
          description: 'Recognized for impactful social leadership and community service projects.',
        },
        {
          title: 'Community Service',
          duration: '2020 – Present',
          description: 'Completed 250+ volunteer hours in education, environment, and social welfare.',
        },
      ],
    },
    {
      category: 'Competitions & Academic Achievements',
      items: [
        {
          title: 'Pakistan National Geography Olympiad',
          duration: '2020',
          description: 'Recognized for academic excellence and geographical knowledge at the national level.',
        },
        {
          title: 'Youth General Assembly (YGA)',
          duration: '2021',
          description: 'Served as Brand Ambassador.',
        },
        {
          title: 'Global Nomads Group Program',
          duration: '2022',
          description: 'Collaborated in cross-cultural discussions to build global understanding.',
        },
        {
          title: 'Accelerated Learning Programs',
          duration: '2021 – 2022',
          description: 'Participated in immersive sessions enhancing analytical and learning skills.',
        },
      ],
    },
  ];

  return (
    <section id="leadership" className="bg-white/5 text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Leadership & Achievements
        </h2>
        <div className="section-divider mx-auto mb-10" />

        <Accordion.Root type="multiple" className="space-y-4">
          {leadershipCategories.map((cat, idx) => (
            <Accordion.Item
              key={idx}
              value={`lead-${idx}`}
              className="bg-white/10 rounded-2xl p-4 shadow-md hover:scale-[1.02] transition-transform"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                  {cat.category}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pt-2 text-sm text-white/80">
                <div className="grid md:grid-cols-2 gap-4 mt-2">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 shadow-md hover:scale-[1.02] transition-transform"
                    >
                      <h3 className="text-lg font-semibold text-[var(--color-accent)] mb-1">{item.title}</h3>
                      <p className="text-sm text-white/70 mb-2">{item.duration}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
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
