'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CertificationsPage() {
  const allCertifications = [
    {
      category: 'Google Professional Certificates',
      icon: '🏆',
      count: 11,
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      accentColor: 'text-blue-700',
      featured: [
        { name: 'Google IT Support Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google IT Automation with Python Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google Cybersecurity Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google AI Essentials Specialization', level: 'Advanced', year: '2025' },
        { name: 'Google Prompting Essentials Specialization', level: 'Advanced', year: '2025' },
        { name: 'Google Advanced Data Analytics Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google Data Analytics Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google Business Intelligence Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google Project Management: Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'Google Digital Marketing & E-commerce Professional Certificate', level: 'Professional', year: '2025' },
        { name: 'UX Design Professional Certificate', level: 'Professional', year: '2025' },
      ],
    },
    {
      category: 'Specialized Skills Certifications',
      icon: '🎯',
      count: 4,
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      accentColor: 'text-green-700',
      featured: [
        { name: 'Social Media Marketing', level: 'Professional', year: '2025', provider: 'Insiders' },
        { name: 'Graphic Designing', level: 'Intermediate', year: '2025', provider: 'Insiders' },
        { name: 'Content Writing', level: 'Professional', year: '2025', provider: 'Insiders' },
        { name: 'Introduction to Computer Science CS101', level: 'Foundation', year: '2025', provider: 'Saylor.org' },
      ],
    },
    {
      category: 'Other Certificates',
      icon: '📘',
      count: 1,
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      accentColor: 'text-purple-700',
      featured: [
        { name: 'Introduction to Computer Science CS101 – Saylor.org', level: 'Foundation', year: '2025' },
      ],
    },
  ];

  return (
    <section id="certifications" className="bg-skills text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden">

      {/* Background butterflies */}
      {[...Array(7)].map((_, i) => (
        <div
          key={`butterfly-${i}`}
          className="absolute animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + Math.random() * 8}s`,
          }}
        >
          <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
        </div>
      ))}

      {/* Blob Background */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
            Certifications
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
              <div className="text-4xl mb-2">📜</div>
              <div className="text-3xl font-black text-blue-700 mb-1">16+</div>
              <div className="text-blue-600 font-semibold">Total Certifications</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-3xl font-black text-green-700 mb-1">11</div>
              <div className="text-green-600 font-semibold">Google Certificates</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-black text-purple-700 mb-1">5+</div>
              <div className="text-purple-600 font-semibold">Specialized Skills</div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-3xl font-black text-amber-700 mb-1">40%+</div>
              <div className="text-amber-600 font-semibold">Growth Achieved</div>
            </div>
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border border-teal-200">
              <div className="text-4xl mb-2">💼</div>
              <div className="text-3xl font-black text-teal-700 mb-1">7+</div>
              <div className="text-teal-600 font-semibold">Professional Roles</div>
            </div>
          </div>
        </motion.div>

        {/* Certifications List */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {allCertifications.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-r ${category.bgColor} border-2 ${category.borderColor} rounded-3xl p-8 light-shadow-xl hover:light-shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full`}>
                {/* Category Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="text-4xl mr-4">{category.icon}</div>
                    <h3 className={`text-2xl font-black ${category.textColor} group-hover:scale-105 transition-transform`}>
                      {category.category}
                    </h3>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-gray-300">
                    <span className={`text-2xl font-black ${category.accentColor}`}>{category.count}</span>
                    <span className="text-gray-600 font-semibold text-sm ml-1">Certs</span>
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-4">
                  {category.featured.map((cert, idx) => (
                    <div
                      key={idx}
                      className="bg-white/90 backdrop-blur-sm p-5 rounded-2xl border border-gray-200 hover:bg-white hover:scale-105 transition-all duration-200 light-shadow"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <div className={`w-3 h-3 rounded-full mr-3 ${
                              cert.level === 'Advanced' ? 'bg-red-500' :
                              cert.level === 'Professional' ? 'bg-blue-500' :
                              cert.level === 'Intermediate' ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}></div>
                            <h4 className="font-bold text-gray-800 text-sm leading-tight">{cert.name}</h4>
                          </div>
                          <div className="flex items-center space-x-4 text-xs">
                            <span className={`px-3 py-1 rounded-full font-semibold border ${
                              cert.level === 'Advanced' ? 'bg-red-100 text-red-800 border-red-200' :
                              cert.level === 'Professional' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                              cert.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                              'bg-green-100 text-green-800 border-green-200'
                            }`}>
                              {cert.level}
                            </span>
                            <span className="text-gray-600 font-semibold">{cert.year}</span>
                            {cert.provider && <span className="text-gray-500">• {cert.provider}</span>}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Gained Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-amber-400 mb-4">Skills Gained Through Certifications</h3>
            <p className="text-gray-300 text-lg">Comprehensive expertise across multiple domains</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">AI & Data Analytics</h4>
              <p className="text-gray-300 text-sm">Machine Learning, Data Analysis, Statistical Modeling</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-green-400 mb-2">Cybersecurity & IT</h4>
              <p className="text-gray-300 text-sm">Network Security, IT Support, System Administration</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">Digital Marketing</h4>
              <p className="text-gray-300 text-sm">Social Media Strategy, Content Creation, Analytics</p>
            </div>
          </div>
        </motion.div>

        {/* Certification Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <h3 className="text-2xl font-black text-gray-800 text-center mb-8">Certification Journey</h3>
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-2">2025</div>
              <p className="text-sm font-semibold text-gray-700">Foundation Certs</p>
              <p className="text-xs text-gray-600">4 Certificates</p>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-green-300 to-blue-300 mx-4 rounded-full"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-2">2025</div>
              <p className="text-sm font-semibold text-gray-700">Professional Level</p>
              <p className="text-xs text-gray-600">8+ Certificates</p>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-4 rounded-full"></div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-2">2025</div>
              <p className="text-sm font-semibold text-gray-700">Advanced Skills</p>
              <p className="text-xs text-gray-600">In Progress</p>
            </div>
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
