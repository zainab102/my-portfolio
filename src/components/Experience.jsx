// src/components/Experience.jsx
'use client';

import * as Accordion from '@radix-ui/react-accordion';

export default function Experience() {
  const experienceCategories = [
    {
      category: 'Professional Experience',
      items: [
        {
          role: 'Social Media Manager',
          company: 'Rising Tech Solutions Pvt Limited',
          duration: '2025',
          description:
            'Managing social media campaigns, content planning, and analytics for multiple brands. Increased engagement by 40%+ through strategic content and SEO-driven campaigns.',
        },
        {
          role: 'Full Stack Development Intern',
          company: 'Pursue Today',
          duration: '2025',
          description:
            'Developed interactive web apps integrating AI-powered features. Collaborated with design and marketing teams to optimize UX for campaign landing pages.',
        },
        {
          role: 'UX/UI Design Intern',
          company: 'Meraki Matrix Pvt Limited',
          duration: '2024',
          description:
            'Conducted user research, wireframing, prototyping, and collaborated with developers for seamless design integration.',
        },
        {
          role: 'Digital Marketing Associate',
          company: 'GrowBiz & BizSkills, Forever Living Products',
          duration: '2021 – 2024',
          description:
            'Executed social media campaigns, managed influencer partnerships, and optimized content performance using analytics tools.',
        },
        {
          role: 'Website Owner & Blogger',
          company: 'ZainabEdu.com',
          duration: '2024 – Present',
          description:
            'Managed a mental health and fitness blog, using analytics to optimize content and engagement.',
        },
      ],
    },
  ];

  return (
    <section id="experience" className="bg-white/5 text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
        <div className="section-divider mx-auto mb-10" />

        <Accordion.Root type="multiple" className="space-y-4">
          {experienceCategories.map((cat, idx) => (
            <Accordion.Item
              key={idx}
              value={`exp-${idx}`}
              className="bg-white/10 rounded-2xl p-4 shadow-md hover:scale-[1.02] transition-transform"
            >
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]">
                  {cat.category}
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pt-4">
                <div className="grid md:grid-cols-2 gap-6 mt-2">
                  {cat.items.map((exp, i) => (
                    <div
                      key={i}
                      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-5 shadow-md hover:scale-[1.02] transition-transform"
                    >
                      <h3 className="text-lg font-semibold text-[var(--color-accent)] mb-1">{exp.role}</h3>
                      <p className="text-sm text-white/70 mb-1">{exp.company}</p>
                      <p className="text-sm text-white/60 mb-2">{exp.duration}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{exp.description}</p>
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
