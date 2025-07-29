'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[var(--color-primary)] drop-shadow-lg">
            Hi, I'm Zainab 👋
          </h1>
          <p className="text-lg sm:text-xl text-[var(--color-secondary)] max-w-xl mx-auto md:mx-0">
            A passionate tech enthusiast blending creativity, code, and strategy. I build modern websites, apps, and AI-powered tools to make life smarter and more fun.
          </p>
          <a
            href="#projects"
            aria-label="View my work projects"
            className="inline-block bg-[var(--color-accent)] text-white font-semibold px-6 py-3 rounded-xl hover:bg-pink-600 transition duration-300 shadow-lg hover:scale-105 transform"
          >
            View My Work 🚀
          </a>
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
