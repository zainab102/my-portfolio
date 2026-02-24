'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      role: 'CEO & Founder',
      company: 'Zentrix Media by ZT',
      duration: 'Feb 2026 – Present',
      type: 'Founder',
      description:
        'Leading a media and growth-focused company, overseeing business strategy, client partnerships, and execution across digital channels.',
      responsibilities: [
        'Define company vision, service offerings, and quarterly growth roadmap',
        'Lead client acquisition, communication, and account strategy',
        'Oversee delivery pipelines across branding, content, and performance marketing',
        'Manage team workflows, quality assurance, and reporting standards',
        'Scale operations through repeatable playbooks and automation',
      ],
      skills: ['Leadership', 'Business Strategy', 'Client Management', 'Operations', 'Growth Marketing'],
    },
    {
      role: 'Social Media Manager',
      company: 'Rising Tech Solutions Pvt Limited',
      duration: 'Aug 2025 – Feb 2026',
      type: 'Part-time',
      description:
        'Managed social media campaigns, content planning, and analytics for multiple brands before transitioning to full-time founder responsibilities.',
      responsibilities: [
        'Built and executed multi-platform content strategies',
        'Planned editorial calendars and campaign rollouts',
        'Tracked KPI performance and optimized engagement',
        'Coordinated with design teams for visual-first campaigns',
        'Improved consistency in posting cadence and brand messaging',
      ],
      skills: ['Social Media Strategy', 'Content Planning', 'Analytics', 'SEO', 'Brand Messaging'],
    },
    {
      role: 'AI & Full-Stack Development Intern',
      company: 'Meraki Matrix Pvt Limited',
      duration: 'Jun 2025 – Oct 2025',
      type: 'Internship',
      description:
        'Contributed to full-stack and AI-powered projects, combining frontend implementation with backend integrations and analytics.',
      responsibilities: [
        'Built UI components and interactive modules in React.js',
        'Implemented backend API flows with Node.js and MongoDB',
        'Supported AI-assisted features and prediction-oriented dashboards',
        'Collaborated across design and engineering to improve usability',
        'Maintained project documentation and sprint deliverables',
      ],
      skills: ['React.js', 'Node.js', 'MongoDB', 'AI Integration', 'UI/UX Collaboration'],
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Pursue Today',
      duration: 'Jun 2025 – Aug 2025',
      type: 'Internship',
      description:
        'Developed full-stack web applications and participated in deployment workflows with AI-centric feature integrations.',
      responsibilities: [
        'Built web features with JavaScript and React',
        'Implemented backend logic and service integration',
        'Supported CI/CD and deployment automation tasks',
        'Worked on LLM-based and generative AI experiments',
        'Collaborated in agile planning and sprint execution',
      ],
      skills: ['JavaScript', 'React.js', 'Node.js', 'Python', 'CI/CD'],
    },
    {
      role: 'Operations & Business Analytics Intern',
      company: 'The Cartel Foods (Gloria Jean’s Coffee)',
      duration: 'Jan 2024 – Feb 2025',
      type: 'Internship',
      description:
        'Supported data-backed operational decisions through inventory, supplier, and sales analysis with reporting dashboards.',
      responsibilities: [
        'Tracked inventory movement and operational efficiency',
        'Analyzed sales trends and forecasted demand',
        'Supported supplier evaluation and process improvement',
        'Created dashboards and reports for decision support',
        'Improved consistency of operational data records',
      ],
      skills: ['Operations Analysis', 'Excel', 'Google Sheets', 'Reporting', 'Forecasting'],
    },
    {
      role: 'Website Owner & Blogger',
      company: 'ZainabEdu.com',
      duration: '2024 – Present',
      type: 'Personal Project',
      description:
        'Manage and publish content focused on mental health and fitness, supported by SEO and analytics-based content strategy.',
      responsibilities: [
        'Write and publish educational blog content',
        'Apply SEO practices for discoverability and growth',
        'Monitor traffic trends and engagement behavior',
        'Refine content strategy using analytics insights',
        'Maintain site updates and content calendar',
      ],
      skills: ['Content Writing', 'SEO', 'WordPress', 'Analytics', 'Content Strategy'],
    },
  ];

  return (
    <section id="experience" className="bg-projects text-gray-900 py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 3}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          >
            <div className="text-lg animate-wing-flutter drop-shadow-sm">🦋</div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="section-divider mx-auto mt-4 w-24 h-1 bg-gradient-to-r from-amber-600 to-rose-600 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l-2 border-gray-300 ml-8 md:ml-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-4 md:-left-6 top-4 w-6 h-6 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full border-2 border-white z-10"></div>

              {/* Experience Card */}
              <div className="ml-8 md:ml-12 bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-6 md:p-8 light-shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-1">{exp.role}</h3>
                    <p className="text-lg font-bold text-gray-700 mb-1">{exp.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-700">
                      <span>{exp.duration}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border-2 ${
                        exp.type === 'Full-time' ? 'bg-green-200 text-green-800 border-green-300' :
                        exp.type === 'Internship' ? 'bg-blue-200 text-blue-800 border-blue-300' :
                        exp.type === 'Contract' ? 'bg-yellow-200 text-yellow-800 border-yellow-300' :
                        exp.type === 'Part-time' ? 'bg-purple-200 text-purple-800 border-purple-300' :
                        'bg-gray-200 text-gray-800 border-gray-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-800 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">Key Responsibilities:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {exp.responsibilities.map((res, i) => (
                      <li key={i}>{res}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-gray-800 mb-2">Skills & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 bg-white/90 border border-gray-300 rounded-full text-xs font-medium hover:bg-gray-100 hover:scale-105 transition-all duration-200">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl mt-16"
        >
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">6+</div>
              <div className="text-gray-300 font-semibold">Professional Roles</div>
            </div>
            <div>
              <div className="text-4xl font-black text-rose-400 mb-2">4+</div>
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
            <div>
              <div className="text-4xl font-black text-purple-400 mb-2">10+</div>
              <div className="text-gray-300 font-semibold">Key Projects</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
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
