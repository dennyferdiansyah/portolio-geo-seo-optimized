"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles, Code2, Zap } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiGo,
  SiLaravel,
  SiNextdotjs,
  SiFlutter,
} from "react-icons/si";
import { IconType } from "react-icons";

const socialLinks = [
  { icon: Github, href: "https://github.com/dennyferdiansyah", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/dennyferdiansyah", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dferdiansyah2908@gmail.com", label: "Email" },
];

const roles = [
  "Senior Software Engineer",
  "Full-Stack Developer",
  "E-Commerce Specialist",
  "System Architect",
];

interface FloatingIcon {
  icon: IconType;
  color: string;
  delay: number;
  x: string;
  y: string;
}

const floatingIcons: FloatingIcon[] = [
  { icon: SiReact, color: "#61DAFB", delay: 0, x: "10%", y: "20%" },
  { icon: SiTypescript, color: "#3178C6", delay: 0.5, x: "85%", y: "15%" },
  { icon: SiGo, color: "#00ADD8", delay: 1, x: "5%", y: "70%" },
  { icon: SiLaravel, color: "#FF2D20", delay: 1.5, x: "90%", y: "60%" },
  { icon: SiNextdotjs, color: "#ffffff", delay: 2, x: "15%", y: "85%" },
  { icon: SiFlutter, color: "#02569B", delay: 2.5, x: "80%", y: "80%" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none hidden md:block"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: item.delay + 0.5, duration: 0.5 }}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: item.delay,
              }}
              className="block"
            >
              <IconComponent className="w-10 h-10" style={{ color: item.color }} />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-purple-500/20 rounded-full animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 border border-pink-500/20 rounded-full animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse" }} />

      <motion.div style={{ y, opacity }} className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-gray-300">Available for new projects</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <motion.span
              animate={{ rotate: [0, 20, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-5xl"
            >
              👋
            </motion.span>
            <span className="text-gray-400 text-xl">Hello, I&apos;m</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="gradient-text-hero">Denny</span>{" "}
            <span className="text-white relative">
              Ferdiansyah
              <motion.span
                className="absolute -right-8 -top-4 text-purple-400"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Code2 className="w-8 h-8" />
              </motion.span>
            </span>
          </motion.h1>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3 mb-6 h-12"
          >
            <Zap className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
              <span className="typing-cursor">{displayText}</span>
            </h2>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-2 text-gray-400 mb-10"
          >
            <MapPin size={18} className="text-pink-400" />
            <span>Bandung, Indonesia</span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-purple-400 font-medium">10+ Years Experience</span>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-6 md:gap-12 mb-12"
          >
            {[
              { number: "10+", label: "Years Experience", icon: "🎯" },
              { number: "30+", label: "Projects Delivered", icon: "🚀" },
              { number: "99%", label: "Client Satisfaction", icon: "⭐" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-center glass-card p-4 md:p-6 hover-lift cursor-default"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <motion.a
              href="#projects"
              className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold overflow-hidden glow-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                View My Work
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.a>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white font-semibold hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Download CV</span>
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ↓
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-4"
          >
            <span className="text-gray-500 text-sm">Connect with me</span>
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent" />
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <span className="text-sm group-hover:text-purple-400 transition-colors">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full border border-white/20 group-hover:border-purple-500/50 transition-colors"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
