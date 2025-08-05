'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, Heading, Text, Flex } from '@radix-ui/themes';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
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
          <Heading as="h1" size="8" color="accent">
            Hi, I'm Zainab 👋
          </Heading>

          <Text as="p" size="4" color="gray" className="max-w-xl mx-auto md:mx-0">
            A passionate tech enthusiast blending creativity, code, and strategy. I build modern websites,
            apps, and AI-powered tools to make life smarter and more fun.
          </Text>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a
              href="https://github.com/zainab102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition transform hover:scale-110"
            >
              <FaGithub size={28} />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/zainab-22243b366"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition transform hover:scale-110"
            >
              <FaLinkedin size={28} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="mailto:zainab@example.com"
              className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition transform hover:scale-110"
            >
              <FaEnvelope size={28} />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>

          {/* Button */}
          <Flex justify="center" md={{ justify: 'start' }}>
            <Button
              size="3"
              radius="large"
              variant="solid"
              highContrast
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
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
              alt="Zainab's profile"
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
