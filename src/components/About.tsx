"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Globe,
  Rocket,
  Server,
  Smartphone,
  Award,
  Users,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description:
      "Building end-to-end applications with modern frameworks and best practices using TypeScript, React, and Node.js.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Server,
    title: "Backend Architecture",
    description:
      "Designing scalable microservices, RESTful APIs, and event-driven systems using Golang, Laravel, and NestJS.",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description:
      "Magento 2, Shopify, and custom e-commerce platform development with payment and ERP integrations.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Database,
    title: "Database & Caching",
    description:
      "Optimizing performance with Redis, Elasticsearch, MySQL, and PostgreSQL for high-traffic applications.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps with Flutter for Android, iOS, and Web from a single codebase.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Rocket,
    title: "DevOps & CI/CD",
    description:
      "Docker containerization, GitHub Actions, GitLab CI/CD for automated deployments and testing.",
    color: "from-violet-500 to-violet-600",
  },
];

const achievements = [
  {
    icon: TrendingUp,
    value: "66.7%",
    label: "Revenue Growth",
    description: "For ElectGo e-commerce platform",
  },
  {
    icon: Award,
    value: "$280K",
    label: "Cost Savings",
    description: "Monthly development cost reduction",
  },
  {
    icon: Users,
    value: "99%",
    label: "Client Satisfaction",
    description: "Across 30+ delivered projects",
  },
  {
    icon: CheckCircle,
    value: "30+",
    label: "Projects Delivered",
    description: "Successfully completed",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-20 md:py-32 relative"
      aria-labelledby="about-heading"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.header
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
            <Users className="w-4 h-4" />
            GET TO KNOW ME
          </motion.span>
          <h2 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate software engineer dedicated to building scalable solutions
            and delivering exceptional results for businesses worldwide.
          </p>
        </motion.header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Bio Content */}
          <motion.article
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
            itemScope
            itemType="https://schema.org/Person"
            itemProp="mainEntity"
          >
            <meta itemProp="name" content="Denny Ferdiansyah" />
            <meta itemProp="jobTitle" content="Senior Software Engineer" />
            <meta itemProp="email" content="dferdiansyah2908@gmail.com" />
            <meta itemProp="url" content="https://www.dennyferdiansyah.my.id" />
            <link itemProp="sameAs" href="https://linkedin.com/in/dennyferdiansyah" />
            <link itemProp="sameAs" href="https://github.com/dennyferdiansyah" />

            <div className="glass-card p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-400" />
                Professional Summary
              </h3>
              <p className="text-gray-300 leading-relaxed" itemProp="description">
                I&apos;m <strong className="text-white">Denny Ferdiansyah</strong>, a{" "}
                <strong className="gradient-text">Senior Software Engineer</strong> with over{" "}
                <strong className="text-white">10 years of experience</strong> in Full-Stack
                Development. I specialize in building scalable, high-performance applications
                that drive business growth and deliver exceptional user experiences.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-pink-400" />
                Technical Expertise
              </h3>
              <p className="text-gray-400 leading-relaxed">
                My expertise spans across{" "}
                <span className="text-white">TypeScript</span>,{" "}
                <span className="text-white">Golang</span>,{" "}
                <span className="text-white">PHP</span>,{" "}
                <span className="text-white">Laravel</span>,{" "}
                <span className="text-white">React</span>,{" "}
                <span className="text-white">Next.js</span>,{" "}
                <span className="text-white">Magento</span>, and{" "}
                <span className="text-white">WordPress</span>. I&apos;m experienced in
                architecting scalable systems, optimizing performance, and integrating
                complex payment and logistics solutions.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-orange-400" />
                What I Do
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I&apos;m passionate about building efficient backend systems and seamless
                user experiences. From <span className="text-white">real-time applications</span>{" "}
                to <span className="text-white">e-commerce solutions</span>, I bring hands-on
                expertise in WebSockets, Firebase, ERP integrations, and third-party API
                integrations. I work remotely with clients worldwide, including{" "}
                <span className="text-white">Australia</span>,{" "}
                <span className="text-white">Singapore</span>, and{" "}
                <span className="text-white">Indonesia</span>.
              </p>
            </div>

            {/* Location Info */}
            <div
              className="flex items-center gap-4 text-gray-400"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span className="text-2xl">📍</span>
              <span>
                Based in{" "}
                <span itemProp="addressLocality" className="text-white">
                  Bandung
                </span>
                ,{" "}
                <span itemProp="addressCountry" className="text-white">
                  Indonesia
                </span>
                {" "}• Available for remote work worldwide
              </span>
            </div>
          </motion.article>

          {/* Right - Expertise Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-cyan-400" />
              Areas of Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-5 hover-lift group cursor-default"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-yellow-400" />
            Key Achievements
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center hover-lift cursor-default"
              >
                <achievement.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {achievement.value}
                </div>
                <div className="text-white font-medium text-sm mb-1">
                  {achievement.label}
                </div>
                <div className="text-gray-500 text-xs">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold glow-button"
          >
            Let&apos;s Work Together
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
