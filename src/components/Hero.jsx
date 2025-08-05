'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Heading, Text, Flex } from '@radix-ui/themes';

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      projectsSection.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <Heading as="h1" size="8" color="accent" tabIndex={-1}>
            Hi, I'm Zainab 👋
          </Heading>

          <Text as="p" size="4" color="gray" className="max-w-xl mx-auto md:mx-0">
            A passionate tech enthusiast blending creativity, code, and strategy. I build modern websites,
            apps, and AI-powered tools to make life smarter and more fun.
          </Text>

          <Flex justify="center" md={{ justify: 'start' }}>
            <Button
              size="3"
              radius="large"
              variant="solid"
              highContrast
              onClick={scrollToProjects}
              aria-label="View my work projects"
            >
              View My Work 🚀
            </Button>
          </Flex>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: [0, -10, 0] }}
          transition={{ duration: 3, delay: 0.2, repeat: Infinity }}
          className="flex-shrink-0"
        >
          <div className="rounded-full overflow-hidden w-60 h-60 md:w-72 md:h-72 border-4 border-[var(--color-accent)] shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Profile picture of Zainab Tariq"
              width={288}
              height={288}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
