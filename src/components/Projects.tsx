"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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
          {/* Divider lines before projects heading */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "24rem" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mb-8"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5 mb-6"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5 mb-10"
          />

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
                whileHover={{ scale: 1.02, y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={index % 2 === 0 ? "card-modern h-full overflow-hidden" : "card-glass h-full overflow-hidden"}
              >
                {/* Project Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                   {project.title === "MindChat" || project.title === "Heedy App" || project.title === "Environmental Air Platform" || project.title === "AI Smart Notes" || project.title === "AI Therapist" || project.title === "Persona-Based AI Video Script Agent" ? (
                    /* Premium Playing Card Fan Layout with 3D */
                    <div 
                      className="relative w-full h-full bg-transparent p-0 overflow-hidden perspective-1000"
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
                        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
                        e.currentTarget.style.setProperty('--rotate-x', `${y}deg`);
                        e.currentTarget.style.setProperty('--rotate-y', `${x}deg`);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.setProperty('--rotate-x', '0deg');
                        e.currentTarget.style.setProperty('--rotate-y', '0deg');
                      }}
                    >
                      <style jsx>{`
                        .perspective-1000 {
                          perspective: 1000px;
                        }
                        .perspective-1000 > div {
                          transform: rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg));
                          transition: transform 0.15s ease-out;
                          transform-style: preserve-3d;
                        }
                      `}</style>
                      
                       {/* Ambient glow background */}
                      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-transparent to-transparent" />
                      
                      {/* Card Fan Effect */}
                       <motion.div 
                          className="absolute left-[6%] top-[15%] w-[40%] h-[75%] rounded-xl overflow-hidden origin-bottom-left bg-transparent"
                          initial={{ opacity: 0, y: 20, rotate: -20, rotateX: 15 }}
                          animate={{ opacity: 1, y: 0, rotate: -10, rotateX: 0 }}
                          whileHover={{ rotate: -24, x: -26, y: 12, zIndex: 15, rotateX: -8 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <Image
                            src={project.title === "MindChat" ? "/images/projects/mindchat-1.jpeg" : project.title === "Heedy App" ? "/images/projects/heed4.jpeg" : project.title === "Environmental Air Platform" ? "/images/projects/air1.jpeg" : project.title === "AI Smart Notes" ? "/images/projects/chat1.jpeg" : project.title === "AI Therapist" ? "/images/projects/therp1.jpeg" : "/images/projects/ech1.jpeg"}
                            alt={project.title === "MindChat" ? "MindChat Screen 1" : project.title === "Heedy App" ? "Heedy Screen 1" : project.title === "Environmental Air Platform" ? "Environmental Air Platform Screen 1" : project.title === "AI Smart Notes" ? "AI Smart Notes Screen 1" : project.title === "AI Therapist" ? "AI Therapist Screen 1" : "Persona-Based AI Video Script Agent Screen 1"}
                            fill
                            className="object-contain"
                            quality={85}
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute left-[22%] top-[11%] w-[40%] h-[78%] rounded-xl overflow-hidden origin-bottom bg-transparent"
                          initial={{ opacity: 0, y: 20, rotate: -15, rotateX: 15 }}
                          animate={{ opacity: 1, y: 0, rotate: -4, rotateX: 0 }}
                          whileHover={{ rotate: -12, y: -18, zIndex: 15, rotateX: -8 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
                        >
                          <Image
                            src={project.title === "MindChat" ? "/images/projects/mindchat-main.jpeg" : project.title === "Heedy App" ? "/images/projects/heed3.jpeg" : project.title === "Environmental Air Platform" ? "/images/projects/air2.jpeg" : project.title === "AI Smart Notes" ? "/images/projects/chat2.jpeg" : project.title === "AI Therapist" ? "/images/projects/therp2.jpeg" : "/images/projects/ech2.jpeg"}
                            alt={project.title === "MindChat" ? "MindChat Screen 2" : project.title === "Heedy App" ? "Heedy Screen 2" : project.title === "Environmental Air Platform" ? "Environmental Air Platform Screen 2" : project.title === "AI Smart Notes" ? "AI Smart Notes Screen 2" : project.title === "AI Therapist" ? "AI Therapist Screen 2" : "Persona-Based AI Video Script Agent Screen 2"}
                            fill
                            className="object-contain"
                            quality={85}
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute left-[39%] top-[7%] w-[42%] h-[83%] rounded-xl overflow-hidden z-20 origin-bottom bg-transparent"
                          initial={{ opacity: 0, y: 20, rotateX: 15 }}
                          animate={{ opacity: 1, y: 0, rotateX: 0 }}
                          whileHover={{ scale: 1.18, y: -28, zIndex: 30, rotateX: -10 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.16 }}
                        >
                          <Image
                            src={project.title === "MindChat" ? "/images/projects/mindchat.jpeg" : project.title === "Heedy App" ? "/images/projects/heed2.jpeg" : project.title === "Environmental Air Platform" ? "/images/projects/air3.jpeg" : project.title === "AI Smart Notes" ? "/images/projects/chat3.jpeg" : project.title === "AI Therapist" ? "/images/projects/therp3.jpeg" : "/images/projects/ech3.jpeg"}
                            alt={project.title === "MindChat" ? "MindChat Main Screen" : project.title === "Heedy App" ? "Heedy Screen 3" : project.title === "Environmental Air Platform" ? "Environmental Air Platform Main Screen" : project.title === "AI Smart Notes" ? "AI Smart Notes Screen 3" : project.title === "AI Therapist" ? "AI Therapist Screen 3" : "Persona-Based AI Video Script Agent Screen 3"}
                            fill
                            className="object-contain"
                            quality={90}
                          />
                        </motion.div>
                        
                        <motion.div 
                          className="absolute left-[56%] top-[11%] w-[40%] h-[78%] rounded-xl overflow-hidden origin-bottom bg-transparent"
                          initial={{ opacity: 0, y: 20, rotate: 15, rotateX: 15 }}
                          animate={{ opacity: 1, y: 0, rotate: 4, rotateX: 0 }}
                          whileHover={{ rotate: 12, y: -18, zIndex: 15, rotateX: -8 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.24 }}
                        >
                          <Image
                            src={project.title === "MindChat" ? "/images/projects/mindchat-5.jpeg" : project.title === "Heedy App" ? "/images/projects/heed1.jpeg" : project.title === "Environmental Air Platform" ? "/images/projects/air4.jpeg" : project.title === "AI Smart Notes" ? "/images/projects/chat4.jpeg" : project.title === "AI Therapist" ? "/images/projects/therp4.jpeg" : "/images/projects/ech1.jpeg"}
                            alt={project.title === "MindChat" ? "MindChat Screen 5" : project.title === "Heedy App" ? "Heedy Screen 4" : project.title === "Environmental Air Platform" ? "Environmental Air Platform Screen 4" : project.title === "AI Smart Notes" ? "AI Smart Notes Screen 4" : project.title === "AI Therapist" ? "AI Therapist Screen 4" : "Persona-Based AI Video Script Agent Screen 4"}
                            fill
                            className="object-contain"
                            quality={85}
                          />
                        </motion.div>

                      {/* Soft gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent pointer-events-none z-30" />
                      
                      {/* Hover ambient glow */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-radial from-cyan-500/12 via-purple-500/5 to-transparent opacity-0 pointer-events-none z-25"
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Floating particles */}
                      <motion.div 
                        className="absolute top-3 right-6 w-1.5 h-1.5 rounded-full bg-cyan-400/70 z-40"
                        animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div 
                        className="absolute top-8 right-12 w-1 h-1 rounded-full bg-purple-400/60 z-40"
                        animate={{ y: [0, 6, 0], opacity: [0.2, 0.8, 0.2] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      />
                    </div>
                  ) : project.image ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={90}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* Hover Glow Effect */}
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    </motion.div>
                  ) : (
                    /* Fallback Placeholder when no image */
                    <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 flex items-center justify-center">
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
                  )}
                  

                </div>

                {/* Content */}
                <div className="p-7 md:p-8">
                   {/* Divider lines before project type */}
                   <motion.div
                     initial={{ opacity: 0, width: 0 }}
                     animate={{ opacity: 1, width: "12rem" }}
                     transition={{ delay: 0.15, duration: 0.6 }}
                     className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent mb-4"
                   />
                   <motion.div
                     initial={{ opacity: 0, width: 0 }}
                     animate={{ opacity: 1, width: "10rem" }}
                     transition={{ delay: 0.2, duration: 0.6 }}
                     className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1 mb-3"
                   />
                   <motion.div
                     initial={{ opacity: 0, width: 0 }}
                     animate={{ opacity: 1, width: "8rem" }}
                     transition={{ delay: 0.25, duration: 0.6 }}
                     className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1 mb-3"
                   />
                   <motion.div
                     initial={{ opacity: 0, width: 0 }}
                     animate={{ opacity: 1, width: "6rem" }}
                     transition={{ delay: 0.3, duration: 0.6 }}
                     className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/25 to-transparent mt-1 mb-3"
                   />

                   <div className="flex items-center justify-between mb-3">
                    <p className="text-xs uppercase tracking-widest text-text-muted font-medium">
                      {project.techStack[0]} Project
                    </p>
                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed font-light text-sm mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="tag-modern text-xs py-1.5 px-3"
                      >
                        {tech}
                      </span>
                    ))}
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