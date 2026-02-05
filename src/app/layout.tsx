import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const siteConfig = {
  name: "Denny Ferdiansyah",
  title: "Denny Ferdiansyah | Senior Software Engineer & Full-Stack Developer",
  description: "Senior Software Engineer with 10+ years of experience specializing in TypeScript, Golang, PHP, Magento, React, and Next.js. Expert in e-commerce solutions, real-time systems, and scalable architecture. Based in Bandung, Indonesia.",
  url: "https://www.dennyferdiansyah.my.id",
  ogImage: "https://www.dennyferdiansyah.my.id/og-image.jpg",
  email: "dferdiansyah2908@gmail.com",
  phone: "+628126773966",
  location: {
    city: "Bandung",
    region: "West Java",
    country: "Indonesia",
  },
  social: {
    linkedin: "https://linkedin.com/in/dennyferdiansyah",
    github: "https://github.com/dennyferdiansyah",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Denny Ferdiansyah",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Software Engineer Indonesia",
    "Bandung Developer",
    "TypeScript Developer",
    "Golang Developer",
    "PHP Developer",
    "Laravel Developer",
    "React Developer",
    "Next.js Developer",
    "Magento Developer",
    "Magento Expert",
    "E-commerce Developer",
    "WordPress Developer",
    "Flutter Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Backend Developer",
    "Frontend Developer",
    "Full Stack Engineer",
    "System Architect",
    "API Developer",
    "WebSocket Developer",
    "Real-time Systems",
    "Microservices",
    "Software Development",
    "Web Development",
    "Mobile App Development",
    "Remote Developer",
    "Freelance Developer Indonesia",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "id_ID",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Senior Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@dennyferdiansyah",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "en-US": siteConfig.url,
      "id-ID": `${siteConfig.url}/id`,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Software Development Portfolio",
  other: {
    "geo.region": "ID-JB",
    "geo.placename": "Bandung",
    "geo.position": "-6.9175;107.6191",
    ICBM: "-6.9175, 107.6191",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Denny F." />

        {/* GEO Tags for Local SEO */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bandung, Indonesia" />
        <meta name="geo.position" content="-6.9175;107.6191" />
        <meta name="ICBM" content="-6.9175, 107.6191" />

        {/* Additional SEO Meta Tags */}
        <meta name="rating" content="General" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta httpEquiv="x-dns-prefetch-control" content="on" />

        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      </head>
      <body className="antialiased" itemScope itemType="https://schema.org/WebPage">
        {children}
      </body>
    </html>
  );
}
