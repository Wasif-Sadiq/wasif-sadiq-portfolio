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
          {/* Divider lines before Core Principles badge */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent mb-6"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5 mb-4"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "8rem" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1.5 mb-8"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-3 px-8 py-4 glass rounded-full text-sm text-text-secondary">
              <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              Core Principles
            </span>
          </motion.div>

          {/* Divider lines after Core Principles badge */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "8rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-8 mb-4"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5 mb-6"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5 mb-10"
          />
          {/* Divider lines before How I Build heading */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mb-8"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5 mb-6"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5 mb-10"
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.95]">
            How I <span className="text-gradient-accent">Build</span>
          </h2>

          {/* Divider lines after How I Build heading */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-8 mb-6"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5 mb-8"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mt-1.5 mb-10"
          />

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-16 md:mb-20">
            Three non-negotiable principles that shape every line of code I write
          </p>

          {/* Divider lines after philosophy text */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "8rem" }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "4rem" }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1.5 mb-16"
          />
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
                    <div className="mt-auto">
                      <motion.h3
                        className="text-xl md:text-2xl font-bold text-white mb-6 w-full text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.text}
                      </motion.h3>
                    </div>
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