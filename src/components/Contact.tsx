"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Link, MapPin, Phone } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

const socialIcons = [
  { icon: Link, href: socialLinks.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Code2, href: socialLinks.github, label: "GitHub", color: "hover:text-gray-300" },
  { icon: Mail, href: `mailto:${socialLinks.email}`, label: "Email", color: "hover:text-red-400" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: socialLinks.email,
    href: `mailto:${socialLinks.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 348 843 5243",
    href: "tel:+923488435243",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 lg:py-48 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/50" />
      
      <div className="section-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-28"
        >
          {/* Divider lines before Available for work badge */}
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
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Divider lines after Available for work badge */}
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
          {/* Divider lines before contact heading */}
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

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-12 leading-[0.95]">
            Let&apos;s Build <span className="text-gradient-accent">Something Amazing</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16 md:mb-20">
            Ready to bring your ideas to life? Let&apos;s discuss your next Flutter project.
          </p>

          {/* Divider lines after contact text */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "20rem" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto h-1.5 bg-gradient-to-r from-transparent via-black/50 to-transparent"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "16rem" }}
            transition={{ delay: 0.65, duration: 0.8 }}
            className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/45 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/40 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "8rem" }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-1.5"
          />
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "4rem" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mx-auto h-0.25 bg-gradient-to-r from-transparent via-black/30 to-transparent mt-1.5 mb-16"
          />
        </motion.div>

        <div className="grid gap-7 md:gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          {/* Divider lines before contact cards */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mb-8 md:col-span-2"
          />

          {/* Get In Touch Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <motion.div 
              className="card-glass p-9 md:p-10 h-full text-center" 
              whileHover={{ scale: 1.03, y: -5 }} 
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-7">Get In Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const showDivider = index < contactInfo.length - 1;
                  return (
                    <div key={info.label}>
                      <motion.a
                        href={info.href}
                        className="flex items-center justify-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-white font-medium">{info.value}</p>
                      </motion.a>
                      {showDivider && (
                        <div className="my-8 mx-auto w-2/3 h-3 bg-gradient-to-r from-transparent via-white/0 to-transparent" />
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Follow Me Card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div 
              className="card-glass p-9 md:p-10 h-full text-center" 
              whileHover={{ scale: 1.03, y: -5 }} 
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-white mb-7">Follow Me</h3>
              <div className="flex gap-5 justify-center mt-4">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`rounded-xl border border-white/15 p-4 transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10 ${social.color} group`}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Divider lines after contact cards */}
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "12rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/35 to-transparent mt-8 mb-6 md:col-span-2"
          />
        </div>
      </div>
    </section>
  );
}
