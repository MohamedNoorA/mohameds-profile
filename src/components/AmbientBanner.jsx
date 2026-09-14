import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AmbientBanner = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full py-20 md:py-28 overflow-hidden border-y border-border/60 bg-surface/40">
      {/* Background Image Container (Image 1 - Desk Shot) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <picture>
          <source srcSet="/images/bgimage.avif" type="image/avif" />
          <img
            src="/images/bgimage.jpg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center filter grayscale-[80%] sepia-[25%] blur-[14px] opacity-15 dark:opacity-20 scale-110"
            aria-hidden="true"
          />
        </picture>

        {/* Gradient Scrim & Edge Masks ensuring normal contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-background/40 to-background" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wider uppercase text-accent bg-accent-subtle border border-accent/20">
            Engineering Ethos
          </span>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-primary max-w-3xl mx-auto leading-snug">
            Crafting software where thoughtful architecture meets intuitive intelligence.
          </h3>
          <p className="text-sm sm:text-base text-secondary max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between scalable React web applications and real-world applied AI solutions — built with precision, speed, and restraint.
          </p>

          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 rounded-lg bg-surface/70 border border-border/80 backdrop-blur-xs">
              <span className="text-xs font-mono text-muted block mb-1">Architecture</span>
              <span className="text-sm font-medium text-primary">Scalable &amp; Clean</span>
            </div>
            <div className="p-4 rounded-lg bg-surface/70 border border-border/80 backdrop-blur-xs">
              <span className="text-xs font-mono text-muted block mb-1">Frontend</span>
              <span className="text-sm font-medium text-primary">React &amp; Modern JS</span>
            </div>
            <div className="p-4 rounded-lg bg-surface/70 border border-border/80 backdrop-blur-xs">
              <span className="text-xs font-mono text-muted block mb-1">Applied AI</span>
              <span className="text-sm font-medium text-primary">NLP &amp; LLM Workflows</span>
            </div>
            <div className="p-4 rounded-lg bg-surface/70 border border-border/80 backdrop-blur-xs">
              <span className="text-xs font-mono text-muted block mb-1">Experience</span>
              <span className="text-sm font-medium text-primary">End-to-End Delivery</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmbientBanner;
