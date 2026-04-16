"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/portfolio";

const stats = [
  { value: "80+", label: "Projects Built" },
  { value: "7+", label: "Years Experience" },
  { value: "100+", label: "Happy Clients" },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-32 md:py-40 lg:py-48 relative">
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-28"
        >
          {/* Divider lines before Work Experience badge */}
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
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              Work Experience
            </span>
          </motion.div>

          {/* Divider lines after Work Experience badge */}
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

          {/* Divider lines before experience heading */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "24rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mb-10"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5 mb-8"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5 mb-6"
          />

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-[0.95]">
            <span className="block">Execution at startup</span>
            <span className="block text-gradient-accent">speed with enterprise-grade</span>
            <span className="block">architecture.</span>
          </h2>

          {/* Divider lines after experience heading */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-6 mb-6"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5 mb-8"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "24rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mt-1.5 mb-10"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20 md:mb-24">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group w-full flex"
            >
                <motion.div
                  whileHover={{ scale: 1.01, y: -3 }}
                  transition={{ duration: 0.3 }}
                  className={`${exp.company === 'Grayhat' ? 'card-corporate' : 'card-freelance'} overflow-hidden w-full h-full flex flex-col`}
                >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                   className="w-full flex items-center p-9 md:p-10 text-left hover:bg-gray-800/20 transition-colors duration-300"
                >
                  <div className="flex-1 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-lg text-gray-400 font-medium">{exp.role}</p>
                    <p className="text-sm text-gray-500 mt-1">{exp.period}</p>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-9 md:px-10 pb-9 md:pb-10">
                        {exp.description.length > 0 && (
                          <ul className="space-y-4">
                            {exp.description.map((item, i) => (
                              <li key={i} className="flex items-start gap-4">
                                <div className="mt-2 h-2 w-2 rounded-full bg-white flex-shrink-0"></div>
                                <p className="text-gray-300 leading-relaxed text-lg font-light">{item}</p>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Divider lines before stats */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "24rem" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mt-16"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "16rem" }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "12rem" }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "8rem" }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "5rem" }}
          transition={{ delay: 0.55, duration: 0.8 }}
          className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/25 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "2rem" }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/20 to-transparent mt-1.5 mb-16 md:mb-20"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
           className="grid gap-6 sm:grid-cols-3 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
                className="card-glass text-center p-8 md:p-10"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider lines after stats */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "2rem" }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/20 to-transparent mt-20"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "5rem" }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/25 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "8rem" }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "12rem" }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "16rem" }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "20rem" }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5"
        />
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "24rem" }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mt-1.5 mb-16"
        />
      </div>
    </section>
  );
}