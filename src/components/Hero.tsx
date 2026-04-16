"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  return (
           <section id="hero" className="relative min-h-screen flex items-center justify-center pt-12 sm:pt-20 md:pt-40 lg:pt-48 pb-16 sm:pb-24 md:pb-32 lg:pb-40 overflow-hidden perspective-1200">
      {/* Aurora Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 right-0 h-full"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(6, 182, 212, 0.15), transparent)",
          }}
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "conic-gradient(from 0deg, rgba(6, 182, 212, 0.12), rgba(139, 92, 246, 0.08), rgba(236, 72, 153, 0.06), rgba(6, 182, 212, 0.12)" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: "conic-gradient(from 180deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.07), rgba(6, 182, 212, 0.09), rgba(139, 92, 246, 0.1)" }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(236, 72, 153, 0.05), transparent 70%)" }}
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D Floating Phone Mockup with Parallax */}
      <motion.div 
        className="absolute right-8 lg:right-32 top-1/5 hidden xl:block pointer-events-none"
        initial={{ opacity: 0, x: 100, rotateY: -20, rotateX: 10 }}
        animate={{ opacity: 1, x: 0, rotateY: 0, rotateX: 0 }}
        transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="relative"
          animate={{ 
            y: [0, -20, 0], 
            rotateY: [0, 8, 0, -8, 0],
            rotateX: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 9, repeat: Infinity, ease: "easeInOut" },
            rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-56 h-[450px] bg-[#0f0f17] rounded-[3.5rem] p-2.5 shadow-[0_0_100px_rgba(6,182,212,0.2),0_50px_80px_rgba(0,0,0,0.5)] border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] overflow-hidden relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-[0_0_2rem_2rem" />
              <div className="absolute inset-5 top-10 rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 opacity-10 rounded-2xl">
                  <div className="h-10 bg-white/10 rounded-xl mx-4 mt-4" />
                  <div className="h-5 bg-white/5 rounded-lg mx-4 mt-3 w-3/4" />
                  <div className="h-40 bg-gradient-to-br from-cyan-500/20 via-purple-500/15 to-pink-500/10 rounded-2xl mx-4 mt-4" />
                  <div className="h-8 bg-white/10 rounded-xl mx-4 mt-4 w-2/3" />
                  <div className="h-5 bg-white/5 rounded-lg mx-4 mt-3" />
                  <div className="h-28 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-cyan-500/10 rounded-2xl mx-4 mt-4" />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-white/30 rounded-full" />
            </div>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/10 to-pink-500/20 blur-3xl rounded-full -z-10 animate-pulse-slow" />
          <div className="absolute -bottom-16 -left-16 -right-16 h-24 bg-gradient-to-b from-cyan-500/15 to-transparent blur-3xl rounded-full" />
        </motion.div>
      </motion.div>

      {/* Second 3D Floating Phone */}
      <motion.div 
        className="absolute left-12 lg:left-24 bottom-1/5 hidden lg:block pointer-events-none"
        initial={{ opacity: 0, x: -100, rotateY: 20, rotateX: -10 }}
        animate={{ opacity: 0.7, x: 0, rotateY: 0, rotateX: 0 }}
        transition={{ delay: 1.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="relative scale-80 opacity-80"
          animate={{ 
            y: [0, 15, 0], 
            rotateY: [0, -10, 0, 10, 0],
            rotateX: [0, -6, 0, 6, 0]
          }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
            rotateY: { duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
            rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="w-44 h-[360px] bg-[#0f0f17] rounded-[3rem] p-2 shadow-[0_0_60px_rgba(139,92,246,0.15),0_30px_50px_rgba(0,0,0,0.4) border border-white/5">
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-[2.5rem] overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-[0_0_1.5rem_1.5rem]" />
              <div className="absolute inset-4 top-8 rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 opacity-10 rounded-xl">
                  <div className="h-8 bg-white/8 rounded-lg mx-3 mt-3" />
                  <div className="h-28 bg-gradient-to-br from-purple-500/15 via-pink-500/10 to-cyan-500/15 rounded-xl mx-3 mt-3" />
                  <div className="h-6 bg-white/8 rounded-lg mx-3 mt-3 w-3/4" />
                  <div className="h-20 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 rounded-xl mx-3 mt-3" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/15 via-pink-500/10 to-cyan-500/15 blur-2xl rounded-full -z-10" />
        </motion.div>
      </motion.div>

      {/* Animated particle rings */}
      <motion.div 
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 pointer-events-none hidden sm:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <motion.div 
          className="w-48 sm:w-[300px] md:w-[400px] lg:w-[600px] h-48 sm:h-[300px] md:h-[400px] lg:h-[600px] rounded-full border border-white/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute rounded-full border border-cyan-500/5"
          animate={{ rotate: -360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          style={{ top: 16, left: 16, right: 16, bottom: 16 }}
        />
        <motion.div 
          className="absolute rounded-full border border-purple-500/5"
          animate={{ rotate: 360 }}
          transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          style={{ top: 32, left: 32, right: 32, bottom: 32 }}
        />
      </motion.div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Divider lines before hero heading */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mx-auto h-1 sm:h-2 bg-gradient-to-r from-transparent via-black/60 to-transparent mb-2 sm:mb-4 max-w-48 sm:max-w-xs md:max-w-md lg:max-w-2xl"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mx-auto h-0.5 sm:h-1.5 bg-gradient-to-r from-transparent via-black/55 to-transparent mt-0.5 sm:mt-1 mb-1.5 sm:mb-3 max-w-44 sm:max-w-sm md:max-w-lg lg:max-w-xl"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto h-0.5 sm:h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mt-0.5 sm:mt-1 mb-1 sm:mb-3 max-w-40 sm:max-w-md md:max-w-lg lg:max-w-2xl"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="mx-auto h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-0.5 sm:mt-1 mb-1 sm:mb-2 max-w-36 sm:max-w-xs md:max-w-md lg:max-w-xl"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto h-0.5 sm:h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-0.5 sm:mt-1 mb-0.5 sm:mb-2 max-w-32 sm:max-w-48 md:max-w-xs lg:max-w-lg"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto h-0.25 sm:h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-0.5 sm:mt-1 mb-0.5 sm:mb-1 max-w-24 sm:max-w-40 md:max-w-xs lg:max-w-md"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto h-0.25 sm:h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-0.5 sm:mt-1 mb-3 sm:mb-6 max-w-20 sm:max-w-32 md:max-w-48 lg:max-w-xs"
          />

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-black mb-2 sm:mb-4 md:mb-8 lg:mb-10 leading-[0.95] tracking-tighter space-y-1 sm:space-y-2">
            <span className="block text-white">Flutter</span>
            <span className="block text-gradient-accent">& AI</span>
            <span className="block text-white">Engineer.</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base md:text-lg lg:text-2xl text-text-secondary mb-6 sm:mb-10 md:mb-16 lg:mb-24 max-w-xl sm:max-w-3xl md:max-w-6xl mx-auto leading-relaxed font-light px-4"
          >
            Building intelligent Flutter applications powered by artificial intelligence. Creating beautiful, performant mobile experiences with integrated AI systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
             className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-24 px-4"
          >
            <button
              onClick={() => {
                const element = document.querySelector("#projects");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="button-primary flex items-center justify-center gap-2 group px-6 py-3 sm:px-8 sm:py-4"
            >
              View Projects
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="button-secondary flex items-center justify-center gap-2 group px-6 py-3 sm:px-8 sm:py-4"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </button>
          </motion.div>

          {/* Divider lines */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto h-2 bg-gradient-to-r from-transparent via-black/60 to-transparent mt-8 sm:mt-12 lg:mt-16 max-w-40 sm:max-w-md lg:max-w-2xl"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/55 to-transparent mt-1 max-w-36 sm:max-w-sm lg:max-w-xl"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent mt-1 max-w-32 sm:max-w-xs lg:max-w-lg"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1 max-w-28 sm:max-w-[200px] lg:max-w-md"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1 max-w-24 sm:max-w-40 lg:max-w-sm"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1 max-w-20 sm:max-w-32 lg:max-w-xs"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1 max-w-16 sm:max-w-24"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.95, duration: 0.8 }}
            className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/25 to-transparent mt-1 mb-10 sm:mb-16 md:mb-20 max-w-12 sm:max-w-16"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-5 px-4 mt-6 sm:mt-12 md:mt-16"
          >
            {["Flutter", "Dart", "AI/ML", "Python", "NLP", "Firebase"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="tag-modern text-xs py-1 px-3"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 md:right-12 lg:right-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan-500/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}