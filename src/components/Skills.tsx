"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Globe, Layers, Wrench } from "lucide-react";
import {
  SiTypescript,
  SiGo,
  SiPhp,
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiNestjs,
  SiFlutter,
  SiMagento,
  SiWordpress,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiFirebase,
  SiTailwindcss,
  SiShopify,
  SiGraphql,
  SiAmazonwebservices,
  SiGooglecloud,
  SiElasticsearch,
} from "react-icons/si";
import { IconType } from "react-icons";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Code2,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    skills: [
      { name: "Golang", level: 90 },
      { name: "PHP / Laravel", level: 95 },
      { name: "Node.js / NestJS", level: 90 },
      { name: "TypeScript", level: 92 },
      { name: "REST APIs", level: 95 },
      { name: "GraphQL", level: 85 },
      { name: "Microservices", level: 88 },
      { name: "WebSockets", level: 90 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    skills: [
      { name: "React.js", level: 92 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 88 },
      { name: "Flutter", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Redux / Zustand", level: 88 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: Database,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
    skills: [
      { name: "MySQL / PostgreSQL", level: 92 },
      { name: "Redis", level: 88 },
      { name: "Elasticsearch", level: 85 },
      { name: "Docker", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "AWS / GCP", level: 80 },
    ],
  },
  {
    title: "E-Commerce & CMS",
    icon: Layers,
    color: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    skills: [
      { name: "Magento 2", level: 95 },
      { name: "WordPress", level: 92 },
      { name: "Shopify", level: 85 },
      { name: "Payment Integration", level: 92 },
      { name: "ERP Integration", level: 88 },
    ],
  },
];

interface TechLogo {
  name: string;
  icon: IconType;
  color: string;
}

const techLogos: TechLogo[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Golang", icon: SiGo, color: "#00ADD8" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Magento", icon: SiMagento, color: "#EE672F" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  { name: "Shopify", icon: SiShopify, color: "#7AB55C" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Elasticsearch", icon: SiElasticsearch, color: "#005571" },
];

const additionalSkills = [
  "RabbitMQ", "JWT / OAuth2", "New Relic", "Swagger/OpenAPI",
  "Jest", "Cypress", "Scrum", "JIRA", "Git", "Linux", "Nginx", "PWA"
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative"
      aria-labelledby="skills-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Technical Skills of Denny Ferdiansyah" />
      <meta itemProp="description" content="Comprehensive technical skills and expertise in full-stack development, e-commerce, mobile development, and DevOps" />

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
            <Wrench className="w-4 h-4" aria-hidden="true" />
            MY EXPERTISE
          </motion.span>
          <h2 id="skills-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over 10+ years of hands-on experience
            in full-stack development and system architecture.
          </p>
        </motion.header>

        {/* Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 overflow-hidden relative"
        >
          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="flex gap-4 animate-marquee">
            {[...techLogos, ...techLogos].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 whitespace-nowrap hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-default"
                >
                  <IconComponent className="w-5 h-5" style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </motion.span>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6" role="list" aria-label="Skill categories">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.1 }}
              className="group"
              role="listitem"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={(categoryIndex + 1).toString()} />
              <div
                className={`glass-card p-6 hover-lift h-full border ${category.borderColor}`}
                itemProp="item"
                itemScope
                itemType="https://schema.org/DefinedTerm"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${category.bgColor}`} aria-hidden="true">
                    <category.icon className={`w-6 h-6 bg-gradient-to-br ${category.color} bg-clip-text text-transparent`} style={{ color: category.color.includes('purple') ? '#a78bfa' : category.color.includes('pink') ? '#f472b6' : category.color.includes('orange') ? '#fb923c' : '#22d3ee' }} />
                  </div>
                  <h3 className="text-xl font-bold text-white" itemProp="name">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="space-y-4" role="list" aria-label={`${category.title} skills`}>
                  <meta itemProp="description" content={category.skills.map(s => s.name).join(', ')} />
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill"
                      role="listitem"
                      itemScope
                      itemType="https://schema.org/DefinedTerm"
                    >
                      <div className="flex justify-between mb-2">
                        <span
                          className="text-gray-300 text-sm font-medium group-hover/skill:text-white transition-colors"
                          itemProp="name"
                        >
                          {skill.name}
                        </span>
                        <span className="text-gray-500 text-sm" aria-label={`Proficiency: ${skill.level}%`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div
                        className="h-2 bg-white/5 rounded-full overflow-hidden"
                        role="progressbar"
                        aria-valuenow={skill.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${skill.name} proficiency`}
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1.2,
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} relative`}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" aria-hidden="true" />
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12"
        >
          <h3 className="text-center text-gray-400 mb-6 flex items-center justify-center gap-2">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-gray-600" />
            Also experienced with
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-gray-600" />
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.03 }}
                whileHover={{ scale: 1.1 }}
                className="skill-badge cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(200%);
          }
        }
      `}</style>
    </section>
  );
}
