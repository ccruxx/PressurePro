import { Helmet } from "react-helmet-async";
import { SEO_CONSTANTS } from "@/lib/seo-constants";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  canonical,
  ogImage = `${SEO_CONSTANTS.SITE_URL}/og-default.jpg`,
  ogType = "website"
}: SEOHeadProps) {
  const fullCanonical = canonical.startsWith('http') 
    ? canonical 
    : `${SEO_CONSTANTS.SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SEO_CONSTANTS.BUSINESS_NAME} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
