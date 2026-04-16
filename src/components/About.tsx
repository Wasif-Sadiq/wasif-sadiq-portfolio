"use client";

import { motion } from "framer-motion";

const roles = [
  {
    title: "Flutter Developer",
    description: "Building production-grade mobile applications with Flutter for multiple domains and clients."
  },
  {
    title: "AI Researcher",
    description: "Conducting research in AI, NLP, and machine learning for intelligent system design."
  },
  {
    title: "Mobile Architect",
    description: "Designing scalable mobile architectures with clean code and best practices."
  },
  {
    title: "Team Lead",
    description: "Leading development teams and coordinating cross-functional collaboration."
  },
  {
    title: "Full-Stack Developer",
    description: "End-to-end development of mobile and web applications with modern technologies."
  },
];

const aboutParagraph = `From writing first lines of code to leading engineering strategy, my journey has been focused on building exceptional mobile experiences and intelligent systems powered by AI.
`;

export default function About() {
  return (
    <section id="about" className="pt-48 md:pt-56 lg:pt-64 pb-32 md:pb-40 lg:pb-48 relative">
      <div className="section-shell">
         <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-28"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-12 leading-[0.95]">
            <span className="block">A decade of building</span>
            <span className="block text-gradient-accent">products that scale</span>
            <span className="block">with confidence.</span>
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-6xl mx-auto leading-relaxed font-light px-4 mb-16 md:mb-20">
            {aboutParagraph}
          </p>

          {/* Divider lines after about text */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "24rem" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "8rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "5rem" }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/25 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "2rem" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/20 to-transparent mt-1.5"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ duration: 0.3 }}
                className="card-soft p-8 md:p-10 h-full"
              >
                <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-5 leading-tight">{role.title}</h3>
                <p className="text-text-secondary leading-relaxed font-light">{role.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}