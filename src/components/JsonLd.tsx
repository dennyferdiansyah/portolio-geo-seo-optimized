import Script from "next/script";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.dennyferdiansyah.my.id/#person",
  name: "Denny Ferdiansyah",
  alternateName: ["Denny F.", "DF"],
  givenName: "Denny",
  familyName: "Ferdiansyah",
  description: "Senior Software Engineer with over 10 years of experience in Full-Stack Development, specializing in TypeScript, Golang, PHP, Magento, and WordPress. Expert in architecting scalable systems, optimizing performance, and building e-commerce solutions.",
  url: "https://www.dennyferdiansyah.my.id",
  image: "https://www.dennyferdiansyah.my.id/profile-photo.jpg",
  email: "mailto:dferdiansyah2908@gmail.com",
  telephone: "+628126773966",
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "BlueRock",
    url: "https://bluerock.com.au",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressRegion: "West Java",
    addressCountry: "ID",
  },
  nationality: {
    "@type": "Country",
    name: "Indonesia",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Piksi Ganesha Polytechnic",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressCountry: "ID",
    },
  },
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Development",
    "TypeScript",
    "JavaScript",
    "Golang",
    "PHP",
    "Laravel",
    "React.js",
    "Next.js",
    "Vue.js",
    "Node.js",
    "NestJS",
    "Magento",
    "WordPress",
    "Shopify",
    "Flutter",
    "Mobile App Development",
    "E-commerce Development",
    "API Development",
    "Microservices Architecture",
    "WebSockets",
    "Real-time Systems",
    "Database Design",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Elasticsearch",
    "Docker",
    "CI/CD",
    "System Architecture",
    "Performance Optimization",
    "Payment Gateway Integration",
    "ERP Integration",
  ],
  knowsLanguage: [
    {
      "@type": "Language",
      name: "Indonesian",
      alternateName: "id",
    },
    {
      "@type": "Language",
      name: "English",
      alternateName: "en",
    },
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Senior Software Engineer",
    occupationLocation: {
      "@type": "Country",
      name: "Indonesia",
    },
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "Software Engineer Salary",
      currency: "USD",
    },
    skills: [
      "TypeScript",
      "Golang",
      "PHP",
      "Laravel",
      "React",
      "Next.js",
      "Vue.js",
      "Node.js",
      "Magento",
      "WordPress",
      "Flutter",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    responsibilities: [
      "Architecting scalable software systems",
      "Full-stack web application development",
      "E-commerce platform development and optimization",
      "Real-time system implementation",
      "API design and development",
      "Team leadership and mentoring",
      "Code review and quality assurance",
      "Performance optimization",
      "System integration",
    ],
  },
  sameAs: [
    "https://linkedin.com/in/dennyferdiansyah",
    "https://github.com/dennyferdiansyah",
    "https://www.dennyferdiansyah.my.id",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.dennyferdiansyah.my.id/#website",
  url: "https://www.dennyferdiansyah.my.id",
  name: "Denny Ferdiansyah Portfolio",
  description: "Portfolio website of Denny Ferdiansyah - Senior Software Engineer with 10+ years of experience",
  publisher: {
    "@id": "https://www.dennyferdiansyah.my.id/#person",
  },
  inLanguage: ["en-US", "id-ID"],
  copyrightYear: new Date().getFullYear(),
  copyrightHolder: {
    "@id": "https://www.dennyferdiansyah.my.id/#person",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.dennyferdiansyah.my.id/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.dennyferdiansyah.my.id/#service",
  name: "Denny Ferdiansyah - Software Development Services",
  description: "Professional software development services including full-stack development, e-commerce solutions, mobile app development, and system architecture consulting.",
  url: "https://www.dennyferdiansyah.my.id",
  telephone: "+628126773966",
  email: "dferdiansyah2908@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bandung",
    addressRegion: "West Java",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -6.9175,
    longitude: 107.6191,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Indonesia",
    },
    {
      "@type": "Country",
      name: "Singapore",
    },
    {
      "@type": "Country",
      name: "Australia",
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -6.9175,
        longitude: 107.6191,
      },
      geoRadius: "50000",
    },
  ],
  serviceType: [
    "Full-Stack Web Development",
    "E-commerce Development",
    "Mobile App Development",
    "API Development",
    "System Architecture Consulting",
    "Magento Development",
    "WordPress Development",
    "React/Next.js Development",
    "Laravel Development",
    "Golang Development",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "30",
    bestRating: "5",
    worstRating: "1",
  },
  founder: {
    "@id": "https://www.dennyferdiansyah.my.id/#person",
  },
};

const workExperienceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.dennyferdiansyah.my.id/#work-experience",
  name: "Work Experience",
  description: "Professional work experience of Denny Ferdiansyah",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "OrganizationRole",
        roleName: "Full-Stack Engineer",
        startDate: "2025-03",
        member: {
          "@id": "https://www.dennyferdiansyah.my.id/#person",
        },
        memberOf: {
          "@type": "Organization",
          name: "BlueRock",
          location: "Australia",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "OrganizationRole",
        roleName: "Senior Software Engineer",
        startDate: "2023-09",
        endDate: "2025-03",
        member: {
          "@id": "https://www.dennyferdiansyah.my.id/#person",
        },
        memberOf: {
          "@type": "Organization",
          name: "ElectGo (Lim Kim Hai Group)",
          location: "Singapore",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "OrganizationRole",
        roleName: "Senior Software Engineer",
        startDate: "2022-09",
        endDate: "2023-10",
        member: {
          "@id": "https://www.dennyferdiansyah.my.id/#person",
        },
        memberOf: {
          "@type": "Organization",
          name: "Halosis",
          location: "Jakarta, Indonesia",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "OrganizationRole",
        roleName: "Lead Software Engineer",
        startDate: "2019-08",
        endDate: "2022-09",
        member: {
          "@id": "https://www.dennyferdiansyah.my.id/#person",
        },
        memberOf: {
          "@type": "Organization",
          name: "Emkalab",
          location: "Bandung, Indonesia",
        },
      },
    },
  ],
};

const skillsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.dennyferdiansyah.my.id/#skills",
  name: "Technical Skills",
  description: "Technical skills and expertise of Denny Ferdiansyah",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "DefinedTerm",
        name: "Backend Development",
        description: "Golang, PHP, Laravel, Node.js, NestJS, TypeScript, REST APIs, GraphQL, Microservices, WebSockets",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "DefinedTerm",
        name: "Frontend Development",
        description: "React.js, Next.js, Vue.js, TypeScript, Tailwind CSS, Redux, Zustand, Framer Motion",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "DefinedTerm",
        name: "E-commerce",
        description: "Magento 2, WordPress, Shopify, Payment Integration, ERP Integration",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "DefinedTerm",
        name: "Mobile Development",
        description: "Flutter, React Native, Cross-platform Development",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "DefinedTerm",
        name: "Database & DevOps",
        description: "MySQL, PostgreSQL, Redis, Elasticsearch, Docker, CI/CD, AWS, GCP",
      },
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.dennyferdiansyah.my.id/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Denny Ferdiansyah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Denny Ferdiansyah is a Senior Software Engineer with over 10 years of experience in Full-Stack Development. He specializes in TypeScript, Golang, PHP, Magento, and WordPress, with expertise in architecting scalable systems, e-commerce solutions, and real-time applications. He is based in Bandung, Indonesia and works remotely with clients worldwide.",
      },
    },
    {
      "@type": "Question",
      name: "What services does Denny Ferdiansyah offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Denny offers professional software development services including: Full-Stack Web Development, E-commerce Development (Magento, Shopify, WordPress), Mobile App Development (Flutter), API Development, System Architecture Consulting, Performance Optimization, and Payment/ERP Integration services.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Denny Ferdiansyah work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Denny works with a wide range of technologies including: Backend - Golang, PHP, Laravel, Node.js, NestJS, TypeScript; Frontend - React.js, Next.js, Vue.js, Tailwind CSS; E-commerce - Magento 2, WordPress, Shopify; Mobile - Flutter; Databases - MySQL, PostgreSQL, Redis, Elasticsearch; DevOps - Docker, CI/CD, AWS.",
      },
    },
    {
      "@type": "Question",
      name: "What is Denny Ferdiansyah's experience?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Denny has 10+ years of experience working with companies including BlueRock (Australia), ElectGo/Lim Kim Hai Group (Singapore), Halosis (Jakarta), and Emkalab (Bandung). He has delivered 30+ successful projects with 99% client satisfaction, achieving results like 66.7% revenue growth and $280K monthly cost savings for clients.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Denny Ferdiansyah?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can contact Denny via email at dferdiansyah2908@gmail.com, phone at +62 812 6773 966, or through his LinkedIn profile at linkedin.com/in/dennyferdiansyah. He is available for freelance projects, consulting, and full-time remote positions.",
      },
    },
    {
      "@type": "Question",
      name: "Does Denny Ferdiansyah work remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Denny works remotely with clients worldwide. He has extensive experience working with international teams in Australia, Singapore, and Indonesia. He is comfortable with different time zones and remote collaboration tools.",
      },
    },
    {
      "@type": "Question",
      name: "What are Denny Ferdiansyah's key achievements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Key achievements include: Accelerating revenue growth by 66.7% for ElectGo, reducing development costs from $300K to $20K/month, achieving 99% client satisfaction across 30+ projects, improving checkout speeds by 30%, reducing response times by 40% with real-time systems, and winning recognition as a top e-commerce developer.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dennyferdiansyah.my.id",
    },
  ],
};

export function JsonLd() {
  const schemas = [
    personSchema,
    websiteSchema,
    professionalServiceSchema,
    workExperienceSchema,
    skillsSchema,
    faqSchema,
    breadcrumbSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="beforeInteractive"
        />
      ))}
    </>
  );
}

// Export individual schemas for use in specific pages
export {
  personSchema,
  websiteSchema,
  professionalServiceSchema,
  workExperienceSchema,
  skillsSchema,
  faqSchema,
  breadcrumbSchema,
};
