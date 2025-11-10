'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EnhancedHeroProps {
  children: ReactNode;
  variant?: 'default' | 'minimal';
}

export default function EnhancedHero({ children, variant = 'default' }: EnhancedHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-forest via-forest to-forest/95 text-fence py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-96 h-96 bg-ash rounded-full blur-3xl opacity-10"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-light rounded-full blur-3xl opacity-8"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(183, 183, 164, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(183, 183, 164, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-20 w-2 h-2 bg-ash/30 rounded-full"></div>
        <div className="absolute top-1/3 right-32 w-3 h-3 bg-light/25 rounded-full"></div>
        <div className="absolute bottom-1/4 right-20 w-1.5 h-1.5 bg-ash/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-light/30 rounded-full"></div>
      </div>

      {/* Side accent lines */}
      <div className="absolute top-0 left-20 w-px h-40 bg-gradient-to-b from-transparent via-ash/20 to-transparent"></div>
      <div className="absolute bottom-0 right-24 w-px h-48 bg-gradient-to-t from-transparent via-light/20 to-transparent"></div>

      {/* Corner accents */}
      {variant === 'default' && (
        <>
          <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-ash/10"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-light/10"></div>
        </>
      )}

      <div className="max-w-4xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
