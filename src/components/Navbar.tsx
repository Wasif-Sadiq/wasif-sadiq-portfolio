"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 top-4 z-50 mx-auto w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] lg:w-[calc(100%-4rem)] max-w-[980px] rounded-2xl transition-all duration-500 ${
        isScrolled
          ? "glass-strong shadow-glow"
          : "glass"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
        <motion.a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-bold tracking-wide text-white hover:text-cyan-300 transition-colors relative group px-4 py-2 rounded-xl hover:bg-white/5 ml-4 min-w-[200px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-transparent select-none pointer-events-none">Sahab </span>
          <span className="absolute left-4">Wasif Sadiq</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <li key={item.name}>
                <motion.button
                  onClick={() => scrollToSection(item.href)}
                  className={`text-sm font-medium text-text-secondary transition-all duration-300 hover:text-white relative group px-4 py-2 rounded-xl hover:bg-white/5 ${item.name === "Contact" ? "min-w-[90px]" : ""}`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name === "Contact" ? (
                    <>
                      <span className="text-transparent select-none pointer-events-none"> b</span>
                      <span className="absolute left-4">Contact</span>
                    </>
                  ) : (
                    item.name
                  )}
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </motion.button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-300"
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, scale: 0.98 }}
            animate={{ opacity: 1, height: "auto", scale: 1 }}
            exit={{ opacity: 0, height: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-white/5 bg-bg-card/90 backdrop-blur-3xl rounded-b-2xl"
          >
            <ul className="flex flex-col py-4 px-4 space-y-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 rounded-xl text-text-secondary hover:text-white hover:bg-white/5 transition-all duration-300"
                  >
                    {item.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}