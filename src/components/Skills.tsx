"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Flutter Development",
    description: "Building production-grade, high-performance cross-platform mobile applications for iOS, Android, and Web with clean architecture.",
    technologies: ["Flutter", "Dart", "BLoC", "Provider", "Riverpod", "Firebase", "Hive", "Isar"]
  },
  {
    title: "Artificial Intelligence",
    description: "Developing intelligent systems, AI agents, and machine learning solutions integrated with mobile applications.",
    technologies: ["Python", "NLP", "LLM Integration", "GPT API", "Machine Learning", "LangChain", "AI Agents"]
  },
  {
    title: "Mobile Architecture",
    description: "Designing scalable, maintainable mobile architectures with clean code principles and best practices.",
    technologies: ["Clean Architecture", "MVVM", "Repository Pattern", "TDD", "CI/CD", "App Optimization"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-40 lg:py-48">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-12 leading-[0.95]">
            <span className="block">Skills & Expertise</span>
            {/* <span className="block text-gradient-accent">Expertise</span> */}
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-6xl mx-auto leading-relaxed font-light px-4">
            Engineering mobile applications and intelligent systems that scale from frontend interfaces to backend infrastructure.
          </p>
        </motion.div>

        <div className="grid gap-7 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-soft p-9 md:p-10 h-full"
              >
                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">{category.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-light">{category.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (techIndex * 0.04), duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="tag-modern"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}