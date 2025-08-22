'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Experience() {
  const experiences = [
    {
      role: 'Social Media Manager',
      company: 'Rising Tech Solutions Pvt Limited',
      duration: '2025 – Present',
      type: 'Part-time',
      description: 'Managing social media campaigns, content planning, and analytics for multiple brands. Increased engagement by 40%+ through strategic content and SEO-driven campaigns.',
      responsibilities: [
        'Developed and executed comprehensive social media strategies across platforms',
        'Created engaging content calendars aligned with brand voice and objectives',
        'Analyzed performance metrics and optimized campaigns for maximum ROI',
        'Collaborated with design and marketing teams to produce visually appealing content',
        'Managed influencer partnerships and brand collaborations',
        'Monitored brand mentions and online reputation',
        'Planned paid ad campaigns to increase reach and engagement'
      ],
      skills: ['Social Media Strategy', 'Content Creation', 'Analytics', 'SEO', 'Brand Management', 'Advertising']
    },
    {
      role: 'Social Media Manager',
      company: 'SHIELDPRO',
      duration: '2025 – Present',
      type: 'Part-time',
      description: 'Managing social media presence for an appliance warranty company, focusing on customer engagement, lead generation, and brand awareness.',
      responsibilities: [
        'Developed brand awareness campaigns for appliance warranty services',
        'Created educational content about product protection and warranties',
        'Managed customer service inquiries through social media channels',
        'Implemented lead generation strategies through social platforms',
        'Analyzed metrics and optimized campaigns for higher conversions'
      ],
      skills: ['Customer Service', 'Lead Generation', 'Educational Content', 'Brand Awareness', 'Analytics']
    },
    {
      role: 'Social Media Manager',
      company: 'rent.outfits_',
      duration: '2025 – Present',
      type: 'Full-time',
      description: 'Managing operations and social media for a fashion rental platform, overseeing inventory, marketing, and customer relations.',
      responsibilities: [
        'Coordinated rental inventory and logistics operations',
        'Managed customer relationships and booking systems',
        'Developed marketing and social media strategies for fashion rental services',
        'Optimized operational workflows for better efficiency',
        'Engaged with customers to improve experience and retention'
      ],
      skills: ['Operations Management', 'Customer Relations', 'Inventory Management', 'Marketing', 'Social Media']
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Pursue Today',
      duration: '2025',
      type: 'Internship',
      description: 'Developed interactive web apps integrating AI-powered features. Collaborated with design and marketing teams to optimize UX for campaign landing pages.',
      responsibilities: [
        'Built responsive web applications using modern frontend frameworks',
        'Integrated AI-powered features to enhance user experience',
        'Collaborated with cross-functional teams on UX optimization',
        'Developed and maintained campaign landing pages',
        'Implemented best practices for web performance and SEO'
      ],
      skills: ['React.js', 'Node.js', 'AI Integration', 'UX Design', 'Web Performance']
    },
    {
      role: 'UX/UI Design Intern',
      company: 'Meraki Matrix Pvt Limited',
      duration: '2025',
      type: 'Internship',
      description: 'Conducted user research, wireframing, prototyping, and collaborated with developers for seamless design integration.',
      responsibilities: [
        'Conducted comprehensive user research and usability testing',
        'Created wireframes, prototypes, and high-fidelity designs',
        'Collaborated with development teams for design implementation',
        'Developed design systems and style guides',
        'Optimized user journeys and interface designs'
      ],
      skills: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing']
    },
    {
      role: 'Digital Marketing Associate',
      company: 'GrowBiz & BizSkills, Forever Living Products',
      duration: '2021 – 2024',
      type: 'Part-time',
      description: 'Executed social media campaigns, managed influencer partnerships, and optimized content performance using analytics tools.',
      responsibilities: [
        'Executed multi-platform digital marketing campaigns',
        'Managed relationships with micro and macro influencers',
        'Analyzed campaign performance using Google Analytics and social media insights',
        'Created compelling marketing content and copy',
        'Optimized conversion funnels and landing pages'
      ],
      skills: ['Digital Marketing', 'Influencer Marketing', 'Google Analytics', 'Content Marketing', 'Conversion Optimization']
    },
    {
      role: 'Website Owner & Blogger',
      company: 'ZainabEdu.com',
      duration: '2024 – Present',
      type: 'Personal Project',
      description: 'Managed a mental health and fitness blog, using analytics to optimize content and engagement.',
      responsibilities: [
        'Created and published regular content on mental health and fitness topics',
        'Implemented SEO strategies to increase organic traffic',
        'Engaged with community through comments and social media',
        'Analyzed website performance and user behavior',
        'Monetized content through affiliate marketing and partnerships'
      ],
      skills: ['Content Writing', 'SEO', 'WordPress', 'Google Analytics', 'Affiliate Marketing']
    }
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
