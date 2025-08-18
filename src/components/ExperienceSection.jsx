// src/components/ExperienceSection.jsx
'use client';

import { useState } from 'react';
import Experience from './Experience';
import Certifications from './Certifications';
import Leadership from './Leadership';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'leadership', label: 'Leadership & Achievements' },
  ];

  return (
    <section id="experience" className="bg-about py-24 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Experience & Achievements
        </h2>
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold rounded-md transition ${
                activeTab === tab.id
                  ? 'bg-white text-[var(--color-accent)]'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === 'experience' && <Experience />}
          {activeTab === 'certifications' && <Certifications />}
          {activeTab === 'leadership' && <Leadership />}
        </div>
      </div>
    </section>
  );
}
