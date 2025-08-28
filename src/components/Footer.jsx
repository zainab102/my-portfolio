'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket, FaCode } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/#contact' }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/zainab102',
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-gray-200',
      bgColor: 'hover:bg-gray-100 dark:hover:bg-gray-700'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/zainab-22243b366',
      label: 'LinkedIn',
      color: 'hover:text-blue-700 dark:hover:text-blue-400',
      bgColor: 'hover:bg-blue-50 dark:hover:bg-blue-800'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:tariqzainab1190@gmail.com',
      label: 'Email',
      color: 'hover:text-rose-700 dark:hover:text-rose-400',
      bgColor: 'hover:bg-rose-50 dark:hover:bg-rose-800'
    }
  ];

  const [butterflies, setButterflies] = useState([]);

  useEffect(() => {
    const generated = [...Array(3)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 6}s`,
      animationDuration: `${20 + Math.random() * 10}s`
    }));
    setButterflies(generated);
  }, []);

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-cream-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-gray-100 py-20 px-6 border-t-2 border-gray-200 dark:border-gray-700 relative">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {butterflies.map((style, i) => (
          <div
            key={`footer-butterfly-${i}`}
            className="absolute animate-float opacity-20"
            style={style}
          >
            <div className="text-lg animate-wing-flutter filter drop-shadow-sm">
              🦋
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-10 light-shadow-xl max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="text-6xl">✨</span>
            </div>
            <blockquote className="text-3xl md:text-4xl font-black mb-6 italic leading-tight text-gray-800 dark:text-gray-100">
              "Don't just go through life, grow through life."
            </blockquote>
            <cite className="text-xl md:text-2xl text-amber-700 dark:text-amber-400 font-bold">
              – Eric Butterworth
            </cite>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-amber-500 to-rose-500 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 light-shadow-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full flex items-center justify-center mr-4">
                  <FaCode className="text-white" size={24} />
                </div>
                <h2 className="text-4xl font-black bg-gradient-to-r from-amber-700 to-rose-700 bg-clip-text text-transparent">
                  Zainab.dev
                </h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 font-medium">
                Tech-driven innovator • Lifelong learner • Digital creator
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate about transforming ideas into digital experiences through technology, creativity, and innovation. Always learning, always growing.
              </p>

              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl">
                  <div className="text-2xl font-black text-blue-700 dark:text-blue-300">20+</div>
                  <div className="text-blue-600 dark:text-blue-200 text-xs font-semibold">Projects</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-700 rounded-xl">
                  <div className="text-2xl font-black text-green-700 dark:text-green-300">15+</div>
                  <div className="text-green-600 dark:text-green-200 text-xs font-semibold">Certifications</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700 rounded-xl">
                  <div className="text-2xl font-black text-purple-700 dark:text-purple-300">3+</div>
                  <div className="text-purple-600 dark:text-purple-200 text-xs font-semibold">Years Learning</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 light-shadow-xl h-full">
              <h3 className="text-2xl font-black mb-6 flex items-center text-gray-800 dark:text-gray-100">
                <FaRocket className="mr-3 text-amber-600 dark:text-amber-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`flex items-center text-gray-600 dark:text-gray-300 ${socialLinks.color} hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300 group py-2`}
                    >
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 group-hover:bg-rose-500 transition-colors"></div>
                      <span className="font-semibold group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/90 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-gray-200 dark:border-gray-700 rounded-3xl p-8 light-shadow-xl h-full">
              <h3 className="text-2xl font-black mb-6 text-gray-800 dark:text-gray-100">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                Follow my journey and connect with me on social platforms for updates, insights, and collaboration opportunities.
              </p>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.includes('mailto') ? undefined : '_blank'}
                    rel={social.href.includes('mailto') ? undefined : 'noopener noreferrer'}
                    className={`group flex items-center space-x-3 text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 p-3 rounded-xl hover:scale-105 ${social.bgColor} border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500`}
                  >
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-full light-shadow group-hover:scale-110 transition-transform">
                      <social.icon size={20} />
                    </div>
                    <span className="font-bold">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="border-t-2 border-gray-200 dark:border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-600 dark:text-gray-400 font-semibold">
                © {new Date().getFullYear()} <span className="text-amber-700 dark:text-amber-400 font-bold">Zainab</span>. All rights reserved.
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                Crafted with passion and dedication
              </p>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-2 font-semibold">
                Built with <FaHeart className="inline text-rose-500 dark:text-rose-400 mx-1" size={14} /> using:
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-end">
                {['Next.js', 'React', 'Tailwind CSS', 'MongoDB'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-bold border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-lg"
            >
              <span>Back to Top</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
