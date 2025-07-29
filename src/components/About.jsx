export default function About() {
  return (
    <section id="about" className="bg-[var(--color-section)] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
          About Me
        </h2>

        {/* Intro Paragraphs */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 text-lg">
            <p>
              I’m <strong>Zainab</strong>, a tech-driven Business Administration student at Royal Holloway, University of London,
              pursuing a career at the intersection of computer science and digital strategy. With hands-on experience in full stack development,
              UX/UI design, and AI-based projects, I’ve built a strong foundation in programming, automation, and user-centered design.
            </p>
            <p>
              My background also includes project management, digital marketing, and leadership roles in organizations like WWF and GrowBiz.
              Through continuous learning — ranging from Python and cloud tools to business intelligence and e-commerce — I combine creativity
              with technical problem-solving. I’m passionate about using technology to create meaningful, scalable impact across industries.
            </p>
          </div>

          {/* Education Card Style */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 space-y-6 shadow-xl">
            <h3 className="text-2xl font-semibold text-[var(--color-accent)]">Education</h3>
            <ul className="space-y-5 text-sm leading-relaxed">
              <li>
                <strong className="text-white">Royal Holloway, University of London</strong> — Bachelor of Business Administration (2023 – Present)<br />
                Strategic thinking, leadership, project management, and digital marketing. Projects emphasizing teamwork and global business awareness.
              </li>
              <li>
                <strong className="text-white">Web Educatorz</strong> — Full Stack Dev + AI/ML (2025 – 2026)<br />
                In-depth frontend/backend training (HTML, JS, React, Node, MongoDB), AI/ML projects for intelligent web apps.
              </li>
              <li>
                <strong className="text-white">Roots Millennium Future World School</strong> (2018 – 2023)<br />
                A Levels: Business, Urdu, Sociology | IGCSE: Physics, Chemistry, Computer Science
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
