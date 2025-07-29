import { Card, Button } from '@floatui/react';

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--color-projects-bg)] text-white max-w-6xl mx-auto px-6 py-20 rounded-xl shadow-lg"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-[var(--color-primary)]">
        Projects
      </h2>

      <div className="space-y-12">
        {/* Web Development */}
        <Card className="p-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="text-2xl font-semibold text-[var(--color-accent)] mb-6">
            Web Development (React.js)
          </h3>
          <ul className="list-disc list-inside space-y-3 text-white/80">
            <li>
              <strong>Netflix Clone:</strong> Streaming interface clone with
              custom UI and routing
            </li>
            <li>
              <strong>YouTube Clone:</strong> Video platform clone with search
              and recommendations
            </li>
            <li>
              <strong>Gym App:</strong> Fitness tracker and workout planner
            </li>
            <li>
              <strong>To-Do List App:</strong> Task management app with filters
              and status control
            </li>
          </ul>
          <Button
            variant="primary"
            className="mt-6 bg-[var(--color-accent)] hover:bg-pink-600 transition duration-300"
          >
            View More
          </Button>
        </Card>

        {/* Game Development */}
        <Card className="p-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
            Game Development
          </h3>
          <ul className="list-disc list-inside space-y-3 text-white/80">
            <li>
              <strong>Dot and Boxes:</strong> Classic strategy game built with
              interactive UI
            </li>
            <li>
              <strong>Dice Rolling Game:</strong> Python-based random number
              game
            </li>
            <li>
              <strong>Number Guessing Game:</strong> Terminal-based Python game
              with logic handling
            </li>
          </ul>
          <Button
            variant="primary"
            className="mt-6 bg-[var(--color-primary)] hover:bg-yellow-500 transition duration-300"
          >
            View More
          </Button>
        </Card>

        {/* Python Projects */}
        <Card className="p-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="text-2xl font-semibold text-[var(--color-accent)] mb-6">
            Python Projects
          </h3>
          <ul className="list-disc list-inside space-y-3 text-white/80">
            <li>
              <strong>QR Code Generator:</strong> Generate scannable codes for
              links/text
            </li>
            <li>
              <strong>Password Manager:</strong> Securely store and retrieve
              login credentials
            </li>
            <li>
              <strong>Automated File Backup:</strong> Schedule-based backup
              system
            </li>
            <li>
              <strong>Budget Tracker App:</strong> Track expenses and visualise
              spending
            </li>
            <li>
              <strong>Language Learning App:</strong> Vocabulary practice with
              spaced repetition
            </li>
          </ul>
          <Button
            variant="primary"
            className="mt-6 bg-[var(--color-accent)] hover:bg-pink-600 transition duration-300"
          >
            View More
          </Button>
        </Card>

        {/* AI & ML Projects */}
        <Card className="p-6 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-6">
            Artificial Intelligence & Machine Learning
          </h3>
          <ul className="list-disc list-inside space-y-3 text-white/80">
            <li>
              <strong>Chatbot with LLMs:</strong> Conversational agent using
              large language models
            </li>
            <li>
              <strong>AI Agent:</strong> Task-driven autonomous assistant
            </li>
            <li>
              <strong>Resume Critiquer:</strong> AI-powered resume feedback
              generator
            </li>
            <li>
              <strong>Image Classifier:</strong> AI model for recognising image
              categories
            </li>
            <li>
              <strong>Smart Voice Assistant:</strong> Voice-activated ML system
              with command execution
            </li>
          </ul>
          <Button
            variant="primary"
            className="mt-6 bg-[var(--color-primary)] hover:bg-yellow-500 transition duration-300"
          >
            View More
          </Button>
        </Card>
      </div>
    </section>
  );
}
