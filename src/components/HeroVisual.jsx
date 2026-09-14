import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const HeroVisual = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full max-w-md lg:max-w-md mx-auto space-y-3">
      {/* Code Container: Ultra-fine outline, compact and refined */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full rounded-xl border border-border/40 bg-surface/80 backdrop-blur-xs shadow-xs overflow-hidden"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-border/30 bg-surface-subtle/40 text-[11px] font-mono text-muted">
          <span className="text-secondary font-medium">developer.ts</span>
          <span className="text-[10px] text-indigo-400 font-medium">Full-Stack &amp; Applied AI</span>
        </div>

        {/* TypeScript Code Block */}
        <div className="p-4 font-mono text-xs leading-relaxed select-none overflow-x-auto">
          <div className="space-y-1 text-secondary">
            <p>
              <span className="text-indigo-400 font-medium">const</span>{' '}
              <span className="text-primary font-semibold">engineer</span> = &#123;
            </p>
            <p className="pl-3.5">
              <span className="text-muted">name:</span>{' '}
              <span className="text-primary">'Mohamed Noor Adan'</span>,
            </p>
            <p className="pl-3.5">
              <span className="text-muted">craft:</span>{' '}
              <span className="text-indigo-400">'Frontend Architecture &amp; Applied AI'</span>,
            </p>
            <p className="pl-3.5">
              <span className="text-muted">stack:</span> [
              <span className="text-primary">'React'</span>,{' '}
              <span className="text-primary">'Node.js'</span>,{' '}
              <span className="text-primary">'OpenAI'</span>,{' '}
              <span className="text-primary">'MongoDB'</span>],
            </p>
            <p className="pl-3.5">
              <span className="text-muted">ethos:</span>{' '}
              <span className="text-primary">'Build resilient, high-impact products'</span>,
            </p>
            <p className="pl-3.5">
              <span className="text-muted">available:</span>{' '}
              <span className="text-emerald-400 font-medium">true</span>,
            </p>
            <p>&#125;;</p>
          </div>
        </div>
      </motion.div>

      {/* MacBook Focus Station Card: Compact, subtle hairline border */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-xl border border-border/40 bg-surface/80 backdrop-blur-xs overflow-hidden shadow-xs"
      >
        <div className="aspect-[16/9] w-full overflow-hidden bg-surface-subtle">
          <picture>
            <source srcSet="/images/laptop-hero.avif" type="image/avif" />
            <img
              src="/images/laptop-hero.jpg"
              alt="MacBook Pro development station"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              loading="eager"
            />
          </picture>
        </div>
        <div className="px-3 py-1.5 flex items-center justify-between text-[11px] font-mono bg-surface-subtle/30 text-muted">
          <span className="text-secondary font-medium">MacBook Focus Station</span>
          <span className="text-[10px] text-indigo-400 font-medium">VS Code</span>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
