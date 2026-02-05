export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  highlights: string[];
  color: string;
  company: string;
  year: string;
  role: string;
  duration: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  features?: string[];
  links?: {
    live?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  // === E-COMMERCE PROJECTS ===
  {
    slug: "electgo-ecommerce",
    title: "ElectGo E-Commerce Platform",
    description:
      "Led Magento architecture optimizations that accelerated revenue growth by 66.7% and reduced development costs from $300K to $20K per month.",
    fullDescription: `ElectGo is a leading B2B electronics e-commerce platform serving Singapore and Indonesia markets. As the Senior Software Engineer, I was responsible for transforming the entire Magento infrastructure to support rapid business growth.

The platform required significant architectural changes to handle multi-warehouse management, complex pricing structures for B2B customers, and integration with enterprise systems like Epicor ERP for real-time inventory synchronization.

My role involved making critical decisions on system architecture, leading the technical strategy, and implementing solutions that directly impacted revenue and operational efficiency.`,
    category: "E-Commerce",
    technologies: ["Magento 2", "ReactJS", "NestJS", "Epicor ERP", "New Relic", "Xendit", "Easyship", "PHP", "MySQL", "Redis", "Elasticsearch"],
    highlights: ["66.7% revenue growth", "30% faster checkout", "$280K cost savings"],
    color: "from-purple-500 to-pink-500",
    company: "ElectGo (Lim Kim Hai Group)",
    year: "2023 - 2025",
    role: "Senior Software Engineer",
    duration: "1.5 years",
    challenges: [
      "High development costs with external vendors ($300K/month)",
      "Slow checkout process affecting conversion rates",
      "Complex multi-warehouse inventory management",
      "Integration challenges with legacy ERP systems",
    ],
    solutions: [
      "Architected Credit Terms Flow for B2B payment flexibility",
      "Redesigned Order Processing for multi-warehouse fulfillment",
      "Integrated Epicor ERP for real-time stock synchronization",
      "Implemented region-specific payment gateways (Xendit, etc.)",
      "Built product recommendation API using NestJS",
    ],
    results: [
      "Revenue growth increased by 66.7%",
      "Checkout time reduced by 30%",
      "Order fulfillment time decreased by 25%",
      "Development costs reduced from $300K to $20K/month",
      "Eliminated need for external SEO specialists",
    ],
    features: [
      "Multi-warehouse inventory management",
      "B2B credit terms and pricing",
      "Real-time ERP synchronization",
      "AI-powered product recommendations",
      "Cross-border shipping integration",
    ],
  },
  {
    slug: "3second-multi-brand",
    title: "3Second Multi-Brand E-Commerce",
    description:
      "Customized and developed Magento themes for a multi-brand e-commerce platform supporting 6 fashion brands with consistent branding.",
    fullDescription: `3Second is one of Indonesia's largest fashion retail groups, managing multiple popular brands including 3Second, Greenlight, Moutley, Famo, FMC, and Hanna. The challenge was to create a unified e-commerce experience while maintaining each brand's unique identity.

I developed custom Magento themes that shared a common codebase but allowed for brand-specific customizations, ensuring consistency in functionality while preserving individual brand aesthetics.`,
    category: "E-Commerce",
    technologies: ["Magento 2", "PHP", "JavaScript", "MySQL", "LESS", "RequireJS"],
    highlights: ["6 brand stores", "Unified experience", "Custom themes"],
    color: "from-pink-500 to-rose-500",
    company: "Kemana.com",
    year: "2018",
    role: "Magento Developer",
    duration: "1 year",
    challenges: [
      "Managing 6 different brand identities on one platform",
      "Ensuring consistent functionality across all stores",
      "Performance optimization for high traffic",
    ],
    solutions: [
      "Created modular theme architecture",
      "Implemented shared components with brand-specific overrides",
      "Optimized database queries and caching strategies",
    ],
    results: [
      "Successfully launched 6 brand storefronts",
      "Reduced development time for new brand additions by 60%",
      "Improved page load times across all stores",
    ],
    features: [
      "Multi-brand storefront management",
      "Shared cart and checkout",
      "Brand-specific promotions",
      "Unified inventory management",
    ],
  },
  {
    slug: "al-ikhsan-ecommerce",
    title: "Al-Ikhsan E-Commerce",
    description:
      "Developed a fully functional e-commerce platform from scratch using Magento 2 with responsive design optimized for performance.",
    fullDescription: `Al-Ikhsan is a major sports retail chain in Malaysia. I was tasked with building their e-commerce platform from the ground up, translating Adobe XD designs into a fully functional Magento 2 store.

The project required careful attention to performance optimization, mobile responsiveness, and seamless integration with their existing inventory systems.`,
    category: "E-Commerce",
    technologies: ["Magento 2", "Adobe XD", "PHP", "MySQL", "JavaScript", "LESS"],
    highlights: ["Built from scratch", "Responsive design", "Optimized performance"],
    color: "from-blue-500 to-indigo-500",
    company: "Kemana.com",
    year: "2018",
    role: "Magento Developer",
    duration: "6 months",
    challenges: [
      "Translating complex designs into Magento themes",
      "Ensuring mobile-first responsive experience",
      "Integration with existing retail systems",
    ],
    solutions: [
      "Pixel-perfect implementation from Adobe XD",
      "Mobile-first CSS architecture",
      "Custom API integrations for inventory sync",
    ],
    results: [
      "Successfully launched online store",
      "Achieved excellent mobile conversion rates",
      "Seamless inventory synchronization",
    ],
  },
  {
    slug: "tokowahab-optimization",
    title: "Tokowahab.com Optimization",
    description:
      "Optimized website performance achieving 30%+ improvement in Google PageSpeed scores from 45 to 80.",
    fullDescription: `Tokowahab is a leading baking supplies e-commerce store in Indonesia. The website was suffering from poor performance, affecting user experience and SEO rankings.

I conducted a comprehensive performance audit and implemented various optimizations to dramatically improve loading times and overall site performance.`,
    category: "E-Commerce",
    technologies: ["Magento", "PHP", "Performance Optimization", "SEO", "Redis", "Varnish"],
    highlights: ["30%+ PageSpeed boost", "45 to 80 score", "SEO improved"],
    color: "from-amber-500 to-orange-500",
    company: "Kemana.com",
    year: "2018",
    role: "Magento Developer",
    duration: "3 months",
    challenges: [
      "Extremely slow page load times",
      "Poor Google PageSpeed scores (45)",
      "High server resource usage",
    ],
    solutions: [
      "Implemented full-page caching with Varnish",
      "Optimized database queries and indexes",
      "Compressed and lazy-loaded images",
      "Minified CSS and JavaScript",
      "Implemented Redis for session storage",
    ],
    results: [
      "PageSpeed score improved from 45 to 80",
      "Page load time reduced by 60%",
      "Server costs reduced by 40%",
      "Improved SEO rankings",
    ],
  },
  {
    slug: "eq-saddlery-integration",
    title: "EQ Saddlery - Multi-System Integration",
    description:
      "Maintained Shopify theme and integrated multiple systems including Rex, HubSpot, and Lion Point via Laravel middleware.",
    fullDescription: `EQ Saddlery is a premium equestrian equipment retailer requiring seamless integration between their Shopify store and multiple business systems including Rex POS, HubSpot CRM, and Lion Point inventory management.

I developed a Laravel-based middleware that acts as the central hub for all system integrations, ensuring real-time data synchronization and consistent customer experience across all touchpoints.`,
    category: "E-Commerce",
    technologies: ["Shopify", "Laravel", "Rex POS", "HubSpot", "Lion Point", "REST APIs", "Webhooks"],
    highlights: ["25% efficiency boost", "Multi-system sync", "Laravel middleware"],
    color: "from-teal-500 to-cyan-500",
    company: "BlueRock",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "Ongoing",
    challenges: [
      "Multiple disconnected business systems",
      "Manual data entry causing errors",
      "Lack of real-time inventory visibility",
    ],
    solutions: [
      "Built centralized Laravel middleware",
      "Implemented webhook-based real-time sync",
      "Created unified API for all integrations",
    ],
    results: [
      "Order processing efficiency improved by 25%",
      "Eliminated manual data entry errors",
      "Real-time inventory across all channels",
    ],
  },
  {
    slug: "vamosh-ecommerce",
    title: "Vamosh Group E-Commerce",
    description:
      "Led the migration from offline store to online platform, achieving 300% sales increase in the first year.",
    fullDescription: `Vamosh Group was a traditional offline Muslim fashion retailer looking to expand into e-commerce. I led the complete digital transformation, building their online presence from scratch and implementing comprehensive digital marketing strategies.

This project combined technical development with digital marketing expertise, resulting in explosive growth and industry recognition.`,
    category: "E-Commerce",
    technologies: ["PHP", "MySQL", "SEO", "SEM", "Facebook Ads", "Instagram Marketing"],
    highlights: ["300% sales growth", "Top Brand Award", "40% Y2 growth"],
    color: "from-emerald-500 to-green-500",
    company: "Vamosh Group",
    year: "2013 - 2016",
    role: "Developer & Digital Marketing Specialist",
    duration: "3 years",
    challenges: [
      "No existing online presence",
      "Limited technical infrastructure",
      "Competitive fashion market",
    ],
    solutions: [
      "Built responsive e-commerce website",
      "Implemented comprehensive SEO strategy",
      "Managed social media marketing campaigns",
      "Integrated with marketplace platforms",
    ],
    results: [
      "300% sales increase in first year",
      "40% additional growth in second year",
      "Named 'Top Muslim Clothes Brand on Tokopedia' 2014",
      "Established strong social media presence",
    ],
  },

  // === REAL-TIME SYSTEMS ===
  {
    slug: "flight-information-display",
    title: "Flight Information Display System",
    description:
      "Built a real-time FIDS using Golang, ReactJS, and Redis Pub/Sub for airports with live flight status updates.",
    fullDescription: `The Flight Information Display System (FIDS) is a critical airport infrastructure component that displays real-time flight information to passengers. This system needed to handle high-frequency updates, support multiple display screens, and maintain 99.99% uptime.

I architected and developed a modern FIDS using Golang for the backend services, ReactJS for the display interfaces, and Redis Pub/Sub for real-time data distribution across multiple terminals.`,
    category: "Real-time Systems",
    technologies: ["Golang", "ReactJS", "Redis Pub/Sub", "WebSockets", "PostgreSQL", "Docker"],
    highlights: ["Real-time updates", "Multi-screen support", "High availability"],
    color: "from-cyan-500 to-blue-500",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "6 months",
    challenges: [
      "Sub-second update requirements",
      "Multiple display synchronization",
      "24/7 high availability requirement",
    ],
    solutions: [
      "Event-driven architecture with Redis Pub/Sub",
      "Golang microservices for high performance",
      "WebSocket connections for instant updates",
      "Redundant system design for failover",
    ],
    results: [
      "Sub-100ms update latency achieved",
      "99.99% system uptime",
      "Supports unlimited display screens",
      "Zero data loss during peak operations",
    ],
    features: [
      "Real-time flight status updates",
      "Multi-language support",
      "Gate change notifications",
      "Delay and cancellation alerts",
      "Integration with airline systems",
    ],
  },
  {
    slug: "omni-channel-chat",
    title: "Omni-Channel Chat System",
    description:
      "Architected an omni-channel chat system supporting WhatsApp, Messenger, and Instagram with 40% faster response time.",
    fullDescription: `Halosis needed a unified chat platform to manage customer communications across WhatsApp, Facebook Messenger, and Instagram. The system needed to provide real-time messaging, agent assignment, and seamless handoff between channels.

I designed and implemented the entire architecture using Laravel for the API layer, WebSockets for real-time communication, and Firebase for push notifications.`,
    category: "Real-time Systems",
    technologies: ["Laravel", "WebSockets", "Firebase", "VueJS 3", "Redis", "MySQL"],
    highlights: ["40% faster response", "20% sales increase", "Multi-platform"],
    color: "from-green-500 to-emerald-500",
    company: "Halosis",
    year: "2022 - 2023",
    role: "Senior Software Engineer",
    duration: "1 year",
    challenges: [
      "Multiple messaging platform integrations",
      "Real-time message synchronization",
      "Agent workload management",
    ],
    solutions: [
      "Unified messaging API abstraction layer",
      "WebSocket-based real-time updates",
      "Smart agent routing algorithm",
      "Firebase push notifications",
    ],
    results: [
      "Response time reduced by 40%",
      "Sales conversions increased by 20%",
      "Customer support costs reduced",
      "Unified view of all conversations",
    ],
    features: [
      "Multi-platform messaging",
      "Real-time chat synchronization",
      "Agent assignment and transfer",
      "Automated responses",
      "Analytics dashboard",
    ],
  },
  {
    slug: "chat-management-dashboard",
    title: "Chat Management Dashboard",
    description:
      "Developed a chat management dashboard with VueJS 3 for real-time monitoring and agent management.",
    fullDescription: `As part of the Halosis chat platform, I developed a comprehensive dashboard that allows sellers and administrators to monitor all customer conversations, respond to messages, and manage agent assignments in real-time.

The dashboard provides full visibility into chat queues, agent performance metrics, and customer satisfaction scores.`,
    category: "Real-time Systems",
    technologies: ["VueJS 3", "Laravel", "WebSockets", "Firebase", "TailwindCSS"],
    highlights: ["Real-time monitoring", "Chat transfer", "Admin controls"],
    color: "from-violet-500 to-purple-500",
    company: "Halosis",
    year: "2022 - 2023",
    role: "Senior Software Engineer",
    duration: "6 months",
    features: [
      "Real-time conversation monitoring",
      "Agent performance analytics",
      "Chat transfer between agents",
      "Customer history view",
      "Quick response templates",
    ],
  },
  {
    slug: "toyota-service-booking",
    title: "Toyota Service Booking App",
    description:
      "Developed a cross-platform Flutter application for Toyota service teams with real-time WebSocket updates.",
    fullDescription: `Rajamobil.com needed a cross-platform application for Toyota service centers to manage customer service bookings efficiently. The app needed to work on web, desktop, and mobile platforms while providing real-time updates on booking status.

I delivered the project under tight deadlines using Flutter for cross-platform development and Laravel backend with WebSocket integration for real-time notifications.`,
    category: "Real-time Systems",
    technologies: ["Flutter", "Laravel", "WebSockets", "GetX", "MySQL"],
    highlights: ["Cross-platform", "Real-time updates", "15% faster dev"],
    color: "from-red-500 to-rose-500",
    company: "Rajamobil.com",
    year: "2022",
    role: "Software Engineer (Freelance)",
    duration: "6 months",
    challenges: [
      "Tight project deadline",
      "Cross-platform requirement",
      "Real-time booking updates needed",
    ],
    solutions: [
      "Flutter for unified codebase across platforms",
      "GetX for efficient state management",
      "WebSocket integration for instant updates",
      "Figma to Flutter pixel-perfect conversion",
    ],
    results: [
      "Development accelerated by 15%",
      "Single codebase for all platforms",
      "Real-time booking notifications",
      "Improved service team efficiency",
    ],
    features: [
      "Service booking management",
      "Real-time status updates",
      "Customer notification system",
      "Service history tracking",
      "Team assignment features",
    ],
  },

  // === MOBILE APPS ===
  {
    slug: "ngitung-financial-app",
    title: "Ngitung - Financial App",
    description:
      "Built a financial cash management and savings mobile application for Android and iOS using Flutter with NestJS backend.",
    fullDescription: `Ngitung is a personal finance management application designed to help users track their cash flow, manage savings goals, and gain insights into their spending habits. The app was built using Flutter for a native experience on both Android and iOS.

The backend was developed using NestJS with PostgreSQL for robust data management and Firebase for real-time synchronization across devices.`,
    category: "Mobile App",
    technologies: ["Flutter", "NestJS", "PostgreSQL", "Firebase", "GetX"],
    highlights: ["Cross-platform", "Real-time sync", "Secure transactions"],
    color: "from-orange-500 to-amber-500",
    company: "BlueRock",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "Ongoing",
    features: [
      "Expense tracking",
      "Savings goals",
      "Budget management",
      "Financial reports",
      "Multi-device sync",
      "Secure authentication",
    ],
  },
  {
    slug: "atm-repair-service",
    title: "ATM Machine Repair Service",
    description:
      "Built a service management system using Golang, VueJS, and Flutter to streamline ATM repair operations.",
    fullDescription: `This system was developed to manage ATM repair operations, including technician dispatching, service tracking, and inventory management for spare parts. The solution includes a web dashboard for administrators and a mobile app for field technicians.`,
    category: "Mobile App",
    technologies: ["Golang", "VueJS", "Flutter", "PostgreSQL", "Redis"],
    highlights: ["Service tracking", "Technician dispatch", "Real-time status"],
    color: "from-slate-500 to-gray-600",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "8 months",
    features: [
      "Work order management",
      "Technician GPS tracking",
      "Spare parts inventory",
      "Service history",
      "Performance reports",
    ],
  },

  // === WEB APPS ===
  {
    slug: "wedding-invitation-platform",
    title: "Wedding Invitation Platform",
    description:
      "Developed a Next.js powered invitation platform integrated with WhatsApp Business API for seamless guest interactions.",
    fullDescription: `A modern digital wedding invitation platform that allows couples to create beautiful online invitations, manage RSVPs, and communicate with guests through WhatsApp integration.

The platform features customizable templates, guest management, and automated reminders sent via WhatsApp Business API.`,
    category: "Web App",
    technologies: ["Next.js", "WhatsApp Business API", "Tailwind CSS", "PostgreSQL", "Prisma"],
    highlights: ["WhatsApp integration", "RSVP management", "Custom templates"],
    color: "from-violet-500 to-purple-500",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "4 months",
    features: [
      "Customizable invitation templates",
      "Online RSVP management",
      "WhatsApp notifications",
      "Guest list management",
      "Event countdown",
      "Photo gallery",
    ],
  },
  {
    slug: "hsbc-danamon-calculators",
    title: "HSBC & Danamon Financial Calculators",
    description:
      "Developed financial calculators for HSBC and Danamon banks enhancing customer financial planning tools.",
    fullDescription: `Created interactive financial calculators for two major banks to help customers plan their loans, mortgages, and investments. The calculators feature real-time calculations, comparison tools, and integration with the banks' product offerings.`,
    category: "Web App",
    technologies: ["Laravel", "JavaScript", "HTML5", "Tailwind CSS", "Chart.js"],
    highlights: ["Banking clients", "Financial tools", "User-friendly UI"],
    color: "from-red-500 to-red-600",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "3 months",
    features: [
      "Loan calculators",
      "Mortgage planning tools",
      "Investment projections",
      "Comparison features",
      "PDF report generation",
    ],
  },
  {
    slug: "celebrity-fitness-platform",
    title: "Celebrity Fitness Platform",
    description:
      "Designed and built a fitness appointment and member registration system for streamlined booking and membership management.",
    fullDescription: `Celebrity Fitness needed a modern platform to handle membership registrations, class bookings, and appointment scheduling. The system integrates with their existing Magento infrastructure while providing a seamless user experience for fitness enthusiasts.`,
    category: "Web App",
    technologies: ["Magento 2", "PHP", "MySQL", "JavaScript", "REST APIs"],
    highlights: ["Appointment booking", "Member registration", "Streamlined UX"],
    color: "from-yellow-500 to-orange-500",
    company: "Kemana.com",
    year: "2018",
    role: "Magento Developer",
    duration: "4 months",
    features: [
      "Member registration",
      "Class scheduling",
      "Trainer booking",
      "Membership management",
      "Payment processing",
    ],
  },
  {
    slug: "mini-online-catalog",
    title: "Mini Online Store Catalog",
    description:
      "Built a mini online store catalog using ReactJS and TailwindCSS with Golang backend for improved product discovery.",
    fullDescription: `A lightweight product catalog system designed for sellers to quickly showcase their products without the complexity of a full e-commerce platform. The system focuses on speed, ease of use, and mobile-first design.`,
    category: "Web App",
    technologies: ["ReactJS", "TailwindCSS", "Golang", "PostgreSQL", "Redis"],
    highlights: ["Fast performance", "Product discovery", "Scalable backend"],
    color: "from-indigo-500 to-blue-500",
    company: "Halosis",
    year: "2022 - 2023",
    role: "Senior Software Engineer",
    duration: "3 months",
    features: [
      "Product showcase",
      "Category management",
      "Search functionality",
      "WhatsApp integration",
      "Analytics dashboard",
    ],
  },
  {
    slug: "kiehls-event-website",
    title: "Kiehl's Event Website",
    description:
      "Built an event website for Kiehl's to support digital marketing initiatives and brand engagement campaigns.",
    fullDescription: `Created a promotional event website for Kiehl's skincare brand, featuring interactive elements, product showcases, and campaign registration functionality.`,
    category: "Web App",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
    highlights: ["Marketing campaign", "Brand engagement", "Event management"],
    color: "from-neutral-600 to-stone-700",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "1 month",
  },
  {
    slug: "vie-capital-lawyer-platform",
    title: "Vie Capital - Lawyer Platform",
    description:
      "Enhanced performance and implemented new features for a Laravel-based lawyer group platform with 30% faster response time.",
    fullDescription: `Vie Capital operates a platform connecting clients with legal professionals. I was brought in to optimize the platform's performance and add new features to improve the case management workflow.`,
    category: "Web App",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Redis"],
    highlights: ["30% faster response", "Case management", "New features"],
    color: "from-blue-600 to-indigo-600",
    company: "BlueRock",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "Ongoing",
    features: [
      "Case management system",
      "Client communication portal",
      "Document management",
      "Billing integration",
      "Performance dashboards",
    ],
  },
  {
    slug: "ortho-tech-clinic-management",
    title: "Ortho Tech - Clinic Management",
    description:
      "Built a clinic management module integrated with CIN7 for seamless inventory and service synchronization.",
    fullDescription: `Ortho Tech required a specialized clinic management module that integrates with their CIN7 inventory system. The solution automates inventory tracking, appointment scheduling, and service management.`,
    category: "Web App",
    technologies: ["Laravel", "CIN7 API", "PHP", "MySQL", "VueJS"],
    highlights: ["CIN7 integration", "10+ hrs/week saved", "Inventory sync"],
    color: "from-teal-500 to-emerald-500",
    company: "BlueRock",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "Ongoing",
    features: [
      "Appointment scheduling",
      "Inventory management",
      "CIN7 integration",
      "Patient records",
      "Service tracking",
    ],
  },

  // === CMS ===
  {
    slug: "madmex-store-locator",
    title: "Madmex - Store Locator Platform",
    description:
      "Developed a custom WordPress theme and plugin featuring a store locator with 50% improved page load speed.",
    fullDescription: `Madmex, an Australian Mexican food chain, needed a modern website with an efficient store locator to help customers find their nearest restaurant. I developed a custom WordPress theme with advanced caching and a feature-rich store locator plugin.`,
    category: "CMS",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "Google Maps API"],
    highlights: ["50% faster load", "Store locator", "Advanced caching"],
    color: "from-orange-500 to-red-500",
    company: "BlueRock",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "2 months",
    features: [
      "Interactive store locator",
      "Geolocation support",
      "Store details and hours",
      "Directions integration",
      "Performance optimized",
    ],
  },
  {
    slug: "northcote-corner-themes",
    title: "Northcote Social & Corner Group",
    description:
      "Created custom WordPress themes with Lando optimization for improved development workflow and site performance.",
    fullDescription: `Developed custom WordPress themes for hospitality venues including Northcote Social and Corner Group properties. The themes were built with performance in mind and developed using Lando for an optimized local development environment.`,
    category: "CMS",
    technologies: ["WordPress", "PHP", "Lando", "JavaScript", "SCSS"],
    highlights: ["Custom themes", "Lando optimized", "Fast development"],
    color: "from-purple-600 to-violet-600",
    company: "BlueRock",
    year: "2025",
    role: "Full-Stack Engineer",
    duration: "2 months",
  },
  {
    slug: "boardwhisperers-inboundid",
    title: "The Boardwhisperers & InboundID",
    description:
      "Designed and developed custom WordPress themes for better brand identity and improved user engagement.",
    fullDescription: `Created bespoke WordPress themes for consulting businesses, focusing on brand identity, lead generation, and user experience. Both sites feature modern designs with conversion-optimized layouts.`,
    category: "CMS",
    technologies: ["WordPress", "PHP", "CSS", "JavaScript", "ACF"],
    highlights: ["Brand identity", "Custom design", "User engagement"],
    color: "from-sky-500 to-blue-500",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "2 months",
  },

  // === HEALTHCARE ===
  {
    slug: "zicare-healthcare-system",
    title: "Zi.Care Healthcare System",
    description:
      "Developed role-based dashboards and integrated BPJS & INACBG systems for enhanced healthcare claim processing.",
    fullDescription: `Zi.Care is a healthcare information system serving hospitals and clinics in Indonesia. I developed role-based dashboards for different user types and integrated the system with Indonesia's national health insurance (BPJS) and INACBG systems for automated claim processing.

The project also involved migrating legacy databases to ensure data integrity and system reliability.`,
    category: "Healthcare",
    technologies: ["PHP", "MySQL", "BPJS API", "INACBG", "JavaScript", "Bootstrap"],
    highlights: ["30% less admin work", "Claim automation", "Database migration"],
    color: "from-cyan-600 to-teal-600",
    company: "Zi.Care",
    year: "2017 - 2018",
    role: "Developer & System Implementer",
    duration: "8 months",
    challenges: [
      "Complex healthcare regulations",
      "Legacy system integration",
      "Data migration requirements",
    ],
    solutions: [
      "Role-based access control system",
      "BPJS API integration for claims",
      "INACBG coding automation",
      "Comprehensive data migration scripts",
    ],
    results: [
      "Administrative workload reduced by 30%",
      "Claim processing time significantly reduced",
      "Successful legacy database migration",
      "Improved system reliability",
    ],
    features: [
      "Patient management",
      "Claim submission automation",
      "Role-based dashboards",
      "Reporting and analytics",
      "Integration with national systems",
    ],
  },

  // === INTEGRATIONS ===
  {
    slug: "payment-gateway-integrations",
    title: "Payment Gateway Integrations",
    description:
      "Implemented Doku and Xendit payment gateways for Amember and Magento platforms with 20% improved success rates.",
    fullDescription: `Developed payment gateway integrations for multiple platforms, enabling Indonesian businesses to accept various payment methods including bank transfers, e-wallets, and credit cards through Doku and Xendit payment processors.`,
    category: "Integration",
    technologies: ["PHP", "Doku API", "Xendit API", "Amember", "Magento", "REST APIs"],
    highlights: ["20% better success rate", "Multi-gateway", "Secure payments"],
    color: "from-green-600 to-emerald-600",
    company: "Emkalab",
    year: "2019 - 2022",
    role: "Lead Software Engineer",
    duration: "3 months",
    features: [
      "Multiple payment methods",
      "Automatic reconciliation",
      "Transaction monitoring",
      "Refund handling",
      "Webhook notifications",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(currentSlug: string, category: string): Project[] {
  return projects
    .filter((project) => project.slug !== currentSlug && project.category === category)
    .slice(0, 3);
}
