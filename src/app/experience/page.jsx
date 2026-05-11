'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ExperiencePageFloatDecor = dynamic(() => import('@/components/decor/ExperiencePageFloatDecor'), {
  ssr: false,
  loading: () => null,
});

export default function Experience() {
  const experiences = [
    {
      role: 'Social Media Manager',
      company: 'Rising Tech Solutions',
      duration: 'August 2025 – Present',
      type: 'Part-time',
      description:
        'Led and executed multi-platform social strategies across LinkedIn, Instagram, and Facebook to grow the brand and deepen engagement.',
      responsibilities: [
        'Led and executed multi-platform social media strategies across LinkedIn, Instagram, and Facebook to drive brand growth and engagement.',
        'Planned, created, and scheduled high-performing content aligned with marketing objectives and audience insights.',
        'Monitored KPIs and optimized campaigns through data-driven decision-making.',
        'Collaborated with internal teams to enhance digital presence and campaign effectiveness.',
      ],
      skills: ['LinkedIn', 'Instagram', 'Facebook', 'Content Strategy', 'KPIs', 'Campaign Optimization'],
    },
    {
      role: 'Social Media Manager',
      company: 'Shield Pro Home Warranty (US)',
      duration: 'August 2025 – Present',
      type: 'Part-time',
      description:
        'Social media management for a US-based home warranty company—strategy, content, and performance reporting.',
      responsibilities: [
        'Executed multi-platform social strategies tailored to US audiences and brand positioning.',
        'Planned and scheduled content aligned with marketing goals and lead-generation objectives.',
        'Tracked KPIs and refined campaigns using analytics and platform insights.',
        'Coordinated with stakeholders to strengthen digital presence and campaign results.',
      ],
      skills: ['Social Media Strategy', 'Content Planning', 'Analytics', 'Brand Awareness'],
    },
    {
      role: 'Social Media Manager',
      company: 'Tidy Cleaning Champs (US)',
      duration: 'December 2025 – Present',
      type: 'Part-time',
      description:
        'Social media management for a US-based cleaning services brand—visibility, engagement, and consistent brand storytelling.',
      responsibilities: [
        'Built and maintained content calendars across major social platforms.',
        'Developed posts and campaigns aligned with service offerings and local market positioning.',
        'Monitored engagement and reach to guide iterative improvements.',
        'Partnered with internal teams on promotions, launches, and reputation-focused messaging.',
      ],
      skills: ['Social Media Management', 'Community Engagement', 'Content Creation', 'Reporting'],
    },
    {
      role: 'AI & Full-Stack Development Intern (Hybrid)',
      company: 'Meraki Matrix (Pvt.) Ltd.',
      duration: 'June 2025 – October 2025',
      type: 'Internship',
      description:
        'Hybrid internship contributing to AI-driven and full-stack development with React, Node, MongoDB, and Python.',
      responsibilities: [
        'Contributed to AI-driven and full-stack web application development using React.js, Node.js, MongoDB, and Python.',
        'Built a smart analytics dashboard with predictive AI capabilities, integrating machine learning with intuitive UI/UX.',
        'Collaborated cross-functionally to ensure seamless backend–frontend integration.',
        'Demonstrated strong problem-solving, adaptability, and innovation in fast-paced environments.',
      ],
      skills: ['React.js', 'Node.js', 'MongoDB', 'Python', 'Machine Learning', 'UI/UX'],
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Pursue Today',
      duration: 'June 2025 – August 2025',
      type: 'Internship',
      description:
        'Full-stack delivery with modern JavaScript tooling, DevOps automation, and LLM-related project work.',
      responsibilities: [
        'Developed full-stack web applications using JavaScript, React, Node.js, and Python.',
        'Implemented CI/CD pipelines and automated deployments using DevOps tools.',
        'Worked on projects involving large language models (LLMs) and generative AI applications.',
        'Collaborated within agile teams to deliver scalable, production-ready solutions.',
      ],
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'CI/CD', 'DevOps', 'LLMs'],
    },
    {
      role: 'Operations & Business Analytics Intern',
      company: 'Aura Active',
      duration: 'March 2025 – May 2025',
      type: 'Internship',
      description:
        'Operations analytics internship focused on inventory, sales, and supplier insights to support planning and forecasting.',
      responsibilities: [
        'Analyzed operational data related to inventory management, sales trends, and supplier performance to support data-driven planning.',
        'Developed dashboards and reports for forecasting and workflow optimization using analytical and visualization tools.',
        'Applied business analytics concepts to enhance efficiency, accuracy, and strategic alignment across operations.',
        'Recognized for professionalism, adaptability, and analytical rigor in a results-driven environment.',
      ],
      skills: ['Operations Analytics', 'Forecasting', 'Dashboards', 'Data Visualization', 'Business Analytics'],
    },
    {
      role: 'Operations & Business Analytics Intern',
      company: 'The Cartel Foods (Gloria Jean’s Coffee)',
      duration: 'January 2024 – February 2025',
      type: 'Internship',
      description:
        'Supported operations with analytics on inventory, sales, and suppliers; delivered dashboards and forecasting inputs.',
      responsibilities: [
        'Supported operational decision-making through inventory analysis, sales performance tracking, and supplier evaluation.',
        'Utilized Excel, Google Workspace, and data visualization tools to generate actionable insights and performance dashboards.',
        'Applied business intelligence and demand forecasting techniques to improve operational efficiency and data accuracy.',
        'Assisted in process optimization initiatives aligned with organizational goals and growth strategies.',
      ],
      skills: ['Excel', 'Google Workspace', 'Data Visualization', 'Business Intelligence', 'Forecasting'],
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
      <ExperiencePageFloatDecor />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={false}
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
              initial={false}
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
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl mt-16"
        >
          <div className="grid md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-amber-400 mb-2">8+</div>
              <div className="text-gray-300 font-semibold">Roles & Projects</div>
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
          initial={false}
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
