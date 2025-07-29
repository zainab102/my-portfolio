'use client';

export default function Skills() {
  const technicalSkills = [
    "HTML",
    "CSS",
    "JavaScript (Basics)",
    "React.js",
    "Node.js",
    "Python (Web & Automation)",
    "REST APIs",
    "SQL (MySQL, PostgreSQL)",
    "MongoDB",
    "Git & GitHub",
    "AWS/Azure (Basics)",
    "Docker & CI/CD",
    "AI & Machine Learning (LLMs, Generative AI)",
  ];

  const softSkills = [
    "Strategic Thinking",
    "Project Management (Agile)",
    "Digital Marketing & SEO",
    "Leadership & Team Coordination",
    "Creative Communication",
    "Time Management & Multitasking",
    "Cross-Cultural Collaboration",
    "Customer Service",
  ];

  return (
    <section id="skills" className="bg-[var(--color-skills-bg)] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[var(--color-primary)]">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-accent)]">
              Technical Skills
            </h3>
            <ul className="flex flex-wrap gap-3" aria-label="Technical Skills list">
              {technicalSkills.map((skill, idx) => (
                <li key={idx}>
                  <span
                    className="badge-solid cursor-default text-sm px-4 py-2 rounded-full"
                    aria-label={`Technical skill: ${skill}`}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-accent)]">
              Soft Skills
            </h3>
            <ul className="flex flex-wrap gap-3" aria-label="Soft Skills list">
              {softSkills.map((skill, idx) => (
                <li key={idx}>
                  <span
                    className="badge-outline cursor-default text-sm px-4 py-2 rounded-full"
                    aria-label={`Soft skill: ${skill}`}
                  >
                    {skill}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
