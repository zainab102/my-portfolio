'use client';

import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-about text-gray-900 py-24 px-6 md:px-12 relative">
      {/* Animated Birds/Butterflies for this section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Section-specific butterflies */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`about-butterfly-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          >
            <div className="text-lg animate-wing-flutter filter drop-shadow-sm">
              🦋
            </div>
          </div>
        ))}
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl hover:light-shadow-2xl transition-all duration-300">
              {/* Quote */}
              <div className="mb-6 p-6 bg-gradient-to-r from-amber-50 to-rose-50 rounded-2xl border border-amber-200/50">
                <blockquote className="text-2xl md:text-3xl italic font-bold text-amber-900 mb-3 leading-relaxed">
                  "Be yourself; everyone else is already taken."
                </blockquote>
                <cite className="text-lg text-rose-700 font-semibold">
                  – Oscar Wilde
                </cite>
              </div>
              
              {/* Introduction Text */}
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-800">
                  Hi, I'm <strong className="text-amber-800 font-bold bg-amber-100/50 px-2 py-1 rounded">Zainab</strong>. 
                  I believe in curiosity, creativity, and building something meaningful out of every experience.
                </p>
                
                <p className="text-gray-700">
                  My journey blends <span className="font-semibold text-blue-700">technology</span>, 
                  <span className="font-semibold text-green-700"> business</span>, and 
                  <span className="font-semibold text-purple-700"> storytelling</span> — shaping me into someone 
                  who never stops learning, evolving, and sharing.
                </p>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200/50">
                  <p className="text-purple-900 font-semibold text-xl italic">
                    Welcome to my corner of the internet — a space where my thoughts, projects, 
                    and passions come together.
                  </p>
                </div>
              </div>

              {/* Stats Section */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-2xl font-black text-blue-700">2+</div>
                  <div className="text-sm font-semibold text-blue-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="text-2xl font-black text-green-700">15+</div>
                  <div className="text-sm font-semibold text-green-600">Certifications</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="text-2xl font-black text-purple-700">20+</div>
                  <div className="text-sm font-semibold text-purple-600">Projects</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <div className="text-2xl font-black text-amber-700">5+</div>
                  <div className="text-sm font-semibold text-amber-600">Tech Stacks</div>
                </div>
              </div>

              {/* View More Button */}
              <div className="mt-8 text-center">
                <Link 
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-lg hover:shadow-xl"
                >
                  <span>View More About Me</span>
                  <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Education Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
              <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                Education Journey
              </h3>

              <Accordion.Root
                type="multiple"
                className="space-y-4"
                defaultValue={['item-1']}
              >
                <Accordion.Item value="item-1" className="border-0">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 text-blue-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 flex items-center justify-between group">
                      <span>🎓 Royal Holloway, University of London</span>
                      <svg className="w-6 h-6 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pt-4 pb-2">
                    <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-bold text-blue-800 text-lg">Bachelor of Business Administration</p>
                        <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">2023 – Present</span>
                      </div>
                      <p className="text-blue-700 leading-relaxed">Strategic thinking, leadership, project management, and digital marketing. Projects emphasizing teamwork and global business awareness through distance learning via TMUC Lahore.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-2" className="border-0">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 flex items-center justify-between group">
                      <span>💻 Web Educatorz</span>
                      <svg className="w-6 h-6 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pt-4 pb-2">
                    <div className="bg-green-50/50 rounded-xl p-6 border border-green-100">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-bold text-green-800 text-lg">Full Stack Development + AI/ML</p>
                        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">2025 – 2026</span>
                      </div>
                      <p className="text-green-700 leading-relaxed">In-depth frontend/backend training (HTML, JavaScript, React, Node.js, MongoDB), AI/ML projects for intelligent web applications.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item value="item-3" className="border-0">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 text-purple-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 flex items-center justify-between group">
                      <span>🏫 Roots Millennium Future World School</span>
                      <svg className="w-6 h-6 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pt-4 pb-2">
                    <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100">
                      <div className="mb-4">
                        <p className="font-bold text-purple-800 text-lg mb-2">A Levels: Business, Urdu, Sociology</p>
                        <p className="font-bold text-purple-800 text-lg mb-3">IGCSE: Physics, Chemistry, Computer Science</p>
                      </div>
                      <p className="text-purple-700 leading-relaxed">Strong foundation in analytical thinking and problem-solving across multiple disciplines, combining humanities and sciences.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </motion.div>
        </div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
            <h3 className="text-2xl font-black text-gray-800 text-center mb-6">Currently Learning & Mastering</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: 'React.js', color: 'bg-blue-100 text-blue-800 border-blue-200' },
                { name: 'Node.js', color: 'bg-green-100 text-green-800 border-green-200' },
                { name: 'Python', color: 'bg-yellow-100 text-yellow-800 border-yellow-200' },
                { name: 'AI & ML', color: 'bg-purple-100 text-purple-800 border-purple-200' },
                { name: 'MongoDB', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
                { name: 'Digital Marketing', color: 'bg-pink-100 text-pink-800 border-pink-200' }
              ].map((skill, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-full font-bold text-sm border-2 ${skill.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
