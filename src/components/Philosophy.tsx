"use client";

import { motion } from "framer-motion";
import { Zap, Target, Rocket } from "lucide-react";

const philosophy = [
  {
    text: "Performance is a Feature.",
    icon: Zap,
  },
  {
    text: "Code Quality Matters.",
    icon: Target,
  },
  {
    text: "Ship. Scale. Sustain.",
    icon: Rocket,
  },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-28 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/50 to-transparent" />
      
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-text-secondary">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Core Principles
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-12 leading-[0.95]">
            How I <span className="text-gradient-accent">Build</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Three non-negotiable principles that shape every line of code I write
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {philosophy.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.04, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="card-glass p-8 md:p-10 h-full flex flex-col items-center text-center"
                >
                  <motion.div
                    className="mb-6 relative"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10">
                      <Icon className="h-10 w-10 text-cyan-400" />
                    </div>
                  </motion.div>
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.text}
                  </motion.h3>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-0 group-hover:scale-x-100" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}