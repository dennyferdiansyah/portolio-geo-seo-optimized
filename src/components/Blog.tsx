"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable E-Commerce with Magento 2",
    excerpt:
      "Learn how to architect Magento 2 for high-traffic e-commerce platforms with multi-warehouse support and optimized checkout flows.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "E-Commerce",
    image: "/blog/magento.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Real-Time Systems with Golang and WebSockets",
    excerpt:
      "A deep dive into building real-time applications using Golang, WebSockets, and Redis Pub/Sub for instant data synchronization.",
    date: "Dec 28, 2024",
    readTime: "10 min read",
    category: "Backend",
    image: "/blog/golang.jpg",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Cross-Platform Development with Flutter",
    excerpt:
      "How to build beautiful, performant mobile apps for iOS, Android, and Web from a single codebase using Flutter.",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    category: "Mobile",
    image: "/blog/flutter.jpg",
    color: "from-orange-500 to-amber-500",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="py-20 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium mb-4 block">
            LATEST INSIGHTS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Blog & <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Sharing my knowledge and experiences in software development,
            architecture patterns, and best practices.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card overflow-hidden hover-lift h-full flex flex-col">
                {/* Image */}
                <div
                  className={`h-48 bg-gradient-to-br ${post.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium bg-black/30 backdrop-blur-sm text-white border border-white/20 flex items-center gap-1">
                    <Tag size={12} />
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-400 text-sm flex-1 mb-4">
                    {post.excerpt}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-pink-400 transition-colors duration-300">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Coming Soon Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            More articles coming soon...
          </div>
        </motion.div>
      </div>
    </section>
  );
}
