'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  // Show only featured projects on homepage
  const featuredProjects = [
    {
      title: 'Netflix/YouTube Clone',
      description: 'Modern streaming interface clone with responsive design, user authentication, and video playback features mimicking popular streaming platforms.',
      category: 'Web Development',
      tech: ['React', 'CSS3', 'REST API', 'Firebase'],
      link: '#',
      status: 'Completed',
      image: 'streaming-platform',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-900',
      icon: '📺'
    },
    {
      title: 'AI-Powered Chatbot',
      description: 'Intelligent conversational agent using large language models with natural language processing and context-aware responses.',
      category: 'AI & ML',
      tech: ['Python', 'OpenAI API', 'NLP', 'Flask'],
      link: '#',
      status: 'In Progress',
      image: 'ai-chatbot',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      icon: '🤖'
    },
    {
      title: 'Interactive Sales Dashboard',
      description: 'Comprehensive data visualization dashboard with real-time analytics, interactive charts, and business intelligence insights.',
      category: 'Data Analytics',
      tech: ['Python', 'Dash', 'Plotly', 'Pandas'],
      link: '#',
      status: 'Completed',
      image: 'sales-dashboard',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      icon: '📊'
    },
    {
      title: 'Smart Fitness Tracker',
      description: 'Comprehensive fitness application with workout planning, progress tracking, nutrition monitoring, and personalized recommendations.',
      category: 'Mobile App',
      tech: ['React Native', 'Node.js', 'MongoDB', 'APIs'],
      link: '#',
      status: 'In Progress',
      image: 'fitness-app',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      icon: '💪'
    },
    {
      title: 'Smart Voice Assistant',
      description: 'Voice-controlled AI assistant with speech recognition, natural language understanding, and smart home integration capabilities.',
      category: 'AI & IoT',
      tech: ['Python', 'Speech Recognition', 'IoT', 'APIs'],
      link: '#',
      status: 'Planning',
      image: 'voice-assistant',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      icon: '🎙️'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and modern shopping experience.',
      category: 'Full Stack',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind'],
      link: '#',
      status: 'In Progress',
      image: 'ecommerce-platform',
      bgColor: 'from-orange-50 to-rose-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-900',
      icon: '🛒'
    }
  ];

  const categories = ['All', 'Web Development', 'AI & ML', 'Data Analytics', 'Mobile App', 'Full Stack'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? featuredProjects.slice(0, 6)
    : featuredProjects.filter(project => project.category === activeCategory).slice(0, 4);

  const projectStats = [
    { number: '20+', label: 'Projects Completed', icon: '🚀', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    { number: '8+', label: 'Tech Stacks', icon: '⚡', color: 'text-purple-600', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
    { number: '5+', label: 'Categories', icon: '🎯', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    { number: '100%', label: 'Learning Focus', icon: '📚', color: 'text-amber-600', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' }
  ];

  return (
    <section id="projects" className="bg-projects text-gray-900 py-24 px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Section-specific butterflies */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`projects-butterfly-${i}`}
            className="absolute animate-float opacity-25"
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

      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
            Projects
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        {/* Project Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {projectStats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} border-2 ${stat.borderColor} rounded-3xl p-6 text-center light-shadow-lg hover:light-shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-black ${stat.color} mb-2`}>{stat.number}</div>
              <div className="text-gray-700 font-semibold text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-3 light-shadow-xl">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-2xl font-bold transition-all duration-300 text-sm ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`bg-gradient-to-r ${project.bgColor} border-2 ${project.borderColor} rounded-3xl overflow-hidden light-shadow-xl hover:light-shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full flex flex-col`}>
                {/* Project Image/Icon */}
                <div className="relative h-48 bg-gradient-to-br from-white/50 to-gray-100/50 flex items-center justify-center">
                  <img
                    src={`https://placehold.co/400x300/${project.borderColor.includes('red') ? 'ef4444' : project.borderColor.includes('purple') ? '8b5cf6' : project.borderColor.includes('blue') ? '3b82f6' : project.borderColor.includes('green') ? '10b981' : project.borderColor.includes('amber') ? 'f59e0b' : 'f97316'}/ffffff?text=${encodeURIComponent(project.title.slice(0, 15))}`}
                    alt={`${project.title} - ${project.description.slice(0, 50)}...`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Project Icon Overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl light-shadow">
                    {project.icon}
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      project.status === 'Completed' ? 'bg-green-200 text-green-800 border-green-300' :
                      project.status === 'In Progress' ? 'bg-blue-200 text-blue-800 border-blue-300' :
                      'bg-yellow-200 text-yellow-800 border-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-xs font-bold border ${project.textColor} bg-white/80`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-black ${project.textColor} mb-3 group-hover:scale-105 transition-transform leading-tight`}>
                      {project.title}
                    </h3>

                    <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-auto">
                    <h4 className="text-sm font-bold text-gray-800 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/90 text-gray-800 border border-gray-300 rounded-full text-xs font-bold hover:bg-white hover:scale-105 transition-all duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Project Button */}
                    {project.link !== '#' && (
                      <button className="w-full py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105">
                        View Project →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl"
        >
          <h3 className="text-3xl font-black text-center text-amber-400 mb-8">Project Categories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h4 className="text-xl font-bold text-blue-400 mb-2">Web Development</h4>
              <p className="text-gray-300 text-sm">Modern, responsive web applications with cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h4 className="text-xl font-bold text-purple-400 mb-2">AI & Machine Learning</h4>
              <p className="text-gray-300 text-sm">Intelligent systems with natural language processing and automation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-xl font-bold text-green-400 mb-2">Data Analytics</h4>
              <p className="text-gray-300 text-sm">Interactive dashboards and business intelligence solutions</p>
            </div>
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <h3 className="text-2xl font-black text-gray-800 text-center mb-6">Currently Working On</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">🤖</span>
                <h4 className="font-bold text-purple-900">AI Integration Projects</h4>
              </div>
              <p className="text-purple-700 text-sm">Exploring LLMs and generative AI for web applications</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-3">📱</span>
                <h4 className="font-bold text-green-900">Mobile Development</h4>
              </div>
              <p className="text-green-700 text-sm">Building cross-platform mobile applications</p>
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
            href="/projects"
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 text-white font-bold text-xl rounded-xl transition-all duration-300 transform hover:scale-105 light-shadow-xl hover:shadow-2xl"
          >
            <span>View All Projects</span>
            <svg className="ml-4 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
