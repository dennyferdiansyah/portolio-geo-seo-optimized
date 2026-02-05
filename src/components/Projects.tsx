"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, ExternalLink, Eye, Layers } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

const categories = ["All", "E-Commerce", "Real-time Systems", "Mobile App", "Web App", "CMS", "Healthcare", "Integration"];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  // Reset showAll when category changes
  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-medium mb-6"
          >
            <Layers className="w-4 h-4" />
            MY WORK
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, from e-commerce platforms
            to real-time systems and mobile applications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {category}
              {activeCategory !== category && (
                <span className="ml-2 text-xs text-gray-500">
                  ({category === "All" ? projects.length : projects.filter(p => p.category === category).length})
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 + (index % 6) * 0.1 }}
              className="group"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="glass-card card-shine overflow-hidden hover-lift h-full flex flex-col relative cursor-pointer">
                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-20" />
                  </div>

                  {/* Image/Gradient Header */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
                    </div>

                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/5 transition-colors duration-500" />

                    {/* Icon with animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.8 }}
                      >
                        <Layers className="w-16 h-16 text-white/40 group-hover:text-white/60 group-hover:scale-125 transition-all duration-500" />
                      </motion.div>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/40 backdrop-blur-md text-white border border-white/20">
                      {project.category}
                    </span>

                    {/* Company Badge */}
                    <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-md text-white/80">
                      @ {project.company}
                    </span>

                    {/* View Project Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium flex items-center gap-2">
                        <Eye size={16} />
                        View Project
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col relative">
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-500 line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Highlights with icons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                        >
                          <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2.5 py-1 text-xs rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* View Details Link */}
                    <div className="pt-3 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-pink-400 transition-colors">
                        View Details
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-10"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold glow-button"
            >
              {showAll ? `Show Less` : `Show All ${filteredProjects.length} Projects`}
            </motion.button>
          </motion.div>
        )}

        {/* Project Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          Showing {displayedProjects.length} of {filteredProjects.length} projects
          {activeCategory !== "All" && ` in ${activeCategory}`}
        </motion.p>
      </div>
    </section>
  );
}
