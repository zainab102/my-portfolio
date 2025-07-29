'use client';

import { Card, Flex, Heading, Text, Button } from '@radix-ui/themes';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'AI Resume Generator',
    description: 'AI-powered resume builder using OpenAI API and TailwindCSS to generate professional CVs instantly.',
    link: 'https://github.com/zainab102/ai-resume-generator',
    tech: ['React', 'OpenAI', 'TailwindCSS'],
  },
  {
    title: 'Task Manager Dashboard',
    description: 'Full-stack CRUD app with user authentication, live updates, and elegant dark UI.',
    link: 'https://github.com/zainab102/task-manager',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
  },
  {
    title: 'Portfolio Website',
    description: 'This site you’re on! Built with Next.js, Tailwind, Radix UI, and modern web practices.',
    link: 'https://github.com/zainab102/my-portfolio',
    tech: ['Next.js', 'Tailwind', 'Radix UI'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Heading as="h2" size="8" className="text-center text-violet-400 mb-12">
          Projects
        </Heading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                        className="bg-violet-700 text-white text-xs px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </Flex>

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
                </Flex>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
