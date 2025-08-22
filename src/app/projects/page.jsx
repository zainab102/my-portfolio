'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Projects() {
  // Array of project objects with details, including background gradients and colors for styling
  const projects = [
    // Web Development Projects
    {
      title: 'Netflix Clone',
      description: 'Streaming interface clone with custom UI and routing',
      category: 'Web Development',
      tech: ['React.js', 'CSS3', 'Firebase'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-red-50 to-pink-50',        // Gradient background colors for thumbnail
      borderColor: 'border-red-200',            // Border color for card
      textColor: 'text-red-900',                // Text color for title and accents
      icon: '📺',                               // Emoji icon representing project
    },
    {
      title: 'YouTube Clone',
      description: 'Video platform clone with search and recommendations',
      category: 'Web Development',
      tech: ['React.js', 'CSS3', 'Firebase'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      textColor: 'text-red-900',
      icon: '🎥',
    },
    {
      title: 'Gym App',
      description: 'Fitness tracker and workout planner',
      category: 'Web Development',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      link: '#',
      status: 'In Progress',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      icon: '💪',
    },
    {
      title: 'To-Do List App',
      description: 'Task management app with filters and status control',
      category: 'Web Development',
      tech: ['React.js', 'CSS3', 'LocalStorage'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      icon: '📝',
    },
    // Game Development Projects
    {
      title: 'Dot and Boxes',
      description: 'Classic strategy game built with interactive UI',
      category: 'Game Development',
      tech: ['JavaScript', 'HTML', 'CSS'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-orange-50 to-rose-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-900',
      icon: '🎮',
    },
    {
      title: 'Dice Rolling Game',
      description: 'Python-based random number game',
      category: 'Game Development',
      tech: ['Python', 'Random Module'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      icon: '🎲',
    },
    {
      title: 'Number Guessing Game',
      description: 'Terminal-based Python game with logic handling',
      category: 'Game Development',
      tech: ['Python'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-indigo-50 to-purple-50',
      borderColor: 'border-indigo-200',
      textColor: 'text-indigo-900',
      icon: '🔢',
    },
    // Python Projects
    {
      title: 'Language Learning App',
      description: 'Vocabulary practice with spaced repetition',
      category: 'Python Projects',
      tech: ['Python', 'Tkinter'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-yellow-50 to-amber-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      icon: '📚',
    },
    {
      title: 'QR Code Generator',
      description: 'Generate scannable codes for links or text',
      category: 'Python Projects',
      tech: ['Python', 'qrcode'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      icon: '🔗',
    },
    {
      title: 'Password Manager',
      description: 'Securely store and retrieve login credentials',
      category: 'Python Projects',
      tech: ['Python', 'SQLite', 'Encryption'],
      link: '#',
      status: 'In Progress',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      icon: '🔒',
    },
    {
      title: 'Automated File Backup',
      description: 'Schedule-based backup system',
      category: 'Python Projects',
      tech: ['Python', 'OS', 'Scheduler'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      icon: '💾',
    },
    {
      title: 'Budget Tracker App',
      description: 'Track expenses and visualise spending',
      category: 'Python Projects',
      tech: ['Python', 'Matplotlib', 'Pandas'],
      link: '#',
      status: 'In Progress',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      icon: '💰',
    },
    // AI & ML Projects
    {
      title: 'Chatbot with LLMs',
      description: 'Conversational agent using large language models',
      category: 'AI & ML',
      tech: ['Python', 'OpenAI API', 'NLP'],
      link: '#',
      status: 'In Progress',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      icon: '🤖',
    },
    {
      title: 'AI Agent',
      description: 'Task-driven autonomous assistant',
      category: 'AI & ML',
      tech: ['Python', 'AI', 'Automation'],
      link: '#',
      status: 'Planning',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      icon: '🧠',
    },
    {
      title: 'Resume Critiquer',
      description: 'AI-powered resume feedback generator',
      category: 'AI & ML',
      tech: ['Python', 'NLP', 'OpenAI API'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      icon: '📄',
    },
    {
      title: 'Image Classifier',
      description: 'AI model for recognising image categories',
      category: 'AI & ML',
      tech: ['Python', 'TensorFlow', 'Keras'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      icon: '🖼️',
    },
    {
      title: 'Smart Voice Assistant',
      description: 'Voice-activated ML system with command execution',
      category: 'AI & ML',
      tech: ['Python', 'Speech Recognition', 'ML'],
      link: '#',
      status: 'Planning',
      bgColor: 'from-orange-50 to-rose-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-900',
      icon: '🎙️',
    },
    // Data Analytics Projects
    {
      title: 'Sales Dashboard',
      description: 'Visualize sales data',
      category: 'Data Analytics',
      tech: ['Python', 'Plotly', 'Pandas'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-900',
      icon: '📊',
    },
    {
      title: 'Customer Segmentation',
      description: 'Group customers based on behavior',
      category: 'Data Analytics',
      tech: ['Python', 'Pandas', 'Scikit-learn'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-purple-50 to-indigo-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-900',
      icon: '👥',
    },
    {
      title: 'Website Traffic Analysis',
      description: 'Study visitor patterns',
      category: 'Data Analytics',
      tech: ['Python', 'Matplotlib', 'Pandas'],
      link: '#',
      status: 'In Progress',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-900',
      icon: '🌐',
    },
    {
      title: 'Social Media Sentiment',
      description: 'Analyze post moods',
      category: 'Data Analytics',
      tech: ['Python', 'NLP', 'Pandas'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-amber-50 to-yellow-50',
      borderColor: 'border-amber-200',
      textColor: 'text-amber-900',
      icon: '💬',
    },
    {
      title: 'Expense Analysis',
      description: 'Track and categorize spending',
      category: 'Data Analytics',
      tech: ['Python', 'Pandas', 'Matplotlib'],
      link: '#',
      status: 'Completed',
      bgColor: 'from-orange-50 to-rose-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-900',
      icon: '💵',
    },
  ];

  // Categories for filtering projects
  const categories = [
    'All',
    'Web Development',
    'Game Development',
    'Python Projects',
    'AI & ML',
    'Data Analytics',
  ];

  // State for currently active category filter
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on active category or show all if 'All' is selected
  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Project statistics shown as cards
  const projectStats = [
    {
      number: '20+',
      label: 'Projects Completed',
      icon: '🚀',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      number: '8+',
      label: 'Tech Stacks',
      icon: '⚡',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      number: '5+',
      label: 'Categories',
      icon: '🎯',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      number: '100%',
      label: 'Learning Focus',
      icon: '📚',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
    },
  ];

  // Current focus areas displayed
  const currentFocus = [
    {
      title: 'AI Integration Projects',
      icon: '🤖',
      description: 'Exploring LLMs and generative AI for web applications',
      bg: 'from-purple-50 to-indigo-50',
      border: 'border-purple-200',
      text: 'text-purple-900',
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      description: 'Building cross-platform mobile applications',
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-200',
      text: 'text-green-900',
    },
  ];

  return (
    <section
      id="projects"
      className="bg-projects text-gray-900 py-24 px-6 relative overflow-hidden"
    >
      {/* Animated butterflies in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`butterfly-${i}`}
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

      {/* Background blobs for subtle design */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-gradient-to-br from-yellow-200 to-amber-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-200 to-red-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black text-center mb-6 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        {/* Project Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {projectStats.map((stat, i) => (
            <div
              key={i}
              className={`${stat.bgColor} border-2 ${stat.borderColor} rounded-3xl p-6 text-center light-shadow-lg hover:light-shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className={`text-3xl font-black ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-700 font-semibold text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-3 light-shadow-xl">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                    activeCategory === c
                      ? 'bg-gradient-to-r from-amber-500 to-rose-500 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`group bg-gradient-to-r ${p.bgColor} border-2 ${p.borderColor} rounded-3xl overflow-hidden light-shadow-xl hover:light-shadow-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col h-full`}
              >
                {/* Colored thumbnail with project title */}
                <div
                  className={`relative h-48 flex items-center justify-center rounded-t-3xl bg-gradient-to-br ${p.bgColor} p-4`}
                >
                  <div className="absolute inset-0 bg-black/10 rounded-t-3xl pointer-events-none"></div>
                  <h3
                    className={`z-10 text-2xl font-extrabold tracking-tight text-center ${p.textColor} select-none`}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Project Info */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-700 text-sm mb-4 flex-1">
                    {p.description || 'Project description goes here.'}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(p.tech || []).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/90 text-gray-800 border border-gray-300 rounded-full text-xs font-bold hover:bg-white hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Status Badge */}
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                        p.status === 'Completed'
                          ? 'bg-green-200 text-green-800 border-green-300'
                          : p.status === 'In Progress'
                          ? 'bg-blue-200 text-blue-800 border-blue-300'
                          : 'bg-yellow-200 text-yellow-800 border-yellow-300'
                      }`}
                    >
                      {p.status || 'Planning'}
                    </span>
                  </div>

                  {/* View Project Button */}
                  {p.link && p.link !== '#' && (
                    <Link
                      href={p.link}
                      className="mt-4 w-full py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-bold rounded-xl text-center transition-all duration-300 transform hover:scale-105"
                    >
                      View Project →
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Working On Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <h3 className="text-2xl font-black text-gray-800 text-center mb-6">
            Currently Working On
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentFocus.map((f, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${f.bg} border ${f.border} rounded-2xl p-6`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{f.icon}</span>
                  <h4 className={`font-bold ${f.text}`}>{f.title}</h4>
                </div>
                <p className={`${f.text} text-sm`}>{f.description}</p>
              </div>
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