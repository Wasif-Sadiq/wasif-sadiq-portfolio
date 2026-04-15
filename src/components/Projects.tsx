"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="py-32 md:py-40 lg:py-48">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-12 leading-[0.95]">
            <span className="block">Selected systems built</span>
            <span className="block text-gradient-accent">for scale, trust, and</span>
            <span className="block">resilience.</span>
          </h2>
        </motion.div>

        <div className="grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ duration: 0.3 }}
                className={index % 2 === 0 ? "card-modern p-9 md:p-10 h-full" : "card-glass p-9 md:p-10 h-full"}
              >
                <div className="mb-7">
                  {/* Mobile App Preview Graphic */}
                  <div className="flex justify-center mb-7">
                    <div className="relative">
                      <div className="w-20 h-[140px] bg-[#1a1a2e] rounded-[1.25rem] p-1 shadow-lg shadow-cyan-500/10 border border-white/5">
                        <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-[1rem] overflow-hidden">
                          <div className="h-2 bg-black/50 mx-auto w-10 rounded-b-lg" />
                          <div className="p-1.5">
                            <div className="h-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-md" />
                            <div className="h-3 bg-white/5 rounded mt-1.5" />
                            <div className="h-3 bg-white/3 rounded mt-1 w-3/4" />
                            <div className="h-6 bg-white/5 rounded mt-1.5" />
                            <div className="h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-md mt-1.5" />
                          </div>
                        </div>
                      </div>
                      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-cyan-500/15 blur-lg rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
                      Flutter App {index + 1}
                    </p>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed font-light text-sm">
                    {project.description}
                  </p>
                </div>
                
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="tag-modern text-xs py-1.5 px-3"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="button-card group">
                    <span className="text-gradient-accent font-semibold">View details</span>
                    <ArrowUpRight className="icon h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                    <span className="text-[10px] text-text-muted">Production</span>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}