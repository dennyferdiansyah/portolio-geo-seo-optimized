"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "BlueRock",
    role: "Full-Stack Engineer",
    period: "Mar 2025 - Present",
    location: "Australia, Remote",
    type: "Full-time",
    description:
      "Working on diverse projects including WordPress themes, Laravel platforms, clinic management systems, and mobile apps with Flutter/NestJS.",
    achievements: [
      "Improved page load speed by 50% for Madmex store locator",
      "Reduced platform response time by 30% for Vie Capital",
      "Automated inventory tracking, saving 10+ hours/week for Ortho Tech",
      "Streamlined multi-system integration, improving order processing by 25%",
    ],
    technologies: ["WordPress", "Laravel", "Flutter", "NestJS", "Shopify"],
  },
  {
    company: "ElectGo (Lim Kim Hai Group)",
    role: "Senior Software Engineer",
    period: "Sep 2023 - Mar 2025",
    location: "Singapore, Remote",
    type: "Full-time",
    description:
      "Led Magento architecture and optimizations, achieving significant revenue growth and cost reductions for the e-commerce platform.",
    achievements: [
      "Spearheaded Magento optimizations that accelerated revenue growth by 66.7%",
      "Reduced developer costs from $300K to $20K per month within 1 year",
      "Architected Credit Terms Flow, leading to 30% faster checkout",
      "Redesigned Order Processing, reducing fulfillment time by 25%",
    ],
    technologies: ["Magento 2", "ReactJS", "NestJS", "New Relic", "Epicor ERP"],
  },
  {
    company: "Halosis",
    role: "Senior Software Engineer",
    period: "Sep 2022 - Oct 2023",
    location: "Jakarta, Remote",
    type: "Full-time",
    description:
      "Led development of real-time chat systems and omni-channel communication platforms for enhanced customer interactions.",
    achievements: [
      "Reduced response time by 40% with WebSocket-based messaging",
      "Increased sales conversions by 20% with ReactJS mini catalog",
      "Integrated omni-channel chat supporting WhatsApp, Messenger, Instagram",
    ],
    technologies: ["Laravel", "VueJS 3", "ReactJS", "Golang", "WebSockets", "Firebase"],
  },
  {
    company: "Emkalab",
    role: "Lead Software Engineer",
    period: "Aug 2019 - Sep 2022",
    location: "Bandung",
    type: "Full-time",
    description:
      "Led and delivered 30+ successful projects across various industries, from financial calculators to airport display systems.",
    achievements: [
      "Achieved 99% client satisfaction with 30+ projects delivered",
      "Improved backend efficiency by 40% with scalable architectures",
      "Reduced development cycles by 20% with structured documentation",
    ],
    technologies: ["Laravel", "Golang", "ReactJS", "Next.js", "Flutter", "VueJS"],
    projects: [
      "HSBC & Danamon - Financial calculators",
      "Flight Information Display System - Real-time FIDS for airports",
      "Wedding Invitation System - WhatsApp Business API integration",
    ],
  },
  {
    company: "Kemana.com",
    role: "Magento Developer",
    period: "Jan 2018 - Dec 2018",
    location: "Bandung",
    type: "Full-time",
    description:
      "Developed custom Magento themes and integrations for major e-commerce platforms in Indonesia.",
    achievements: [
      "Boosted social media traffic by 25% with 'Share It' module",
      "Improved payment success rates by 20% with Midtrans integration",
      "Achieved 30%+ improvement in PageSpeed scores (45 to 80)",
    ],
    technologies: ["Magento 1.9", "Magento 2", "PHP", "JavaScript"],
    projects: ["3second.co.id", "tokowahab.com", "al-ikhsan.com", "celebrityfitness.com"],
  },
  {
    company: "Zi.Care",
    role: "Developer & System Implementer",
    period: "Jun 2017 - Jan 2018",
    location: "Karawang",
    type: "Full-time",
    description:
      "Developed healthcare systems and integrated BPJS/INACBG for improved claim processing efficiency.",
    achievements: [
      "Reduced administrative workload by 30% with role-based dashboards",
      "Optimized healthcare claim processing with BPJS/INACBG integration",
      "Successfully migrated legacy databases ensuring uninterrupted service",
    ],
    technologies: ["PHP", "MySQL", "Healthcare APIs"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-20 md:py-32 relative"
      aria-labelledby="experience-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="Work Experience of Denny Ferdiansyah" />
      <meta itemProp="description" content="Professional work history and career achievements of Denny Ferdiansyah, Senior Software Engineer" />
      <meta itemProp="numberOfItems" content={experiences.length.toString()} />

      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium mb-4 block">
            MY JOURNEY
          </span>
          <h2 id="experience-heading" className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full" />
        </motion.header>

        {/* Timeline */}
        <div className="relative" role="list" aria-label="Work experience timeline">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 transform md:-translate-x-1/2" aria-hidden="true" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                role="listitem"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={(index + 1).toString()} />

                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 mt-6 z-10 shadow-lg shadow-purple-500/50" aria-hidden="true" />

                {/* Content */}
                <div
                  className={`md:w-1/2 pl-8 md:pl-0 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                  itemProp="item"
                  itemScope
                  itemType="https://schema.org/OrganizationRole"
                >
                  <div className="glass-card p-6 hover-lift">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white" itemProp="roleName">
                          {exp.role}
                        </h3>
                        <p className="text-purple-400 font-medium">
                          <span
                            itemProp="memberOf"
                            itemScope
                            itemType="https://schema.org/Organization"
                          >
                            <span itemProp="name">{exp.company}</span>
                          </span>
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
                        {exp.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <time className="flex items-center gap-1" itemProp="startDate">
                        <Calendar size={14} className="text-pink-400" aria-hidden="true" />
                        {exp.period}
                      </time>
                      <span
                        className="flex items-center gap-1"
                        itemProp="namedPosition"
                      >
                        <MapPin size={14} className="text-orange-400" aria-hidden="true" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 mb-4" itemProp="description">{exp.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                        <Briefcase size={14} className="text-green-400" aria-hidden="true" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1" aria-label="Achievements">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-400 flex items-start gap-2"
                          >
                            <span className="text-green-400 mt-1" aria-hidden="true">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2" aria-label="Technologies used">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" aria-hidden="true" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
