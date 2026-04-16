"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { socialLinks } from "@/data/portfolio";

const footerLinks = {
  navigation: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "LinkedIn", href: socialLinks.linkedin },
    { name: "GitHub", href: socialLinks.github },
    { name: "Email", href: `mailto:${socialLinks.email}` },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* Divider lines before footer */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "20rem" }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent absolute -top-6 left-1/2 -translate-x-1/2"
      />
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "16rem" }}
        transition={{ delay: 0.15, duration: 0.8 }}
        className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/35 to-transparent absolute -top-3 left-1/2 -translate-x-1/2"
      />
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "12rem" }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent absolute -top-1 left-1/2 -translate-x-1/2"
      />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/80 to-transparent" />

      <div className="relative section-shell py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-white">Wasif Sadiq</h3>
            <p className="text-slate-400 leading-relaxed">
              Full-stack developer passionate about creating exceptional digital experiences
              with modern technologies and clean code.
            </p>

          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >



        </motion.div>
      </div>

      {/* Divider lines after footer */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "12rem" }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mx-auto h-0.5 bg-gradient-to-r from-transparent via-black/30 to-transparent absolute -bottom-1 left-1/2 -translate-x-1/2"
      />
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "16rem" }}
        transition={{ delay: 0.35, duration: 0.8 }}
        className="mx-auto h-0.75 bg-gradient-to-r from-transparent via-black/35 to-transparent absolute -bottom-3 left-1/2 -translate-x-1/2"
      />
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "20rem" }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mx-auto h-1 bg-gradient-to-r from-transparent via-black/40 to-transparent absolute -bottom-6 left-1/2 -translate-x-1/2"
      />
    </footer>
  );
}