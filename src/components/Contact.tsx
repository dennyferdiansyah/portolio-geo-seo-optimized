"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  MessageCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dferdiansyah2908@gmail.com",
    href: "mailto:dferdiansyah2908@gmail.com",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 812 6773 966",
    href: "tel:+628126773966",
    color: "from-pink-500 to-pink-600",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bandung, Indonesia",
    href: "https://maps.google.com/?q=Bandung,Indonesia",
    color: "from-orange-500 to-orange-600",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/dennyferdiansyah",
    color: "hover:text-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/dennyferdiansyah",
    color: "hover:text-gray-300",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:dferdiansyah2908@gmail.com",
    color: "hover:text-purple-400",
  },
];

const ctaOptions = [
  {
    icon: Mail,
    title: "Send an Email",
    description: "Drop me a line anytime",
    href: "mailto:dferdiansyah2908@gmail.com?subject=Project%20Inquiry",
    color: "from-purple-500 to-pink-500",
    label: "Email Me",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat for urgent matters",
    href: "https://wa.me/628126773966?text=Hi%20Denny,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    color: "from-green-500 to-emerald-500",
    label: "Chat Now",
  },
  {
    icon: Calendar,
    title: "Schedule a Call",
    description: "Book a time that works for you",
    href: "mailto:dferdiansyah2908@gmail.com?subject=Schedule%20a%20Call&body=Hi%20Denny,%0A%0AI%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20a%20potential%20project.%0A%0APreferred%20time:%20",
    color: "from-orange-500 to-amber-500",
    label: "Book Call",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="section-container" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-medium mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss
            how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.label === "Location" ? "_blank" : undefined}
                  rel={item.label === "Location" ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-4 flex items-center gap-4 hover-lift block"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-6"
            >
              <h3 className="text-white font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:bg-white/10 hover:scale-110`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card p-4"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-gray-300">
                  Currently available for new projects
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to start a project?
              </h3>
              <p className="text-gray-400 mb-8">
                Choose your preferred way to get in touch. I typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {ctaOptions.map((option, index) => (
                  <motion.a
                    key={option.title}
                    href={option.href}
                    target={option.title === "WhatsApp" ? "_blank" : undefined}
                    rel={option.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <option.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">{option.title}</p>
                        <p className="text-gray-400 text-sm">{option.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                      <span className="hidden sm:inline text-sm font-medium">{option.label}</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-card p-6 border border-purple-500/20"
            >
              <h4 className="text-white font-semibold mb-2">What I can help with:</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-0.5">•</span>
                  Full-stack web application development
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-400 mt-0.5">•</span>
                  E-commerce solutions (Magento, Shopify, WordPress)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 mt-0.5">•</span>
                  Mobile app development with Flutter
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 mt-0.5">•</span>
                  System architecture and performance optimization
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
