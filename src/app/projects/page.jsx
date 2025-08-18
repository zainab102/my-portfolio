'use client';

import { useState } from 'react';
import { Card, Flex, Heading, Text, Button, Tabs } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

// Projects data categorized
const projectsData = {
  'Web Development (React.js)': [
    {
      title: 'Netflix/YouTube Clone',
      description: 'Streaming interface clone mimicking Netflix and YouTube features.',
      link: '#',
      tech: ['React', 'CSS', 'API'],
    },
    {
      title: 'Gym App',
      description: 'Fitness tracker and planner with workout schedules.',
      link: '#',
      tech: ['React', 'Hooks', 'TailwindCSS'],
    },
    {
      title: 'To-Do List App',
      description: 'Task manager with filters for organizing daily activities.',
      link: '#',
      tech: ['React', 'LocalStorage'],
    },
  ],
  'Game Development': [
    {
      title: 'Dot and Boxes',
      description: 'Classic strategy game with a grid-based gameplay.',
      link: '#',
      tech: ['JavaScript', 'Canvas'],
    },
    {
      title: 'Dice Rolling Game',
      description: 'Python random number game simulating dice rolls.',
      link: '#',
      tech: ['Python'],
    },
    {
      title: 'Number Guessing Game',
      description: 'Terminal-based Python game to guess random numbers.',
      link: '#',
      tech: ['Python'],
    },
  ],
  'Python Projects': [
    {
      title: 'QR Code Generator',
      description: 'Create scannable QR codes easily.',
      link: '#',
      tech: ['Python', 'qrcode'],
    },
    {
      title: 'Password Manager',
      description: 'Securely store login credentials.',
      link: '#',
      tech: ['Python', 'Cryptography'],
    },
    {
      title: 'Budget Tracker App',
      description: 'Track and visualize expenses for better finance management.',
      link: '#',
      tech: ['Python', 'Tkinter'],
    },
    {
      title: 'Language Learning App',
      description: 'Vocabulary practice to enhance language skills.',
      link: '#',
      tech: ['Python', 'Flask'],
    },
  ],
  'AI & Machine Learning Projects': [
    {
      title: 'Chatbot with LLMs',
      description: 'Conversational agent using large language models.',
      link: '#',
      tech: ['Python', 'OpenAI API'],
    },
    {
      title: 'Resume Critiquer',
      description: 'AI resume feedback and suggestions tool.',
      link: '#',
      tech: ['Python', 'NLP'],
    },
    {
      title: 'Image Classifier',
      description: 'Identify image categories with machine learning.',
      link: '#',
      tech: ['Python', 'TensorFlow'],
    },
    {
      title: 'Smart Voice Assistant',
      description: 'Voice command system for smart tasks.',
      link: '#',
      tech: ['Python', 'SpeechRecognition'],
    },
  ],
  'Data Analytics Projects': [
    {
      title: 'Sales Dashboard',
      description: 'Visualize sales data with interactive charts.',
      link: '#',
      tech: ['Python', 'Dash'],
    },
    {
      title: 'Customer Segmentation',
      description: 'Group customers for targeted marketing.',
      link: '#',
      tech: ['Python', 'scikit-learn'],
    },
    {
      title: 'Website Traffic Analysis',
      description: 'Study visitor patterns and behavior.',
      link: '#',
      tech: ['Python', 'Pandas'],
    },
    {
      title: 'Social Media Sentiment',
      description: 'Analyze moods of posts and comments.',
      link: '#',
      tech: ['Python', 'NLP'],
    },
    {
      title: 'Expense Analysis',
      description: 'Track and categorize spending habits.',
      link: '#',
      tech: ['Python', 'Matplotlib'],
    },
  ],
};

export default function Projects() {
  const categories = Object.keys(projectsData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Heading as="h2" size="8" className="text-center text-violet-400 mb-12">
          Projects
        </Heading>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeCategory === cat
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'bg-gray-800 text-gray-400 hover:bg-violet-700 hover:text-white'
              }`}
              aria-current={activeCategory === cat ? 'true' : 'false'}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData[activeCategory].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="bg-gray-900 hover:shadow-2xl transition-shadow duration-300 h-full"
                variant="classic"
                size="3"
              >
                <Flex direction="column" gap="4">
                  <Heading as="h3" size="5" color="violet">
                    {project.title}
                  </Heading>

                  <Text size="3" className="text-gray-300">
                    {project.description}
                  </Text>

                  <Flex wrap="wrap" gap="2" aria-label={`${project.title} technologies`}>
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-violet-700 text-white text-xs px-2 py-1 rounded-full select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </Flex>

                  {project.link !== '#' && (
                    <Button
                      asChild
                      variant="solid"
                      color="violet"
                      size="2"
                      className="mt-3 w-fit"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View project ${project.title}`}
                      >
                        View Project <ExternalLinkIcon className="ml-1" />
                      </a>
                    </Button>
                  )}
                </Flex>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
