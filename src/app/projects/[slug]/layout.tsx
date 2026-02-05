import { Metadata } from "next";
import Script from "next/script";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

const baseUrl = "https://www.dennyferdiansyah.my.id";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Denny Ferdiansyah",
    };
  }

  const keywords = [
    project.title,
    project.category,
    ...project.technologies,
    "Denny Ferdiansyah",
    "Portfolio",
    "Case Study",
    project.company,
  ];

  return {
    title: `${project.title} | Denny Ferdiansyah`,
    description: project.description,
    keywords: keywords,
    authors: [{ name: "Denny Ferdiansyah" }],
    openGraph: {
      title: `${project.title} | Denny Ferdiansyah`,
      description: project.description,
      type: "article",
      url: `${baseUrl}/projects/${slug}`,
      siteName: "Denny Ferdiansyah Portfolio",
      locale: "en_US",
      authors: ["Denny Ferdiansyah"],
      tags: project.technologies,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Denny Ferdiansyah`,
      description: project.description,
    },
    alternates: {
      canonical: `${baseUrl}/projects/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function generateProjectJsonLd(slug: string) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return null;

  // Creative Work schema for the project
  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${baseUrl}/projects/${slug}#project`,
    name: project.title,
    description: project.fullDescription?.split("\n\n")[0] || project.description,
    url: `${baseUrl}/projects/${slug}`,
    dateCreated: project.year.split(" - ")[0],
    creator: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Denny Ferdiansyah",
    },
    provider: {
      "@type": "Organization",
      name: project.company,
    },
    about: {
      "@type": "Thing",
      name: project.category,
    },
    keywords: project.technologies.join(", "),
    genre: project.category,
  };

  // Technical Article schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${baseUrl}/projects/${slug}#article`,
    headline: project.title,
    description: project.description,
    url: `${baseUrl}/projects/${slug}`,
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Denny Ferdiansyah",
    },
    publisher: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Denny Ferdiansyah",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/projects/${slug}`,
    },
    articleSection: project.category,
    keywords: project.technologies.join(", "),
    proficiencyLevel: "Expert",
    dependencies: project.technologies.join(", "),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${baseUrl}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${baseUrl}/projects/${slug}`,
      },
    ],
  };

  // How-To schema if there are solutions
  let howToSchema = null;
  if (project.challenges && project.solutions) {
    howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "@id": `${baseUrl}/projects/${slug}#howto`,
      name: `How ${project.title} Was Built`,
      description: `Technical solutions implemented for ${project.title}`,
      step: project.solutions.map((solution, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: `Solution ${index + 1}`,
        text: solution,
      })),
      tool: project.technologies.map((tech) => ({
        "@type": "HowToTool",
        name: tech,
      })),
    };
  }

  return { creativeWorkSchema, articleSchema, breadcrumbSchema, howToSchema };
}

export default async function ProjectLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const schemas = generateProjectJsonLd(slug);

  if (!schemas) {
    return <>{children}</>;
  }

  const allSchemas = [
    schemas.creativeWorkSchema,
    schemas.articleSchema,
    schemas.breadcrumbSchema,
    schemas.howToSchema,
  ].filter(Boolean);

  return (
    <>
      {allSchemas.map((schema, index) => (
        <Script
          key={index}
          id={`project-json-ld-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          strategy="beforeInteractive"
        />
      ))}
      {children}
    </>
  );
}
