import { SEO_CONSTANTS } from "./seo-constants";

interface FAQItem {
  question: string;
  answer: string;
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SEO_CONSTANTS.BUSINESS_NAME,
    image: `${SEO_CONSTANTS.SITE_URL}/og-default.jpg`,
    telephone: SEO_CONSTANTS.CONTACT.PHONE,
    email: SEO_CONSTANTS.CONTACT.EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONSTANTS.NAP.STREET || undefined,
      addressLocality: SEO_CONSTANTS.NAP.CITY,
      addressRegion: SEO_CONSTANTS.NAP.STATE,
      postalCode: SEO_CONSTANTS.NAP.ZIP || undefined,
      addressCountry: "US",
    },
    areaServed: SEO_CONSTANTS.SERVICE_AREA_CITIES.map((city) => ({
      "@type": "Place",
      name: `${city.name}, ${city.state}`,
    })),
    openingHours: SEO_CONSTANTS.HOURS,
    url: SEO_CONSTANTS.SITE_URL,
    priceRange: "$$",
  };
}

export function getServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceName,
    provider: {
      "@type": "LocalBusiness",
      name: SEO_CONSTANTS.BUSINESS_NAME,
      telephone: SEO_CONSTANTS.CONTACT.PHONE,
    },
    description: serviceDescription,
    areaServed: SEO_CONSTANTS.SERVICE_AREA_CITIES.map((city) => ({
      "@type": "Place",
      name: `${city.name}, ${city.state}`,
    })),
  };
}

export function getCityServiceSchema(cityName: string, stateName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Pressure Washing",
    provider: {
      "@type": "LocalBusiness",
      name: SEO_CONSTANTS.BUSINESS_NAME,
      telephone: SEO_CONSTANTS.CONTACT.PHONE,
    },
    areaServed: {
      "@type": "Place",
      name: `${cityName}, ${stateName}`,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SEO_CONSTANTS.SITE_URL}${item.url}`,
    })),
  };
}

export function getCityFAQSchema(cityName: string, faqItems?: FAQItem[]) {
  const defaults: FAQItem[] = [
    {
      question: `How often should I schedule pressure washing in ${cityName}?`,
      answer: `Most properties in ${cityName} benefit from routine annual cleaning, with high-traffic concrete often cleaned every 12 to 18 months.`,
    },
    {
      question: `Can you remove algae and mold from siding in ${cityName}?`,
      answer: "Yes. We use a house-washing process that removes algae, mold, and organic growth safely from common exterior materials.",
    },
    {
      question: `Do you clean driveways, patios, and porches in ${cityName}?`,
      answer: "Yes. We pressure wash and pretreat concrete and hardscape surfaces to improve oil, grease, rust, and general weather staining.",
    },
    {
      question: `Do you offer roof and gutter cleaning in ${cityName}?`,
      answer: "Yes. We soft wash roofs and clean gutter faces to remove streaks, algae, and grime.",
    },
    {
      question: "Are estimates free?",
      answer: `Yes. Call ${SEO_CONSTANTS.CONTACT.PHONE} for a free quote and scheduling options.`,
    },
  ];

  const source = faqItems && faqItems.length > 0 ? faqItems : defaults;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: source.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
