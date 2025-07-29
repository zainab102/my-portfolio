'use client';

import * as Accordion from '@radix-ui/react-accordion';

export default function About() {
  return (
    <section id="about" className="bg-about text-white py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          About Me
        </h2>
        <div className="section-divider mx-auto" />

        <div className="grid md:grid-cols-2 gap-10 items-start mt-10">
          <div className="space-y-7 text-lg leading-relaxed">
            <p>
              I’m <strong>Zainab</strong>, a tech-driven Business Administration student at Royal Holloway, University of London,
              pursuing a career at the intersection of computer science and digital strategy...
            </p>
            <p>
              My background also includes project management, digital marketing, and leadership roles...
            </p>
          </div>

          <Accordion.Root
            type="multiple"
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl"
            defaultValue={['item-1']}
          >
            <h3 className="text-2xl font-semibold text-[var(--color-accent)] mb-4">
              Education
            </h3>

            <Accordion.Item value="item-1" className="mb-4">
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-white/20 transition">
                  Royal Holloway, University of London
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pt-2 text-sm text-white/80">
                Bachelor of Business Administration (2023 – Present)<br />
                Strategic thinking, leadership, project management, and digital marketing. Projects emphasizing teamwork and global business awareness.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2" className="mb-4">
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-white/20 transition">
                  Web Educatorz
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pt-2 text-sm text-white/80">
                Full Stack Dev + AI/ML (2025 – 2026)<br />
                In-depth frontend/backend training (HTML, JS, React, Node, MongoDB), AI/ML projects for intelligent web apps.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
              <Accordion.Header>
                <Accordion.Trigger className="w-full text-left text-white font-semibold text-lg py-2 px-4 rounded-md hover:bg-white/20 transition">
                  Roots Millennium Future World School
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-4 pt-2 text-sm text-white/80">
                A Levels: Business, Urdu, Sociology | IGCSE: Physics, Chemistry, Computer Science
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
