'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Experience from './Experience';
import Certifications from './Certifications';
import Leadership from './Leadership';
import Link from 'next/link';

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Professional Experience', icon: '💼' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
    { id: 'leadership', label: 'Leadership & Achievements', icon: '👑' },
  ];

  return (
    <section id="experience" className="bg-about py-24 px-6 md:px-12 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Experience & Achievements
          </h2>
          <div className="section-divider mx-auto mb-10" />
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 shadow-xl">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-semibold rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                      : 'bg-white/10 text-white hover:bg-white/20 hover:scale-102'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8"
        >
          {activeTab === 'experience' && (
            <div>
              <Experience />
              <div className="text-center mt-8">
                <Link 
                  href="/experience"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Detailed Experience
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
          {activeTab === 'certifications' && (
            <div>
              <Certifications />
              <div className="text-center mt-8">
                <Link 
                  href="/certifications"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  View All Certifications
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
          {activeTab === 'leadership' && (
            <div>
              <Leadership />
              <div className="text-center mt-8">
                <Link 
                  href="/leadership"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                >
                  View All Achievements
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
