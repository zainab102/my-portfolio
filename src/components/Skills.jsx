'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Skills() {
  // Featured technical skills with progress levels
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

  // Featured soft skills with strength levels
  const featuredSoftSkills = [
    { name: "Strategic Thinking", strength: "Expert", icon: "🧠", color: "blue" },
    { name: "Project Management", strength: "Advanced", icon: "📋", color: "green" },
    { name: "Digital Marketing", strength: "Expert", icon: "📈", color: "purple" },
    { name: "Leadership", strength: "Advanced", icon: "👑", color: "amber" },
    { name: "Creative Communication", strength: "Expert", icon: "💬", color: "pink" },
    { name: "Cross-Cultural Collaboration", strength: "Advanced", icon: "🌍", color: "cyan" }
  ];

  return (
    <section id="skills" className="bg-skills text-gray-900 py-24 px-6 relative overflow-hidden">
      {/* Background butterflies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            <div className="text-lg animate-wing-flutter filter drop-shadow-sm">🦋</div>
          </div>
        ))}
      </div>

      {/* Background blobs */}
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

        {/* Skills Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 mb-12 light-shadow-xl grid md:grid-cols-4 gap-8 text-center"
        >
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
        </motion.div>

        {/* Technical Skills Summary (compressed) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl mb-12"
        >
          <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">💻</span>
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {featuredTechnicalSkills.map(({ name, level, icon, category }) => (
              <div key={name} className="flex justify-between items-center bg-gray-50 p-2 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span>{name}</span>
                </div>
                <span>{level}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Summary (compressed) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-lg border-2 border-gray-200 rounded-3xl p-8 light-shadow-xl mb-12"
        >
          <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
            <span className="text-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center">🧠</span>
            Soft Skills & Leadership
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            {featuredSoftSkills.map(({ name, strength, icon }) => (
              <div key={name} className="flex justify-between items-center bg-gray-50 p-2 rounded-md shadow-sm">
                <div className="flex items-center gap-2">
                  <span>{icon}</span>
                  <span>{name}</span>
                </div>
                <span className={`font-semibold ${
                  strength === 'Expert' ? 'text-green-700' :
                  strength === 'Advanced' ? 'text-blue-700' : 'text-yellow-700'
                }`}>
                  {strength}
                </span>
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
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold text-lg rounded-xl transition-transform transform hover:scale-105 light-shadow-xl"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}