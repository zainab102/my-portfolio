'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  // Only show 3-4 most recent/important experiences on homepage
  const featuredExperiences = [
    {
      role: 'Social Media Manager',
      company: 'Rising Tech Solutions Pvt Limited',
      duration: '2025',
      type: 'Full-time',
      icon: '📱',
      description: 'Managing social media campaigns, content planning, and analytics for multiple brands. Increased engagement by 40%+ through strategic content and SEO-driven campaigns.',
      skills: ['Social Media Strategy', 'Content Creation', 'Analytics', 'SEO'],
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900'
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Pursue Today',
      duration: '2025',
      type: 'Internship',
      icon: '💻',
      description: 'Developed interactive web apps integrating AI-powered features. Collaborated with design and marketing teams to optimize UX for campaign landing pages.',
      skills: ['React.js', 'Node.js', 'AI Integration', 'UX Design'],
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900'
    },
    {
      role: 'UX/UI Design Intern',
      company: 'Meraki Matrix Pvt Limited',
      duration: '2024',
      type: 'Internship',
      icon: '🎨',
      description: 'Conducted user research, wireframing, prototyping, and collaborated with developers for seamless design integration.',
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900'
    }
  ];

  return (
    <section id="experience" className="bg-projects text-gray-900 py-24 px-6 md:px-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Section-specific butterflies */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`experience-butterfly-${i}`}
            className="absolute animate-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${14 + Math.random() * 6}s`,
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
        <div className="absolute top-1/3 left-1/5 w-64 h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
            Experience
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-12">
          {featuredExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Timeline Line - only show between items */}
              {index < featuredExperiences.length - 1 && (
                <div className="absolute left-8 md:left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-amber-300 to-rose-300 z-0"></div>
              )}

              <div className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-8 top-8 w-8 h-8 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full border-4 border-white light-shadow-lg flex items-center justify-center z-10">
                  <span className="text-sm">{exp.icon}</span>
                </div>

                {/* Experience Card */}
                <div className="ml-16 md:ml-24">
                  <div className={`bg-gradient-to-r ${exp.bgColor} border-2 ${exp.borderColor} rounded-3xl p-8 light-shadow-xl hover:light-shadow-2xl transition-all duration-300 hover:scale-[1.02]`}>
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className={`text-2xl md:text-3xl font-black ${exp.textColor} mb-2 group-hover:scale-105 transition-transform`}>
                          {exp.role}
                        </h3>
                        <p className="text-xl font-bold text-gray-700 mb-2">{exp.company}</p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center bg-white/80 px-3 py-1 rounded-full font-semibold text-gray-700">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2h3z" />
                            </svg>
                            {exp.duration}
                          </span>
                          <span className={`px-4 py-1 rounded-full text-sm font-bold border-2 ${
                            exp.type === 'Full-time' ? 'bg-green-200 text-green-800 border-green-300' :
                            exp.type === 'Internship' ? 'bg-blue-200 text-blue-800 border-blue-300' :
                            exp.type === 'Contract' ? 'bg-yellow-200 text-yellow-800 border-yellow-300' :
                            'bg-purple-200 text-purple-800 border-purple-300'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-800 mb-6 leading-relaxed text-lg font-medium">{exp.description}</p>

                    {/* Skills */}
                    <div>
                      <h4 className="text-lg font-black text-gray-800 mb-4 flex items-center">
                        <span className="w-6 h-6 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full mr-2"></span>
                        Key Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-4 py-2 bg-white/90 text-gray-800 border-2 border-gray-300 rounded-full text-sm font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-200 light-shadow"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl mb-12"
        >
          <div className="text-center">
            <h3 className="text-2xl font-black text-gray-800 mb-4">Other Notable Roles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-bold text-amber-900">Social Media Manager</h4>
                <p className="text-amber-800 text-sm">SHIELDPRO</p>
              </div>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-2xl border border-rose-200">
                <div className="text-2xl mb-2">👗</div>
                <h4 className="font-bold text-rose-900">Operations Manager</h4>
                <p className="text-rose-800 text-sm">rent.outfits_</p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="text-2xl mb-2">✍️</div>
                <h4 className="font-bold text-green-900">Website Owner & Blogger</h4>
                <p className="text-green-800 text-sm">ZainabEdu.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Experience Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">7+</div>
              <div className="text-gray-300 font-semibold">Professional Roles</div>
            </div>
            <div>
              <div className="text-4xl font-black text-rose-400 mb-2">3+</div>
              <div className="text-gray-300 font-semibold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black text-green-400 mb-2">40%+</div>
              <div className="text-gray-300 font-semibold">Growth Achieved</div>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">5+</div>
              <div className="text-gray-300 font-semibold">Industries</div>
            </div>
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link 
            href="/experience"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-xl hover:shadow-2xl"
          >
            <span>View Detailed Experience</span>
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
