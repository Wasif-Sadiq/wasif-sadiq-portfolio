"use client";

import { motion } from "framer-motion";
import { GraduationCap, FlaskConical, Award } from "lucide-react";
import { education, researchFocus } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-28 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent" />

      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
              Education & Research
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Academic <span className="text-gradient-accent">Background</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
              <GraduationCap className="w-5 h-5 text-[#e11d48]" />
              Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                   className="card-modern p-6 group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#e11d48]/20 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-[#fb7185]" />
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-[#fb7185] text-sm">
                          {edu.institution}
                        </p>
                        {edu.description && (
                          <p className="text-zinc-500 text-sm mt-1">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-zinc-500 whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-6">
              <FlaskConical className="w-5 h-5 text-[#e11d48]" />
              Research Focus
            </h3>

            <motion.div
              whileHover={{ y: -5 }}
              className="card-glass p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#e11d48]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-[#e11d48]/20 text-[#fb7185] border border-[#e11d48]/30 mb-4">
                  <FlaskConical className="w-3 h-3" />
                  PhD Research
                </span>

                <p className="text-zinc-300 leading-relaxed">
                  {researchFocus}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}