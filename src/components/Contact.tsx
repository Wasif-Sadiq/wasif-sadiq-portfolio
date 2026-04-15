"use client";

import { motion } from "framer-motion";
import { Mail, Code2, Link, Send, MapPin, Phone } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

export default function Contact() {
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
      value: "+92 123 456 7890",
      href: "tel:+921234567890",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#",
    },
  ];

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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-text-secondary">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Available for work
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-10 md:mb-12 leading-[0.95]">
            Let&apos;s Build <span className="text-gradient-accent">Something Amazing</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s discuss your next Flutter project.
          </p>
        </motion.div>

        <div className="grid gap-7 md:gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="card-glass gradient-border p-9 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-7">Send a Message</h3>
              <form className="grid gap-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_24px_rgba(6,182,212,0.2)] placeholder:text-slate-500"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_24px_rgba(6,182,212,0.2)] placeholder:text-slate-500"
                  />
                </div>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="min-h-32 rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_24px_rgba(6,182,212,0.2)] resize-none placeholder:text-slate-500"
                />
                <motion.button
                  type="submit"
                  className="button-primary inline-flex items-center justify-center gap-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >
             <div className="card-modern p-9 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-7">Get In Touch</h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-400/30 hover:bg-white/10 transition-all group"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-soft p-9 md:p-10">
              <h3 className="text-2xl font-bold text-white mb-7">Follow Me</h3>
              <div className="flex gap-5">
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
