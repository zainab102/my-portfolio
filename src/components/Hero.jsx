'use client';

import React, { useMemo } from 'react';
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

export default function Hero() {
  // Generate random positions and durations only once (client-side)
  const birds = useMemo(() => {
    return [...Array(6)].map((_, i) => ({
      left: `${-10 + i * 18}%`,
      top: `${15 + Math.random() * 70}%`,
      animationDelay: `${i * 3}s`,
      animationDuration: `${18 + Math.random() * 12}s`,
    }));
  }, []);

  const butterflies = useMemo(() => {
    return [...Array(10)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${i * 2}s`,
      animationDuration: `${10 + Math.random() * 8}s`,
    }));
  }, []);

  const twinkles = useMemo(() => {
    return [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }));
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 text-gray-900 overflow-hidden"
    >
      {/* Animated Birds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-5">
        {birds.map((bird, i) => (
          <div
            key={`bird-${i}`}
            className="absolute animate-fly opacity-30"
            style={{
              left: bird.left,
              top: bird.top,
              animationDelay: bird.animationDelay,
              animationDuration: bird.animationDuration,
              filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.05))',
            }}
          >
            <div className="text-2xl transform rotate-12 text-gray-400 select-none">🦅</div>
          </div>
        ))}

        {/* Butterflies */}
        {butterflies.map((butterfly, i) => (
          <div
            key={`butterfly-${i}`}
            className="absolute animate-float opacity-40"
            style={{
              left: butterfly.left,
              top: butterfly.top,
              animationDelay: butterfly.animationDelay,
              animationDuration: butterfly.animationDuration,
              filter: 'drop-shadow(0 0 1px rgba(0,0,0,0.05))',
            }}
          >
            <div className="text-xl animate-wing-flutter text-gray-500 select-none">🦋</div>
          </div>
        ))}

        {/* Twinkles */}
        {twinkles.map((dot, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute w-1 h-1 bg-gray-400/40 rounded-full animate-twinkle"
            style={{
              left: dot.left,
              top: dot.top,
              animationDelay: dot.animationDelay,
              animationDuration: dot.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-15">
          <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-2/5 right-1/4 w-80 h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/5 left-1/3 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/5 w-56 h-56 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-gray-400/20 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-3/4 right-1/5 w-3 h-3 bg-gray-500/25 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 left-2/3 w-5 h-5 bg-gray-400/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-gray-500/30 rounded-full animate-pulse" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/6 right-1/3 w-6 h-6 bg-gray-400/15 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Availability badge */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="bg-white/90 backdrop-blur-md border border-gray-300 rounded-full px-8 py-3 text-base font-semibold text-gray-700 flex items-center space-x-3 mx-auto lg:mx-0 shadow-sm">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm"></div>
                <span>Available for new opportunities</span>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="space-y-6">
                <p className="text-gray-700 text-2xl font-bold tracking-wide select-none">Hello, I'm</p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-gray-800 leading-tight select-none">
                  ZAINAB
                </h1>
              </div>
              <div className="h-20 flex items-center justify-center lg:justify-start">
                <motion.div key="title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
                  <p className="text-3xl md:text-4xl font-bold text-gray-700 flex items-center select-none">
                    <FaCode className="mr-4 text-gray-600" size={40} /> Full Stack Developer
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Quote & Description */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }} className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-gray-300">
                <p className="text-2xl md:text-3xl font-bold text-gray-800 italic mb-4 select-none">
                  "A learner today, a creator tomorrow."
                </p>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                  Transforming ideas into digital experiences through the power of technology, creativity, and innovation.
                </p>
              </div>
            </motion.div>

            {/* Skill Tags */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }} className="flex flex-wrap gap-4 justify-center lg:justify-start">
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
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.1 }} className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start pt-4">
              <Button size="4" radius="large" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-same">
                <FaRocket className="mr-3" size={20} /> View My Work
              </Button>
              <Button size="4" radius="large" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-same">
                Let's Connect
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.3 }} className="flex justify-center lg:justify-start space-x-8 pt-6">
              {[
                { icon: FaGithub, href: 'https://github.com/zainab102', label: 'GitHub', color: 'hover:text-gray-800', bgHover: 'hover:bg-gray-100' },
                { icon: FaLinkedin, href: 'https://linkedin.com/in/zainab-22243b366', label: 'LinkedIn', color: 'hover:text-blue-700', bgHover: 'hover:bg-blue-50' },
                { icon: FaEnvelope, href: 'mailto:zainab@example.com', label: 'Email', color: 'hover:text-red-700', bgHover: 'hover:bg-red-50' },
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

          {/* Right content - profile */}
          <motion.div initial={{ opacity: 0, scale: 0.8, x: 50 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-gray-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '8s' }} />
              <div className="absolute -bottom-8 -right-8 w-16 h-16 border-4 border-gray-400/30 rounded-full animate-spin-slow-reverse" style={{ animationDuration: '12s' }} />
              <div className="absolute top-1/2 -left-12 w-8 h-8 border-4 border-gray-400/30 rounded-full animate-spin-slow" style={{ animationDuration: '10s' }} />

              <div className="absolute -inset-8 bg-gradient-to-r from-gray-300/20 via-gray-400/20 to-gray-300/20 rounded-xl blur-3xl animate-pulse opacity-50"></div>

              <div className="relative w-80 h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] overflow-hidden border-4 border-white shadow-lg bg-white rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-400/40 via-gray-500/40 to-gray-400/40 animate-spin-slow rounded-2xl" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-4 overflow-hidden border-2 border-white/80 shadow-md rounded-xl">
                  <Image src="/profile.jpg" alt="Zainab - Full Stack Developer and Tech Innovator" width={448} height={560} className="object-cover w-full h-full hover:scale-110 transition-transform duration-700 rounded-xl" priority unoptimized />
                </div>
              </div>

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
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }} className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-3 select-none">
          <div className="animate-bounce">
            <div className="w-8 h-12 border-2 border-gray-700 rounded-full flex justify-center bg-white/80 shadow-md backdrop-blur-sm">
              <div className="w-2 h-4 bg-gray-700 rounded-full mt-3 animate-pulse" />
            </div>
          </div>
          <p className="text-gray-700 font-semibold">Scroll down</p>
        </div>
      </motion.div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fly { 0%{transform:translateX(0) translateY(0);}50%{transform:translateX(20px) translateY(-10px);}100%{transform:translateX(0) translateY(0);} }
        .animate-fly{animation-name:fly;animation-timing-function:ease-in-out;animation-iteration-count:infinite;}
        @keyframes float {0%{transform:translateY(0);}50%{transform:translateY(-15px);}100%{transform:translateY(0);}}
        .animate-float{animation-name:float;animation-timing-function:ease-in-out;animation-iteration-count:infinite;}
        @keyframes wing-flutter {0%,100%{transform:rotate(0deg);}50%{transform:rotate(15deg);}}
        .animate-wing-flutter{animation-name:wing-flutter;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:1.5s;transform-origin:center;}
        @keyframes twinkle {0%,100%{opacity:0.3;}50%{opacity:1;}}
        .animate-twinkle{animation-name:twinkle;animation-timing-function:ease-in-out;animation-iteration-count:infinite;}
        @keyframes spin-slow {0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}
        .animate-spin-slow{animation-name:spin-slow;animation-timing-function:linear;animation-iteration-count:infinite;}
        .animate-spin-slow-reverse{animation-name:spin-slow;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:reverse;}
        @keyframes blob {0%,100%{transform:translateY(0) scale(1);}50%{transform:translateY(-20px) scale(1.05);}}
        .animate-blob{animation-name:blob;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:8s;}
      `}</style>
    </section>
  );
}
