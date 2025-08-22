'use client';

import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section id="about" className="bg-about text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Animated Butterflies */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`butterfly-${i}`}
            className="absolute animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${10 + Math.random() * 8}s`,
            }}
          >
            <div className="text-lg animate-wing-flutter drop-shadow-sm">🦋</div>
          </div>
        ))}
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="section-divider mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Casual About Me */}
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
              <p className="text-gray-800 text-lg leading-relaxed mb-4">
                Hey there! I’m <strong className="text-amber-800 font-bold bg-amber-100/50 px-2 py-1 rounded">Zainab</strong> 👋. I’ve always been curious about how things work, why people do what they do, and how ideas can turn into something real. That curiosity led me on a journey mixing technology, business, and creativity — and honestly, I haven’t looked back since.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I’m currently pursuing my <strong>Bachelor’s in Business Administration</strong> at Royal Holloway, University of London via TMUC Lahore, which has been amazing for learning strategic thinking, leadership, and project management — all while juggling digital marketing projects and collaborating globally.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Beyond academics, I’ve been diving deep into tech:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Learning Python, React.js, Node.js, and MongoDB</li>
                <li>Exploring AI & Machine Learning for future possibilities</li>
                <li>Practicing digital marketing, content creation, and social media strategy</li>
              </ul>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Along the way, I’ve worked with cool software houses like <strong>Meraki Matrix, Pursue Today, Diginet, and Insiders</strong>, turning ideas into real projects — and picking up lessons (and fun stories) along the way.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                I love creating, experimenting, and learning — whether building a website, analyzing data, designing something visually stunning, or solving tough tech problems. Each project is a chance to grow.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                When I’m not coding or brainstorming, I explore AI tools, graphic design, or content writing — anything that blends creativity with tech. My goal? To keep learning, growing, and making an impact while inspiring others along the way 😉
              </p>
            </div>
          </motion.div>

          {/* Right Column: Education Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
              <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center">
                🎓 Education Journey
              </h3>

              <Accordion.Root type="multiple" defaultValue={['item-1']} className="space-y-4">
                {/* Royal Holloway */}
                <Accordion.Item value="item-1" className="border-0">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 text-blue-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 flex items-center justify-between group">
                      <span>Royal Holloway, University of London</span>
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
                      <p className="text-blue-700 leading-relaxed">Strategic thinking, leadership, project management, and digital marketing through global distance learning via TMUC Lahore.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                {/* Web Educatorz */}
                <Accordion.Item value="item-2" className="border-0">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 text-green-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 flex items-center justify-between group">
                      <span>Web Educatorz</span>
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
                      <p className="text-green-700 leading-relaxed">Frontend/backend training (HTML, JS, React, Node.js, MongoDB) and AI/ML projects for intelligent apps.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                {/* Roots Millennium */}
                <Accordion.Item value="item-3" className="border-0">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full text-left bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 text-purple-900 font-bold text-lg py-4 px-6 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 flex items-center justify-between group">
                      <span>Roots Millennium Future World School</span>
                      <svg className="w-6 h-6 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pt-4 pb-2">
                    <div className="bg-purple-50/50 rounded-xl p-6 border border-purple-100">
                      <p className="font-bold text-purple-800 text-lg mb-2">A Levels: Business, Urdu, Sociology</p>
                      <p className="font-bold text-purple-800 text-lg mb-3">IGCSE: Physics, Chemistry, Computer Science</p>
                      <p className="text-purple-700 leading-relaxed">Strong analytical and problem-solving foundation across sciences and humanities.</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
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
              ].map((skill, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full font-bold text-sm border-2 ${skill.color} hover:scale-105 transition-transform duration-200 cursor-default`}
                >
                  {skill.name}
                </span>
              ))}
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
