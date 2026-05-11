'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@radix-ui/themes';
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaRocket,
  FaCode,
  FaBrain,
} from 'react-icons/fa';

const HeroAmbientDecor = dynamic(() => import('@/components/decor/HeroAmbientDecor'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 overflow-hidden"
    >
      <HeroAmbientDecor />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Availability */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="bg-white/90 backdrop-blur-md border border-gray-300 rounded-full px-8 py-3 text-base font-semibold text-gray-700 flex items-center space-x-3 mx-auto lg:mx-0 shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <span>Available for new opportunities</span>
              </div>
            </motion.div>

            {/* Name & title */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-6">
                <p className="text-gray-700 text-2xl font-bold tracking-wide select-none">Hello, I'm</p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 leading-tight select-none">
                  ZAINAB
                </h1>
              </div>
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <motion.div key="title" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                  <p className="text-2xl md:text-3xl font-bold text-gray-700 flex items-center select-none">
                    <FaCode className="mr-4 text-gray-600" size={40} /> Full Stack Developer
                  </p>
                  <p className="text-lg md:text-xl font-semibold text-gray-600 mt-2 select-none">
                    CEO & Founder, Zentrix Media by ZT
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-300">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 italic mb-4 select-none">
                  "A learner today, a creator tomorrow."
                </p>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                  Transforming ideas into digital experiences through the power of technology, creativity, and innovation.
                </p>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: FaRocket, text: 'AI & ML Enthusiast', bgColor: 'bg-gray-100', textColor: 'text-gray-800', borderColor: 'border-gray-300', iconColor: 'text-gray-700' },
                { icon: FaBrain, text: 'Problem Solver', bgColor: 'bg-gray-100', textColor: 'text-gray-800', borderColor: 'border-gray-300', iconColor: 'text-gray-700' },
                { icon: FaCode, text: 'Tech Innovator', bgColor: 'bg-gray-100', textColor: 'text-gray-800', borderColor: 'border-gray-300', iconColor: 'text-gray-700' },
              ].map((item, index) => (
                <div key={index} className={`${item.bgColor} ${item.textColor} ${item.borderColor} rounded-full px-6 py-3 flex items-center space-x-3 hover:scale-105 transition-all duration-300 border-2 shadow-sm hover:shadow-md select-none cursor-default`}>
                  <item.icon className={item.iconColor} size={20} />
                  <span className="text-base font-bold">{item.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button size="4" radius="large" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-same">
                <FaRocket className="mr-3" size={20} /> View My Work
              </Button>
              <Button size="4" radius="large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-same">
                Let's Connect
              </Button>
            </motion.div>

            {/* Socials */}
            <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="flex justify-center lg:justify-start space-x-8 pt-6">
              {[
                { icon: FaGithub, href: 'https://github.com/zainab102', label: 'GitHub', color: 'hover:text-gray-800', bgHover: 'hover:bg-gray-100' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/zainab-22243b366', label: 'LinkedIn', color: 'hover:text-blue-700', bgHover: 'hover:bg-blue-50' },
                { icon: FaEnvelope, href: 'mailto:tariqzainab1190@gmail.com', label: 'Email', color: 'hover:text-red-700', bgHover: 'hover:bg-red-50' },
              ].map((social, index) => (
                <a key={index} href={social.href} target={social.href.includes('mailto') ? undefined : '_blank'} rel={social.href.includes('mailto') ? undefined : 'noopener noreferrer'} className={`group flex items-center space-x-3 text-gray-700 ${social.color} transition-all duration-300 transform hover:scale-110`}>
                  <div className={`p-4 bg-white border border-gray-300 rounded-full group-hover:border-gray-400 ${social.bgHover} transition-all duration-300 shadow-sm group-hover:shadow-md`}>
                    <social.icon size={24} />
                  </div>
                  <span className="hidden sm:block text-lg font-semibold select-none">{social.label}</span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right - Profile */}
          <motion.div initial={false} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-gray-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-4 border-gray-400/30 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '12s' }} />
              <div className="absolute top-1/2 -left-12 w-8 h-8 border-4 border-gray-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />

              <div className="absolute -inset-8 bg-gradient-to-r from-gray-300/20 via-gray-400/20 to-gray-300/20 rounded-xl blur-3xl animate-pulse opacity-50"></div>

              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] overflow-hidden border-4 border-white shadow-lg bg-white rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/40 via-gray-500/40 to-gray-400/40 animate-spin-slow rounded-2xl" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-4 overflow-hidden border-2 border-white/80 shadow-md rounded-xl">
                  <Image src="/profile.jpg" alt="Zainab - Full Stack Developer" width={448} height={560} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 rounded-xl" priority unoptimized />
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute -top-8 -right-8 bg-gray-600 rounded-full p-4 animate-bounce shadow-lg border-2 border-white" style={{ animationDelay: '0s', animationDuration: '3s' }}>
                <FaCode size={28} className="text-white drop-shadow-sm" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gray-600 rounded-full p-4 animate-bounce shadow-lg border-2 border-white" style={{ animationDelay: '1s', animationDuration: '3s' }}>
                <FaBrain size={28} className="text-white drop-shadow-sm" />
              </div>
              <div className="absolute top-1/2 -right-10 bg-gray-600 rounded-full p-4 animate-bounce shadow-lg border-2 border-white" style={{ animationDelay: '2s', animationDuration: '3s' }}>
                <FaRocket size={28} className="text-white drop-shadow-sm" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={false} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 select-none">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-gray-700 rounded-full flex justify-center bg-white/80 shadow-md backdrop-blur-sm">
              <div className="w-2 h-4 bg-gray-700 rounded-full mt-3 animate-pulse" />
            </div>
          </div>
          <p className="text-gray-700 font-semibold">Scroll down</p>
        </div>
      </motion.div>

      {/* Animations — profile / UI only (ambient fly/float lives in HeroAmbientDecor) */}
      <style jsx>{`
        .animate-spin-slow{animation:spin 20s linear infinite;}
        .animate-spin-slow-reverse{animation:spin 25s linear infinite reverse;}
      `}</style>
    </section>
  );
}
