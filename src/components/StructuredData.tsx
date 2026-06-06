import { useLocation } from "react-router-dom";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "867 ALUFUSION LIMITED",
  description:
    "Premium aluminium and glass works company based in Tanzania. Specializing in the design, fabrication, and installation of aluminium and glass solutions for residential, commercial, and industrial projects.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo/alufusion-logo.png`,
  image: `${SITE_URL}/images/hd.jpeg`,
  telephone: "+255687959501",
  email: "info@867alufusion.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dar es Salaam",
    addressCountry: "TZ",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Tanzania",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  sameAs: ["https://instagram.com", "https://facebook.com", "https://linkedin.com"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aluminium and Glass Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Aluminium Works",
          description:
            "Premium aluminium fabrication including sliding windows, casement windows, curtain walls, shop fronts, cladding, louvers, and skylights.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Glass Works",
          description:
            "Modern glass solutions including frameless partitions, tempered glass, balustrades, structural glazing, and glass facades.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Steel Fabrication",
          description:
            "Steel structures, gates, grills, roofing structures, tanks, frames, and custom metal products.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Installation & Project Management",
          description:
            "End-to-end project leadership with on-site installation, contractor coordination, and timeline adherence.",
        },
      },
    ],
  },
  foundingDate: "2024",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+255687959501",
    contactType: "sales",
    availableLanguage: ["English", "Swahili"],
  },
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  description:
    "Leading aluminium and glass works company in Tanzania — precision fabrication, glass works, steel fabrication, and installation.",
  inLanguage: ["en", "sw"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

type BreadcrumbItem = { name: string; url: string };

function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const ROUTE_BREADCRUMBS: Record<string, BreadcrumbItem[]> = {
  "/": [{ name: "Home", url: SITE_URL }],
  "/about": [
    { name: "Home", url: SITE_URL },
    { name: "About", url: `${SITE_URL}/about` },
  ],
  "/services": [
    { name: "Home", url: SITE_URL },
    { name: "Services", url: `${SITE_URL}/services` },
  ],
  "/projects": [
    { name: "Home", url: SITE_URL },
    { name: "Projects", url: `${SITE_URL}/projects` },
  ],
  "/contact": [
    { name: "Home", url: SITE_URL },
    { name: "Contact", url: `${SITE_URL}/contact` },
  ],
};

export default function StructuredData() {
  const { pathname } = useLocation();
  const crumbs = ROUTE_BREADCRUMBS[pathname] || [{ name: "Home", url: SITE_URL }];

  const schemas: Record<string, unknown>[] = [ORGANIZATION_SCHEMA, WEBSITE_SCHEMA];

  if (pathname !== "/") {
    schemas.push(generateBreadcrumbSchema(crumbs));
  }

  if (pathname === "/services") {
    schemas.push(generateServiceSchema());
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(
          schemas.length === 1
            ? schemas[0]
            : { "@context": "https://schema.org", "@graph": schemas },
          null,
          2,
        ),
      }}
    />
  );
}

function generateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aluminium and Glass Works Services",
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Tanzania",
    },
    serviceType: [
      "Aluminium Works",
      "Glass Works",
      "Steel Fabrication",
      "Maintenance Services",
      "Custom Design & Consultancy",
      "Supply of Materials",
      "Installation & Project Management",
      "Health & Safety Compliance",
    ],
  };
}
