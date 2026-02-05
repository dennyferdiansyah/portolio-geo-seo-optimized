"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Aurora background effect */}
      <div className="aurora" />

      {/* Mesh gradient overlay */}
      <div className="mesh-gradient" />

      {/* Grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
