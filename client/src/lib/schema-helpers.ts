import { SEO_CONSTANTS } from "./seo-constants";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SEO_CONSTANTS.BUSINESS_NAME,
    "image": `${SEO_CONSTANTS.SITE_URL}/og-default.jpg`,
    "telephone": SEO_CONSTANTS.CONTACT.PHONE,
    "email": SEO_CONSTANTS.CONTACT.EMAIL,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONSTANTS.NAP.STREET || undefined,
      "addressLocality": SEO_CONSTANTS.NAP.CITY,
      "addressRegion": SEO_CONSTANTS.NAP.STATE,
      "postalCode": SEO_CONSTANTS.NAP.ZIP || undefined,
      "addressCountry": "US"
    },
    "areaServed": SEO_CONSTANTS.SERVICE_AREA_CITIES.map(city => ({
      "@type": "Place",
      "name": `${city.name}, ${city.state}`
    })),
    "openingHours": SEO_CONSTANTS.HOURS,
    "url": SEO_CONSTANTS.SITE_URL,
    "priceRange": "$$"
  };
}

export function getServiceSchema(serviceName: string, serviceDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": SEO_CONSTANTS.BUSINESS_NAME,
      "telephone": SEO_CONSTANTS.CONTACT.PHONE
    },
    "description": serviceDescription,
    "areaServed": SEO_CONSTANTS.SERVICE_AREA_CITIES.map(city => ({
      "@type": "Place",
      "name": `${city.name}, ${city.state}`
    }))
  };
}

export function getCityServiceSchema(cityName: string, stateName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pressure Washing",
    "provider": {
      "@type": "LocalBusiness",
      "name": SEO_CONSTANTS.BUSINESS_NAME,
      "telephone": SEO_CONSTANTS.CONTACT.PHONE
    },
    "areaServed": {
      "@type": "Place",
      "name": `${cityName}, ${stateName}`
    }
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SEO_CONSTANTS.SITE_URL}${item.url}`
    }))
  };
}

export function getCityFAQSchema(cityName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Do you soft wash roofs in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes—our soft-wash method protects shingles while removing algae streaks. We never use high-pressure washing on roofs, which can damage shingles and void warranties."
        }
      },
      {
        "@type": "Question",
        "name": `How fast can you schedule in ${cityName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most jobs are scheduled within 2–5 days, weather permitting. We work efficiently to minimize disruption to your day."
        }
      },
      {
        "@type": "Question",
        "name": "Are estimates free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes—call ${SEO_CONSTANTS.CONTACT.PHONE} or email ${SEO_CONSTANTS.CONTACT.EMAIL} for a free, no-obligation quote.`
        }
      }
    ]
  };
}
