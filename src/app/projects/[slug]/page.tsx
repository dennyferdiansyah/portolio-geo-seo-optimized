"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Building2,
  Clock,
  ExternalLink,
  Github,
  CheckCircle2,
  Lightbulb,
  Target,
  Sparkles,
  ChevronRight,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { getProjectBySlug, getRelatedProjects, Project } from "@/data/projects";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const relatedProjects = getRelatedProjects(slug, project.category);

  return (
    <main
      className="min-h-screen relative"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <meta itemProp="name" content={project.title} />
      <meta itemProp="description" content={project.description} />
      <meta itemProp="dateCreated" content={project.year.split(" - ")[0]} />
      <meta itemProp="keywords" content={project.technologies.join(", ")} />
      <link itemProp="author" href="https://www.dennyferdiansyah.my.id/#person" />

      {/* Background Effects */}
      <div className="aurora" aria-hidden="true" />
      <div className="mesh-gradient" aria-hidden="true" />
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Back Button */}
      <motion.nav
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
        aria-label="Navigation"
      >
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-gray-300 hover:text-white transition-colors"
          aria-label="Go back to previous page"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          <span className="hidden sm:inline">Back</span>
        </button>
      </motion.nav>

      {/* Hero Section */}
      <header className={`relative pt-24 pb-16 overflow-hidden`}>
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" aria-hidden="true" />

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} text-white`}
                itemProp="genre"
              >
                {project.category}
              </span>
              <span className="text-gray-400" aria-hidden="true">•</span>
              <span
                className="text-gray-400"
                itemProp="provider"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <span itemProp="name">{project.company}</span>
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              itemProp="headline"
            >
              {project.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap gap-6 mb-8" role="list" aria-label="Project details">
              <div className="flex items-center gap-2 text-gray-300" role="listitem">
                <Building2 size={18} className="text-purple-400" aria-hidden="true" />
                <span>Client: {project.company}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300" role="listitem">
                <Calendar size={18} className="text-pink-400" aria-hidden="true" />
                <time itemProp="temporal">{project.year}</time>
              </div>
              <div className="flex items-center gap-2 text-gray-300" role="listitem">
                <Clock size={18} className="text-orange-400" aria-hidden="true" />
                <span>Duration: {project.duration}</span>
              </div>
            </div>

            {/* Short Description */}
            <p className="text-xl text-gray-300 max-w-3xl mb-8" itemProp="abstract">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mb-8" role="list" aria-label="Key highlights">
              {project.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                  role="listitem"
                >
                  <Sparkles size={14} aria-hidden="true" />
                  {highlight}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                  itemProp="url"
                  aria-label={`View live site for ${project.title}`}
                >
                  <ExternalLink size={18} aria-hidden="true" />
                  View Live Site
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all"
                  itemProp="codeRepository"
                  aria-label={`View source code for ${project.title}`}
                >
                  <Github size={18} aria-hidden="true" />
                  View Code
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </header>

      {/* Content Section */}
      <section className="py-16" aria-label="Project details">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Full Description */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20" aria-hidden="true">
                    <Layers size={20} className="text-purple-400" />
                  </div>
                  Project Overview
                </h2>
                <div className="prose prose-invert max-w-none" itemProp="articleBody">
                  {project.fullDescription.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.article>

              {/* Challenges & Solutions */}
              {project.challenges && project.solutions && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {/* Challenges */}
                  <div className="glass-card p-6 border border-red-500/20">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Target size={18} className="text-red-400" />
                      </div>
                      Challenges
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="glass-card p-6 border border-green-500/20">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-500/20">
                        <Lightbulb size={18} className="text-green-400" />
                      </div>
                      Solutions
                    </h3>
                    <ul className="space-y-3">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 size={16} className="mt-1 text-green-400 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Results */}
              {project.results && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="glass-card p-8 border border-purple-500/20"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                      <Target size={20} className="text-purple-400" />
                    </div>
                    Key Results
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {project.results.map((result, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
                      >
                        <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Features */}
              {project.features && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="glass-card p-8"
                >
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/20">
                      <Sparkles size={20} className="text-cyan-400" />
                    </div>
                    Key Features
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <ChevronRight size={16} className="text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 sticky top-24"
              >
                <h3 className="text-lg font-bold text-white mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Info */}
                <div className="mt-6 pt-6 border-t border-white/10 space-y-4">
                  <div>
                    <span className="text-gray-500 text-sm">Role</span>
                    <p className="text-white font-medium">{project.role}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Company</span>
                    <p className="text-white font-medium">{project.company}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Year</span>
                    <p className="text-white font-medium">{project.year}</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm">Duration</span>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 border-t border-white/10">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-white mb-8">
                Related Projects
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link
                    key={relatedProject.slug}
                    href={`/projects/${relatedProject.slug}`}
                    className="group"
                  >
                    <div className="glass-card overflow-hidden hover-lift h-full">
                      <div className={`h-32 bg-gradient-to-br ${relatedProject.color} relative`}>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Layers className="w-10 h-10 text-white/40 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Back to Projects */}
      <section className="py-12">
        <div className="section-container text-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium hover:bg-white/10 transition-all"
          >
            <ArrowLeft size={18} />
            Back to All Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
