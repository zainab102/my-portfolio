'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Leadership() {
  // Show only featured achievements on homepage
  const featuredAchievements = [
    {
      category: 'Current Leadership Roles',
      icon: '👑',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      items: [
        {
          title: 'President – Social Media, TMUC Lahore',
          duration: '2024 – 2025',
          description: 'Led content creation and campaign management for 15+ events, increasing engagement by 40%+. Coordinated cross-departmentally for aligned communication.',
          icon: '📱',
          impact: '40% Engagement Increase',
          type: 'leadership'
        },
        {
          title: 'Co-Ambassador – Rizq, TMUC',
          duration: '2024 – 2025', 
          description: 'Lead initiatives to combat hunger through awareness, fundraising & volunteer campaigns.',
          icon: '🤝',
          impact: 'Community Impact',
          type: 'ambassador'
        }
      ]
    },
    {
      category: 'Notable Achievements',
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
          type: 'academic'
        },
        {
          title: 'Global Social Leaders (GSL)',
          duration: '2023',
          description: 'Recognized for impactful social leadership and community service projects.',
          icon: '🌟',
          impact: 'Global Recognition',
          type: 'social'
        }
      ]
    }
  ];

  const communityStats = [
    {
      number: '250+',
      label: 'Volunteer Hours',
      icon: '❤️',
      color: 'text-rose-600',
      bgColor: 'bg-rose-50',
      borderColor: 'border-rose-200'
    },
    {
      number: '15+',
      label: 'Events Organized',
      icon: '🎯',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      number: '5+',
      label: 'Leadership Positions',
      icon: '👑',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      number: '3+',
      label: 'Years Active',
      icon: '📈',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="leadership" className="bg-contact text-gray-900 py-24 px-6 md:px-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Section-specific butterflies */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`leadership-butterfly-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${16 + Math.random() * 8}s`,
            }}
          >
            <div className="text-lg animate-wing-flutter filter drop-shadow-sm">
              🦋
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/5 left-1/6 w-72 h-72 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gradient-to-br from-teal-200 to-green-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
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

        {/* Leadership Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {communityStats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} border-2 ${stat.borderColor} rounded-3xl p-6 text-center light-shadow-lg hover:light-shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className={`text-4xl font-black ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-700 font-semibold">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Achievements */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredAchievements.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.bgColor} border-2 ${category.borderColor} rounded-3xl p-6 light-shadow-xl`}>
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h3 className={`text-2xl md:text-3xl font-black ${category.textColor}`}>
                    {category.category}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-300 light-shadow group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 bg-gradient-to-r ${
                            item.type === 'leadership' ? 'from-amber-500 to-yellow-500' :
                            item.type === 'ambassador' ? 'from-green-500 to-emerald-500' :
                            item.type === 'academic' ? 'from-blue-500 to-indigo-500' :
                            'from-purple-500 to-pink-500'
                          } rounded-full flex items-center justify-center text-xl group-hover:scale-110 transition-transform`}>
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
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                item.type === 'leadership' ? 'bg-amber-200 text-amber-800' :
                                item.type === 'ambassador' ? 'bg-green-200 text-green-800' :
                                item.type === 'academic' ? 'bg-blue-200 text-blue-800' :
                                'bg-purple-200 text-purple-800'
                              }`}>
                                {item.impact}
                              </span>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Leadership Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <h3 className="text-3xl font-black text-gray-800 text-center mb-8">Leadership Journey</h3>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
              <div className="flex-1 bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-800">2020 - 2022</span>
                  <span className="text-green-600 text-sm">Foundation Years</span>
                </div>
                <p className="text-green-700 text-sm mt-1">Started with academic competitions and junior positions</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
              <div className="flex-1 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-800">2022 - 2024</span>
                  <span className="text-blue-600 text-sm">Growth Phase</span>
                </div>
                <p className="text-blue-700 text-sm mt-1">Expanded into community service and social leadership</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-4 h-4 bg-purple-500 rounded-full mr-4"></div>
              <div className="flex-1 bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-800">2024 - Present</span>
                  <span className="text-purple-600 text-sm">Leadership Excellence</span>
                </div>
                <p className="text-purple-700 text-sm mt-1">Currently leading major initiatives and mentoring others</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Community Impact Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl"
        >
          <div className="text-center">
            <h3 className="text-3xl font-black text-cyan-400 mb-4">Making a Difference</h3>
            <p className="text-xl text-gray-300 mb-8">Committed to creating positive change in communities</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="text-xl font-bold text-green-400 mb-2">Environmental Impact</h4>
                <p className="text-gray-300 text-sm">Led WWF Society initiatives for conservation</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-bold text-blue-400 mb-2">Educational Outreach</h4>
                <p className="text-gray-300 text-sm">Contributed to literacy development programs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold text-rose-400 mb-2">Social Welfare</h4>
                <p className="text-gray-300 text-sm">Organized hunger relief and community support</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards & Recognition Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <h3 className="text-2xl font-black text-gray-800 text-center mb-6">Recent Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center p-4 bg-gradient-to-r from-gold-50 to-yellow-50 border border-yellow-200 rounded-2xl">
              <div className="text-3xl mr-4">🥇</div>
              <div>
                <h4 className="font-bold text-yellow-800">Brand Ambassador</h4>
                <p className="text-yellow-700 text-sm">Youth General Assembly (YGA) 2021</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl">
              <div className="text-3xl mr-4">🌟</div>
              <div>
                <h4 className="font-bold text-blue-800">Global Recognition</h4>
                <p className="text-blue-700 text-sm">Global Nomads Group Program 2022</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/leadership"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-xl hover:shadow-2xl"
          >
            <span>View All Achievements</span>
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
