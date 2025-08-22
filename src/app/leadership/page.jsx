'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Leadership() {
  const leadershipCategories = [
    {
      category: 'School Leadership Roles',
      icon: '👑',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      items: [
        {
          title: 'President – Social Media, TMUC Lahore',
          duration: '2024 – 2025',
          description:
            'Led content creation and campaign management for 15+ events, increasing engagement by 40%+. Coordinated cross-departmentally for aligned communication.',
          icon: '📱',
          impact: '40% Engagement Increase',
          type: 'leadership',
        },
        {
          title: 'President – Civic Society',
          duration: '2023 – 2024',
          description: 'Directed community service projects and welfare initiatives with measurable impact.',
          icon: '🏛️',
          impact: 'Community Projects',
          type: 'leadership',
        },
        {
          title: 'President – WWF Society',
          duration: '2022 – 2023',
          description: 'Led environmental conservation campaigns and awareness drives.',
          icon: '🌿',
          impact: 'Environmental Awareness',
          type: 'leadership',
        },
        {
          title: 'Vice President – Debating Society Pakistan (DSP)',
          duration: '2021 – 2022',
          description: 'Organized debate events and mentored junior members.',
          icon: '🗣️',
          impact: 'Mentorship & Events',
          type: 'leadership',
        },
      ],
    },
    {
      category: 'Community & Volunteer Achievements',
      icon: '🤝',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      items: [
        {
          title: 'Co-Ambassador – Rizq, TMUC',
          duration: '2024 – 2025',
          description: 'Lead initiatives to combat hunger through awareness, fundraising & volunteer campaigns.',
          icon: '🍽️',
          impact: 'Community Impact',
          type: 'ambassador',
        },
        {
          title: 'OED Pakistan Member',
          duration: '2022 – 2023',
          description: 'Contributed to literacy and educational development initiatives.',
          icon: '📚',
          impact: 'Educational Outreach',
          type: 'ambassador',
        },
        {
          title: 'Global Social Leaders (GSL)',
          duration: '2023',
          description: 'Recognized for impactful social leadership and community service projects.',
          icon: '🌟',
          impact: 'Global Recognition',
          type: 'social',
        },
        {
          title: 'Community Service',
          duration: '2020 – Present',
          description: 'Completed 250+ volunteer hours in education, environment, and social welfare.',
          icon: '❤️',
          impact: '250+ Volunteer Hours',
          type: 'social',
        },
      ],
    },
    {
      category: 'Competitions & Academic Achievements',
      icon: '🏆',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      items: [
        {
          title: 'Pakistan National Geography Olympiad',
          duration: '2020',
          description: 'Recognized for academic excellence and geographical knowledge at the national level.',
          icon: '🌍',
          impact: 'National Recognition',
          type: 'academic',
        },
        {
          title: 'Youth General Assembly (YGA)',
          duration: '2021',
          description: 'Served as Brand Ambassador.',
          icon: '🥇',
          impact: 'Brand Ambassador',
          type: 'academic',
        },
        {
          title: 'Global Nomads Group Program',
          duration: '2022',
          description: 'Collaborated in cross-cultural discussions to build global understanding.',
          icon: '🌐',
          impact: 'Global Collaboration',
          type: 'academic',
        },
        {
          title: 'Accelerated Learning Programs',
          duration: '2021 – 2022',
          description: 'Participated in immersive sessions enhancing analytical and learning skills.',
          icon: '⚡',
          impact: 'Skill Enhancement',
          type: 'academic',
        },
      ],
    },
  ];

  const communityImpact = [
    {
      icon: '🌱',
      title: 'Environmental Impact',
      description: 'Led WWF Society initiatives for conservation',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: '🎓',
      title: 'Educational Outreach',
      description: 'Contributed to literacy development programs',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🤝',
      title: 'Social Welfare',
      description: 'Organized hunger relief and community support',
      gradient: 'from-rose-500 to-pink-500',
    },
  ];

  const recentRecognition = [
    {
      icon: '🥇',
      title: 'Brand Ambassador',
      description: 'Youth General Assembly (YGA) 2021',
      gradient: 'from-gold-500 to-yellow-400',
    },
    {
      icon: '🌟',
      title: 'Global Recognition',
      description: 'Global Nomads Group Program 2022',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="leadership" className="bg-contact text-gray-900 py-24 px-6 md:px-12 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Leadership & Achievements
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {leadershipCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-full font-semibold text-lg transition-all ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-200 hover:bg-white/20'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadershipCategories[activeTab].items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-300 light-shadow group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${
                      item.type === 'leadership'
                        ? 'from-amber-500 to-yellow-500'
                        : item.type === 'ambassador'
                        ? 'from-green-500 to-emerald-500'
                        : 'from-blue-500 to-indigo-500'
                    } rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-black text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <div className="flex flex-col items-end">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-bold mb-1">
                        {item.duration}
                      </span>
                      {item.impact && (
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.type === 'leadership'
                              ? 'bg-amber-200 text-amber-800'
                              : item.type === 'ambassador'
                              ? 'bg-green-200 text-green-800'
                              : 'bg-blue-200 text-blue-800'
                          }`}
                        >
                          {item.impact}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Horizontal Divider */}
        <motion.div
          className="border-t border-white/20 my-12 opacity-30"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          transition={{ duration: 1 }}
        />

        {/* Making a Difference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-4xl font-black text-cyan-400 text-center mb-6">Making a Difference</h3>
          <p className="text-xl text-gray-300 text-center mb-8">
            Committed to creating positive change in communities
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {communityImpact.map((item, idx) => (
              <div
                key={idx}
                className={`text-center p-6 rounded-2xl light-shadow-xl bg-gradient-to-r ${item.gradient} text-white hover:scale-105 transition-transform`}
              >
                <div className="text-5xl mb-3">{item.icon}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

{/* Recent Recognition Section */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.0 }}
  viewport={{ once: true }}
  className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
>
  <h3 className="text-3xl font-black text-gray-800 text-center mb-8">Recent Recognition</h3>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        icon: '🥇',
        title: 'Brand Ambassador',
        description: 'Youth General Assembly (YGA) 2021',
        gradient: 'from-purple-400 to-pink-400',
      },
      {
        icon: '🌟',
        title: 'Global Recognition',
        description: 'Global Nomads Group Program 2022',
        gradient: 'from-blue-500 to-indigo-500',
      },
      {
        icon: '🏆',
        title: 'Pakistan National Geography Olympiad',
        description: 'Recognized for academic excellence at the national level (2020)',
        gradient: 'from-blue-500 to-indigo-500',
      },
      {
        icon: '🎓',
        title: 'Accelerated Learning Programs',
        description: 'Completed immersive sessions enhancing analytical and learning skills (2021–2022)',
        gradient: 'from-purple-400 to-pink-400',
      },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: idx * 0.2 }}
        className={`flex items-center p-6 rounded-2xl bg-gradient-to-r ${item.gradient} text-white light-shadow-xl hover:scale-105 transition-transform`}
      >
        <div className="text-4xl md:text-5xl mr-4">{item.icon}</div>
        <div>
          <h4 className="font-bold text-lg md:text-xl">{item.title}</h4>
          <p className="text-sm md:text-base">{item.description}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>


        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-xl hover:shadow-2xl"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
