'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  HERO_BIRD_STYLES,
  HERO_BUTTERFLY_STYLES,
  HERO_TWINKLE_STYLES,
} from '@/lib/decorPresets';

/**
 * Client-only hero background — avoids SSR/hydration mismatches from Framer Motion
 * merging scroll transforms with preset animation styles.
 */
export default function HeroAmbientDecor() {
  const { scrollY } = useScroll();

  const birdsY = useTransform(scrollY, [0, 600], [0, -120]);
  const butterfliesY = useTransform(scrollY, [0, 600], [0, -80]);
  const butterfliesX = useTransform(scrollY, [0, 600], [0, 40]);
  const blobsY = useTransform(scrollY, [0, 600], [0, -30]);

  const decorFilter = 'drop-shadow(0 0 1px rgba(0,0,0,0.05))';

  return (
    <>
      <motion.div
        style={{ y: birdsY }}
        className="absolute inset-0 overflow-hidden pointer-events-none z-5"
        aria-hidden
      >
        {HERO_BIRD_STYLES.map((bird, i) => (
          <div
            key={`bird-${i}`}
            className="absolute animate-fly opacity-30"
            style={{
              left: bird.left,
              top: bird.top,
              animationDelay: bird.animationDelay,
              animationDuration: bird.animationDuration,
              filter: decorFilter,
            }}
          >
            <div className="text-2xl transform rotate-12 text-gray-400 select-none">🦅</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        style={{ y: butterfliesY, x: butterfliesX }}
        className="absolute inset-0 overflow-hidden pointer-events-none z-4"
        aria-hidden
      >
        {HERO_BUTTERFLY_STYLES.map((butterfly, i) => (
          <div
            key={`butterfly-${i}`}
            className="absolute animate-float opacity-40"
            style={{
              left: butterfly.left,
              top: butterfly.top,
              animationDelay: butterfly.animationDelay,
              animationDuration: butterfly.animationDuration,
              filter: decorFilter,
            }}
          >
            <div className="text-xl animate-wing-flutter text-gray-500 select-none">🦋</div>
          </div>
        ))}
      </motion.div>

      <motion.div style={{ y: blobsY }} className="absolute inset-0 overflow-hidden z-0" aria-hidden>
        <div className="absolute -inset-10 opacity-15">
          <div className="absolute top-1/5 left-1/5 w-72 h-72 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-2/5 right-1/4 w-80 h-80 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/5 left-1/3 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          <div className="absolute top-1/2 right-1/5 w-56 h-56 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
        </div>

        <div className="absolute inset-0">
          {HERO_TWINKLE_STYLES.map((dot, i) => (
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
      </motion.div>

      <style jsx global>{`
        @keyframes fly {
          0% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(20px) translateY(-10px);
          }
          100% {
            transform: translateX(0) translateY(0);
          }
        }
        .animate-fly {
          animation-name: fly;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes wing-flutter {
          0%,
          100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(15deg);
          }
        }
        .animate-wing-flutter {
          animation-name: wing-flutter;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 1.5s;
          transform-origin: center;
        }
      `}</style>
    </>
  );
}
