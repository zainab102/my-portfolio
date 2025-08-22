'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Skills() {
  const featuredTechnicalSkills = [
    { name: "JavaScript", level: 85, category: "Frontend", icon: "🟨", color: "yellow" },
    { name: "React.js", level: 80, category: "Frontend", icon: "⚛️", color: "blue" },
    { name: "Node.js", level: 75, category: "Backend", icon: "🟢", color: "green" },
    { name: "Python", level: 90, category: "Programming", icon: "🐍", color: "indigo" },
    { name: "MongoDB", level: 70, category: "Database", icon: "🍃", color: "emerald" },
    { name: "AI & ML", level: 65, category: "Emerging", icon: "🤖", color: "purple" },
    { name: "Git & GitHub", level: 85, category: "DevOps", icon: "📝", color: "gray" },
    { name: "REST APIs", level: 80, category: "Backend", icon: "🔗", color: "orange" }
  ];

  const featuredSoftSkills = [
    { name: "Strategic Thinking", strength: "Expert", icon: "🧠", color: "blue" },
    { name: "Project Management", strength: "Advanced", icon: "📋", color: "green" },
    { name: "Digital Marketing", strength: "Expert", icon: "📈", color: "purple" },
    { name: "Leadership", strength: "Advanced", icon: "👑", color: "amber" },
    { name: "Creative Communication", strength: "Expert", icon: "💬", color: "pink" },
    { name: "Cross-Cultural Collaboration", strength: "Advanced", icon: "🌍", color: "cyan" }
  ];

  const skillCategories = [
    {
      category: "Frontend Development",
      icon: "🎨",
      count: 6,
      bgColor: "from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-900",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend Development", 
      icon: "⚙️",
      count: 5,
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200", 
      textColor: "text-green-900",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Authentication"]
    },
    {
      category: "Data & AI",
      icon: "🤖",
      count: 4,
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-900", 
      skills: ["Python", "Machine Learning", "Data Analysis", "AI Integration"]
    }
  ];

  return (
    <section id="skills" className="bg-skills text-gray-900 py-24 px-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Section-specific butterflies */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`skills-butterfly-${i}`}
            className="absolute animate-float opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 4}s`,
              animationDuration: `${14 + Math.random() * 8}s`,
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
        <div className="absolute top-1/3 right-1/5 w-72 h-72 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
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
            Skills & Expertise
          </h2>
          <div className="section-divider mx-auto mb-12" />
        </motion.div>

        {/* Skills Overview Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-200">
              <div className="text-4xl mb-2">💻</div>
              <div className="text-3xl font-black text-blue-700 mb-1">15+</div>
              <div className="text-blue-600 font-semibold">Technical Skills</div>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
              <div className="text-4xl mb-2">🧠</div>
              <div className="text-3xl font-black text-green-700 mb-1">8+</div>
              <div className="text-green-600 font-semibold">Soft Skills</div>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-200">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-3xl font-black text-purple-700 mb-1">5+</div>
              <div className="text-purple-600 font-semibold">Tech Stacks</div>
            </div>
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-2xl border border-amber-200">
              <div className="text-4xl mb-2">📈</div>
              <div className="text-3xl font-black text-amber-700 mb-1">3+</div>
              <div className="text-amber-600 font-semibold">Years Learning</div>
            </div>
          </div>
        </motion.div>

        {/* Technical Skills with Progress */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
            <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">💻</span>
              </div>
              Technical Skills
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredTechnicalSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-5 hover:from-white hover:to-gray-50 hover:border-gray-300 transition-all duration-300 light-shadow hover:light-shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">{skill.name}</h4>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          skill.category === 'Frontend' ? 'bg-blue-100 text-blue-700' :
                          skill.category === 'Backend' ? 'bg-green-100 text-green-700' :
                          skill.category === 'Programming' ? 'bg-indigo-100 text-indigo-700' :
                          skill.category === 'Database' ? 'bg-emerald-100 text-emerald-700' :
                          skill.category === 'DevOps' ? 'bg-gray-100 text-gray-700' :
                          skill.category === 'Emerging' ? 'bg-purple-100 text-purple-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {skill.category}
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-black text-gray-700">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-3 rounded-full bg-gradient-to-r ${
                        skill.color === 'yellow' ? 'from-yellow-400 to-yellow-500' :
                        skill.color === 'blue' ? 'from-blue-400 to-blue-500' :
                        skill.color === 'green' ? 'from-green-400 to-green-500' :
                        skill.color === 'indigo' ? 'from-indigo-400 to-indigo-500' :
                        skill.color === 'emerald' ? 'from-emerald-400 to-emerald-500' :
                        skill.color === 'purple' ? 'from-purple-400 to-purple-500' :
                        skill.color === 'gray' ? 'from-gray-400 to-gray-500' :
                        'from-orange-400 to-orange-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl">
            <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white text-xl">🧠</span>
              </div>
              Soft Skills & Leadership
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredSoftSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="group bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-5 hover:from-white hover:to-gray-50 hover:border-gray-300 transition-all duration-300 light-shadow hover:light-shadow-lg hover:scale-105"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{skill.icon}</span>
                      <h4 className="font-bold text-gray-800 text-base leading-tight">{skill.name}</h4>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      skill.strength === 'Expert' ? 'bg-green-200 text-green-800 border border-green-300' :
                      skill.strength === 'Advanced' ? 'bg-blue-200 text-blue-800 border border-blue-300' :
                      'bg-yellow-200 text-yellow-800 border border-yellow-300'
                    }`}>
                      {skill.strength}
                    </span>
                    <div className={`w-3 h-3 rounded-full ${
                      skill.strength === 'Expert' ? 'bg-green-500' :
                      skill.strength === 'Advanced' ? 'bg-blue-500' :
                      'bg-yellow-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skill Categories Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${category.bgColor} border-2 ${category.borderColor} rounded-3xl p-6 light-shadow-xl hover:light-shadow-2xl transition-all duration-300 hover:scale-[1.02] group`}
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className={`text-2xl font-black ${category.textColor} group-hover:scale-105 transition-transform`}>
                  {category.category}
                </h3>
                <p className="text-gray-600 font-semibold">{category.count} Skills</p>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white/80 border border-gray-200 rounded-xl p-3 text-center hover:bg-white hover:scale-105 transition-all duration-200"
                  >
                    <span className="text-gray-800 font-semibold text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Learning & Growth Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-12 text-white light-shadow-xl"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-black text-rose-400 mb-4">Continuous Learning Journey</h3>
            <p className="text-xl text-gray-300">Always expanding my skillset and exploring new technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                <span className="mr-3">🎯</span>
                Currently Learning
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Advanced React Patterns</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="w-3/4 bg-cyan-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Machine Learning</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="w-2/3 bg-purple-400 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Cloud Technologies</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="w-1/2 bg-green-400 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-amber-400 mb-4 flex items-center">
                <span className="mr-3">🎓</span>
                Next Goals
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                  <span>AWS Cloud Certification</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  <span>Advanced Python for AI</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span>Mobile App Development</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  <span>Data Science Specialization</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl"
        >
          <h3 className="text-2xl font-black text-gray-800 text-center mb-6">What Makes Me Unique</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-purple-700 flex items-center">
                <span className="mr-3">🎨</span>
                Creative Problem Solving
              </h4>
              <p className="text-gray-700 leading-relaxed">
                I combine technical expertise with creative thinking to build solutions that are not just functional, but intuitive and user-friendly.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-green-700 flex items-center">
                <span className="mr-3">🌉</span>
                Bridge Builder
              </h4>
              <p className="text-gray-700 leading-relaxed">
                My business background helps me translate complex technical concepts into practical solutions that meet real-world needs.
              </p>
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
